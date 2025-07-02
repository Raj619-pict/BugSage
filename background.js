
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ bugsage_errors: [] });
});