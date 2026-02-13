let step = 0;
let chosenDate = "";
let secretClicks = 0;

const text = document.getElementById("text");
const btn = document.getElementById("btn");
const music = document.getElementById("music");
const sceneEffect = document.getElementById("sceneEffect");
const photo = document.getElementById("herPhoto");

/* Attach button safely */
btn.addEventListener("click", nextStep);

/* Floating hearts */
setInterval(() => {
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}, 800);

function vibrate() {
    if (navigator.vibrate) navigator.vibrate(40);
}

function fade(content) {
    text.style.opacity = 0;
    setTimeout(() => {
        text.innerHTML = content;
        text.style.opacity = 1;
    }, 400);
}

function nextStep() {

    vibrate();

    if (step === 0) music.play();

    step++;

    if (step === 1) {
        photo.style.display = "block";
        fade(`It’s you.<br><br>Obviously.`);
        btn.innerText = "Wait… what?";
    }

    else if (step === 2) {
        fade(`
            I was thinking…<br><br>
            How can someone as cute as you,<br>
            someone as ridiculously awesome as you,<br>
            just stay inside?
        `);
        btn.innerText = "Go on…";
    }

    else if (step === 3) {
        fade(`
            As a special friend,<br><br>
            it didn’t sit right with me.
        `);
        btn.innerText = "And?";
    }

    else if (step === 4) {
        fade(`
            So maybe…<br><br>
            we save the date.<br><br>
            Not calling it a date.<br>
            Unless… you want to.
        `);
        btn.innerText = "Hypothetically speaking?";
    }

    else if (step === 5) {
        showDateOptions();
    }
}

/* DATE OPTIONS */

function showDateOptions() {
    text.innerHTML = `
        Hypothetically speaking 😌<br><br>
        When would you be free?
        <div class="options">
            <button onclick="selectDate('14th February')">🌹 14th February</button>
            <button onclick="selectDate('15th February')">✨ 15th February</button>
            <button onclick="selectDate('Next Weekend')">🌅 Next Weekend</button>
        </div>
    `;
    btn.style.display = "none";
}

function selectDate(date) {
    chosenDate = date;
    confettiBurst();

    fade(`
        ${date}?<br><br>
        Interesting choice.<br><br>
        And what kind of “not-a-date” are we planning?
    `);

    setTimeout(showTypeOptions, 1500);
}

/* TYPE OPTIONS */

function showTypeOptions() {
    text.innerHTML = `
        Choose the vibe:
        <div class="options">
            <button onclick="selectType('sunset')">
                🌇 Sunset… and then dinner
            </button>

            <button onclick="selectType('drive')">
                🚗 Drive somewhere (might take time)
            </button>

            <button onclick="selectType('memory')">
                💫 Recreate one of our best days
            </button>
        </div>
    `;
}

function selectType(type) {
    confettiBurst();
    triggerScene(type);

    fade(`
        ${chosenDate}.<br><br>
        That sounds like something<br>
        two special friends would enjoy.<br><br>
        I’ll handle the planning.<br>
        You just show up.
    `);

    setTimeout(() => {
        fade(`
            <div class="final">
            Save the date.<br><br>
            (Not officially a date…<br>
            unless it feels like one.)
            </div>
        `);
    }, 3500);
}

/* SCENE EFFECTS */

function triggerScene(type) {
    sceneEffect.innerHTML = "";

    if (type === "sunset") {
        let sun = document.createElement("div");
        sun.className = "sunset-sun";
        sceneEffect.appendChild(sun);
    }

    if (type === "drive") {
        let car = document.createElement("div");
        car.className = "car";
        car.innerHTML = "🚗";
        sceneEffect.appendChild(car);
    }

    if (type === "memory") {
        let flash = document.createElement("div");
        flash.className = "flashback";
        sceneEffect.appendChild(flash);
        setTimeout(() => flash.remove(), 3000);
    }
}

/* CONFETTI */

function confettiBurst() {
    for (let i = 0; i < 25; i++) {
        let c = document.createElement("div");
        c.className = "confetti";
        c.style.left = Math.random() * 100 + "vw";
        c.style.background = `hsl(${Math.random()*360}, 80%, 70%)`;
        sceneEffect.appendChild(c);
        setTimeout(() => c.remove(), 3000);
    }
}

/* SECRET MESSAGE */

document.body.addEventListener("click", () => {
    secretClicks++;
    if (secretClicks === 7) {
        alert("You know this was never just a 'special friend' plan, right?");
    }
});
