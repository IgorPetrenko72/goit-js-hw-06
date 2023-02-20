const refs = {
    categories: document.querySelectorAll(".item"),
    categoryName: document.querySelectorAll("h2"),
    allCategory: document.querySelector("#categories"),
    nameOfCategories: [],
    quantityOfElements: [],
};
const elementsRef = refs.allCategory.querySelectorAll("ul");

refs.categoryName.forEach(category => refs.nameOfCategories.push(category.textContent));
elementsRef.forEach(element => refs.quantityOfElements.push(element.querySelectorAll("li").length));

console.log("Number of categories:", refs.categories.length);
console.log('');
console.log("Category:", refs.nameOfCategories[0]);
console.log("Elements", refs.quantityOfElements[0]);
console.log('');
console.log("Category:", refs.nameOfCategories[1]);
console.log("Elements", refs.quantityOfElements[1]);
console.log('');
console.log("Category:", refs.nameOfCategories[2]);
console.log("Elements", refs.quantityOfElements[2]);