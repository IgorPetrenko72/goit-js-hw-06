const refs = {
    text: document.querySelector('#text'), 
    input: document.querySelector('#font-size-control'),
};
refs.input.addEventListener('input', onChangeFontSize);
function onChangeFontSize(event) {
    const value = event.currentTarget.value;
    refs.text.style.fontSize = value+"px";
};