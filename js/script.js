const btnAdd = document.querySelector(".addbutton");
btnAdd.addEventListener("click", addItem);
function addItem() {
  const itemName = document.querySelector(".input-item");
  const item = document.createElement("li");
  item.innerText = itemName.value;
  const itemContainer = document.querySelector(".buy-it");
  itemContainer.appendChild(item);
  itemName.value = "";

  let listButton = document.createElement("button");
  listButton.innerHTML = "Delete";
  item.appendChild(listButton);
  listButton.addEventListener("click", deleteItem);
  function deleteItem() {
    itemContainer.removeChild(item, listButton);
  }
}

