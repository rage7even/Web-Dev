const input = document.getElementById("item-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("shopping-list");
const itemCntText = document.getElementById("item-count");

function updateShoppingList() {
    const items = document.getElementsByTagName("li").length
    itemCntText.textContent = `Total items: ${items}`;
}

function addItem() {
    const itemText = input.value.trim()

    if(itemText === "" || itemText === " ")  {
        alert("Please enter an item");
        return
    }

    const li = document.createElement("li");
    li.textContent = itemText;

    const DeleteBtn = document.createElement("button");
    DeleteBtn.textContent = "Delete";
    DeleteBtn.classList.add("delete-btn")

    DeleteBtn.addEventListener('click', function() {
        li.remove()

        updateShoppingList()
    })

    li.appendChild(DeleteBtn);
    list.appendChild(li);


}