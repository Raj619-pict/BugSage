# 🧠 BugSage – AI-Powered Debugging Chrome Extension

**BugSage** captures console and network errors and explains them using OpenAI so you can debug faster.

---

## 🔧 Features

- 📡 Detects JavaScript, React and API errors
- 🤖 Explains messages with GPT‑4
- 💾 Stores errors locally for later reference

---

## 🖼️ Screenshots

> 🪄 Add screenshots here after build:
> - Popup UI with error logs
> - DevTools tab with "Explain" feature

---
## 🛠️ How It Works

BugSage injects a helper script into every page. The content script loads `injected-error-listener.js`, which overrides `console.error` and attaches `error` and `unhandledrejection` listeners in the page context. Because this injection runs inside the inspected page, any `console.error` you type in DevTools is captured just like errors from your app.

When the BugSage DevTools panel is open, `devtools.js` also registers `chrome.devtools.network.onRequestFinished` and `window` `error` listeners so network failures and script errors are logged while you debug.
---
## 🚀 Installation (Developer Mode)

1. Clone the repo:
   ```bash
   git clone https://github.com/yourusername/bugsage.git
   cd bugsage
   ```
2. Edit `openai-helper.js` and replace `YOUR_OPENAI_API_KEY` with your key.
3. Open `chrome://extensions`, enable **Developer mode**, then choose **Load unpacked** and select this folder.

You're ready to go! The extension icon should now appear in the Chrome toolbar.

The UI uses a compiled `tailwind.css` bundled with the extension so no remote resources are required.
