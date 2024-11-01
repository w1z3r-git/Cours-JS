let lastScroll = 0;

window.addEventListener("scroll", () => {
  if (window.scrollY < lastScroll) {
    // navbar est un ID js le connait deja
    navbar.style.top = "0px";
  } else {
    navbar.style.top = "-60px";
  }
  lastScroll = window.scrollY;
});
