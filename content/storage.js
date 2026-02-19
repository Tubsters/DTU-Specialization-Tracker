// content/storage.js
// Chrome storage helpers and programme/spec selection

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
