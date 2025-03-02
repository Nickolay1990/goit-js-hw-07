'use strict';

const form = document.querySelector('.login-form');

form.addEventListener('submit', formHandler);

function formHandler(event) {
    event.preventDefault();
    if (form.elements.password.value.trim() && form.elements.email.value.trim()) {
        const data = {
            [form.elements.email.name]: form.elements.email.value.trim(),
            [form.elements.password.name]: form.elements.password.value.trim(),
        };
        console.log(data);
        form.reset();
        return;
    }
    alert('All form fields must be filled in');
}
