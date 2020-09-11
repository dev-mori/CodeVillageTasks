const addButton = document.getElementById("add");
const removeButton = document.getElementById("remove");
const list = document.getElementById("list");
let i = 1;

addButton.addEventListener("click", (event) => {
  const newItem = document.createElement("li");
  newItem.textContent = `アイテム${i}`;
  list.appendChild(newItem);
  i++;
});

removeButton.addEventListener("click", (event) => {
  if (list.children.length !== 0) {
    list.removeChild(list.lastElementChild);
  }
});
