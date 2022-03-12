let userInfo = document.querySelector("#user_info");
let userDom = document.querySelector("#user");
let links = document.querySelector("#links");
let logOut = document.querySelector("#logout");
if (localStorage.getItem("username")) {
  links.remove();
  userInfo.style.display = "flex";
  userDom.innerHTML = localStorage.getItem("username");
}

logOut.addEventListener("click", function () {
  localStorage.clear();
  setTimeout(function () {
    window.location = "register.html";
  }, 2000);
});

// *************product-item****************
let productsDom = document.querySelector(".products");
let cartProductMenu = document.querySelector(".cart-product ");
let cartProductDivDom = document.querySelector(".cart-product div");
let badgeDom = document.querySelector(".badge");
let shoppingCartIcon = document.querySelector(".shoppingCart");
let products = [
  {
    id: 1,
    title: "HeadPhone",
    size: "large",
    imgUrl: "images/headphone-3085681_1920.jpg",
  },

  {
    id: 2,
    title: "Laptop",
    size: "medium",
    imgUrl: "images/laptop-5673901_1920.jpg",
  },

  {
    id: 3,
    title: "Watch",
    size: "small",
    imgUrl: "images/time-3091031_1920.jpg",
  },

  {
    id: 4,
    title: "eyeglasses",
    size: "large",
    imgUrl: "images/eyeglasses-1846595_1920.jpg",
  },
];

function drawProductsUI() {
  let ProductsUI = products.map((item) => {
    return `
      <div class="product-item">
        <img
          src="${item.imgUrl}"
          alt=""
          class="product-item-img"
        />
        <div class="product-item-desc">
          <h2>${item.title}</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          <span>${item.size}</span>
        </div>
        <div class="product-item-actions">
          <button class="add-to-cart" onclick="addToCart(${item.id})">Add To Cart</button>
          <i class="favorite far fa-heart "></i>
        </div>
      </div>`;
  });
  productsDom.innerHTML = ProductsUI;
}

drawProductsUI();

let addedItem=[];

function addToCart(id) {

  if (localStorage.getItem("username")) {
    let choosenitem = products.find((item) => item.id === id);
    cartProductDivDom.innerHTML += `<p>${choosenitem.title}</p>`;
    addedItem=[...addedItem,choosenitem];
    localStorage.setItem("products In Cart",JSON.stringify(addedItem))
    let cartproductItem = document.querySelectorAll(".cart-product div p");
    badgeDom.style.display = "block";
    badgeDom.innerHTML = cartproductItem.length;  } else {
    window.location = "login.html";
  }


}

shoppingCartIcon.addEventListener("click", openCartMune);

function checkeduser() {
 
}

function openCartMune() {
  if (cartProductDivDom.innerHTML != "") {
      if (cartProductMenu.style.display =="block") {
        cartProductMenu.style.display = "none";
      } else {
        cartProductMenu.style.display = "block";
      }
    
  }
}
