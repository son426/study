const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");
const savedUsername = localStorage.getItem("username");

const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";

function onSubmit() {
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
}

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onSubmit);
} else {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `HELLO ${savedUsername}`;
}
