// 검색창에 뭔가 검색되면,
// 다 지우고
// 검색어가 들어간 놈들만 나타나게

const search = document.querySelector(".item-search");

// 맨처음에 json에서 받아와서, html에 박는 코드

function 전상품목록() {
  fetch("store.json")
    .then((response) => response.json())
    .then(function (data) {
      for (let i = 0; i < data.products.length; i++) {
        var a = `<div class="item-box">
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
    });
}

function 상품목록(index) {
  fetch("store.json")
    .then((response) => response.json())
    .then(function (data) {
      var a = `<div class="item-box">
          <img src="img/${data.products[index].photo}" />
          <div class="item-info">
            <h5>${data.products[index].title}</h5>
            <span>${data.products[index].brand}</span>
            <span>가격 : ${data.products[index].price}</span>
          </div>
          <div class="item-pick">
            <button>담기</button>
          </div>
        </div>`;
      document
        .querySelector(".item-container")
        .insertAdjacentHTML("beforeend", a);
    });
}

전상품목록();

// 검색하면, 해당항목 보여주기

search.addEventListener("input", function () {
  // 다지우고
  document.querySelector(".item-container").innerHTML = "";

  // 검색어 들어간 놈들만 나타나게
  // 검색어가 뭔지 뽑아.
  // 검색어와 같은 놈을 만들어.
  // 만드는 코드

  fetch("store.json")
    .then((response) => response.json())
    .then(function (data) {
      for (let i = 0; i < data.products.length; i++) {
        if (data.products[i].title.includes(search.value)) {
          var a = `<div class="item-box">
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
});
