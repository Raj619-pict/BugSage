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

## 🚀 Installation (Developer Mode)

1. Clone the repo:
   ```bash
   git clone https://github.com/yourusername/bugsage.git
   cd bugsage
   ```
2. Edit `openai-helper.js` and replace `YOUR_OPENAI_API_KEY` with your key.
3. Open `chrome://extensions`, enable **Developer mode**, then choose **Load unpacked** and select this folder.

You're ready to go! The extension icon should now appear in the Chrome toolbar.

The UI uses a small `style.css` file bundled with the extension so no remote resources are required.
