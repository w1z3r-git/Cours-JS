// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)

// const cursor = document.querySelector(".cursor");
// const bubble1 = document.querySelector(".bubble1");
// const bubble2 = document.querySelector(".bubble2");

// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")

const mouses = document.querySelectorAll(".mouse");

window.addEventListener("mousemove", (e) => {
  mouses.forEach((mouse) => {
    mouse.style.top = e.y + "px";
    mouse.style.left = e.x + "px";
  });
});

// window.addEventListener("mousemove", (e) => {
//   cursor.style.left = e.pageX + "px";
//   cursor.style.top = e.pageY + "px";

//   bubble1.style.left = e.pageX + "px";
//   bubble1.style.top = e.pageY + "px";

//   bubble2.style.left = e.pageX + "px";
//   bubble2.style.top = e.pageY + "px";
// });

// S'assurer que les liens sont clickables

// OUI

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)
