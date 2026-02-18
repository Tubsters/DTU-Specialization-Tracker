// --- Specialization data (CSE → Software Engineering) ---
// Source: DTU specialization page (at least 25 ECTS among listed courses; terminated also count). :contentReference[oaicite:2]{index=2}
const SPEC = {
  id: "cse-software-engineering",
  name: "Software Engineering",
  requiredEcts: 25,
  courses: {
    "02242": { ects: 7.5, title: "Program Analysis" },
    "02245": { ects: 7.5, title: "Program Verification" },
    "02262": { ects: 5, title: "Formal Aspects of Process Science" },
    "02266": { ects: 5, title: "User Experience Engineering" },
    "02267": { ects: 5, title: "Software Development of Web Services" },
    "02268": {
      ects: 5,
      title: "Process-oriented and Event-driven Software Systems",
    },
    "02269": { ects: 5, title: "Process Mining" },
    "02270": { ects: 5, title: "Cybersecurity Fundamentals" },
    "02291": { ects: 5, title: "System Integration" },
  },
  terminatedAlsoCount: ["02221", "02239", "02261", "02263"],
};

// --- Styling (prefix classes to avoid clashes) ---
const STYLE_ID = "dtu-spec-style";
function ensureStyles() {
  if (document.getElementById(STYLE_ID)) return;
  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = `
    .dtuSpec-badge {
      display:inline-flex; align-items:center; gap:6px;
      font-size: 11px; line-height: 1;
      padding: 2px 6px; border-radius: 999px;
      border: 1px solid rgba(0,0,0,.15);
      background: rgba(0,0,0,.04);
      margin-left: 6px;
      cursor: pointer;
      user-select: none;
    }
    .dtuSpec-badge[data-selected="true"] {
      background: rgba(0, 128, 0, .10);
      border-color: rgba(0, 128, 0, .35);
    }
    .dtuSpec-widget {
      position: fixed;
      right: 16px;
      bottom: 16px;
      width: 320px;
      max-height: 45vh;
      overflow: auto;
      z-index: 999999;
      border-radius: 12px;
      border: 1px solid rgba(0,0,0,.15);
      background: #fff;
      box-shadow: 0 10px 30px rgba(0,0,0,.12);
      padding: 12px;
      font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
      font-size: 13px;
    }
    .dtuSpec-title { font-weight: 700; margin-bottom: 6px; }
    .dtuSpec-row { display:flex; justify-content:space-between; gap: 8px; margin: 6px 0; }
    .dtuSpec-small { color: rgba(0,0,0,.65); font-size: 12px; }
    .dtuSpec-list { margin: 8px 0 0; padding-left: 18px; }
    .dtuSpec-close { float:right; cursor:pointer; opacity: .7; }
    .dtuSpec-close:hover { opacity: 1; }
  `;
  document.head.appendChild(style);
}

// --- Storage helpers ---
const STORAGE_KEY = `dtuSpec.selected.${SPEC.id}`;

async function getSelected() {
  const result = await chrome.storage.local.get([STORAGE_KEY]);
  return new Set(result[STORAGE_KEY] || []);
}
async function setSelected(set) {
  await chrome.storage.local.set({ [STORAGE_KEY]: Array.from(set) });
}

// --- UI: floating progress widget ---
let widgetEl = null;

function ectsFor(code) {
  return SPEC.courses[code]?.ects ?? 0;
}

function missingCourses(selectedSet) {
  return Object.keys(SPEC.courses).filter((c) => !selectedSet.has(c));
}

function sumEcts(selectedSet) {
  let sum = 0;
  for (const c of selectedSet) sum += ectsFor(c);
  return sum;
}

async function renderWidget() {
  ensureStyles();
  const selected = await getSelected();
  const ects = sumEcts(selected);
  const missing = missingCourses(selected);

  if (!widgetEl) {
    widgetEl = document.createElement("div");
    widgetEl.className = "dtuSpec-widget";
    document.body.appendChild(widgetEl);
  }

  widgetEl.innerHTML = `
    <div class="dtuSpec-title">
      ${SPEC.name}
      <span class="dtuSpec-close" title="Hide">✕</span>
    </div>
    <div class="dtuSpec-row">
      <div>Progress</div>
      <div><b>${ects.toFixed(1)}</b> / ${SPEC.requiredEcts} ECTS</div>
    </div>
    <div class="dtuSpec-small">
      Click a badge next to a course number to add/remove it from your specialization tally.
    </div>
    <div style="margin-top:8px;">
      <div class="dtuSpec-small"><b>Missing (from the specialization list)</b></div>
      <ul class="dtuSpec-list">
        ${missing
          .slice(0, 8)
          .map(
            (c) =>
              `<li>${c} — ${SPEC.courses[c].title} (${SPEC.courses[c].ects} ECTS)</li>`,
          )
          .join("")}
        ${missing.length > 8 ? `<li class="dtuSpec-small">…and ${missing.length - 8} more</li>` : ""}
      </ul>
    </div>
  `;

  widgetEl.querySelector(".dtuSpec-close")?.addEventListener("click", () => {
    widgetEl?.remove();
    widgetEl = null;
  });
}

// --- Badge injection ---
// Strategy: find elements whose text contains a specialization course number token (e.g. "02267")
const COURSE_CODES = new Set(Object.keys(SPEC.courses));

function findCourseCodesInText(text) {
  // Match 5-digit numbers and keep ones that are specialization codes
  const matches = text.match(/\b\d{5}\b/g);
  if (!matches) return [];
  return matches.filter((m) => COURSE_CODES.has(m));
}

async function addBadges(root = document.body) {
  ensureStyles();
  const selected = await getSelected();

  // Keep it lightweight: scan only “leaf-ish” elements
  const candidates = root.querySelectorAll("a, span, div, td, li, p, button");
  for (const el of candidates) {
    if (!el || el.dataset.dtuSpecScanned === "1") continue;
    const text = (el.textContent || "").trim();
    if (!text) continue;

    const codes = findCourseCodesInText(text);
    if (codes.length === 0) {
      el.dataset.dtuSpecScanned = "1";
      continue;
    }

    // Add one badge per code found (usually just one)
    for (const code of codes) {
      // Avoid duplicates
      if (el.querySelector?.(`[data-dtu-spec-badge="${code}"]`)) continue;

      const badge = document.createElement("span");
      badge.className = "dtuSpec-badge";
      badge.dataset.dtuSpecBadge = code;
      badge.dataset.selected = selected.has(code) ? "true" : "false";
      badge.title = `${SPEC.name}: ${SPEC.courses[code].title} (${SPEC.courses[code].ects} ECTS)`;

      badge.textContent = `Counts (${SPEC.courses[code].ects} ECTS)`;

      badge.addEventListener("click", async (ev) => {
        ev.stopPropagation();
        ev.preventDefault();
        const s = await getSelected();
        if (s.has(code)) s.delete(code);
        else s.add(code);
        await setSelected(s);
        badge.dataset.selected = s.has(code) ? "true" : "false";
        await renderWidget();
      });

      el.appendChild(badge);
    }

    el.dataset.dtuSpecScanned = "1";
  }
}

function startObserver() {
  // Study Planner is dynamic → observe DOM changes and re-annotate
  const obs = new MutationObserver((mutations) => {
    for (const m of mutations) {
      for (const node of m.addedNodes) {
        if (node.nodeType === Node.ELEMENT_NODE) addBadges(node);
      }
    }
  });
  obs.observe(document.documentElement, { childList: true, subtree: true });
}

// --- Boot ---
(async function init() {
  await renderWidget();
  await addBadges(document.body);
  startObserver();
})();
