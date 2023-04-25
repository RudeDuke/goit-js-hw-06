const categoriesList = document.getElementById("categories");
const categoriesItems = categoriesList.children;

console.log(`Number of categories: ${categoriesItems.length}`);

Array.from(categoriesItems).forEach(item => {
  const categoryName = item.firstElementChild.textContent;
  const categoryElements = item.lastElementChild.children.length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements}`);
});
