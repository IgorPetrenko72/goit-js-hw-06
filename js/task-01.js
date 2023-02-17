const categoriesEl = document.querySelectorAll(".item");
console.log("Number of categories:", categoriesEl.length);

const categoryName = document.querySelectorAll("h2");
const allCategory = document.querySelector("#categories");
// console.log(allCategory);
const elementsEl = allCategory.querySelectorAll("ul");
// console.log(sss);
// const ddd = sss[0].querySelectorAll("li");
// console.log(ddd);


 categoryName.forEach(category => console.log("Category:", category.textContent));
 elementsEl.forEach(element => console.log("Elements", element.querySelectorAll("li").length));


// const itemsAllCategory = allCategory.childNodes;

// const itemsInCategoryAnimals = allCategory.firstElementChild;
// const animalsEl = itemsInCategoryAnimals.querySelectorAll("li");
// const itemsInCategoryProducts = allCategory.childNodes[3];
// const productsEl = itemsInCategoryProducts.querySelectorAll("li");
// const itemsInCategoryTechnologies = allCategory.lastElementChild;
// const technologiesEl = itemsInCategoryTechnologies.querySelectorAll("li");

// console.log("Category:", categoryName[0].textContent);
// console.log("Elements", ddd.length);
// console.log("Category:", categoryName[1].textContent);
// console.log("Elements", productsEl.length);
// console.log("Category:",categoryName[2].textContent);
// console.log("Elements", technologiesEl.length);
 
