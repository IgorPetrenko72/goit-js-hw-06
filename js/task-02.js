const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Herbs',
  'Condiments',
];
const listEl = document.querySelector("#ingredients");

/*  
  - З методом insertAdjacentHTML()
*/

// const makeIngredientsMarckup = (ingredients) => {
//   return `
//   <li class="item">
//   ${ingredients}
//   </li>`;   
// };

// const ingredientsCollection = ingredients
//   .map(makeIngredientsMarckup)
//   .join('');

// listEl.insertAdjacentHTML('beforeend', ingredientsCollection);  
 
/*  
  - З методом append()
*/  
// 
const ingPotatoes = document.createElement("li");
ingPotatoes.textContent = "Potatoes";
ingPotatoes.classList.add("item");


const ingMushrooms = document.createElement("li");
ingMushrooms.textContent = "Mushrooms";
ingMushrooms.classList.add("item");

const ingGarlic = document.createElement("li");
ingGarlic.textContent = "Garlic";
ingGarlic.classList.add("item");

const ingTomatoes = document.createElement("li");
ingTomatoes.textContent = "Tomatoes";
ingTomatoes.classList.add("item");

const ingHerbs = document.createElement("li");
ingHerbs.textContent = "Herbs";
ingHerbs.classList.add("item");

const ingCondiments = document.createElement("li");
ingCondiments.textContent = "Condiments";
ingCondiments.classList.add("item");

listEl.append(ingPotatoes, ingMushrooms, ingGarlic, ingTomatoes, ingHerbs, ingCondiments);  