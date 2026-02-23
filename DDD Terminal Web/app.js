const outputEl = document.getElementById("output");
const promptForm = document.getElementById("promptForm");
const commandInput = document.getElementById("commandInput");
const terminalScreen = document.getElementById("terminalScreen");
const asciiBannerEl = document.getElementById("asciiBanner");

const PROMPT = "ddd@terminal:~$";
const commandHistory = [];
let historyIndex = -1;
let isBooting = true;

const bootLines = [
  "Booting DDD Terminal v1.0...",
  "Loading modules...",
  "Ready. Type 'help' to see commands."
];

const featuredVideos = [
  "GOLF 2 vs Ferrari na semaforu (neočekivan kraj)",
  "Baka driftuje kroz selo i objašnjava pravila fizike",
  "Najluđi Balkan fails u 30 sekundi #47",
  "Komšija napravio tuning od frižidera i to RADI",
  "Kad svadba ode full chaos mode (snimak godine)"
];

function scrollToBottom() {
  outputEl.scrollTop = outputEl.scrollHeight;
}

function printLine(text, type = "normal") {
  const line = document.createElement("p");
  line.className = `output-line${type === "normal" ? "" : ` output-line--${type}`}`;
  line.textContent = text;
  outputEl.appendChild(line);
  scrollToBottom();
}

function printBlock(text, type = "normal") {
  text.split("\n").forEach((line) => printLine(line, type));
}

function printPromptedCommand(rawCommand) {
  printLine(`${PROMPT} ${rawCommand}`, "prompt");
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function typeLine(text, type = "system", speed = 18) {
  const line = document.createElement("p");
  line.className = `output-line output-line--${type}`;
  outputEl.appendChild(line);

  for (let index = 0; index < text.length; index += 1) {
    line.textContent += text[index];
    scrollToBottom();
    await sleep(speed);
  }
}

function getAsciiBannerText() {
  return asciiBannerEl.textContent.replace(/^\n/, "").replace(/\n\s*$/, "");
}

const COMMAND_HANDLERS = {
  help: () => {
    printLine("Available commands:", "system");
    printLine("- help      : list all commands");
    printLine("- about     : lore behind DnevnaDozaDebilizma");
    printLine("- stats     : channel numbers and highlights");
    printLine("- socials   : social links");
    printLine("- videos    : featured short titles");
    printLine("- contact   : collab contact info");
    printLine("- theme     : toggle green/amber terminal");
    printLine("- echo TEXT : print text back");
    printLine("- date      : local date and time");
    printLine("- clear     : clear terminal output");
    printLine("- ascii     : print ASCII banner");
  },
  about: () => {
    printLine(
      "DnevnaDozaDebilizma started as a late-night meme dump, then evolved into a Balkan chaos archive where street moments, car madness, and absurd comedy clips get remixed into hyper-fast shorts.",
      "system"
    );
    printLine(
      "The lore: one cursed folder of random videos became a daily ritual and accidentally built a cult audience that comes for laughs, stays for the unpredictable mayhem.",
      "system"
    );
  },
  stats: () => {
    printLine("Channel Snapshot", "system");
    printLine("- Subscribers: 62,000");
    printLine("- Total Views: 1,000,000+");
    printLine("- Upload cadence: 5-7 shorts per week");
    printLine("- Avg short runtime: 18-35s");
    printLine("- Best-performing themes: street chaos, car edits, instant karma");
    printLine("- Audience note: strongest engagement from Balkan late-night scroll sessions");
  },
  socials: () => {
    printLine("Find us here:", "system");
    printLine("- YouTube: youtube.com/@DnevnaDozaDebilizma");
    printLine("- Instagram: instagram.com/dnevnadozadebilizma");
    printLine("- TikTok: tiktok.com/@dnevnadozadebilizma");
    printLine("- X: x.com/DDDTerminal");
  },
  videos: () => {
    printLine("Featured shorts:", "system");
    featuredVideos.forEach((videoTitle, index) => {
      printLine(`${index + 1}. ${videoTitle}`);
    });
  },
  contact: () => {
    printLine("Contact: collabs@dnevnadozadebilizma.com", "system");
    printLine("DM for collabs.");
  },
  theme: () => {
    const root = document.documentElement;
    const currentTheme = root.getAttribute("data-theme");
    const nextTheme = currentTheme === "amber" ? "green" : "amber";

    if (nextTheme === "green") {
      root.removeAttribute("data-theme");
    } else {
      root.setAttribute("data-theme", nextTheme);
    }

    const label = nextTheme === "green" ? "Green phosphor" : "Amber CRT";
    printLine(`Theme switched: ${label}`, "system");
  },
  echo: (args) => {
    if (!args.length) {
      printLine("Usage: echo <text>", "error");
      return;
    }

    printLine(args.join(" "));
  },
  date: () => {
    printLine(new Date().toLocaleString(), "system");
  },
  clear: () => {
    outputEl.innerHTML = "";
    scrollToBottom();
  },
  ascii: () => {
    printBlock(getAsciiBannerText(), "system");
  }
};

function parseCommand(inputValue) {
  const trimmed = inputValue.trim();

  if (!trimmed) {
    return null;
  }

  const parts = trimmed.split(/\s+/);
  const command = parts[0].toLowerCase();
  const args = parts.slice(1);

  return { trimmed, command, args };
}

function handleCommand(inputValue) {
  const parsed = parseCommand(inputValue);

  if (!parsed) {
    return;
  }

  printPromptedCommand(parsed.trimmed);

  if (COMMAND_HANDLERS[parsed.command]) {
    COMMAND_HANDLERS[parsed.command](parsed.args);
  } else {
    printLine(`Command not found: ${parsed.command} (type 'help')`, "error");
  }

  commandHistory.push(parsed.trimmed);
  historyIndex = commandHistory.length;
}

function handleHistoryNavigation(event) {
  if (!commandHistory.length) {
    return;
  }

  if (event.key === "ArrowUp") {
    event.preventDefault();
    historyIndex = Math.max(0, historyIndex - 1);
    commandInput.value = commandHistory[historyIndex] || "";
  }

  if (event.key === "ArrowDown") {
    event.preventDefault();
    historyIndex = Math.min(commandHistory.length, historyIndex + 1);
    commandInput.value = commandHistory[historyIndex] || "";
  }
}

async function runBootSequence() {
  outputEl.innerHTML = "";

  for (const line of bootLines) {
    await typeLine(line, "system", 16);
  }

  isBooting = false;
  commandInput.disabled = false;
  commandInput.focus();
}

promptForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (isBooting) {
    return;
  }

  const value = commandInput.value;
  handleCommand(value);
  commandInput.value = "";
});

commandInput.addEventListener("keydown", handleHistoryNavigation);

terminalScreen.addEventListener("click", () => {
  commandInput.focus();
});

commandInput.disabled = true;
runBootSequence();
