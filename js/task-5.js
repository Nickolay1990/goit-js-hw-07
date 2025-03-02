function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const changeButton = document.querySelector('.change-color');
changeButton.addEventListener('click', changeColorHandler);

function changeColorHandler() {
    const body = document.querySelector('body');
    const colorInfo = document.querySelector('.color');
    body.style.backgroundColor = getRandomHexColor();
    colorInfo.textContent = body.style.backgroundColor;
}
