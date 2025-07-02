(function () {
  const originalConsoleError = console.error;
  console.error = function (...args) {
    try {
      const message = `\u274C console.error: ${args.join(' ')}`;
      window.postMessage({ bugsageError: message }, '*');
    } catch (err) {
      // ignore errors in logger
    }
    originalConsoleError.apply(console, args);
  };
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
