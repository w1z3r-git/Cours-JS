const counterDisplay = document.querySelector("h3");
let counter = 0;

const bubbleMaker = () => {
  const bubble = document.createElement("span"); // création span
  document.body.appendChild(bubble); // Insertion du span dans le body
  bubble.classList.add("bubble");

  // Création de la taille random des bulles
  const size = Math.random() * 200 + 100 + "px"; // Chiffre entre 100 et 300
  bubble.style.height = size;
  bubble.style.width = size;

  // Création de la position random des bulles
  bubble.style.top = Math.random() * 100 + 50 + "%"; // min 50%
  bubble.style.left = Math.random() * 100 + "%"; // min 0%

  // if else => si math.random est > 0.5 si oui = tu mets 1 sinon tu mets -1
  // ? = if || : = else
  const plusMinus = Math.random() > 0.5 ? 1 : -1;

  // Valeur random dans la left de l'anim
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  bubble.addEventListener("click", () => {
    counter++;
    counterDisplay.textContent = counter;
    bubble.remove();
  });

  // Dans 8s tu remove la bulle
  setTimeout(() => {
    bubble.remove();
  }, 8000);
};

setInterval(bubbleMaker, 300);
