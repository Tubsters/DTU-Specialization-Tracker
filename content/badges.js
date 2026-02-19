// content/badges.js
// Badge creation/removal

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
