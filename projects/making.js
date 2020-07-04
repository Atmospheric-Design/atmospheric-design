window.addEventListener("DOMContentLoaded", function () {
  let makingContainer = document.querySelector(".making");

  let collapseContainer = function () {
    makingContainer.style.maxHeight = "56px";
    makingContainer.querySelector(".chevron").style.transform = "rotate(0deg)";
    makingContainer.querySelector("h1").innerHTML =
      "Click here to see how it was made.";
    makingContainer.removeEventListener("click", collapseContainer);
    makingContainer.addEventListener("click", expandContainer);
  };

  let expandContainer = function () {
    makingContainer.style.height = "auto";
    makingContainer.style.maxHeight = "2000px";
    makingContainer.querySelector(".chevron").style.transform =
      "rotate(180deg)";
    makingContainer.querySelector("h1").innerHTML = "Click again to hide.";
    makingContainer.removeEventListener("click", expandContainer);
    makingContainer.addEventListener("click", collapseContainer);
  };

  if (makingContainer) {
    makingContainer.addEventListener("click", expandContainer);
  }
});
