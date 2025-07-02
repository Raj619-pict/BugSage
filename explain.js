import { getExplanation } from './openai-helper.js';

export async function handleExplain(errorText, idx) {
  const button = document.getElementById(`explain-${idx}`);
  const explanationBox = document.getElementById(`explanation-${idx}`);
  button.disabled = true;
  button.innerText = 'Loading...';

  const result = await getExplanation(errorText);
  explanationBox.innerText = result;
  explanationBox.classList.remove('hidden');

  button.innerText = 'Explained ✅';
}
