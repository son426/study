const userForm = document.querySelector("#username");
const userInput = document.querySelector("#username input");
const userButton = document.querySelector("#username button");
const greetingMent = document.querySelector("#greeting");
const savedUsername = localStorage.getItem("username");

const USERNAME_KEY = "username";
const HIDECLASSNAME = "hide";

function 함수(event) {
  event.preventDefault();
  const username = userInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  greetingPaint(username);
  userForm.classList.add(HIDECLASSNAME);
}

function greetingPaint(username) {
  const ment = document.createElement("h1");
  ment.innerText = `hi ${username}`;
  greetingMent.appendChild(ment);
  greetingMent.classList.remove(HIDECLASSNAME);
}

if (savedUsername === null) {
  userForm.classList.remove(HIDECLASSNAME);
  userForm.addEventListener("submit", 함수);
} else {
  userForm.classList.add(HIDECLASSNAME);
  const username = savedUsername;
  greetingPaint(username);
}
