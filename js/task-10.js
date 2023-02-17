function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  controls: document.querySelector('#controls'),
  input: document.querySelector('input'),
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
  box: document.querySelector('#boxes'),
};

refs.input.addEventListener('input', onValueOfCreateBoxes);
function onValueOfCreateBoxes(amount) {
  const value = amount.currentTarget.value;
  console.log(value);
}
refs.createBtn.addEventListener('click', onCreateBoxes);
function onCreateBoxes(value){  
const createdBox = document.createElement("div");
  createdBox.style.width = "30px";
  createdBox.style.height = "30px";
  createdBox.style.backgroundColor = getRandomHexColor();
  refs.box.append(createdBox);

  refs.destroyBtn.addEventListener('click', destroyBoxes)
  function destroyBoxes() {
  createdBox.remove();
  };
};