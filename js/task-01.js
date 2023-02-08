const listOfCategoriesEl = document.querySelector("#categories");
const listOfItemEl = listOfCategoriesEl.querySelectorAll(".item");
console.log(`Number of categories: ${listOfItemEl.length}`);
listOfItemEl.forEach((item) => {
    console.log(`Category: ${item.children[0].textContent}`);
    console.log(`Elements: ${item.children[1].children.length}`)
});