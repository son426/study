const searchForm = document.querySelector(".search-form");
const searchInput = searchForm.querySelector("input");
const searchBtn = searchForm.querySelector("button");
const searchToggle = document.querySelector(".search-toggle");

let searchArr = [];
let contentArr = document.querySelectorAll(".content");

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
