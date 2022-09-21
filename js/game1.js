const rock = document.querySelector(".rock");
const scissors = document.querySelector(".scissors");
const paper = document.querySelector(".paper");
const rockButton = document.querySelector(".rock-button");
const scissorsButton = document.querySelector(".scissors-button");
const paperButton = document.querySelector(".paper-button");
let mySelection = 0;

const 선택지 = [rock, scissors, paper];

function getRandom() {
  return Math.floor(Math.random() * 선택지.length);
}

function showNext() {
  const index = getRandom();

  선택지[0].classList.add("hide");
  선택지[1].classList.add("hide");
  선택지[2].classList.add("hide");
  선택지[index].classList.remove("hide");
  선택지[index].classList.add("computer");
}

function stopInterval() {
  clearInterval(interval);
}

var interval = setInterval(showNext, 500);

function stop(event) {
  console.log("stopped");
  console.log(`내가 낸 거는 ${event.path[0].innerText}`);
  console.log(
    `컴퓨터가 낸거는 ${document.querySelector(".computer").innerText}`
  );
  clearInterval(interval);

  if (event.path[0].innerText === "가위") {
    mySelection = "가위";
  } else if (event.path[0].innerText === "바위") {
    mySelection = "바위";
  } else {
    mySelection = "보";
  }
}

// if(document.querySelector(".computer").innerText === '✊'){
//   if
// }

rockButton.addEventListener("click", stop);
scissorsButton.addEventListener("click", stop);
paperButton.addEventListener("click", stop);
// var interval = setInterval(showNext, 1000);
// showNext();
// setInterval(showNext, 1000);
// stopButton.addEventListener("click", stopInterval);
