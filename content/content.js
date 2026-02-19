// content/content.js
// =========================
// DTU Specialization Helper
// - Choose programme + specialization in widget
// - Auto-count ECTS based on courses in Study Planner
// - Green (in plan) / Red (missing)
// - Clean, non-duplicated badges
// =========================

const STORAGE_PROGRAM_KEY = "dtuSpec.selectedProgrammeId";
const STORAGE_WIDGET_MIN_KEY = "dtuSpec.widgetMinimized";

const COURSE_CODE_RE = /^\d{5}$/;
const ROOT_CLASS = "dtuSpec-root";
const nfDa = new Intl.NumberFormat("da-DK", { maximumFractionDigits: 1 });

// Programmes + specialization sources (loaded via manifest order)
const PROGRAMMES = {
  cse: {
    name: "Computer Science and Engineering",
    specStorageKey: "dtuSpec.cse.selectedSpecId",
    defaultSpecId: "software-engineering",
    specializations: globalThis.DTU_CSE_SPECIALIZATIONS,
  },
  "applied-chemistry": {
    name: "Applied Chemistry",
    specStorageKey: "dtuSpec.apchem.selectedSpecId",
    defaultSpecId: "catalysis-and-sustainable-chemistry",
    specializations: globalThis.DTU_APCHEM_SPECIALIZATIONS,
  },
  "architectural-engineering": {
    name: "Architectural Engineering",
    specStorageKey: "dtuSpec.archeng.selectedSpecId",
    defaultSpecId: "indoor-environment",
    specializations: globalThis.DTU_ARCHENG_SPECIALIZATIONS,
  },
  bioinformatics: {
    name: "Bioinformatics",
    specStorageKey: "dtuSpec.bioinf.selectedSpecId",
    defaultSpecId: "biomedical-bioinformatics",
    specializations: globalThis.DTU_BIOINF_SPECIALIZATIONS,
  },
  biotechnology: {
    name: "Biotechnology",
    specStorageKey: "dtuSpec.biotech.selectedSpecId",
    defaultSpecId: "biosolutions",
    specializations: globalThis.DTU_BIOTECH_SPECIALIZATIONS,
  },
  "business-analytics": {
    name: "Business Analytics",
    specStorageKey: "dtuSpec.busan.selectedSpecId",
    defaultSpecId: "predictive-analytics",
    specializations: globalThis.DTU_BUSANALYTICS_SPECIALIZATIONS,
  },
  "chemical-and-biochemical-engineering": {
    name: "Chemical and Biochemical Engineering",
    specStorageKey: "dtuSpec.chbe.selectedSpecId",
    defaultSpecId: "chemical-and-biochemical-process-technology",
    specializations: globalThis.DTU_CHBE_SPECIALIZATIONS,
  },
  "civil-engineering": {
    name: "Civil Engineering",
    specStorageKey: "dtuSpec.civil.selectedSpecId",
    defaultSpecId: "bridges-pavements-and-large-structures",
    specializations: globalThis.DTU_CIVILENG_SPECIALIZATIONS,
  },
  "communication-technologies-and-system-design": {
    name: "Communication Technologies and System Design",
    specStorageKey: "dtuSpec.ctsd.selectedSpecId",
    defaultSpecId: "high-speed-communication",
    specializations: globalThis.DTU_CTSD_SPECIALIZATIONS,
  },
  "design-and-innovation": {
    name: "Design and Innovation",
    specStorageKey: "dtuSpec.desinnov.selectedSpecId",
    defaultSpecId: "design-of-complex-technical-systems",
    specializations: globalThis.DTU_DESIGNINNOV_SPECIALIZATIONS,
  },
  "earth-and-space-physics-and-engineering": {
    name: "Earth and Space Physics and Engineering",
    specStorageKey: "dtuSpec.espace.selectedSpecId",
    defaultSpecId: "earth-observation",
    specializations: globalThis.DTU_ESPACE_SPECIALIZATIONS,
  },
  "electrical-engineering": {
    name: "Electrical Engineering",
    specStorageKey: "dtuSpec.ee.selectedSpecId",
    defaultSpecId: "electronics",
    specializations: globalThis.DTU_EE_SPECIALIZATIONS,
  },
  "engineering-acoustics": {
    name: "Engineering Acoustics",
    specStorageKey: "dtuSpec.engac.selectedSpecId",
    defaultSpecId: "audio-and-transducer-technology",
    specializations: globalThis.DTU_ENGAC_SPECIALIZATIONS,
  },
  "engineering-light": {
    name: "Engineering Light",
    specStorageKey: "dtuSpec.englight.selectedSpecId",
    defaultSpecId: "instrumentations-and-applications",
    specializations: globalThis.DTU_ENGLIGHT_SPECIALIZATIONS,
  },
  "engineering-physics": {
    name: "Engineering Physics",
    specStorageKey: "dtuSpec.engphys.selectedSpecId",
    defaultSpecId: "energy-physics",
    specializations: globalThis.DTU_ENGPHYS_SPECIALIZATIONS,
  },
  "environmental-engineering": {
    name: "Environmental Engineering",
    specStorageKey: "dtuSpec.enveng.selectedSpecId",
    defaultSpecId: "climate-change",
    specializations: globalThis.DTU_ENVENG_SPECIALIZATIONS,
  },
  "food-technology": {
    name: "Food Technology",
    specStorageKey: "dtuSpec.foodtech.selectedSpecId",
    defaultSpecId: "food-innovation",
    specializations: globalThis.DTU_FOODTECH_SPECIALIZATIONS,
  },
  "human-centered-artificial-intelligence": {
    name: "Human-Centered Artificial Intelligence",
    specStorageKey: "dtuSpec.hcai.selectedSpecId",
    defaultSpecId: "ai-and-cognition",
    specializations: globalThis.DTU_HCAI_SPECIALIZATIONS,
  },
  "industrial-engineering-and-management": {
    name: "Industrial Engineering and Management",
    specStorageKey: "dtuSpec.iem.selectedSpecId",
    defaultSpecId: "management-and-analysis-of-operations",
    specializations: globalThis.DTU_IEM_SPECIALIZATIONS,
  },
};

function getProgrammeOrFallback(id) {
  return PROGRAMMES[id] ? id : "cse";
}

function getProgrammeConfig(id) {
  return PROGRAMMES[getProgrammeOrFallback(id)];
}

function warnIfMissingData() {
  if (!PROGRAMMES.cse.specializations) {
    console.error(
      "DTU_CSE_SPECIALIZATIONS not found. Check manifest.js order.",
    );
  }
  if (!PROGRAMMES["applied-chemistry"].specializations) {
    console.error(
      "DTU_APCHEM_SPECIALIZATIONS not found. Check manifest.js order.",
    );
  }
  if (!PROGRAMMES["architectural-engineering"].specializations) {
    console.error(
      "DTU_ARCHENG_SPECIALIZATIONS not found. Check manifest.js order.",
    );
  }
  if (!PROGRAMMES.bioinformatics.specializations) {
    console.error(
      "DTU_BIOINF_SPECIALIZATIONS not found. Check manifest.js order.",
    );
  }
  if (!PROGRAMMES.biotechnology.specializations) {
    console.error(
      "DTU_BIOTECH_SPECIALIZATIONS not found. Check manifest.js order.",
    );
  }
  if (!PROGRAMMES["business-analytics"].specializations) {
    console.error(
      "DTU_BUSANALYTICS_SPECIALIZATIONS not found. Check manifest.js order.",
    );
  }
  if (!PROGRAMMES["chemical-and-biochemical-engineering"].specializations) {
    console.error(
      "DTU_CHBE_SPECIALIZATIONS not found. Check manifest.js order.",
    );
  }
  if (!PROGRAMMES["civil-engineering"].specializations) {
    console.error(
      "DTU_CIVILENG_SPECIALIZATIONS not found. Check manifest.js order.",
    );
  }
  if (
    !PROGRAMMES["communication-technologies-and-system-design"].specializations
  ) {
    console.error(
      "DTU_CTSD_SPECIALIZATIONS not found. Check manifest.js order.",
    );
  }
  if (!PROGRAMMES["design-and-innovation"].specializations) {
    console.error(
      "DTU_DESIGNINNOV_SPECIALIZATIONS not found. Check manifest.js order.",
    );
  }
  if (!PROGRAMMES["earth-and-space-physics-and-engineering"].specializations) {
    console.error(
      "DTU_ESPACE_SPECIALIZATIONS not found. Check manifest.js order.",
    );
  }
  if (!PROGRAMMES["electrical-engineering"].specializations) {
    console.error("DTU_EE_SPECIALIZATIONS not found. Check manifest.js order.");
  }
  if (!PROGRAMMES["engineering-acoustics"].specializations) {
    console.error(
      "DTU_ENGAC_SPECIALIZATIONS not found. Check manifest.js order.",
    );
  }
  if (!PROGRAMMES["engineering-light"].specializations) {
    console.error(
      "DTU_ENGLIGHT_SPECIALIZATIONS not found. Check manifest.js order.",
    );
  }
  if (!PROGRAMMES["engineering-physics"].specializations) {
    console.error(
      "DTU_ENGPHYS_SPECIALIZATIONS not found. Check manifest.js order.",
    );
  }
  if (!PROGRAMMES["environmental-engineering"].specializations) {
    console.error(
      "DTU_ENVENG_SPECIALIZATIONS not found. Check manifest.js order.",
    );
  }
  if (!PROGRAMMES["food-technology"].specializations) {
    console.error(
      "DTU_FOODTECH_SPECIALIZATIONS not found. Check manifest.js order.",
    );
  }
  if (!PROGRAMMES["human-centered-artificial-intelligence"].specializations) {
    console.error(
      "DTU_HCAI_SPECIALIZATIONS not found. Check manifest.js order.",
    );
  }
  if (!PROGRAMMES["industrial-engineering-and-management"].specializations) {
    console.error(
      "DTU_IEM_SPECIALIZATIONS not found. Check manifest.js order.",
    );
  }
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

async function getWidgetMinimized() {
  const res = await chrome.storage.sync.get([STORAGE_WIDGET_MIN_KEY]);
  return !!res[STORAGE_WIDGET_MIN_KEY];
}

async function setWidgetMinimized(val) {
  await chrome.storage.sync.set({ [STORAGE_WIDGET_MIN_KEY]: !!val });
}

// ---------- programme storage ----------
async function getSelectedProgrammeId() {
  const res = await chrome.storage.sync.get([STORAGE_PROGRAM_KEY]);
  return getProgrammeOrFallback(res[STORAGE_PROGRAM_KEY]);
}

async function setSelectedProgrammeId(id) {
  await chrome.storage.sync.set({
    [STORAGE_PROGRAM_KEY]: getProgrammeOrFallback(id),
  });
}

// ---------- specialization storage (per programme) ----------
async function getSelectedSpecIdForProgramme(programme) {
  const specs = programme.specializations || {};
  const res = await chrome.storage.sync.get([programme.specStorageKey]);
  const id = res[programme.specStorageKey];
  if (id && specs[id]) return id;
  return programme.defaultSpecId;
}

async function setSelectedSpecIdForProgramme(programme, id) {
  const specs = programme.specializations || {};
  if (!specs[id]) return;
  await chrome.storage.sync.set({ [programme.specStorageKey]: id });
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
  if (!spec?.courses) return 0;
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

function annotateBadges(badgeTagId, spec, plannedCodes) {
  if (!spec?.courses) return;

  const els = document.querySelectorAll("a, span, strong, div");

  for (const el of els) {
    if (!el) continue;
    if (isInsideOurUi(el)) continue;
    if (isInsideDialogLike(el)) continue;
    if (el.childElementCount !== 0) continue;

    const code = (el.textContent || "").trim();
    if (!COURSE_CODE_RE.test(code)) continue;
    if (!spec.courses[code]) continue;

    if (el.dataset.dtuSpecBadged === badgeTagId) {
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
    el.dataset.dtuSpecBadged = badgeTagId;
  }
}

// ---------- widget ----------
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
  warnIfMissingData();

  isRendering = true;
  try {
    const programmeId = await getSelectedProgrammeId();
    const programme = getProgrammeConfig(programmeId);

    if (!programme.specializations) return;

    const specId = await getSelectedSpecIdForProgramme(programme);
    const spec = programme.specializations[specId];

    const planned = getPlannedCourseCodes();
    const ectsSum = sumEctsForSpec(spec, planned);

    await renderWidget(programmeId, programme, specId, spec, planned, ectsSum);

    // Use programme+spec as the badge tag id to avoid collisions
    annotateBadges(`${programmeId}:${specId}`, spec, planned);
  } finally {
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
