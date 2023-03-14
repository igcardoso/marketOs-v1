const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
  header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('open');
};

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('open');
};

const sr = ScrollReveal ({
  distance: '300px',
  duration: 2500,
  delay: 400,
  reset: true
})

sr.reveal('.home-text', {
  delay: 200, origin: 'top'
});
sr.reveal('.home-img', {
  delay: 300, origin: 'top'
});
sr.reveal('.contact', {
  delay: 300, origin: 'top'
});

let option__1 = document.querySelector('.navbar .option__1');
let option__2 = document.querySelector('.navbar .option__2');
let option__3 = document.querySelector('.navbar .option__3');
let option__4 = document.querySelector('.navbar .option__4');
// pages
let page__1 = document.querySelector('#page__1');
let page__2 = document.querySelector('#page__2');
let page__3 = document.querySelector('#page__3');
let page__4 = document.querySelector('#ppage__4');

option__1.addEventListener("click", ()=> {
  option__1.classList.add("active");
  option__2.classList.remove("active");
  option__3.classList.remove("active");
  option__4.classList.remove("active");
  // pages
  page__1.classList.add("active");
  page__2.classList.remove("active");
  page__3.classList.remove("active");
  page__4.classList.remove("active");
});
option__2.addEventListener("click", ()=> {
  option__1.classList.remove("active");
  option__2.classList.add("active");
  option__3.classList.remove("active");
  option__4.classList.remove("active");
  // pages
  page__1.classList.remove("active");
  page__2.classList.add("active");
  page__3.classList.remove("active");
  page__4.classList.remove("active");
});
option__3.addEventListener("click", ()=> {
  option__1.classList.remove("active");
  option__2.classList.remove("active");
  option__3.classList.add("active");
  option__4.classList.remove("active");
  // pages
  page__1.classList.remove("active");
  page__2.classList.remove("active");
  page__3.classList.add("active");
  page__4.classList.remove("active");
});
option__4.addEventListener("click", ()=> {
  option__1.classList.remove("active");
  option__2.classList.remove("active");
  option__3.classList.remove("active");
  option__4.classList.add("active");
  //pages
  page__1.classList.remove("active");
  page__2.classList.remove("active");
  page__3.classList.remove("active");
  page__4.classList.add("active");
});
