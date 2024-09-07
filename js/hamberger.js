const handburgerBtn = document.querySelector(".navbar-hamburger i");
const handburger = document.querySelector(".hb-desc-list");
const crossBtn = document.querySelector(
  ".navbar-hb-desc-box .hb-desc-list .cross-btn"
);
const descBtn = document.querySelector(".hb-desc-list ul");
const navBar = document.querySelector(".navbar-hamburger i");
const leftBar = document.querySelector(".left-part a");
const stickyNavBar = document.querySelector(".sticky-navbar");
handburgerBtn.addEventListener("click", function () {
  handburger.style.display = "block";
  handburger.style.transition = "7ms";
  navBar.style.display = "none";
  crossBtn.style.display = "block";
  leftBar.style.display = "none";
  //   stickyNavBar.style.display = "none";
});
crossBtn.addEventListener("click", function () {
  handburger.style.display = "none";
  navBar.style.display = "block";
  crossBtn.style.display = "none";
});