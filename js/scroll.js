window.addEventListener("scroll", function () {
    var navBar = this.document.querySelector(".nav-bar");
    navBar.classList.toggle("sticky-navbar", window.scrollY > 0);
  });
  
  window.addEventListener("scroll", function () {
    var upBtn = this.document.querySelector(".box-hidden");
    upBtn.classList.toggle("working-up-btn", window.scrollY > 700);
  });
  