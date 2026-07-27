function goToProducts() {
     window.location.href = "#Products";
 }

const navbar = document.getElementById("navBar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  } 

});


window.addEventListener("DOMContentLoaded", () => {
  // Check session storage first
 

    const heroes = document.querySelectorAll(".hero");
    
    // Select elements by CLASS (.hero)
    setTimeout(() => {
      heroes.forEach(el => {
        el.classList.add("show");
      });
    }, 10);

  

});



const nav = document.getElementById('navcontainer');

const toggleBtn = document.getElementById('hamburger');

toggleBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
});

const background = document.getElementById('backgroundcover');


const cards = document.querySelectorAll('card'); 



