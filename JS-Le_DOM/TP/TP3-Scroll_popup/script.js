// Créer un événement au scroll
window.addEventListener("scroll", () => {
  if (window.scrollY != 0) {
    navbar.style.height = "45px";
  } else {
    navbar.style.height = "90px";
  }

  if (window.scrollY > 90) {
    imgImprovise.style.opacity = "1";
    imgImprovise.style.transform = "translateX(0)";
  } else {
    imgImprovise.style.opacity = "0";
    imgImprovise.style.transform = "translateX(-200px)";
  }
});

// Bonus : quand on clicke sur la popup elle disparait pour toujours

window.addEventListener("scroll", () => {
  if (window.scrollY > 1400) {
    popup.style.transform = "translate(0)";
    popup.style.opacity = "1";
  }
});
closeBtn.addEventListener("click", () => {
  popup.style.transform = "translate(400px)";
  popup.style.opacity = "0";
  setTimeout(() => {
    popup.remove();
  }, 1000);
});
