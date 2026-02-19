// content/planner.js
// Course detection and ECTS summing

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
