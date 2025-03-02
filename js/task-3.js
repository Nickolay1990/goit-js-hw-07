'use strict';

const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
input.addEventListener('input', inputHandler);

function inputHandler() {
    output.textContent = input.value.trim() ? input.value.trim() : 'Anonymous';
}
