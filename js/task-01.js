const listOfCategoriesEl = document.querySelector("#categories");
const listOfItemEl = listOfCategoriesEl.querySelectorAll(".item");
console.log(`Number of categories: ${listOfItemEl.length}`);
listOfItemEl.forEach((item) => {
    console.log(`Category: ${item.querySelector('h2').textContent}`);
    console.log(`Elements: ${item.querySelectorAll('li').length}`)
});