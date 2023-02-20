// list modal 띄우기

const list = document.querySelector(".list-group");
const modal = document.querySelector(".black-bg");
const buttonDropdown = document.querySelector(".dropdown");
const buttonModal = document.querySelector(".nav-item:nth-child(2)");
const buttonModalClose = document.querySelector("#close");

buttonDropdown.addEventListener("click", function () {
  list.classList.toggle("show");
});

buttonModal.addEventListener("click", function () {
  modal.classList.toggle("show-modal");
});

buttonModalClose.addEventListener("click", function () {
  modal.classList.remove("show-modal");
});

// 아이디 비번 입력받기 / 공백검사 / 비번 자릿수 검사
// form submit과 button click 두 가지
// form submit의 경우, html에서 action= 달려있는 거 기본 event
// 이메일 형식 정규식체크

const form = document.querySelector("form");
const buttonSubmit = document.querySelector(".btn-primary");
const inputId = document.querySelector("#input-id");
const inputPw = document.querySelector("#input-pw");

form.addEventListener("submit", function (e) {
  if (inputId.value === "") {
    e.preventDefault();
    alert("입력해라");
  }

  if (/\S+@\S+\.\S+/.test(inputId.value) == false) {
    e.preventDefault();
    alert("이메일 형식 ㄱㄱ");
  }

  if (inputPw.value.length < 6) {
    e.preventDefault();
    alert("비번 더 쳐라");

    inputPw.addEventListener("input", function () {
      let num = 6 - inputPw.value.length;
      if (num > 0) {
        document.querySelector(
          "#caution"
        ).innerText = `비번 ${num}자리 더 쳐라`;
      } else {
        document.querySelector("#caution").innerText = `비번 양호`;
      }
    });
  }

  if (/[A-Z]/.test(inputPw.value)) {
    console.log("비번에 영어대문자 있다!!!");
  }
});

// 다크모드, 라이트모드 버튼

let cnt = 0;

const btnDark = document.querySelector(".bg-dark");

btnDark.addEventListener("click", function () {
  cnt++;
  if (cnt % 2 == 0) {
    btnDark.innerText = "Dark 🔄";
  } else {
    btnDark.innerText = "Light 🔄";
  }
});

let count = 0;

document.querySelector("#send-answer").addEventListener("click", function () {
  if (document.querySelector("#answer").value === "1335") {
    alert("성공");
  } else {
    alert("땡");
    document.querySelector("#answer").value = "";
    count++;
    if (count >= 3) {
      alert("멍청이");
    }
  }
});

document
  .querySelector(".quiz-hint-button")
  .addEventListener("click", function () {
    if (document.querySelector(".quiz-hint").style.display === "none") {
      document.querySelector(".quiz-hint").style.display = "block";
    } else {
      document.querySelector(".quiz-hint").style.display = "none";
    }
  });

// 타이머
// 1초마다 숫자 줄어드는 알람문구

const alertTimer = document.querySelector(".alert-danger");
let time = 0;

// var interval = setInterval(function () {
//   time++;
//   alertTimer.innerText = `${5 - time}초 이내 구매시 사은품 증정!`;
// }, 1000);

// setTimeout(function () {
//   alertTimer.classList.add("hide");
//   clearInterval(interval);
// }, 5000);

function 마감(setTime) {
  alertTimer.innerText = `${setTime - time}초 이내 구매시 사은품 증정!`;
  var interval = setInterval(function () {
    time++;
    alertTimer.innerText = `${setTime - time}초 이내 구매시 사은품 증정!`;
  }, 1000);

  setTimeout(function () {
    alertTimer.classList.add("hide");
    clearInterval(interval);
  }, setTime * 1000);
}

마감(7);

//캐러셀

let indexNum = 1;

document.querySelector(".pic-next").addEventListener("click", function () {
  document.querySelector(".pic-container").style.transform =
    "translateX(-" + indexNum + "00vw)";
  indexNum++;
});

document.querySelector(".pic-prev").addEventListener("click", function () {
  document.querySelector(".pic-container").style.transform =
    "translateX(-" + (indexNum - 2) + "00vw)";
  indexNum--;
});

// document.querySelector(".pic-prev").addEventListener("click", function () {
//   if (indexNum === 3) {
//     document.querySelector(
//       ".pic-container"
//     ).style.transform = `translateX(-100vw)`;
//     indexNum--;
//   } else if (indexNum === 2) {
//     document.querySelector(
//       ".pic-container"
//     ).style.transform = `translateX(0vw)`;
//     indexNum--;
//   }
// });

let num = 0;

document.querySelectorAll(".pic-num")[0].addEventListener("click", function () {
  document.querySelector(".pic-container").style.transform = `translateX(0)`;
  indexNum = 1;
});

document.querySelectorAll(".pic-num")[1].addEventListener("click", function () {
  document.querySelector(
    ".pic-container"
  ).style.transform = `translateX(-100vw)`;
  indexNum = 2;
});

document.querySelectorAll(".pic-num")[2].addEventListener("click", function () {
  document.querySelector(
    ".pic-container"
  ).style.transform = `translateX(-200vw)`;
  indexNum = 3;
});

// 페이지 스크롤
// div 스크롤
window.addEventListener("scroll", function () {
  document.querySelector(".scroll-check").classList.remove("disabled");
  if (window.scrollY == 0) {
    document.querySelector(".scroll-check").classList.add("disabled");
  }
});

document.querySelector(".lorem").addEventListener("scroll", function () {
  let 스크롤양 = document.querySelector(".lorem").scrollTop;
  let 실제높이 = document.querySelector(".lorem").scrollHeight;
  let 높이 = document.querySelector(".lorem").clientHeight;
  console.log(스크롤양);
  console.dir(document.querySelector(".lorem"));

  if (스크롤양 + 높이 > 실제높이 - 10) {
    alert("읽기 완료 !!!");
  }
});

window.addEventListener("scroll", function () {
  let 페이지스크롤 = document.querySelector("html").scrollTop;
  let 페이지높이 = document.querySelector("html").scrollHeight;
  let 지금높이 = document.querySelector("html").clientHeight;
  let 스크롤퍼센트 = (페이지스크롤 / (페이지높이 - 지금높이)).toFixed(2) * 100;

  document.querySelector(
    ".scroll-check"
  ).innerText = `스크롤양 : ${스크롤퍼센트}%`;
});

// 이벤트 버블링

document.querySelector(".black-bg").addEventListener("click", function (e) {
  if (e.target == document.querySelector(".black-bg")) {
    document.querySelector(".black-bg").classList.remove("show-modal");
  }
  console.log(e.currentTarget);
});
