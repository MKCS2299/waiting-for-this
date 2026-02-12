let step = 0;
let chosenDate = "";
let secretClicks = 0;

const text = document.getElementById("text");
const btn = document.getElementById("btn");
const music = document.getElementById("music");
const sceneEffect = document.getElementById("sceneEffect");
const photo = document.getElementById("herPhoto");

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
            stay inside on a day like that?
        `);
        btn.innerText = "Go on…";
    }

    else if (step === 3) {
        fade(`
            So maybe we save the date.<br><br>
            Not calling it a date.<br>
            Unless… you want to.
        `);
        btn.innerText = "Oh really?";
    }

    else if (step === 4) {
        showDateOptions();
    }
}

function showDateOptions() {
    text.innerHTML = `
        So… hypothetically speaking 😌<br><br>
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
    vibrate();
    chosenDate = date;
    confettiBurst();

    fade(`
        ${date}?<br><br>
        Interesting choice.<br><br>
        What kind of “not-a-date” are we planning?
    `);

    setTimeout(showTypeOptions, 1500);
}

function showTypeOptions() {
    text.innerHTML = `
        Choose the vibe:
        <div class="options">
            <button onclick="selectType('sunset')">🌇 Sunset… then dinner</button>
            <button onclick="selectType('drive')">🚗 Drive somewhere (might take time)</button>
            <button onclick="selectType('memory')">💫 Recreate one of our best days</button>
        </div>
    `;
}

function selectType(type) {
    vibrate();
    confettiBurst();
    triggerScene(type);

    fade(`
        ${chosenDate}.<br><br>
        Perfect.<br><br>
        I’ll plan it properly.<br><br>
        And we’ll just see what we end up calling it.
    `);

    setTimeout(() => {
        fade(`
            <div class="final">
            Save the date.<br><br>
            (Not a date… unless it feels like one.)
            </div>
        `);
    }, 3500);
}

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
        setTi
