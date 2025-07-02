  

// File: openai-helper.js
require('dotenv').config();
async function getExplanation(errorMessage) {
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':process.env.OPENAI_API_KEY
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

if (typeof module !== 'undefined') module.exports = { getExplanation };
