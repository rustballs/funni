const dvd = document.getElementById("dvd");
const jumpscare = document.getElementById("jumpscare");
let x = 0;
let y = 0;
let dx = 2;
let dy = 2;

function updatePosition() {
    x += dx;
    y += dy;

    if (x <= 0 || x >= container.clientWidth - dvd.clientWidth) {
        dx = -dx;
        checkJumpScare();
    }
    if (y <= 0 || y >= container.clientHeight - dvd.clientHeight) {
        dy = -dy;
        checkJumpScare();
    }

    dvd.style.left = x + "px";
    dvd.style.top = y + "px";
}

function checkJumpScare() {
    if ((x <= 0 || x >= container.clientWidth - dvd.clientWidth) &&
        (y <= 0 || y >= container.clientHeight - dvd.clientHeight)) {
        dvd.style.display = "none";
        jumpscare.style.display = "block";
        setTimeout(() => {
            jumpscare.style.display = "none";
            dvd.style.display = "block";
        }, 1000);
    }
}

setInterval(updatePosition, 10);
