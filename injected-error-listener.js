(function () {
  window.addEventListener('error', function (e) {
    const message = `\u274C JS Error: ${e.message} at ${e.filename}:${e.lineno}`;
    window.postMessage({ bugsageError: message }, '*');
  });

  window.addEventListener('unhandledrejection', function (e) {
    const reason = e.reason && e.reason.message ? e.reason.message : e.reason;
    const message = `\u274C Unhandled Promise Rejection: ${reason}`;
    window.postMessage({ bugsageError: message }, '*');
  });
})();
