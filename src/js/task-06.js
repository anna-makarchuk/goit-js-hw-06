const validationInput = document.getElementById("validation-input");
const validationInputLength = validationInput.dataset.length;


validationInput.addEventListener('blur', blurHandler);

function blurHandler() {
    if (validationInput.value.length === Number(validationInputLength)) {
        validationInput.classList.add('valid');
        validationInput.classList.remove('invalid');
        return;
    } 
        validationInput.classList.remove('valid');
        validationInput.classList.add('invalid');
};