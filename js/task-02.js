const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const allIngredients = document.querySelector('#ingredients');

const liArray = [];

ingredients.forEach((ingredient) => {
  const liItem = document.createElement('li');
  liItem.textContent = `${ingredient}`;
  liItem.classList.add('item');
  liArray.push(liItem);  
});

allIngredients.append(...liArray);