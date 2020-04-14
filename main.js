const topLeftImage = document.querySelector(".top-left-image");
const topRightImage = document.querySelector(".top-right-image");
const bottomLeftImage = document.querySelector(".bottom-left-image");
const bottomRightImage = document.querySelector(".bottom-right-image");

window.addEventListener("load", function() {

    function addHoverEffect(element, value) {
        element.addEventListener("mouseover", function() {
            let overlay = document.querySelectorAll(".overlay")[value];
            overlay.style.opacity = "0.9";
            console.log("Hover on"+value);
            
            
        })
    
        element.addEventListener("mouseout", function() {
            let overlay = document.querySelectorAll(".overlay")[value];
            overlay.style.opacity = "0";
            console.log("Hover off"+value);

            
        })};

    addHoverEffect(topLeftImage, 0);
    addHoverEffect(topRightImage, 1);
    addHoverEffect(bottomLeftImage, 2);
    addHoverEffect(bottomRightImage, 3);

})