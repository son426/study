const UP_CLASSNAME = "fa-thumbs-up";
const DOWN_CLASSNAME = "fa-thumbs-down";
const SELECTED_CLASSNAME = "fas";
const NOTSELECTED_CLASSNAME = "far";

function 따봉업다운(part) {
  let upNumArr = document.querySelectorAll(`.${part} .up-num`);
  let downNumArr = document.querySelectorAll(`.${part} .down-num`);

  let upBtnArr = document.querySelectorAll(`.${part} .${UP_CLASSNAME}`);
  let downBtnArr = document.querySelectorAll(`.${part} .${DOWN_CLASSNAME}`);

  for (let i = 0; i < upNumArr.length; i++) {
    // up버튼 줌
    upBtnArr[i].addEventListener("mouseenter", zoomIn);
    upBtnArr[i].addEventListener("mouseleave", zoomOut);

    // up버튼 숫자반영 & 색칠
    upBtnArr[i].addEventListener("click", function () {
      if (upBtnArr[i].classList.contains(NOTSELECTED_CLASSNAME)) {
        upNumArr[i].innerHTML = parseInt(upNumArr[i].innerHTML) + 1;
        upBtnArr[i].className = `${SELECTED_CLASSNAME} ${UP_CLASSNAME}`;
      } else {
        upNumArr[i].innerHTML = parseInt(upNumArr[i].innerHTML) - 1;
        upBtnArr[i].className = `${NOTSELECTED_CLASSNAME} ${UP_CLASSNAME}`;
      }
    });

    // down버튼 줌
    downBtnArr[i].addEventListener("mouseenter", zoomIn);
    downBtnArr[i].addEventListener("mouseleave", zoomOut);

    // down버튼 숫자 & 색칠
    downBtnArr[i].addEventListener("click", function () {
      if (downBtnArr[i].classList.contains(NOTSELECTED_CLASSNAME)) {
        downNumArr[i].innerHTML = parseInt(downNumArr[i].innerHTML) + 1;
        downBtnArr[i].className = `${SELECTED_CLASSNAME} ${DOWN_CLASSNAME}`;
      } else {
        downNumArr[i].innerHTML = parseInt(downNumArr[i].innerHTML) - 1;
        downBtnArr[i].className = `${NOTSELECTED_CLASSNAME} ${DOWN_CLASSNAME}`;
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
