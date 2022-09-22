const modalBtn = document.querySelectorAll(".modal-button");
const modal = document.querySelector(".modal");
const modalOut = document.querySelector("#modal-close");

const HIDE_KEY = "hide";

function modalPop() {
  modal.classList.remove(HIDE_KEY);
  console.log("!");
}

function modalClose() {
  modal.classList.add(HIDE_KEY);
  interval = setInterval(showNext, 100);
}

modalBtn.forEach((modalBtn) => {
  modalBtn.addEventListener("click", modalPop);
});
modalOut.addEventListener("click", modalClose);
