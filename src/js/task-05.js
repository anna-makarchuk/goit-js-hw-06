const inputName = document.querySelector('#name-input');
const span= document.querySelector('#name-output');

inputName.addEventListener('input', inputTextHandler);
let anonymous = 'Anonymous';

function inputTextHandler() {
    span.textContent = inputName.value || anonymous;
 }






