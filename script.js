const button = document.getElementById("runBtn");

const texts = [
" Nah",
" Nope",
" Not this time",
" Missed!",
" Too slow!",
" Catch me!",
" Nice try!",
" Almost!",
" Haha!",
" No way!",
" Keep trying!",
" Try harder!",
" Impossible!",
" You wish!",
" Better luck!",
" Still no!",
" Never!",
" I'm fast!",
" Wrong move!",
" Can't catch me!"
];

const colors = [
"#ff4d6d",
"#00f5ff",
"#00ff88",
"#ffe600",
"#ff8800",
"#9b5cff",
"#ff00b7"
];

// стартовая позиция
button.style.left = (window.innerWidth / 2 - 80) + "px";
button.style.top = (window.innerHeight / 2) + "px";

function moveButton() {

    const oldX = button.offsetLeft + button.offsetWidth / 2;
    const oldY = button.offsetTop + button.offsetHeight / 2;

    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    button.style.left = x + "px";
    button.style.top = y + "px";

    button.textContent =
        texts[Math.floor(Math.random() * texts.length)];

    button.style.background =
        colors[Math.floor(Math.random() * colors.length)];

    const newX = x + button.offsetWidth / 2;
    const newY = y + button.offsetHeight / 2;

    createLaser(oldX, oldY, newX, newY);
    createExplosion(oldX, oldY);

}

button.addEventListener("mouseenter", moveButton);

button.addEventListener("click", () => {
    alert("😲 Impossible! You actually caught me!");
});

function createLaser(x1, y1, x2, y2) {

    const line = document.createElement("div");
    line.className = "laser";

    const dx = x2 - x1;
    const dy = y2 - y1;

    const length = Math.hypot(dx, dy);

    line.style.left = x1 + "px";
    line.style.top = y1 + "px";
    line.style.width = length + "px";

    line.style.transform =
        `rotate(${Math.atan2(dy, dx)}rad)`;

    document.body.appendChild(line);

    setTimeout(() => line.remove(), 350);
}

function createExplosion(x, y) {

    const flash = document.createElement("div");
    flash.className = "flash";
    flash.style.left = (x - 20) + "px";
    flash.style.top = (y - 20) + "px";
    document.body.appendChild(flash);

    setTimeout(() => flash.remove(), 250);

    for (let i = 0; i < 18; i++) {

        const p = document.createElement("div");
        p.className = "particle";

        p.style.left = x + "px";
        p.style.top = y + "px";

        p.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        p.style.setProperty(
            "--x",
            (Math.random() * 140 - 70) + "px"
        );

        p.style.setProperty(
            "--y",
            (Math.random() * 140 - 70) + "px"
        );

        document.body.appendChild(p);

        setTimeout(() => p.remove(), 600);
    }
}
