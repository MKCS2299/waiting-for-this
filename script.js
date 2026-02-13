let step = 0;
let chosenDate = "";

const text = document.getElementById("text");
const btn = document.getElementById("btn");
const music = document.getElementById("music");
const sceneEffect = document.getElementById("sceneEffect");
const photo = document.getElementById("herPhoto");

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

function fade(content) {
    text.style.opacity = 0;
    setTimeout(() => {
        text.innerHTML = content;
        text.style.opacity = 1;
    }, 400);
}

function nextStep() {

    if (step === 0) music.play();
    step++;

    if (step === 1) {
        photo.style.display = "block";
        fade("It’s you.<br><br>Obviously.");
        btn.innerText = "Wait… what?";
    }

    else if (step === 2) {
        fade(`
            I was thinking…<br><br>
            How can someone as cute as you,<br>
            someone who makes even silence feel warm,<br>
            just stay inside on this day?
        `);
        btn.innerText = "Go on…";
    }

    else if (step === 3) {
        fade(`
            As my favorite special friend,<br><br>
            it didn’t sit right with me.
        `);
        btn.innerText = "And?";
    }

    else if (step === 4) {
        fade(`
            So maybe we save the date.<br><br>
            Ohh, not calling this that date date!<br>
            Unless… I meaaaaan.
        `);
        btn.innerText = "Hypothetically speaking?";
    }

    else if (step === 5) {
        showDateOptions();
    }
}

function showDateOptions() {
    text.innerHTML = `
        Hypothetically speaking 😌<br><br>
        When would you be free?
        <div class="options">
            <button onclick="selectDate('14th February')">🌹 14th February</button>
            <button onclick="selectDate('15th February')">✨ 15th February</button>
            <button onclick="selectDate('Next Weekend or next next weekend')">🌅 Next Weekend</button>
        </div>
    `;
    btn.style.display = "none";
}

function selectDate(date) {
    chosenDate = date;
    confettiBurst();

    fade(`
        ${date}?<br><br>
        You remember me not meeting your eyes while driving you to Gurgaon station?<br>
        The way I feel that day?<br><br>
        Yeah… something like that.
        Also, first stop is getting your eyes check, so you can appreciate the company.
    `);

    setTimeout(showTypeOptions, 5000);
}

function showTypeOptions() {
    text.innerHTML = `
        Choose the vibe:
        <div class="options">
            <button onclick="selectType('sunset')">🌇 Sunset…then exploration and then dinner</button>
            <button onclick="selectType('drive')">🚗 Drive and go see birds.</button>
            <button onclick="selectType('memory')">💫 Recreate one of our best days (this requires getting up in the morning).</button>
        </div>
    `;
}

function selectType(type) {
    confettiBurst();
    triggerScene(type);

    fade(`
        ${chosenDate}.<br><br>
        That sounds like something<br>
        two “special friends” would enjoy.<br><br>
        I’ll handle the planning.<br>
        No pressure. No expectations.<br><br>
        Just you and me.
    `);

    setTimeout(() => {

        fade(`
            Save the date.<br><br>
            (I meaaan)
        `);

        // 2 second tension pause
        setTimeout(() => {
            fade(`<div class="final">I’ll see you.</div>`);
        }, 2000);

    }, 5500);
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
    for (let i = 0; i < 25; i++) {
        let c = document.createElement("div");
        c.className = "confetti";
        c.style.left = Math.random() * 100 + "vw";
        c.style.background = `hsl(${Math.random()*360}, 80%, 70%)`;
        sceneEffect.appendChild(c);
        setTimeout(() => c.remove(), 3000);
    }
}
