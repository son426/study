const todoForm = document.querySelector(".todo");
const todoInput = document.querySelector(".todo input");
const todoButton = document.querySelector(".todo button");
const todoList = document.querySelector(".todo-list");

function onSubmit(event) {
  event.preventDefault();

  todoDisplay();
}

function todoDisplay() {
  const todo = document.createElement("li");
  const todoText = document.createElement("span");
  const todoDelete = document.createElement("button");
  const todoValue = todoInput.value;

  todoText.innerText = todoValue;
  todoDelete.innerText = "삭제";
  todo.appendChild(todoText);
  todo.appendChild(todoDelete);

  todoList.appendChild(todo);
  todoInput.value = null;
}

todoForm.addEventListener("submit", onSubmit);
