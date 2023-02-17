const counterValue = document.querySelector("#value");

const btn = document.querySelectorAll('#counter button');
const decrement = btn[0];
const increment = btn[1];
decrement.addEventListener("click", () => {
counterValue.textContent --;
});

increment.addEventListener("click", () => {
counterValue.textContent ++;
 });