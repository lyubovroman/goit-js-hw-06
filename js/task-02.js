const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listOfIngredientsEl = document.querySelector('#ingredients');

const ingredientsItemsMarkup = ingredients.map(item => {
  const ingredientsItemEl = document.createElement('li');
  ingredientsItemEl.classList.add('item');
  ingredientsItemEl.textContent = item;
  
  return ingredientsItemEl
})

listOfIngredientsEl.append(...ingredientsItemsMarkup);