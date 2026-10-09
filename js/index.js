function goToProducts() {
     window.location.href = "#Products";
 }

// navbar animation

const navbar = document.getElementById("navBar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  } 

});





const nav = document.getElementById('navcontainer');

const toggleBtn = document.getElementById('hamburger');

toggleBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
});

const background = document.getElementById('backgroundcover');


const cards = document.querySelectorAll('card'); 



// toggle hover

const item = document.querySelector('.item');
const image = item.querySelector('.unhide');

item.addEventListener('hover', () => {
  // Toggle a class that changes display from none to block
  image.classList.toggle('visible');
});


const radius = [23,24,12,45,16,22];

const calculate = function(radius){
  const output = [];
  for (let i = 0;
    i < radius.length;
    i++
  ){
    output.push(radius * 2)
  }
  return output;

};

