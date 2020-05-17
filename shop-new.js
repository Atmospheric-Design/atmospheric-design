window.addEventListener("DOMContentLoaded", function () {
  let shopLink = "#";
  let shopIMG = "/assets/images/instrument-table.jpg";
  let shopTitle = "Funky jazzy duotone table with atmospheric top and red legs";
  let shopPrice = "€ 329";
  let shopNew = document.querySelector(".shop-new");
  shopNew.querySelector("img").src = shopIMG;
  shopNew.querySelector("h3").innerText = shopTitle;
  shopNew.querySelector(".price").innerHTML = shopPrice;
  shopNew.querySelector(".price").href = shopLink;
  shopNew.querySelector(".details").href = shopLink;
});

// Fix the image link
