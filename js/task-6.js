function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const inputQuantity = document.querySelector('#controls input[type=number]');
const boxContainer = document.querySelector('#boxes');

createButton.addEventListener('click', createButtonHandler);
destroyButton.addEventListener('click', destroyBoxes);

function createButtonHandler() {
    destroyBoxes();
    const quantity = +inputQuantity.value;
    inputQuantity.value = '';
    if (quantity >= 1 && quantity <= 100) {
        createBoxes(quantity);
    }
}

function destroyBoxes() {
    boxContainer.innerHTML = '';
}

function createBoxes(amount) {
    const divs = [];
    let size = 30;
    while (divs.length < amount) {
        const div = document.createElement('div');
        div.style.width = `${size}px`;
        div.style.height = `${size}px`;
        div.style.backgroundColor = getRandomHexColor();
        divs.push(div);
        size += 10;
    }
    boxContainer.append(...divs);
}
