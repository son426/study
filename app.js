// 검색창에 뭔가 검색되면,
// 다 지우고
// 검색어가 들어간 놈들만 나타나게

const search = document.querySelector(".item-search");

let products = [];

// 맨처음에 json에서 받아와서, html에 박는 코드

function 전상품목록() {
  fetch("store.json")
    .then((response) => response.json())
    .then(function (data) {
      // 하나씩 다 박아
      for (let i = 0; i < data.products.length; i++) {
        var a = `<div class="item-box" draggable="true">
          <img src="img/${data.products[i].photo}" />
          <div class="item-info">
            <h5>${data.products[i].title}</h5>
            <span>${data.products[i].brand}</span>
            <span>가격 : ${data.products[i].price}</span>
          </div>
          <div class="item-pick">
            <button>담기</button>
          </div>
        </div>`;
        document
          .querySelector(".item-container")
          .insertAdjacentHTML("beforeend", a);
      }

      // 담기버튼 누르면, 장바구니에 담기게

      let cnt = 0;
      let sum = 0;
      let price = 0;
      for (let i = 0; i < document.querySelectorAll(".item-pick").length; i++) {
        document
          .querySelectorAll(".item-pick button")
          [i].addEventListener("click", function () {
            var a = `<div class="item-box buy-item" draggable="true">
          <img src="img/${data.products[i].photo}" />
          <div class="item-info">
            <h5>${data.products[i].title}</h5>
            <span>${data.products[i].brand}</span>
            <span>가격 : ${data.products[i].price}</span>
          </div>
          <div class="item-pick item-minus">
            <button>빼기</button>
          </div>
        </div>`;
            container.insertAdjacentHTML("beforeend", a);
            document.querySelector(".drag-box span").innerText = "";

            // 담긴거 가격 합산
            // 최종가격에 박아넣기
            price = price + data.products[i].price;
            document.querySelector(
              ".buy-info span"
            ).innerText = `합계 : ${price}`;
          });
      }

      //// 검색하면, 해당항목 보여주기
      // 검색어 들어간 놈들만 나타나게
      // 검색어가 뭔지 뽑아.
      // 검색어와 같은 놈을 만들어.
      search.addEventListener("input", function () {
        document.querySelector(".item-container").innerHTML = "";

        for (let i = 0; i < data.products.length; i++) {
          if (data.products[i].title.includes(search.value)) {
            var a = `<div class="item-box" draggable="true">
            <img src="img/${data.products[i].photo}" />
            <div class="item-info">
              <h5>${data.products[i].title}</h5>
              <span>${data.products[i].brand}</span>
              <span>가격 : ${data.products[i].price}</span>
            </div>
            <div class="item-pick">
              <button>담기</button>
            </div>
          </div>`;
            document
              .querySelector(".item-container")
              .insertAdjacentHTML("beforeend", a);
          }
        }
      });

      // 빼기 버튼 누르면 빠지게
      // 빼기 버튼에 넣고싶은데, 안넣어져. 먼저 생성이 안돼서 그런가. queryselect 하면 빈값으로 뜸
      // 야매로, 원래 있던 drag box에 이벤트를 달자.
      document
        .querySelector(".drag-box")
        .addEventListener("click", function (e) {
          //빼기 버튼 누른 경우에만 하려고, 제한.
          if (e.target.localName === "button") {
            // 누른거 찾기
            // 현재 담긴 배열에서, 클릭된 거 빼고 배열 다시 생성.
            // 다 지우고
            // 새 배열로 다시 넣어.
            let arr = Array.from(e.target.offsetParent.children);
            let minusBox = e.target.parentElement.parentElement;

            for (let i = 0; i < arr.length; i++) {
              if (arr[i] === minusBox) {
                arr.splice(i, 1);
                i--;
              }
            }
            container.innerHTML = "";

            for (let i = 0; i < arr.length; i++) {
              container.appendChild(arr[i]);
            }

            // 최종가격에서 뺀거만큼 가격빼주기
            let minusPrice = parseInt(
              minusBox.children[1].children[2].innerText.substr(5)
            );
            let totalPrice = parseInt(
              document.querySelector(".buy-info span").innerText.split(" : ")[1]
            );
            totalPrice -= minusPrice;
            document.querySelector(
              ".buy-info span"
            ).innerText = `합계 : ${totalPrice}`;
          }
        });
    });
}

전상품목록();

// drag & drop event

const item = document.querySelector(".item-container");
const container = document.querySelector(".drag-box");

let dragItem;
let cnt = 0;
let sum = 0;

item.addEventListener("dragstart", (e) => {
  dragItem = e.target;
});

container.addEventListener("dragover", (e) => {
  e.preventDefault();
});

container.addEventListener("drop", (e) => {
  e.preventDefault();
  // console.log("드래그 요소가 드롭");
  const index = parseInt(dragItem.querySelector("img").src[28]) - 1;

  fetch("store.json")
    .then((response) => response.json())
    .then(function (data) {
      var a = `<div class="item-box buy-item" draggable="true">
          <img src="img/${data.products[index].photo}" />
          <div class="item-info">
            <h5>${data.products[index].title}</h5>
            <span>${data.products[index].brand}</span>
            <span>가격 : ${data.products[index].price}</span>
          </div>
          <div class="item-pick item-minus">
            <button>빼기</button>
          </div>
        </div>`;
      container.insertAdjacentHTML("beforeend", a);

      // 화면 다 보이게 스크롤
      window.scrollTo(0, 500);

      // 최종가격에 합산
      let price = parseInt(
        document.querySelector(".buy-info span").innerText.split(" : ")[1]
      );
      price += data.products[index].price;
      document.querySelector(".buy-info span").innerText = `합계 : ${price}`;
    });
  document.querySelector(".drag-box span").innerText = "";
});

// 구매버튼 누르면 뜨는 화면
document
  .querySelector(".item-buy button")
  .addEventListener("click", function () {
    document.querySelector(".buy-modal").classList.toggle("modal-pop");
    document.querySelector(".buy-modal").classList.toggle("hide");
    document.querySelector(".modal-info span:first-child").innerText =
      document.querySelector(".buy-info span").innerText;
  });

// 구매자 정보 local storage 저장

document.querySelector(".buyer-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.querySelector(".buyer-name").value;
  const number = document.querySelector(".buyer-number").value;
  localStorage.setItem("name", name);
  localStorage.setItem("number", number);

  // 제출후에는, 입력칸 비워주기
  document.querySelector(".buyer-name").value = "";
  document.querySelector(".buyer-number").value = "";

  // 모달창 없애주기
  document.querySelector(".buy-modal").classList.toggle("hide");

  // 탭바에 이름 새기기
  document.querySelector("#tap-name").innerText = `${localStorage.getItem(
    "name"
  )}님 반갑습니다`;
});

// 탭바에 이름 새기기
document.querySelector("#tap-name").innerText = `${localStorage.getItem(
  "name"
)}님 반갑습니다`;

if (localStorage.getItem("name") === null) {
  document.querySelector("#tap-name").innerText = "반갑습니다.";
}

// 모달창 닫을때
const closeModal = document.querySelectorAll(".buy-modal button")[1];

closeModal.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".buy-modal").classList.toggle("hide");
});
