<!--
╔══════════════════════════════════════════════════════════════════════╗
║                         D D D   T E R M I N A L                     ║
║              Retro Command Interface for Balkan Chaos               ║
╚══════════════════════════════════════════════════════════════════════╝
-->

# ██████╗ ██████╗ ██████╗ ████████╗███████╗██████╗ ███╗   ███╗██╗███╗   ██╗ █████╗ ██╗     
# ██╔══██╗██╔══██╗██╔══██╗╚══██╔══╝██╔════╝██╔══██╗████╗ ████║██║████╗  ██║██╔══██╗██║     
# ██████╔╝██████╔╝██████╔╝   ██║   █████╗  ██████╔╝██╔████╔██║██║██╔██╗ ██║███████║██║     
# ██╔══██╗██╔═══╝ ██╔══██╗   ██║   ██╔══╝  ██╔══██╗██║╚██╔╝██║██║██║╚██╗██║██╔══██║██║     
# ██║  ██║██║     ██║  ██║   ██║   ███████╗██║  ██║██║ ╚═╝ ██║██║██║ ╚████║██║  ██║███████╗
# ╚═╝  ╚═╝╚═╝     ╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝

> Retro terminal-themed landing page for **DnevnaDozaDebilizma**  
> Built with pure HTML, CSS and vanilla JavaScript.  
> No frameworks. No build step. Just chaos.

---

## 🖥 WHAT IS THIS?

DDDTerminal is a fully interactive **retro command-line interface website** that:

- Displays an ASCII banner
- Simulates a boot sequence
- Supports terminal-style commands
- Keeps command history
- Toggles between green phosphor & amber CRT themes
- Feels like a hacker console from 1997

All while being mobile-friendly and smooth.

---

## 🚀 HOW TO RUN

No setup. No npm. No Docker. No nonsense.

```bash
1. Download the project
2. Open index.html
3. Type `help`
4. Enter the chaos
```

Or deploy to:
- GitHub Pages
- Vercel
- Netlify
- Any static hosting

---

## 📁 PROJECT STRUCTURE

```
DDDTerminal/
│
├── index.html      # Main structure
├── styles.css      # Retro terminal styling + scanlines
├── app.js          # Command parser & logic
└── README.md       # You are here
```

---

## 💻 AVAILABLE COMMANDS

| Command | Description |
|----------|-------------|
| `help` | Lists all commands |
| `about` | DDD lore |
| `stats` | Channel statistics |
| `socials` | Social links |
| `videos` | Featured viral titles |
| `contact` | Email + collab info |
| `theme` | Toggle phosphor/amber |
| `echo <text>` | Prints text |
| `date` | Local system date |
| `ascii` | Reprint ASCII banner |
| `clear` | Clears terminal output |

---

## 🧠 FEATURES

### ✔ Command Parsing
- Case-insensitive
- Trims input
- Graceful unknown command handling

### ✔ Command History
- ↑ Arrow → previous command  
- ↓ Arrow → next command  

### ✔ Auto Scroll
- Always scrolls to newest output

### ✔ Theme System
CSS Variables powered toggle between:

- 🟢 Green Phosphor
- 🟠 Amber CRT

### ✔ Retro Effects
- Scanline overlay
- Grain texture
- Blinking cursor
- Boot typing animation

---

## 🎨 DESIGN PHILOSOPHY

This is not just a landing page.

This is:

```
Minimal UI
+ Nostalgia
+ Terminal aesthetics
+ Balkan energy
= Digital personality
```

High contrast. Monospace. Clean spacing. Zero clutter.

---

## 🛠 CUSTOMIZING COMMANDS

Open `app.js` and find the command switch block:

```js
switch(cmd) {
    case 'help':
        ...
```

To add a new command:

```js
case 'mycommand':
    printOutput("Your custom message here");
    break;
```

Done.

---

## 🌐 BRAND DATA (CURRENT DEFAULTS)

```
Channel: DnevnaDozaDebilizma
Subscribers: 62,000
Total Views: 1,000,000+
Content: Balkan viral shorts, comedy, shock humor, cars & chaos
Status: ONLINE
```

Edit inside `index.html` or `app.js`.

---

## 📱 RESPONSIVENESS

- Terminal scales properly
- Input always accessible
- Works on mobile
- Works on desktop
- Works without JS (static fallback info)

---

## 🔒 NO DEPENDENCIES

- No frameworks
- No CDNs
- No external fonts required
- No build tools
- Just static files

---

## ⚡ FUTURE IDEAS

- Fake system logs
- Matrix mode
- Boot sound toggle
- Open link commands
- Konami code easter egg
- Fake hacking animation
- Dynamic YouTube API stats

---

## 🧨 WHY THIS EXISTS

Because a normal landing page is boring.

DDD is not boring.

---

```
System Status: ONLINE
Terminal Version: 1.0
Energy Level: Balkan
Chaos Engine: ACTIVE
```

---

## 📜 LICENSE

Use freely. Modify. Deploy. Break it. Improve it.

Just don’t remove the chaos.

---

> Built for DnevnaDozaDebilizma  
> Powered by caffeine and terminal nostalgia.
