const inputRef = document.querySelector('input');
inputRef.addEventListener('blur', onEventBlur);

function onEventBlur(event) {
    if (event.currentTarget.value.length == inputRef.dataset.length) {
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid');
    }
    else {
        inputRef.classList.add('invalid');
    }
};