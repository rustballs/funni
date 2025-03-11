const container = document.getElementById("container");
const bounceSound = document.getElementById("bounceSound");
const jumpscareSound = document.getElementById("jumpscareSound");
let dvds = [];

function createDVD(x, y) {
    const dvd = document.createElement("img");
    dvd.src = "dvd_logo.png";
    dvd.classList.add("dvd");
    dvd.style.left = x + "px";
    dvd.style.top = y + "px";

    const jumpscare = document.createElement("img");
    jumpscare.src = "jumpscare_image.png";
    jumpscare.classList.add("jumpscare");
    jumpscare.style.display = "none";

    container.appendChild(dvd);
    container.appendChild(jumpscare);

    let dx = Math.random() * 4 - 2;
    let dy = Math.random() * 4 - 2;

    dvds.push({ dvd, jumpscare, dx, dy });
}

function updatePositions() {
    dvds.forEach(dvdObj => {
        let { dvd, jumpscare, dx, dy } = dvdObj;
        let x = dvd.offsetLeft + dx;
        let y = dvd.offsetTop + dy;

        if (x <= 0 || x >= window.innerWidth - dvd.clientWidth) {
            dx = -dx;
            playBounceSound();
            checkJumpScare(dvd, jumpscare, x, y);
        }
        if (y <= 0 || y >= window.innerHeight - dvd.clientHeight) {
            dy = -dy;
            playBounceSound();
            checkJumpScare(dvd, jumpscare, x, y);
        }

        dvd.style.left = x + "px";
        dvd.style.top = y + "px";

        dvdObj.dx = dx;
        dvdObj.dy = dy;
    });
}

function playBounceSound() {
    bounceSound.play();
}

function checkJumpScare(dvd, jumpscare, x, y) {
    if ((x <= 0 || x >= window.innerWidth - dvd.clientWidth) &&
        (y <= 0 || y >= window.innerHeight - dvd.clientHeight)) {
        dvd.style.display = "none";
        jumpscare.style.display = "block";
        jumpscareSound.play();
        setTimeout(() => {
            jumpscare.style.display = "none";
            dvd.style.display = "block";
        }, 1000);
    }
}

function spawnDVDs(count) {
    for (let i = 0; i < count; i++) {
        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 100);
        createDVD(x, y);
    }
}

window.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
        const currentCount = dvds.length;
        spawnDVDs(currentCount);
    }
});

spawnDVDs(1);
setInterval(updatePositions, 10);
