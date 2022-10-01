const content1 = [];

const width = document.querySelector(".carousel img").clientWidth;

document.querySelector(".carousel-next").addEventListener("click", function () {
  document.querySelector(
    ".carousel"
  ).style.transform = `translateX(-${width}px)`;
});
