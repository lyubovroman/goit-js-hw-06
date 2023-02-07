const listOfCategoriesEl = document.querySelector("#categories");
const listOfItemEl = listOfCategoriesEl.querySelectorAll(".item");
console.log(`Number of categories: ${listOfItemEl.length}`);
listOfItemEl.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`)
});