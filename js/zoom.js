let contentImgArr = document.querySelectorAll(".content-img");

function zoomIn(e) {
  e.target.parentElement.parentElement.style.transform = "scale(1.1)";
  e.target.parentElement.parentElement.style.border = "1px black solid";
  e.target.parentElement.parentElement.style.zIndex = 1;
}

function zoomOut(e) {
  e.target.parentElement.parentElement.style.transform = "scale(1)";
  e.target.parentElement.parentElement.style.border = "none";
  e.target.parentElement.parentElement.style.zIndex = "auto";
}

for (let i = 0; i < contentArr.length; i++) {
  contentImgArr[i].addEventListener("mouseover", zoomIn);
  contentImgArr[i].addEventListener("mouseout", zoomOut);
}
