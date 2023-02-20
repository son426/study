let products = [];
let cart = [];

fetch("stroe.js").then((data) => {
  // 원본 데이터 보관
  products = data.products;

  data.products.forEach((a, i) => {
    document.querySelector(".product-list").append(`
        <div class="col-md-3">
            <div class="item" draggable="true" data-id="${a.id}">
              <img src="${a.photo}">
              <h4>${a.title}</h4>
              <h4>${a.brand}</h4>
              <p>가격 : ${a.price}</p>
              <button class="add" data-id="${a.id}">담기</button>
            </div>
          </div>`);
  });
});
