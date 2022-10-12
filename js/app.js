const searchForm = document.querySelector(".search-form");
const searchInput = searchForm.querySelector("input");
const searchBtn = searchForm.querySelector("button");
const searchToggle = document.querySelector(".search-toggle");
const hamBar = document.querySelector(".ham-bar");
const sideBar = document.querySelector(".side-bar");
const sideBarStretch = document.querySelector(".side-bar.stretch");

const HIDDENKEY = "hidden";
const SEARCHKEY = "search";

let cnt = 0;
let clickIndex = -1;

hamBar.addEventListener("click", function (e) {
  // sideBar.classList.toggle(HIDDENKEY);
  sideBarStretch.classList.toggle(HIDDENKEY);

  if (cnt % 2 === 0) {
    document.querySelector("main").style.transform = "translateX(150px)";
  } else {
    document.querySelector("main").style.transform = "translateX(0px)";
  }
  cnt++;
});
