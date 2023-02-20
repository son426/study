const searchBox = document.querySelector("#search");
const productList = document.querySelector(".product-list");
const basket = document.querySelector(".basket");
const modal1 = document.querySelector(".modal1");
const modal2 = document.querySelector(".modal2");

let products = [];
let cart = [];

//////// 함수 정의

// productList에 그리기
function productList에그리기(cart) {
  productList.insertAdjacentHTML(
    "beforeend",
    `
    <div class="col-md-3">
      <div class="item" draggable="true" data-id="${cart.id}">
        <img src="img/${cart.photo}">
        <h4>${cart.title}</h4>
        <h4>${cart.brand}</h4>
        <p>가격 : ${cart.price}</p>
        <button class="add" data-id="${cart.id}">담기</button>
      </div>
    </div>`
  );
}

// basket에 그리기
function basket에그리기(cart) {
  basket.insertAdjacentHTML(
    "beforeend",
    `
    <div class="col-md-3">
      <div class="item" draggable="true" data-id="${cart.id}">
        <img src="img/${cart.photo}">
        <h4>${cart.title}</h4>
        <h4>${cart.brand}</h4>
        <p>가격 : ${cart.price}</p>
        <input type="number" value = "${cart.count}" class="item-count">
        <br/><button class="minus" data-id="${cart.id}">빼기</button>
      </div>
    </div>`
  );
}

//가격계산 함수
function 가격계산() {
  let finalPrice = 0;

  // let price = 가격;
  for (let i = 0; i < document.querySelectorAll(".item-count").length; i++) {
    let count = parseInt(document.querySelectorAll(".item-count")[i].value);
    let price = parseInt(
      document
        .querySelectorAll(".item-count")
        [i].previousElementSibling.innerText.split(" : ")[1]
    );
    finalPrice += price * count;
  }
  document.querySelector(
    ".final-price"
  ).innerText = `총 ${finalPrice}원입니다.`;
}

//add버튼 함수
function add함수() {
  document.querySelectorAll(".add").forEach((a, i) => {
    a.addEventListener("click", function (e) {
      let productId = e.target.dataset.id;

      let 몇번째 = cart.findIndex((a) => {
        return a.id == productId;
      });

      if (몇번째 == -1) {
        let 현재상품 = products.find((a) => {
          return a.id == productId;
        });
        현재상품.count = 1;
        cart.push(현재상품);
      } else {
        cart[몇번째].count++;
      }

      // 그려주기
      // 싹 지우고, cart array로 쭉 그려.
      basket.innerHTML = "";
      cart.forEach((a, i) => {
        if (a.count > 0) {
          basket에그리기(a);
        }
      });

      가격계산();
    });
  });
}

// drag drop 함수
function dragDrop함수() {
  document.querySelectorAll(".item").forEach((a, i) => {
    a.addEventListener("dragstart", function (e) {
      e.dataTransfer.setData("id", e.target.dataset.id);
    });
  });

  basket.addEventListener("dragover", function (e) {
    e.preventDefault();
  });

  basket.addEventListener("drop", function (e) {
    let productId = e.dataTransfer.getData("id");
    // document.querySelectorAll(".add")[productId].click();

    let 몇번째 = cart.findIndex((a) => {
      return a.id == productId;
    });

    if (몇번째 == -1) {
      let 현재상품 = products.find((a) => {
        return a.id == productId;
      });
      현재상품.count = 1;
      cart.push(현재상품);
    } else {
      cart[몇번째].count++;
    }

    basket.innerHTML = "";
    cart.forEach((a, i) => {
      if (a.count > 0) {
        basket에그리기(a);
      }
    });

    가격계산();
  }); // 드래그 드롭 이벤트 끝
}

// 빼기함수
function minus함수() {
  basket.addEventListener("click", function (e) {
    if (e.target.innerText === "빼기") {
      e.preventDefault();
      let productId = e.target.dataset.id;
      let 몇번째 = cart.findIndex((a) => {
        return a.id == productId;
      });
      cart[몇번째].count--;

      // 다시 그려줘
      basket.innerHTML = "";
      cart.forEach((a, i) => {
        if (a.count != 0) {
          basket에그리기(a);
        }
      });

      가격계산();
    }
  });
}

//////// 데이터 받아와서 시작

fetch("store.json")
  .then((response) => response.json())
  .then((data) => {
    products = data.products;

    // json 내용으로 메인페이지 그리기

    data.products.forEach((a, i) => {
      productList에그리기(a);
    });

    // 검색기능
    searchBox.addEventListener("input", function () {
      let 검색어 = searchBox.value;
      let newProducts = products.filter((a) => {
        return a.title.includes(검색어) || a.brand.includes(검색어);
      });

      // 그려주기
      productList.innerHTML = "";
      newProducts.forEach((a, i) => {
        productList에그리기(a);
      });

      //검색어 노란색 칠
      document.querySelectorAll(".product-list h4").forEach(function (a, i) {
        let title = a.innerHTML;
        title = title.replace(
          검색어,
          `<span style="background : yellow">${검색어}</span>`
        );
        a.innerHTML = title;
      });
      add함수();
    }); // 검색 끝

    // 담기버튼
    add함수();

    // 빼기
    // minus 버튼이 바로 없으므로, basket으로 addeventlistner
    minus함수();

    // 드래그 이벤트
    dragDrop함수();
  }); // fetch.then 끝

// 주문 누르면 모달창
document.querySelector(".buy").addEventListener("click", function () {
  modal1.style.display = "block";
});

// 모달1에서 정보저장
// 모달 2 띄우고 영수증 띄우기.
document.querySelector(".modal1-form").addEventListener("submit", function (e) {
  e.preventDefault();

  let 성함 = document.querySelector("#name").value;
  let 연락처 = document.querySelector("#phone").value;

  // 영수증
  modal1.style.display = "none";
  modal2.style.display = "block";

  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");
  ctx.font = "16px dotum";
  ctx.fillText("구매자 : " + 성함, 20, 30);
  ctx.fillText("연락처 : " + 연락처, 20, 60);
  ctx.fillText(
    "최종가격 : " + document.querySelector(".final-price").innerHTML,
    20,
    90
  );
});

//닫기 버튼
document.querySelectorAll(".close").forEach((element) => {
  element.addEventListener("click", function () {
    modal1.style.display = "none";
    modal2.style.display = "none";
  });
});
