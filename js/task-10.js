// На опрацюванні!!!
// 
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
refs.createBtn.addEventListener('click', onCreateBoxes);
const boxesRef = [{
  width: "30px",
  height: "30px",
},
];
function onValueOfCreateBoxes(amount) {
  const value = amount.currentTarget.value;
  console.log(value);
  for (let i = 1; i < value; i += 1) {
    const element = {
      width: elemen[i].width.value + "10px",
      height: elemen[i].height.value + "10px",
    };
    boxesRef.push(element);
  }
}

function onCreateBoxes() {
  const createdBoxes = boxesRef.map(({ width, height }) => {
    const createdBox = document.createElement("div");
    createdBox.style.width = width;
    createdBox.style.height = height;
    createdBox.style.margin = '5px';
    createdBox.style.backgroundColor = getRandomHexColor();
    return createdBox;
  });
  refs.box.append(...createdBoxes);
  
};

refs.destroyBtn.addEventListener('click', destroyBoxes);
function destroyBoxes() {
  refs.box.replaceChildren();
  };   