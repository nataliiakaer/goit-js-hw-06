/* Напиши скрипт, який для кожного елемента масиву ingredients:

1. Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
2. Додасть назву інгредієнта як його текстовий вміст.
3. Додасть елементу клас item.
4. Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
 */

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const elements = [];

ingredients.forEach((option) => {
  const ingredientEL = document.createElement("li");
  ingredientEL.textContent = option;
  ingredientEL.classList.add("item");

  elements.push(ingredientEL);
});
console.log(elements);

ingredientsList.append(...elements);

/* for (let i = 0; i < ingredients.length; i += 1) {
  //console.log(ingredients[i]);
  const ingredientEL = document.createElement("li");
  ingredientEL.textContent = ingredients[i];
  ingredientEL.classList.add("item");

  elements.push(ingredientEL);
}

// console.log(elements);
ingredientsList.append(...elements); */
