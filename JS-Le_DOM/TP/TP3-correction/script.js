let playOnce = true;

window.addEventListener("scroll", () => {
  // Navbar effect
  if (window.scrollY > 50) {
    navbar.style.height = "45px";
  } else {
    navbar.style.height = "90px";
  }

  // Vraie taille de l'ecran sur axe Y

  // Image
  if (scrollValue > 45) {
    imgImprovise.style.opacity = "1";
    imgImprovise.style.transform = "translate(0)";
  } else {
    imgImprovise.style.opacity = "";
    imgImprovise.style.transform = "translate(-200px)";
  }

  //Popup
  // playOnce est True
  if (scrollValue > 85 && playOnce) {
    popup.style.transform = "translate(0)";
    popup.style.opacity = "1";
    playOnce = false;
  }
});

closeBtn.addEventListener("click", () => {
  popup.style.transform = "translate(600px";
  popup.style.opacity = "0";
});

/* ---------------- Consigne ----------------- */

// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours
