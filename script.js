let step = 0;
let secretClicks = 0;
let chosenDate = "";

const text = document.getElementById("text");
const btn = document.getElementById("btn");
const music = document.getElementById("music");
const sceneEffect = document.getElementById("sceneEffect");

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
        fade(`As a special friend,<br><br>it didn’t sit right with me.`);
        btn.innerText = "So?";
    }

    else if (step === 4) {
        fade(`
            So maybe…<br><br>
            we step outside.<br>
            Nothing dramatic.<br>
            Just two special friends.
        `);
        btn.innerText = "When exactly?";
    }

    else if (step === 5) {
        showDateOptions();
    }
}

function showDateOptions() {
    text.innerHTML = `
        When should this mysterious outing happen?
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

    fade(`${date}?<br><br>Interesting choice.<br><br>Now tell me…`);

    setTimeout(showTypeOptions, 1600);
}

function showTypeOptions() {
    text.innerHTML = `
        What kind of day are we creating?
        <div class="options">
            <button onclick="selectType('sunset')">🌇 Sunset… then dinner</button>
            <button onclick="selectType('drive')">🚗 Long drive somewhere</button>
            <button onclick="selectType('memory')">💫 Recreate a best day</button>
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
        I’ll handle the details.<br>
        You just show up.
    `);

    setTimeout(() => {
        fade(`<div class="final">See you soon… special friend.</div>`);
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
        setTimeout(() => flash.remove(), 3000);
    }
}

function confettiBurst() {
    for (let i = 0; i < 30; i++) {
        let c = document.createElement("div");
        c.className = "confetti";
        c.style.left = Math.random() * 100 + "vw";
        c.style.background = `hsl(${Math.random()*360}, 80%, 70%)`;
        sceneEffect.appendChild(c);
        setTimeout(() => c.remove(), 3000);
    }
}

/* Hidden message */
document.body.addEventListener("click", () => {
    secretClicks++;
    if (secretClicks === 6) {
        alert("You were never just a 'special friend' to me.");
    }
});
