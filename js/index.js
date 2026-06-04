function goToProducts() {
     window.location.href = "#Products";
 }

const navbar = document.getElementById("navBar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".heroText1").forEach(el => {
    el.classList.add("show");
  });
});


