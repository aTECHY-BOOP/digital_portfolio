// CURSOR GLOW
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";
});

// TYPING EFFECT
const words = ["Data Scientist", "Web Developer", "AI Enthusiast"];
let i = 0, j = 0, current = "", deleting = false;

function type() {
    if (!deleting && j <= words[i].length) {
        current = words[i].substring(0, j++);
    } else if (deleting && j >= 0) {
        current = words[i].substring(0, j--);
    }

    document.getElementById("typing").textContent = current;

    if (j === words[i].length) deleting = true;
    if (j === 0) {
        deleting = false;
        i = (i + 1) % words.length;
    }

    setTimeout(type, deleting ? 50 : 100);
}
type();

// SCROLL ANIMATION
const faders = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
    faders.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 50) {
            el.classList.add("show");
        }
    });
});
// TOGGLE CHAT
function toggleChat() {
    const bot = document.getElementById("chatbot");
    bot.style.display = bot.style.display === "flex" ? "none" : "flex";
}

// ENTER KEY
function handleKey(e) {
    if (e.key === "Enter") {
        sendMessage();
    }
}

// SEND MESSAGE
function sendMessage() {
    const input = document.getElementById("userInput");
    const text = input.value.toLowerCase();
    if (!text) return;

    addMessage(text, "user-msg");
    input.value = "";

    setTimeout(() => {
        const reply = getBotReply(text);
        addMessage(reply, "bot-msg");
    }, 500);
}

// ADD MESSAGE
function addMessage(msg, className) {
    const chat = document.getElementById("chatBody");
    const div = document.createElement("div");
    div.className = className;
    div.innerText = msg;
    chat.appendChild(div);
    chat.scrollTop = chat.scrollHeight;
}

// BOT REPLIES (AI BRAIN)
function getBotReply(msg) {

    if (msg.includes("skills")) {
        return "Aryan knows Python, NumPy, HTML, CSS, and JavaScript.";
    }

    if (msg.includes("projects")) {
        return "He has built data analysis tools and web-based dashboards.";
    }

    if (msg.includes("resume")) {
        return "You can download Aryan's resume from the contact section.";
    }

    if (msg.includes("contact")) {
        return "You can reach Aryan via email: your@email.com";
    }

    return "Hmm... try asking about skills, projects, or resume 😊";
}