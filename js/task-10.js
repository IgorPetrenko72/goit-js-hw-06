function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  input: document.querySelector('input'),
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
  box: document.querySelector('#boxes'),
};
refs.input.addEventListener("input", inputChange);
refs.createBtn.addEventListener('click', onCreateBoxes);

function inputChange(e) {
  refs.input.setAttribute("count", Number(e.currentTarget.value));
};

function onCreateBoxes() {
  let valueEl = Number(refs.input.getAttribute("count"));
  let boxSize = 30;  
      for (let i = 0; i < valueEl; i += 1) {
      boxSize += 10;
      const createdBox = document.createElement("div");  
      createdBox.style.width = boxSize + "px";
      createdBox.style.height = boxSize + "px";
      createdBox.style.margin = '5px';
      createdBox.style.backgroundColor = getRandomHexColor();
      refs.box.append(createdBox);
    }
};

refs.destroyBtn.addEventListener('click', destroyBoxes);
function destroyBoxes() {
  refs.box.replaceChildren();
  };   