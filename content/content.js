// content/content.js
// =========================
// DTU Specialization Helper (CSE)
// - Choose specialization in widget
// - Auto-count ECTS based on courses in Study Planner
// - Green (in plan) / Red (missing)
// - Clean, non-duplicated badges
// =========================

const STORAGE_SPEC_KEY = "dtuSpec.cse.selectedSpecId";
const COURSE_CODE_RE = /^\d{5}$/;
const ROOT_CLASS = "dtuSpec-root";
const nfDa = new Intl.NumberFormat("da-DK", { maximumFractionDigits: 1 });

const SPECIALIZATIONS = globalThis.DTU_CSE_SPECIALIZATIONS;
if (!SPECIALIZATIONS) {
  console.error("DTU_CSE_SPECIALIZATIONS not found. Check manifest.js order.");
}

// ---------- UI helpers ----------
function isInsideOurUi(el) {
  return !!el.closest?.(`.${ROOT_CLASS}`);
}

function isInsideDialogLike(el) {
  return !!el.closest?.(
    '[role="dialog"], [aria-modal="true"], .modal, .dialog, .MuiDialog-root, .cdk-overlay-container',
  );
}

// ---------- storage ----------
async function getSelectedSpecId() {
  const res = await chrome.storage.sync.get([STORAGE_SPEC_KEY]);
  const id = res[STORAGE_SPEC_KEY];
  if (id && SPECIALIZATIONS?.[id]) return id;
  return "software-engineering";
}

async function setSelectedSpecId(id) {
  if (!SPECIALIZATIONS?.[id]) return;
  await chrome.storage.sync.set({ [STORAGE_SPEC_KEY]: id });
}

// ---------- course detection (auto tally) ----------
function getPlannedCourseCodes() {
  const codes = new Set();
  const codeEls = document.querySelectorAll("a, span, strong, div");

  for (const el of codeEls) {
    if (!el) continue;
    if (isInsideOurUi(el)) continue;
    if (isInsideDialogLike(el)) continue;
    if (el.childElementCount !== 0) continue;

    const txt = (el.textContent || "").trim();
    if (!COURSE_CODE_RE.test(txt)) continue;

    codes.add(txt);
  }

  return codes;
}

function sumEctsForSpec(spec, plannedCodes) {
  let sum = 0;
  for (const code of plannedCodes) {
    const entry = spec.courses[code];
    if (entry) sum += entry.ects;
  }
  return sum;
}

// ---------- badges ----------
function removeAllBadges() {
  document.querySelectorAll(".dtuSpec-badge").forEach((b) => b.remove());
}

function annotateBadges(specId, spec, plannedCodes) {
  const els = document.querySelectorAll("a, span, strong, div");

  for (const el of els) {
    if (!el) continue;
    if (isInsideOurUi(el)) continue;
    if (isInsideDialogLike(el)) continue;
    if (el.childElementCount !== 0) continue;

    const code = (el.textContent || "").trim();
    if (!COURSE_CODE_RE.test(code)) continue;
    if (!spec.courses[code]) continue;

    if (el.dataset.dtuSpecBadged === specId) {
      const next = el.nextElementSibling;
      if (
        next?.classList?.contains("dtuSpec-badge") &&
        next.dataset?.code === code
      ) {
        next.dataset.inplan = plannedCodes.has(code) ? "true" : "false";
      }
      continue;
    }

    const next = el.nextElementSibling;
    if (next?.classList?.contains("dtuSpec-badge")) next.remove();

    const badge = document.createElement("span");
    badge.className = "dtuSpec-badge";
    badge.dataset.code = code;
    badge.dataset.inplan = plannedCodes.has(code) ? "true" : "false";
    badge.textContent = `Counts (${nfDa.format(spec.courses[code].ects)} ECTS)`;

    el.insertAdjacentElement("afterend", badge);
    el.dataset.dtuSpecBadged = specId;
  }
}

// ---------- widget ----------
let widgetEl = null;

function ensureWidget() {
  if (widgetEl) return;

  widgetEl = document.createElement("div");
  widgetEl.className = `dtuSpec-widget ${ROOT_CLASS}`;
  widgetEl.innerHTML = `
    <div class="dtuSpec-title">
      <div>DTU CSE Specialization</div>
      <button type="button" class="dtuSpec-close" aria-label="Hide widget">✕</button>
    </div>

    <label class="dtuSpec-small" for="dtuSpecSelect">Specialization</label>
    <select
      id="dtuSpecSelect"
      name="dtuSpecSelect"
      class="dtuSpec-select"
      autocomplete="off"
    ></select>

    <div class="dtuSpec-note dtuSpec-small" style="margin-top:-4px; margin-bottom:8px;" hidden></div>

    <div class="dtuSpec-row">
      <div>Progress</div>
      <div class="dtuSpec-progress"></div>
    </div>

    <div class="dtuSpec-small">
      Auto-counts the course codes currently present in your Study Planner view.
    </div>

    <ul class="dtuSpec-list"></ul>
  `;

  document.body.appendChild(widgetEl);

  widgetEl.querySelector(".dtuSpec-close")?.addEventListener("click", () => {
    widgetEl?.remove();
    widgetEl = null;
  });

  widgetEl
    .querySelector("#dtuSpecSelect")
    ?.addEventListener("change", async (e) => {
      const newId = e.target.value;
      await setSelectedSpecId(newId);
      removeAllBadges();
      scheduleRefresh(true);
    });
}

function renderWidget(specId, spec, plannedCodes, ectsSum) {
  ensureWidget();

  // Update select options (without recreating the <select> element)
  const selectEl = widgetEl.querySelector("#dtuSpecSelect");
  selectEl.innerHTML = Object.entries(SPECIALIZATIONS)
    .map(([id, s]) => `<option value="${id}">${s.name}</option>`)
    .join("");
  selectEl.value = specId;

  // Note
  const noteEl = widgetEl.querySelector(".dtuSpec-note");
  if (spec.note) {
    noteEl.hidden = false;
    noteEl.textContent = spec.note;
  } else {
    noteEl.hidden = true;
    noteEl.textContent = "";
  }

  // Progress
  widgetEl.querySelector(".dtuSpec-progress").innerHTML =
    `<b>${nfDa.format(ectsSum)}</b> / ${nfDa.format(spec.requiredEcts)} ECTS`;

  // List
  const rowsHtml = Object.keys(spec.courses)
    .sort()
    .map((code) => {
      const entry = spec.courses[code];
      const inPlan = plannedCodes.has(code);
      const cls = inPlan ? "dtuSpec-in" : "dtuSpec-out";
      const dot = inPlan ? "in" : "out";
      const title = entry.title ? ` — ${entry.title}` : "";
      const termTag = entry.terminated
        ? `<span class="dtuSpec-tag">terminated</span>`
        : "";
      return `
        <li class="dtuSpec-course ${cls}">
          <span class="dtuSpec-dot ${dot}"></span>
          <b>${code}</b>${title} (${nfDa.format(entry.ects)} ECTS)
          ${termTag}
        </li>
      `;
    })
    .join("");

  widgetEl.querySelector(".dtuSpec-list").innerHTML = rowsHtml;
}

// ---------- refresh loop ----------
let refreshTimer = null;
let isRendering = false;

function scheduleRefresh(force = false) {
  if (refreshTimer && !force) return;
  if (refreshTimer) clearTimeout(refreshTimer);

  refreshTimer = setTimeout(async () => {
    refreshTimer = null;
    await refresh();
  }, 250);
}

async function refresh() {
  isRendering = true;
  try {
    const specId = await getSelectedSpecId();
    const spec = SPECIALIZATIONS[specId];
    const planned = getPlannedCourseCodes();
    const ectsSum = sumEctsForSpec(spec, planned);

    renderWidget(specId, spec, planned, ectsSum);
    annotateBadges(specId, spec, planned);
  } finally {
    // release guard after DOM updates land
    setTimeout(() => {
      isRendering = false;
    }, 0);
  }
}

function startObserver() {
  const obs = new MutationObserver(() => {
    if (isRendering) return;
    scheduleRefresh();
  });
  obs.observe(document.documentElement, { childList: true, subtree: true });
}

// ---------- boot ----------
(function init() {
  removeAllBadges();
  scheduleRefresh(true);
  startObserver();
})();
