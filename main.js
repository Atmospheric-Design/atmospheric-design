window.addEventListener("load", function () {
  function check_cookie_name(name) {
    let match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));

    if (match !== null) {
      shopNew.style.visibility = "hidden";
    } else {
      const shopNew = document.createElement("DIV");
      shopNew.classList.add("shop-new");
      shopNew.innerHTML = `<a target="_blank" rel="noopener noreferrer" href="#" class="close-button">X</a>
        <h2>New on the shop</h2>
        <a target="_blank" rel="noopener noreferrer" class="image-link" href="#"><img alt="" /></a>
        <h3>#</h3>
        <a href="/" target="_blank" rel="noopener noreferrer" class="price"></a>
        <a href="/" target="_blank" rel="noopener noreferrer" class="details">View product details</a>`;
      let aside = document.querySelector("aside");
      aside.appendChild(shopNew);
      let shopLink =
        "https://www.etsy.com/listing/860344897/minimal-macrame-shelf";
      let shopIMG =
        "/assets/images/furniture/minimal-macrame-shelf/minimal-macrame-shelf-full-view.jpg";
      let shopTitle = "Minimal macrame shelf";
      let shopPrice = "€ 99";
      shopNew.querySelector("img").src = shopIMG;
      shopNew.querySelector(".image-link").href = shopLink;
      shopNew.querySelector("h3").innerText = shopTitle;
      shopNew.querySelector(".price").innerHTML = shopPrice;
      shopNew.querySelector(".price").href = shopLink;
      shopNew.querySelector(".details").href = shopLink;
      const closeButton = document.querySelector(".close-button");
      function shopNewCloseButton() {
        closeButton.addEventListener("click", function () {
          shopNew.style.visibility = "hidden";
          document.cookie =
            "adPreference = hidden; path=/; expires = 30 Apr 2021 12:00:00 UTC;";
        });
      }
      shopNewCloseButton();
    }
  }

  check_cookie_name("adPreference");
});
