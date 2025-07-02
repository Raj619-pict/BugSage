// File: popup.js
function renderErrors(errors) {
  const errorLog = document.getElementById('errorLog');
  if (!errors.length) {
    errorLog.innerHTML = '<p class="text-gray-500 italic">No errors captured yet.</p>';
    return;
  }
  errorLog.innerHTML = errors
    .map((err, idx) => `
      <div class="bg-yellow-100 border-pikaRed border-2 rounded-xl p-3 shadow-md">
        <p class="text-sm text-gray-800 font-mono"><strong class="text-pikaRed">[${idx + 1}]</strong> ${err}</p>
      </div>
    `)
    .join('');
}

document.addEventListener('DOMContentLoaded', () => {
  const errorLog = document.getElementById('errorLog');
  const clearBtn = document.getElementById('clearErrors');

  chrome.storage.local.get('bugsage_errors', (result) => {
    const errors = result.bugsage_errors || [];
    renderErrors(errors);
  });

  clearBtn.addEventListener('click', () => {
    chrome.storage.local.set({ bugsage_errors: [] }, () => {
      renderErrors([]);
    });
  });
});
