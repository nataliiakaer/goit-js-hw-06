const categoriesEl = document.querySelector("#categories");
//console.log(categoriesEl);
console.log(`Number of categories: ${categoriesEl.children.length}`);

const listCategory = document.querySelectorAll("#categories .item");
listCategory.forEach((el) => {
  console.log(`Category: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${el.lastElementChild.children.length}`);
});
