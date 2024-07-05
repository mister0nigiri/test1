document.querySelector(".openbtn1").addEventListener("click", function() {
  this.classList.toggle("active");
  document.getElementById("g-nav").classList.toggle("panelactive");
});

document.querySelectorAll("#g-nav a").forEach(function(element) {
  element.addEventListener("click", function() {
    document.querySelector(".openbtn1").classList.remove("active");
    document.getElementById("g-nav").classList.remove("panelactive");
  });
});
