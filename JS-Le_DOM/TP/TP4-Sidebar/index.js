// Créer un événement au click sur le hamburger menu pour sortir la sidebar, ranger la sidebar si on reclick dessus
const sidebar = document.getElementById("side-bar");
const content = document.querySelector(".content");

btn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

content.addEventListener("click", () => {
  sidebar.classList.remove("active");
});
