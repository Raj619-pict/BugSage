// content.js
(function () {
  const script = document.createElement('script');
  script.src = chrome.runtime.getURL('injected-error-listener.js');
  script.onload = function () {
    this.remove(); // clean up
  };
  (document.head || document.documentElement).appendChild(script);

  // Listen for posted messages from injected script
  window.addEventListener('message', (event) => {
    if (event.source !== window || !event.data.bugsageError) return;

    chrome.storage.local.get('bugsage_errors', (data) => {
      const logs = data.bugsage_errors || [];
      logs.push(event.data.bugsageError);
      chrome.storage.local.set({ bugsage_errors: logs });
    });
  });
})();
