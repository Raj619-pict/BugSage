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

chrome.devtools.inspectedWindow.eval(`
  (function() {
    const originalConsoleError = console.error;
    console.error = function(...args) {
      try {
        const message = '\u274C console.error: ' + args.join(' ');
        window.postMessage({ bugsageError: message }, '*');
      } catch (err) {
        // ignore errors in logger
      }
      originalConsoleError.apply(console, args);
    };
  })();
`);
