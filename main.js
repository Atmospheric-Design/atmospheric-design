const topLeftImage = document.querySelector(".top-left-image");
const interiorLink = document.querySelector(".interior-link");

const topRightImage = document.querySelector(".top-right-image");
const furnitureLink = document.querySelector(".furniture-link");

const bottomLeftImage = document.querySelector(".bottom-left-image");
const exhibitionLink = document.querySelector(".exhibition-link");

const bottomRightImage = document.querySelector(".bottom-right-image");
const experimentLink = document.querySelector(".experiment-link");

window.addEventListener("load", function () {
  console.log("js loaded");

  function addHoverEffect(link) {
    console.log("added hover effect on " + link);

    link.addEventListener("mouseover", function () {
      this.querySelector(".overlay").style.opacity = "0.9";
      this.querySelector(".overlay-small").style.opacity = "0.3";
    });

    link.addEventListener("mouseout", function () {
      this.querySelector(".overlay").style.opacity = "0";
      this.querySelector(".overlay-small").style.opacity = "0";
    });
  }

  addHoverEffect(interiorLink);
  addHoverEffect(furnitureLink);
  addHoverEffect(exhibitionLink);
  addHoverEffect(experimentLink);
});
