const refs = {
    inputName: document.querySelector('#name-input'),
    inputText: document.querySelector('#name-output'),
}
    
refs.inputName.addEventListener('input', onInputChangeText);

function onInputChangeText(event) {
    refs.inputText.textContent = event.currentTarget.value;
    if (event.currentTarget.value === "") {
      refs.inputText.textContent = "Anonymous"  
    };
};