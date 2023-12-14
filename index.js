let image = document.getElementById('image');

let b = 1
function pressForward() {
    if (b === 5) {
        b = 1;
    } else {
        b += 1;
    }
    let result = `./assets/img/${b}.png`;
    image.src = result;
    return b;
}

function pressBack() {
    if (b === 1) {
        b = 5;
    } else {
        b -= 1;
    }
    let result = `./assets/img/${b}.png`;
    image.src = result;
    return b;
};