const searchForm = document.querySelector(".search-form");
const searchInput = searchForm.querySelector("input");
const searchBtn = searchForm.querySelector("button");
const contentRow = document.querySelector(".content-row");
const searchToggle = document.querySelector(".search-toggle");

const HIDDENKEY = "hidden";
const SEARCHKEY = "search";

let searchArr = [];

function 검색기록OnOff() {
  searchToggle.classList.remove(HIDDENKEY);
  if (searchInput.value === "") {
    searchToggle.classList.add(HIDDENKEY);
  }
}

function 검색기록Save() {
  let searchValue = searchInput.value;

  if (searchValue != "") {
    if (localStorage.getItem(SEARCHKEY) === null) {
      searchArr.push(searchValue);
      localStorage.setItem(SEARCHKEY, JSON.stringify(searchArr));
      searchInput.value = "";
    } else {
      let searchArr = JSON.parse(localStorage.getItem(SEARCHKEY));
      searchArr.push(searchValue);
      localStorage.setItem(SEARCHKEY, JSON.stringify(searchArr));
      searchInput.value = "";
    }
  }
}

function 검색기록ToggleAdd() {
  searchToggle.innerHTML = "";
  for (let i = 0; i < JSON.parse(localStorage.getItem(SEARCHKEY)).length; i++) {
    var newElement = `
  <li>${JSON.parse(localStorage.getItem(SEARCHKEY))[i]}</li>
  `;
    searchToggle.insertAdjacentHTML("beforeend", newElement);
  }
}

if (localStorage.getItem(SEARCHKEY) != null) 검색기록ToggleAdd();

searchInput.addEventListener("input", function () {
  검색기록OnOff();
});

searchForm.addEventListener("submit", function (e) {
  e.preventDefault();
  검색기록Save();
  검색기록ToggleAdd();
  검색기록OnOff();
  window.location = "search.html";
});

contentRow.addEventListener("click", function (e) {
  window.location = "video.html";
});
