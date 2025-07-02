
// File: devtools.js
chrome.devtools.network.onRequestFinished.addListener(request => {
  const url = request.request.url;
  if (request.response.status >= 400) {
    const error = `⚠️ ${request.response.status} on ${url}`;
    chrome.storage.local.get('bugsage_errors', (data) => {
      const logs = data.bugsage_errors || [];
      logs.push(error);
      chrome.storage.local.set({ bugsage_errors: logs });
    });
  }
});

window.addEventListener('error', (e) => {
  const message = `❌ JS Error: ${e.message} at ${e.filename}:${e.lineno}`;
  chrome.storage.local.get('bugsage_errors', (data) => {
    const logs = data.bugsage_errors || [];
    logs.push(message);
    chrome.storage.local.set({ bugsage_errors: logs });
  });
});
