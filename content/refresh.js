// content/refresh.js
// Refresh loop and boot

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
