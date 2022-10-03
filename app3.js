let products = [];
let cart = [];

fetch("store.json")
  .then((response) => response.json())
  .then((data) => {
    products = data.products;

    // json 내용으로 메인페이지 그리기

    data.products.forEach((a, i) => {
      document.querySelector(".product-list").insertAdjacentHTML(
        "beforeend",
        `
        <div class="col-md-3">
          <div class="item" draggable="true" data-id="${a.id}">
            <img src="img/${a.photo}">
            <h4>${a.title}</h4>
            <h4>${a.brand}</h4>
            <p>가격 : ${a.price}</p>
            <button class="add" data-id="${a.id}">담기</button>
          </div>
        </div>`
      );
    });

    // 담기버튼
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
        document.querySelector(".basket").innerHTML = "";
        cart.forEach((a, i) => {
          document.querySelector(".basket").insertAdjacentHTML(
            "beforeend",
            `
                <div class="col-md-3">
                  <div class="item" draggable="true" data-id="${a.id}">
                    <img src="img/${a.photo}">
                    <h4>${a.title}</h4>
                    <h4>${a.brand}</h4>
                    <p>가격 : ${a.price}</p>
                    <input type="number" value = "${a.count}" class="item-count">
                    <br/><button class="minus" data-id="${a.id}">빼기</button>
                  </div>
                </div>`
          );
        });

        // 빼기
        // 싹 지우고, cart array로 쭉 그려.
        document.querySelectorAll(".minus").forEach((a, i) => {
          a.addEventListener("click", function (e) {
            // cart에서 갯수 뺴주고
            e.preventDefault();
            let productId = e.target.dataset.id;

            let 몇번째 = cart.findIndex((a) => {
              return a.id == productId;
            });

            cart[몇번째].count--;

            // 다시 그려줘
            // document.querySelector(".basket").innerHTML = "";
            // document.querySelector(".basket").innerHTML = "";
            cart.forEach(function (a, i) {
              console.log(`${a.title} : ${a.count}`);
              document.querySelector(".basket").insertAdjacentHTML(
                "beforeend",
                `
                    <div class="col-md-3">
                      <div class="item" draggable="true" data-id="${a.id}">
                        <img src="img/${a.photo}">
                        <h4>${a.title}</h4>
                        <h4>${a.brand}</h4>
                        <p>가격 : ${a.price}</p>
                        <input type="number" value = "${a.count}" class="item-count">
                        <br/><button class="minus" data-id="${a.id}">빼기</button>
                      </div>
                    </div>`
              );
            });
          });
        });
      });
    });
  });
