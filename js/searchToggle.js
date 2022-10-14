const searchForm = document.querySelector(".search-form");
const searchInput = searchForm.querySelector("input");
const searchBtn = searchForm.querySelector("button");
const searchToggle = document.querySelector(".search-toggle");

let searchArr = [];

function 검색값저장(e) {}

searchForm.addEventListener("submit", function (e) {
  // 입력값 로컬스토리지 저장
  e.preventDefault();
  let searchValue = searchInput.value;

  // 현재 검색기록도 저장 - 검색기록에 따라 영상검색할때 쓸라고,
  localStorage.setItem("searchNow", searchValue);

  // 페이지 리로드될때마다, localStorage가 처음부터 입력되게 됨. 이를 막기 위해서, 기존 로컬스토리지값 배열에 미리 저장
  if (localStorage.getItem(SEARCHKEY) !== null) {
    searchArr = JSON.parse(localStorage.getItem(SEARCHKEY));
  }
  searchArr.push(searchValue);
  localStorage.setItem(SEARCHKEY, JSON.stringify(searchArr));
  searchInput.value = "";

  // 제출되고 나면, 검색토글 숨겨
  searchToggle.classList.add(HIDDENKEY);

  // 링크이동
  window.location = "search.html";
});

searchInput.addEventListener("input", function (e) {
  // localStorage에서 search값 받아와.
  const searchList = JSON.parse(localStorage.getItem(SEARCHKEY));

  // 써치토글에 쭉 추가해
  searchToggle.innerHTML = "";
  for (let i = 0; i < searchList.length; i++) {
    let searchRow = `<li>${searchList[i]}</li>`;
    searchToggle.insertAdjacentHTML("beforeend", searchRow);
  }

  // 써치토글 보이게.
  searchToggle.classList.remove(HIDDENKEY);

  if (searchInput.value === "") {
    searchToggle.classList.add(HIDDENKEY);
  }

  // 써치토글 클릭하면 다시 검색되게
  for (let i = 0; i < searchToggle.querySelectorAll("li").length; i++) {
    searchToggle
      .querySelectorAll("li")
      [i].addEventListener("click", function () {
        window.location = "search.html";
      });
  }
});
