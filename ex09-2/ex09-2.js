const addButton = document.getElementById("add");
const removeButton = document.getElementById("remove");
const list = document.getElementById("list");
let i = 1;

addButton.addEventListener("click", (event) => {
  const newItem = document.createElement("li");
  const newImg = document.createElement("img");
  const newSpan = document.createElement("span");
  newImg.setAttribute("src", "http://placehold.it/64x64");
  newImg.setAttribute("alt", `アイテム${i}`);
  newSpan.textContent = `アイテム${i}`;
  newItem.appendChild(newImg);
  newItem.appendChild(newSpan);
  list.appendChild(newItem);
  i++;
});

removeButton.addEventListener("click", (event) => {
  if (list.children.length !== 0) {
    list.removeChild(list.lastElementChild);
  }
});
