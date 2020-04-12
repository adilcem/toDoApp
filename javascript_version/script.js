const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let counter = 0
let itemCount = 0
let uncheckedCount = 0

function newTodo() {
  // Increase counter for creating Id
  counter++

  // Get a new todo text from prompt
  const newToDoText = prompt("Please enter your new To-Do!", "Going for a walk at 7 am");

  if (newToDoText !== null) {
    // Create a new li element
    const newListItem = document.createElement("li")
    newListItem.id = "li" + counter
    newListItem.className = classNames.TODO_ITEM

    // Create a new checkbox
    const checkboxToDo = document.createElement("input");
    checkboxToDo.type = "checkbox"
    checkboxToDo.id = "cb" + counter
    checkboxToDo.className = classNames.TODO_CHECKBOX
    checkboxToDo.setAttribute("onclick", "checkToDo(this.id)")

    // Create delete button element
    const deleteToDo = document.createElement('button')
    deleteToDo.innerHTML = 'Delete'
    deleteToDo.className = 'btn btn-danger'
    deleteToDo.value = counter
    deleteToDo.setAttribute("onclick", "deleteToDo(this.value)")

    // Row structure
    const row = document.createElement('div')
    row.className = 'row'

    // Columns 
    const leftColumn = document.createElement('div')
    leftColumn.className = 'left'
    const middleColumn = document.createElement('div')
    middleColumn.className = 'middle'
    const rightColumn = document.createElement('div')
    rightColumn.className = 'right'

    // Append paragraph, checkbox and delete button to columns
    leftColumn.appendChild(checkboxToDo)
    middleColumn.appendChild(document.createTextNode(newToDoText))
    rightColumn.appendChild(deleteToDo)
    // Append columns to row
    row.appendChild(leftColumn)
    row.appendChild(middleColumn)
    row.appendChild(rightColumn)
    // Append row to list item
    newListItem.appendChild(row)
    // Add new list item to list
    list.appendChild(newListItem);

    // Increase the total item count and unchecked item count by 1
    updateItemCount(++itemCount)
    updateUncheckedCount(++uncheckedCount)
  }
}

function checkToDo(toDoId) {
  // If checked decrease uncheckedCountSpan by 1, otherwise increase by 1
  document.getElementById(toDoId).checked
    ? updateUncheckedCount(--uncheckedCount)
    : updateUncheckedCount(++uncheckedCount)
}

function deleteToDo(val) {
  // If deleted item is not checked, also decrease uncheckedCountSpan by 1
  !document.getElementById("cb" + val).checked && updateUncheckedCount(--uncheckedCount)
  updateItemCount(--itemCount)
  document.getElementById("li" + val).remove()
}

function updateItemCount(text) {
  itemCountSpan.textContent = text
}

function updateUncheckedCount(text) {
  uncheckedCountSpan.textContent = text
}