let maintextEl = document.getElementById("main-text");
let bird1El = document.getElementById("bird1");
let bird2El = document.getElementById("bird2");
let forestEl = document.getElementById("forest");
let rockEl = document.getElementById("rocks");
let waterEl = document.getElementById("water");
let headerEl = document.getElementById("header");
let btnEl = document.getElementById("btn");

window.addEventListener("scroll", function () {
  let scrollValue = window.scrollY;

  maintextEl.style.top = 50 + scrollValue * -0.09 + "%";
  bird1El.style.top = scrollValue * 1 + "px";
  bird1El.style.left = scrollValue * -1.5 + "px";
  bird2El.style.bottom = scrollValue * 1 + "px";
  bird2El.style.left = scrollValue * -3 + "px";
  btnEl.style.marginTop = scrollValue * 1 + "px";
  rockEl.style.top = scrollValue * -0.15 + "px";
  forestEl.style.top = scrollValue * 0.35 + "px";
  headerEl.style.top = scrollValue * 0.4 + "px";
});
