const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const allIngredients = document.querySelector('#ingredients');

ingredients.forEach((ingredient) => {
  const liItem = document.createElement('li');
  liItem.textContent = `${ingredient}`;
  liItem.classList.add('item');
  
  allIngredients.append(liItem)
});