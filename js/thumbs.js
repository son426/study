function 따봉업다운() {
  let upNumArr = document.querySelectorAll(".up-num");
  let downNumArr = document.querySelectorAll(".down-num");

  let upBtnArr = document.querySelectorAll(".comment_row .fa-thumbs-up");
  let downBtnArr = document.querySelectorAll(".comment_row .fa-thumbs-down");

  for (let i = 0; i < upNumArr.length; i++) {
    upBtnArr[i].addEventListener("click", function () {
      if (upBtnArr[i].className === "far fa-thumbs-up") {
        upNumArr[i].innerHTML = parseInt(upNumArr[i].innerHTML) + 1;
        upBtnArr[i].className = "fas fa-thumbs-up";
      } else {
        upNumArr[i].innerHTML = parseInt(upNumArr[i].innerHTML) - 1;
        upBtnArr[i].className = "far fa-thumbs-up";
      }
    });

    downBtnArr[i].addEventListener("click", function () {
      if (downBtnArr[i].className === "far fa-thumbs-down") {
        downNumArr[i].innerHTML = parseInt(downNumArr[i].innerHTML) + 1;
        downBtnArr[i].className = "fas fa-thumbs-down";
      } else {
        downNumArr[i].innerHTML = parseInt(downNumArr[i].innerHTML) - 1;
        downBtnArr[i].className = "far fa-thumbs-down";
      }
    });
  }
}

// 버튼에 클릭이벤트
//   if 안눌려져있는 상태
//     숫자 + 1
//     색칠해줘
//   else if 안눌러져있는 상태
//     숫자 - 1
//     색깔빼줘
