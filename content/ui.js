// content/ui.js
// Widget UI: helpers, ensureWidget and renderWidget

function isInsideOurUi(el) {
  return !!el.closest?.(`.${ROOT_CLASS}`);
}

function isInsideDialogLike(el) {
  return !!el.closest?.(
    '[role="dialog"], [aria-modal="true"], .modal, .dialog, .MuiDialog-root, .cdk-overlay-container',
  );
}

let widgetEl = null;

async function ensureWidget() {
  if (widgetEl) return;

  widgetEl = document.createElement("div");
  widgetEl.className = `dtuSpec-widget ${ROOT_CLASS}`;
  widgetEl.innerHTML = `
    <div class="dtuSpec-title">
      <div class="dtuSpec-headline">
        <div>DTU Specialization</div>
        <div class="dtuSpec-small dtuSpec-programmeName"></div>
      </div>
      <div class="dtuSpec-actions">
        <button type="button" class="dtuSpec-btn dtuSpec-toggle" aria-label="Minimize">▾</button>
      </div>
    </div>

    <div class="dtuSpec-body">
      <label class="dtuSpec-small" for="dtuProgrammeSelect">Study line</label>
      <select id="dtuProgrammeSelect" name="dtuProgrammeSelect" class="dtuSpec-select" autocomplete="off"></select>

      <label class="dtuSpec-small" for="dtuSpecSelect" style="margin-top:6px;">Specialization</label>
      <select id="dtuSpecSelect" name="dtuSpecSelect" class="dtuSpec-select" autocomplete="off"></select>

      <div class="dtuSpec-note dtuSpec-small" style="margin-top:-4px; margin-bottom:8px;" hidden></div>

      <div class="dtuSpec-row">
        <div>Progress</div>
        <div class="dtuSpec-progress"></div>
      </div>

      <div class="dtuSpec-small">
        Auto-counts the course codes currently present in your Study Planner view.
      </div>

      <ul class="dtuSpec-list"></ul>
    </div>
  `;

  document.body.appendChild(widgetEl);

  // restore minimized state
  const minimized = await getWidgetMinimized();
  widgetEl.dataset.minimized = minimized ? "true" : "false";
  widgetEl.querySelector(".dtuSpec-toggle").textContent = minimized ? "▸" : "▾";
  widgetEl
    .querySelector(".dtuSpec-toggle")
    .setAttribute("aria-label", minimized ? "Expand" : "Minimize");

  widgetEl
    .querySelector(".dtuSpec-toggle")
    ?.addEventListener("click", async () => {
      const isMin = widgetEl.dataset.minimized === "true";
      const next = !isMin;
      widgetEl.dataset.minimized = next ? "true" : "false";

      const btn = widgetEl.querySelector(".dtuSpec-toggle");
      btn.textContent = next ? "▸" : "▾";
      btn.setAttribute("aria-label", next ? "Expand" : "Minimize");

      await setWidgetMinimized(next);
    });

  widgetEl
    .querySelector("#dtuProgrammeSelect")
    ?.addEventListener("change", async (e) => {
      await setSelectedProgrammeId(e.target.value);
      removeAllBadges();
      scheduleRefresh(true);
    });

  widgetEl
    .querySelector("#dtuSpecSelect")
    ?.addEventListener("change", async (e) => {
      const programmeId = widgetEl.querySelector("#dtuProgrammeSelect").value;
      const programme = getProgrammeConfig(programmeId);

      await setSelectedSpecIdForProgramme(programme, e.target.value);
      removeAllBadges();
      scheduleRefresh(true);
    });
}

// ✅ renderWidget is async and awaits ensureWidget
async function renderWidget(
  programmeId,
  programme,
  specId,
  spec,
  plannedCodes,
  ectsSum,
) {
  await ensureWidget();

  // Programme name in header
  widgetEl.querySelector(".dtuSpec-programmeName").textContent = programme.name;

  // Programme select options
  const programmeSelect = widgetEl.querySelector("#dtuProgrammeSelect");
  programmeSelect.innerHTML = Object.entries(PROGRAMMES)
    .map(([id, p]) => `<option value="${id}">${p.name}</option>`)
    .join("");
  programmeSelect.value = programmeId;

  // Spec select options
  const specs = programme.specializations || {};
  const specSelect = widgetEl.querySelector("#dtuSpecSelect");
  specSelect.innerHTML = Object.entries(specs)
    .map(([id, s]) => `<option value="${id}">${s.name}</option>`)
    .join("");
  specSelect.value = specId;

  // Note
  const noteEl = widgetEl.querySelector(".dtuSpec-note");
  if (spec?.note) {
    noteEl.hidden = false;
    noteEl.textContent = spec.note;
  } else {
    noteEl.hidden = true;
    noteEl.textContent = "";
  }

  // Progress
  widgetEl.querySelector(".dtuSpec-progress").innerHTML =
    `<b>${nfDa.format(ectsSum)}</b> / ${nfDa.format(spec?.requiredEcts ?? 0)} ECTS`;

  // List
  const rowsHtml = Object.keys(spec?.courses ?? {})
    .sort()
    .map((code) => {
      const entry = spec.courses[code];
      const inPlan = plannedCodes.has(code);
      const cls = inPlan ? "dtuSpec-in" : "dtuSpec-out";
      const dot = inPlan ? "in" : "out";
      const title = entry.title ? ` — ${entry.title}` : "";

      const mandatoryTag = entry.mandatory
        ? `<span class="dtuSpec-tag dtuSpec-tag--mandatory">mandatory</span>`
        : "";

      const termTag = entry.terminated
        ? `<span class="dtuSpec-tag">terminated</span>`
        : "";

      const altTag = entry.alternativeGroup
        ? `<span class="dtuSpec-tag">alt: ${entry.alternativeGroup}</span>`
        : "";

      return `
        <li class="dtuSpec-course ${cls}">
          <span class="dtuSpec-dot ${dot}"></span>
          <b>${code}</b>${title} (${nfDa.format(entry.ects)} ECTS)
          ${mandatoryTag}
          ${termTag}
          ${altTag}
        </li>
      `;
    })
    .join("");

  widgetEl.querySelector(".dtuSpec-list").innerHTML = rowsHtml;
}
