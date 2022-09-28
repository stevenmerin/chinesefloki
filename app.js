// Navbar
const navBarColor = document.querySelector("nav");

window.onscroll = function() {
  let top = window.scrollY;
  // console.log(top);

  if(top >= 75) {
    navBarColor.classList.add("active");
  } else {
    navBarColor.classList.remove("active");
  }
}

//  Fade in animations, Intersection Observer

const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

const appearOptions= {
  threshold: 0,
  rootMargin: "0px 0px -150px 0px"
};


const appearOnScroll = new IntersectionObserver
(function(
  entries, 
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  })
},  
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
})

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
})