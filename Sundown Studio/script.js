const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

// var a = document.querySelector("#elem1")
// var image = a.getAttribute("cont-image")
// console.log(image)
var elemC = document.querySelector("#elem-container");
var fixed = document.querySelector("#fixed-image");
elemC.addEventListener("mouseenter", function () {
  fixed.style.display = "block";
});
elemC.addEventListener("mouseleave", function () {
  fixed.style.display = "none";
});

var elems = document.querySelectorAll(".elem");
elems.forEach(function (e) {
  e.addEventListener("mouseenter", function () {
    var image = e.getAttribute("cont-image");
    fixed.style.backgroundImage = `url(${image})`;
  });
});

// let element = document.getElementById('hoverElement');
// let displayText = document.getElementById('displayText');

// element.addEventListener('mouseenter', function() {
//     displayText.style.display = 'block';  // Show the text
// });
var anim = document.querySelector("#footer");
var words = document.querySelector("#toes");
anim.addEventListener("mouseenter", function(){
          // words.style.display = "block"
          words.style.display = "block";
});