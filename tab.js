const TABBUTTONCLASS = "tab-button";
const TABCONTENTCLASS = "tab-content";
const TABBUTTONKEY = "orange";
const SHOWKEY = "show2";

const tabButton = document.querySelectorAll(`.${TABBUTTONCLASS}`);
const tabContent = document.querySelectorAll(`.${TABCONTENTCLASS}`);

function 탭버튼떼기(idx) {
  tabButton[idx].classList.remove(TABBUTTONKEY);
}
function 탭컨텐츠떼기(idx) {
  tabContent[idx].classList.remove(SHOWKEY);
}

function 탭떼기() {
  for (let j = 0; j < 3; j++) {
    탭버튼떼기(j);
  }
  for (let j = 0; j < 3; j++) {
    탭컨텐츠떼기(j);
  }
}

function 탭열기(idx) {
  tabButton[idx].classList.add(TABBUTTONKEY);
  tabContent[idx].classList.add(SHOWKEY);
}

document.querySelector(".list").addEventListener("click", function (e) {
  탭떼기();
  탭열기(e.target.dataset.id);
});

//array object

var car2 = { name: "소나타", price: 50000 };

document.querySelector(
  ".p-3 span:first-child"
).innerText = `상품명:${car2.name}`;

document.querySelector(".p-3 span:last-child").innerText = `가격:${car2.price}`;
