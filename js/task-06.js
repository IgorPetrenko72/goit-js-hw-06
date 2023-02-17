const refs = {
    input: document.querySelector('input'),  
};
refs.input.addEventListener('blur', onEventBlur);
function onEventBlur(event) {
    if (event.currentTarget.value.length == refs.input.dataset.length) {
refs.input.classList.add('valid');
    } 
    else refs.input.classList.add('invalid');
};