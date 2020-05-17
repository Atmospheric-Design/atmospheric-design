const projects = document.querySelectorAll(".project");
const closeButton = document.querySelector(".close-button");
const shopNew = document.querySelector(".shop-new");

window.addEventListener("load", function () {
  function addHoverEffect(project) {
    project.addEventListener("mouseover", function () {
      this.querySelector("img").style.outline = "solid black 2px";
      this.querySelector("img").style.outlineOffset = "-2px";
      this.style.outline = "solid black 2px";
      this.style.outlineOffset = "-2px";
      this.querySelector(".arrow").style.visibility = "visible";
    });

    project.addEventListener("mouseout", function () {
      this.querySelector("img").style.outline = "none";
      this.querySelector("img").style.outlineOffset = "0";
      this.style.outline = "none";
      this.style.outlineOffset = "0";
      this.querySelector(".arrow").style.visibility = "hidden";
    });
  }

  addHoverEffect(projects[0]);
  addHoverEffect(projects[1]);
  addHoverEffect(projects[2]);
  addHoverEffect(projects[3]);

  function shopNewCloseButton() {
    closeButton.addEventListener("click", function () {
      shopNew.style.visibility = "hidden";
    });
  }
  shopNewCloseButton();
});
