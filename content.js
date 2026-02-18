// =========================
// DTU Specialization Helper
// Auto ECTS tally + clean badges + green/red list
// =========================

// --- Specialization data (CSE → Software Engineering) ---
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
};

const COURSE_CODE_RE = /^\d{5}$/;
const STYLE_ID = "dtuSpec-style";
const ROOT_CLASS = "dtuSpec-root";

const nfDa = new Intl.NumberFormat("da-DK", { maximumFractionDigits: 1 });

// ---------- helpers ----------
function isInsideOurUi(el) {
  return !!el.closest?.(`.${ROOT_CLASS}`);
}

function ensureStyles() {
  if (document.getElementById(STYLE_ID)) return;
  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = `
    .${ROOT_CLASS} { font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; }

    .dtuSpec-badge {
      display:inline-flex;
      align-items:center;
      font-size: 11px;
      line-height: 1;
      padding: 2px 6px;
      border-radius: 999px;
      border: 1px solid rgba(0,0,0,.18);
      background: rgba(0,0,0,.05);
      margin-left: 6px;
      user-select: none;
      white-space: nowrap;
    }
    .dtuSpec-badge[data-inplan="true"] {
      border-color: rgba(0, 128, 0, .35);
      background: rgba(0, 128, 0, .10);
    }

    .dtuSpec-widget {
      position: fixed;
      right: 16px;
      bottom: 16px;
      width: 360px;
      max-height: 50vh;
      overflow: auto;
      z-index: 999999;
      border-radius: 12px;
      border: 1px solid rgba(0,0,0,.15);
      background: #fff;
      box-shadow: 0 10px 30px rgba(0,0,0,.12);
      padding: 12px;
      font-size: 13px;
    }
    .dtuSpec-title { font-weight: 700; margin-bottom: 6px; display:flex; justify-content:space-between; align-items:center; gap:8px; }
    .dtuSpec-close { cursor:pointer; opacity:.7; padding: 2px 6px; border-radius: 8px; }
    .dtuSpec-close:hover { opacity:1; background: rgba(0,0,0,.05); }

    .dtuSpec-row { display:flex; justify-content:space-between; gap: 8px; margin: 6px 0; }
    .dtuSpec-small { color: rgba(0,0,0,.65); font-size: 12px; }

    .dtuSpec-list { margin: 10px 0 0; padding-left: 18px; }
    .dtuSpec-course { margin: 6px 0; }
    .dtuSpec-in { color: #0a7a0a; }     /* green */
    .dtuSpec-out { color: #c01818; }    /* red */
    .dtuSpec-dot { display:inline-block; width: 8px; height: 8px; border-radius: 999px; margin-right: 6px; vertical-align: middle; }
    .dtuSpec-dot.in { background: #0a7a0a; }
    .dtuSpec-dot.out { background: #c01818; }
  `;
  document.head.appendChild(style);
}

// ---------- auto-detect planned courses ----------
function getPlannedCourseCodes() {
  // Strategy:
  // 1) Find standalone text nodes that are exactly 5 digits.
  // 2) Exclude our widget.
  // 3) Use a Set to avoid double counting (basket + semester etc.)
  const codes = new Set();

  // We scan leaf-ish elements only and only when the entire text is the code.
  const codeEls = document.querySelectorAll("a, span, strong, div");
  for (const el of codeEls) {
    if (!el || isInsideOurUi(el)) continue;
    if (el.childElementCount !== 0) continue;

    const txt = (el.textContent || "").trim();
    if (!COURSE_CODE_RE.test(txt)) continue;

    codes.add(txt);
  }

  return codes;
}

function sumSpecEcts(plannedCodes) {
  let sum = 0;
  for (const code of plannedCodes) {
    if (SPEC.courses[code]) sum += SPEC.courses[code].ects;
  }
  return sum;
}

// ---------- badges (no clicking) ----------
function removeOldBadges() {
  // If you previously had “badge spam”, this clears it.
  document.querySelectorAll(".dtuSpec-badge").forEach((b) => b.remove());
}

function annotateSpecBadges(plannedCodes) {
  // Only attach next to elements whose text is EXACTLY the course code.
  const els = document.querySelectorAll("a, span, strong, div");
  for (const el of els) {
    if (!el || isInsideOurUi(el)) continue;
    if (el.childElementCount !== 0) continue;

    const code = (el.textContent || "").trim();
    if (!COURSE_CODE_RE.test(code)) continue;
    if (!SPEC.courses[code]) continue;

    // Prevent duplicates at same location
    if (el.dataset.dtuSpecBadged === "1") {
      // Update in-plan state if needed
      const next = el.nextElementSibling;
      if (
        next?.classList?.contains("dtuSpec-badge") &&
        next.dataset?.code === code
      ) {
        next.dataset.inplan = plannedCodes.has(code) ? "true" : "false";
      }
      continue;
    }

    const badge = document.createElement("span");
    badge.className = "dtuSpec-badge";
    badge.dataset.code = code;
    badge.dataset.inplan = plannedCodes.has(code) ? "true" : "false";
    badge.textContent = `Counts (${nfDa.format(SPEC.courses[code].ects)} ECTS)`;

    el.insertAdjacentElement("afterend", badge);
    el.dataset.dtuSpecBadged = "1";
  }
}

// ---------- widget ----------
let widgetEl = null;

function renderWidget(plannedCodes) {
  ensureStyles();

  const ects = sumSpecEcts(plannedCodes);
  const required = SPEC.requiredEcts;

  if (!widgetEl) {
    widgetEl = document.createElement("div");
    widgetEl.className = `dtuSpec-widget ${ROOT_CLASS}`;
    document.body.appendChild(widgetEl);
  }

  const rows = Object.keys(SPEC.courses)
    .sort()
    .map((code) => {
      const inPlan = plannedCodes.has(code);
      const cls = inPlan ? "dtuSpec-in" : "dtuSpec-out";
      const dot = inPlan ? "in" : "out";
      const c = SPEC.courses[code];
      return `
        <li class="dtuSpec-course ${cls}">
          <span class="dtuSpec-dot ${dot}"></span>
          <b>${code}</b> — ${c.title} (${nfDa.format(c.ects)} ECTS)
        </li>
      `;
    })
    .join("");

  widgetEl.innerHTML = `
    <div class="dtuSpec-title">
      <div>${SPEC.name}</div>
      <div class="dtuSpec-close" title="Hide">✕</div>
    </div>

    <div class="dtuSpec-row">
      <div>Progress</div>
      <div><b>${nfDa.format(ects)}</b> / ${nfDa.format(required)} ECTS</div>
    </div>

    <div class="dtuSpec-small">
      Auto-counts courses currently visible in your Study Planner/basket.
    </div>

    <ul class="dtuSpec-list">
      ${rows}
    </ul>
  `;

  widgetEl.querySelector(".dtuSpec-close")?.addEventListener("click", () => {
    widgetEl?.remove();
    widgetEl = null;
  });
}

// ---------- refresh loop (debounced) ----------
let refreshTimer = null;
function scheduleRefresh() {
  if (refreshTimer) return;
  refreshTimer = setTimeout(() => {
    refreshTimer = null;
    refresh();
  }, 250);
}

function refresh() {
  const planned = getPlannedCourseCodes();
  renderWidget(planned);
  // Badges: keep them clean and non-duplicated
  annotateSpecBadges(planned);
}

function startObserver() {
  const obs = new MutationObserver(() => scheduleRefresh());
  obs.observe(document.documentElement, { childList: true, subtree: true });
}

// ---------- boot ----------
(function init() {
  ensureStyles();
  removeOldBadges(); // clears spam from earlier versions
  refresh();
  startObserver();
})();
