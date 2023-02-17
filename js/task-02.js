const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector("#ingredients");

const ingPotatoes = document.createElement("li");
ingPotatoes.textContent = "Potatoes";
ingPotatoes.classList.add("item");


const ingMushrooms = document.createElement("li");
ingMushrooms.textContent = "Mushrooms";
ingMushrooms.classList.add("item");

const ingGarlic = document.createElement("li");
ingGarlic.textContent = "Garlic";
ingGarlic.classList.add("item");

const ingTomatos = document.createElement("li");
ingTomatos.textContent = "Tomatos";
ingTomatos.classList.add("item");

const ingHerbs = document.createElement("li");
ingHerbs.textContent = "Herbs";
ingHerbs.classList.add("item");

const ingCondiments = document.createElement("li");
ingCondiments.textContent = "Condiments";
ingCondiments.classList.add("item");

listEl.append(ingPotatoes, ingMushrooms, ingGarlic, ingTomatos, ingHerbs, ingCondiments);  