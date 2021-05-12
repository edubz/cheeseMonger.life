const hamburger = document.getElementById("hamburger");
const nav = document.querySelector("nav");
const burgerSvg = document.querySelectorAll("rect");
const menu = document.querySelector("ul");
const navLink = document.getElementsByClassName("navLink");

window.onresize = function (event) {
  if (window.innerWidth >= 600 && nav.className == "menuToggle") {
    nav.classList.remove("menuToggle");
    menu.classList.remove("show");
    hamburger.classList.remove("backgroundColorToggle");
    burgerSvg[0].classList.remove("top");
    burgerSvg[1].classList.remove("middle");
    burgerSvg[2].classList.remove("bottom");
  }
};

hamburger.onclick = function () {
  navLink[0].setAttribute("tabindex", 0);
  navLink[1].setAttribute("tabindex", 0);
  navLink[2].setAttribute("tabindex", 0);
  navLink[3].setAttribute("tabindex", 0);
  nav.classList.toggle("menuToggle");
  menu.classList.toggle("show");
  hamburger.classList.toggle("backgrounColorToggle");
  burgerSvg[0].classList.toggle("top");
  burgerSvg[1].classList.toggle("middle");
  burgerSvg[2].classList.toggle("bottom");
  if (nav.classList != "menuToggle") {
    navLink[0].setAttribute("tabindex", -1);
    navLink[1].setAttribute("tabindex", -1);
    navLink[2].setAttribute("tabindex", -1);
    navLink[3].setAttribute("tabindex", -1);
  }
};
