const closeButton = document.querySelector(".close-button");
const shopNew = document.querySelector(".shop-new");

window.addEventListener("load", function () {
  function shopNewCloseButton() {
    closeButton.addEventListener("click", function () {
      shopNew.style.visibility = "hidden";
    });
  }
  shopNewCloseButton();
});
