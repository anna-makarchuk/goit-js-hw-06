const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const fragment = document.createDocumentFragment();
ingredients.map(el => {
  const item = document.createElement('li');
  item.textContent = el;
  item.classList.add('item')
  fragment.appendChild(item);
});

  list.append(fragment);
console.log(list);