// File: openai-helper.js
// Set your OpenAI API key below. This file is loaded directly in the browser,
// so environment variables are not available.
const OPENAI_API_KEY = 'YOUR_OPENAI_API_KEY';

async function getExplanation(errorMessage) {
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [{
          role: 'user',
          content: `Explain and suggest a fix for this error: ${errorMessage}`
        }]
      })
    });
    const data = await response.json();
    return data.choices[0].message.content;
  } catch (err) {
    console.error('OpenAI API error:', err);
    return 'Failed to fetch explanation. Check your API key or internet connection.';
  }
}

// Expose globally for scripts that aren't modules
window.getExplanation = getExplanation;