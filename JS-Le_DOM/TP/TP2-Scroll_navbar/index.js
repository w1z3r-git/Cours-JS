let value;
let lastValue;
window.addEventListener("scroll", () => {
  value = window.scrollY;
  if (value < lastValue) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-60px";
  }
  lastValue = value;
});
