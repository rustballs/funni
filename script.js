const dvd = document.getElementById("dvd");
const jumpscare = document.getElementById("jumpscare");
const bounceSound = document.getElementById("bounceSound");
const jumpscareSound = document.getElementById("jumpscareSound");
let x = 0;
let y = 0;
let dx = 2;
let dy = 2;

function updatePosition() {
    x += dx;
    y += dy;

    if (x <= 0 || x >= window.innerWidth - dvd.clientWidth) {
        dx = -dx;
        playBounceSound();
        checkJumpScare();
    }
    if (y <= 0 || y >= window.innerHeight - dvd.clientHeight) {
        dy = -dy;
        playBounceSound();
        checkJumpScare();
    }

    dvd.style.left = x + "px";
    dvd.style.top = y + "px";
}

function playBounceSound() {
    bounceSound.play();
}

function checkJumpScare() {
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

setInterval(updatePosition, 10);
