const navMain = document.querySelector(".main-nav");
const navToggle = document.querySelector(".main-nav__toggle");
const catalog = document.querySelector(".catalog");
const modal = document.querySelector(".modal--cart");
const overlay = document.querySelector(".overlay");
const addButton = document.querySelector(".product-size__add");
const bestSellerBtn = document.querySelector(".best-seller__order");
navMain.classList.remove("main-nav--nojs");
navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

if (catalog) {
  catalog.addEventListener("click", function(event) {
    event.preventDefault();
    var target = event.target;
    if (target.classList.contains("products__buy")) {
      modal.classList.add("modal-show");
      overlay.classList.add("overlay-show");
    }
  });
}

if (bestSellerBtn) {
  bestSellerBtn.addEventListener("click", function(event) {
    event.preventDefault();
    modal.classList.add("modal-show");
    overlay.classList.add("overlay-show");
  });
}

if (addButton) {
addButton.addEventListener("click", function(event) {
  modal.classList.remove("modal-show");
  overlay.classList.remove("overlay-show");
});
}

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (modal.classList.contains("modal-show")) {
      modal.classList.remove("modal-show");
      overlay.classList.remove("overlay-show");
    }
  }
});
