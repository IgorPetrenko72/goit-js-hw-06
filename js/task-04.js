const valueEl = document.querySelector("#value");
let counterValue = 0;

const btn = document.querySelectorAll('#counter button');
const decrement = btn[0];
const increment = btn[1];
decrement.addEventListener("click", () => {
    counterValue -=1;
    valueEl.textContent = counterValue;
});

increment.addEventListener("click", () => {
    counterValue +=1;
    valueEl.textContent = counterValue;
});
 