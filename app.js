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

// 타이머
// 1초마다 숫자 줄어드는 알람문구

const alertTimer = document.querySelector(".alert-danger");
let time = 0;

var interval = setInterval(function () {
  time++;
  alertTimer.innerText = `${5 - time}초 이내 구매시 사은품 증정!`;
}, 1000);

setTimeout(function () {
  alertTimer.classList.add("hide");
  clearInterval(interval);
}, 5000);

//캐러셀
