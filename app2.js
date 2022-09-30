let products = [];
const searchBox = document.querySelector(".item-search");
const itemContainer = document.querySelector(".item-container");
const container = document.querySelector(".drag-box");

function 최종가격더하기(e) {
  let totalPrice = parseInt(
    document.querySelector(".buy-info span").innerText.split(" : ")[1]
  );
  let price = e.currentTarget.parentElement.parentElement
    .querySelector(".item-info-price")
    .innerText.split(" : ")[1];
  totalPrice = parseInt(totalPrice);
  price = parseInt(price);
  totalPrice += price;

  document.querySelector(".buy-info span").innerText = `합계 : ${totalPrice}`;
}

function 최종가격빼기(e) {
  let price = e.target.parentElement.parentElement
    .querySelector(".item-info-price")
    .innerText.split(" : ")[1];
  price = parseInt(price);

  let totalPrice = parseInt(
    document.querySelector(".buy-info span").innerText.split(" : ")[1]
  );
  totalPrice = parseInt(totalPrice);

  totalPrice -= price;

  document.querySelector(".buy-info span").innerText = `합계 : ${totalPrice}`;
}

fetch("store.json")
  .then((response) => response.json())
  .then(function (data) {
    products = data.products;

    // 처음에 한번 그려줘. 안그러면 input치기전에 아무것도 안뜸
    for (let i = 0; i < products.length; i++) {
      var a = `<div class="item-box item-box_search" draggable="true">
            <img src="img/${products[i].photo}" />
            <div class="item-info">
              <h5>${products[i].title}</h5>
              <span>${products[i].brand}</span>
              <span  class="item-info-price">가격 : ${products[i].price}</span>
            </div>
            <div class="item-pick">
              <button>담기</button>
            </div>
          </div>`;
      document
        .querySelector(".item-container")
        .insertAdjacentHTML("beforeend", a);
    }

    // 처음 빼고는 그리는거 다 여기서 해결.
    searchBox.addEventListener("input", function () {
      document.querySelector(".item-container").innerHTML = "";
      for (let i = 0; i < products.length; i++) {
        if (products[i].title.includes(searchBox.value)) {
          var a = `<div class="item-box item-box_search" draggable="true">
            <img src="img/${products[i].photo}" />
            <div class="item-info">
              <h5>${products[i].title}</h5>
              <span>${products[i].brand}</span>
              <span class="item-info-price">가격 : ${products[i].price}</span>
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

      // 검색한거 담기
      let pickButton = document.querySelectorAll(".item-pick button");
      for (let i = 0; i < pickButton.length; i++) {
        pickButton[i].addEventListener("click", function (e) {
          container.querySelector("span").innerText = "";
          var a = e.target.parentElement.parentElement;
          container.insertAdjacentHTML("beforeend", a.outerHTML);

          // 버튼 텍스트 빼기로 바꿔주기.
          for (
            let j = 0;
            j < container.querySelectorAll("button").length;
            j++
          ) {
            container.querySelectorAll("button")[j].innerText = "빼기";
          }

          // 가격합산
          최종가격더하기(e);
        });
      }
    });

    // 담기버튼 이벤트
    let pickButton = document.querySelectorAll(".item-pick button");
    for (let i = 0; i < pickButton.length; i++) {
      pickButton[i].addEventListener("click", function (e) {
        container.querySelector("span").innerText = "";
        var a = e.target.parentElement.parentElement;
        container.insertAdjacentHTML("beforeend", a.outerHTML);

        // 버튼 텍스트 빼기로 바꿔주기.
        for (let j = 0; j < container.querySelectorAll("button").length; j++) {
          container.querySelectorAll("button")[j].innerText = "빼기";
        }

        // 가격합산
        최종가격더하기(e);
      });
    }

    // 드래그 이벤트

    const item = itemContainer.querySelectorAll(".item-box");
    let dragBox;

    itemContainer.addEventListener("dragstart", (e) => {
      dragBox = e.target;
    });

    container.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    container.addEventListener("drop", (e) => {
      e.preventDefault();
      container.insertAdjacentHTML("beforeend", dragBox.outerHTML);
      for (let j = 0; j < container.querySelectorAll("button").length; j++) {
        container.querySelectorAll("button")[j].innerText = "빼기";
      }
      container.querySelector("span").innerText = "";

      //가격 합산
      // event가 달라서, 기존 function 쓸수가 없다.
      let totalPrice = parseInt(
        document.querySelector(".buy-info span").innerText.split(" : ")[1]
      );
      let price = dragBox
        .querySelector(".item-info-price")
        .innerText.split(" : ")[1];
      totalPrice = parseInt(totalPrice);
      price = parseInt(price);
      totalPrice += price;

      document.querySelector(
        ".buy-info span"
      ).innerText = `합계 : ${totalPrice}`;
    });

    // 빼기버튼 이벤트
    container.addEventListener("click", function (e) {
      if (e.target.innerText === "빼기") {
        // 장바구니에서 제거
        container.removeChild(e.target.parentElement.parentElement);

        // 최종가격에 반영
        최종가격빼기(e);
      }
    });
  });

// 구매하기 버튼 이벤트

// 모달 열기
// 모달 안 최종금액 써주기
document
  .querySelector(".item-buy button")
  .addEventListener("click", function () {
    document.querySelector(".buy-modal").classList.toggle("hide");
    document.querySelector(".modal-info span:first-child").innerText = document
      .querySelector(".buy-info span")
      .innerText.split(" : ")[1];
  });

// 모달 닫기
document.querySelector(".modal-close").addEventListener("click", function () {
  document.querySelector(".buy-modal").classList.add("hide");
});

// 이름, 연락처 정보받기
// 받아서 local에 저장
// 저장한거 tap bar에 띄워주기
document.querySelector(".buyer-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.querySelector(".buyer-name");
  const number = document.querySelector(".buyer-number");
  localStorage.setItem("name", name.value);
  localStorage.setItem("number", number.value);

  // 입력칸 비워주기
  name.value = "";
  number.value = "";

  // tap bar에 이름 띄워주기
  document.querySelector("#tap-name").innerText = `${localStorage.getItem(
    "name"
  )}님 반갑습니다!`;
});

// tap bar 미리 한번 띄워주기.
// 한번 하고 다시 들어왔을때 바로 보이게
if (localStorage.getItem("name") != null) {
  document.querySelector("#tap-name").innerText = `${localStorage.getItem(
    "name"
  )}님 반갑습니다!`;
}
