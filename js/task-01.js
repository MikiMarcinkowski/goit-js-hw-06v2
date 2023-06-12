const categories = document.querySelector("#categories");
const items = document.querySelectorAll(".item");

console.log(`Numbers of categories: ${items.length}`);

items.forEach((item) => {
  const categoryName = item.querySelector("h2");

  console.log(`Category: ${categoryName.textContent}`);
  // diferent way to get the same thing:
  // console.log(`Category: ${item.firstElementChild.textContent}`);

  const numberOfItems = item.querySelectorAll("li");
  console.log(`Elements: ${numberOfItems.length}`);
  // diferent way to get the same thing:
   // console.log(`Elements: ${item.lastElementChild.children.length}`);
});
