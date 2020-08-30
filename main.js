window.addEventListener("DOMContentLoaded", function () {
  let shopLink = "/";
  let shopIMG = "/assets/images/instrument-table.jpg";
  let shopTitle = "Instrument table";
  let shopPrice = "€ 329";
  let shopNew = document.querySelector(".shop-new");
  shopNew.querySelector("img").src = shopIMG;
  shopNew.querySelector(".image-link").href = shopLink;
  shopNew.querySelector("h3").innerText = shopTitle;
  shopNew.querySelector(".price").innerHTML = shopPrice;
  shopNew.querySelector(".price").href = shopLink;
  shopNew.querySelector(".details").href = shopLink;
});

const closeButton = document.querySelector(".close-button");
const shopNew = document.querySelector(".shop-new");

window.addEventListener("load", function () {
  function check_cookie_name(name) {
    let match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));

    if (match !== null) {
      shopNew.style.visibility = "hidden";
    }
  }

  function shopNewCloseButton() {
    closeButton.addEventListener("click", function () {
      shopNew.style.visibility = "hidden";
      document.cookie =
        "adPreference = hidden; path=/; expires = 30 Apr 2021 12:00:00 UTC;";
    });
  }
  shopNewCloseButton();
  check_cookie_name("adPreference");
});
