/* ******************** SELECTEURS ******************** */

// document.querySelector("h4");
// document.querySelector("h4").style.background = "yellow";
// const baliseHTML = document.querySelector("h4");
// ==> querySelector est une méthode = fonction
// ==> Selectionner une balise sur le DOM

/* ******************** CLICK EVENT ******************** */

const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

// variable . ajout event ("evenement", (function) => {})
questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-click");
  // toggle si la classe n'est pas la tu rajoutes si elle est la tu enleves
});

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
});
btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "red";
});

// Priorité CSS
// <div style=""></div> > #id > .class > baliseHTML
// si marche pas => !important

/* **************************************************** */

/* ******************** MOUSE EVENT ******************** */
const mousemove = document.querySelector(".mousemove");

// e => event : contient les datas
window.addEventListener("mousemove", (e) => {
  // console.log(e); => pour voir les datas
  // Prendre pageX et pageY
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

// mousedown quand le boutton de la souris est enfoncé
window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
  mousemove.style.border = "2px solid cyan";
});

// mouseenter => survoler
// Quand la souris survole le questionContainer tu fais :
questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0, 0, 0, .6)";
});
questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "cyan";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});

/* **************************************************** */

/* ******************* KEY PRESS ********************** */

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

// Function ring qui va chercher le fichier mp3 et qui le joue
const ring = (key) => {
  const audio = new Audio();
  audio.src = key + ".mp3";
  // console.log(audio.src);
  audio.play();
};

document.addEventListener("keypress", (e) => {
  // console.log(e.key);
  key.textContent = e.key;

  if (e.key === "j") {
    keypressContainer.style.background = "pink";
  } else if (e.key === "h") {
    keypressContainer.style.background = "cyan";
  } else {
    keypressContainer.style.background = "#333";
  }
  if (e.key === "z") ring(e.key);
});

/* **************************************************** */

/* ******************* SCROLL EVENT ********************** */

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  // console.log(window.scrollY);

  if (window.scrollY > 130) {
    nav.style.top = "0";
  } else {
    nav.style.top = "-50px";
  }
});

/* **************************************************** */

/* ******************* FORM EVENT ********************** */
// 2:03:02
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";
inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
  language = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Quand on submit le form la page ne se rafraichit pas

  if (cgv.checked) {
    document.querySelector("form > div").innerHTML = `
      <h3>Pseudo : ${pseudo} </h3>
      <h4>Langage préféré : ${language}</h4>`;
  } else {
    alert("Veuillez accepter les CGV");
  }
});

/* **************************************************** */

/* ******************* LOAD EVENT ********************** */

window.addEventListener("load", () => {
  console.log("Document chargé !");
});

/* **************************************************** */

/* ******************* FOR EACH ********************** */

// const boxes = document.getElementsByClassName("box");
const boxes = document.querySelectorAll(".box"); // Pr selectionner des classes

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    // e.target.style.transform = "scale(.7)";
  });
});

/* **************************************************** */

/* ******************* addEventListeneer Vs onclick ******************** */
// Avec onclick il peut y avoir que 1 event sur la part

// document.body.onclick = function () {
//   // => vieux JS function
//   console.log("click");
// };

// document.body.onscroll = () => {
//   console.log("scroll");
// };

// Bubbling => fin (de base l'eventListener est parametre en mode Bubbling)
document.body.addEventListener("click", () => {
  // console.log("click 1 !");
});

// Use capture
document.body.addEventListener(
  "click",
  () => {
    // console.log("click 2 !");
  },
  true
);

/* **************************************************** */

/* ****************** STOP PROPAGATION ******************* */

questionContainer.addEventListener("click", (e) => {
  // alert("test");
  // e.stopPropagation();
});

// removeEventListener

/* **************************************************** */

/* ********************** BOM ********************** */

// console.log(window.innerHeight);
// console.log(window.scrollY);

// window.open("https://google.com", "cours js", "height=600, width=800");
// window.close();

//  -------------- Event adossés à window ---------------- */
// alert("ok");

// ------------ confirm
btn2.addEventListener("click", () => {
  confirm("voulez vous vraiment vous tromper ?");
});

// ------------ prompt
btn1.addEventListener("click", () => {
  let answer = prompt("Entrez votre nom !");
  // += pour ne pas ecrasser ce qui est déja écrit
  questionContainer.innerHTML += "<h3>Bravo " + answer + "</h3>";
});

setTimeout(() => {
  // logique à exec
}, "temps en ms avant de déclencher");

// => Exemple
setTimeout(() => {
  questionContainer.style.borderRadius = "300px";
}, 2000);

// Toutes les 10s du créer un boite avec un h2
// setInterval(() => {
//   document.body.innerHTML += `
//   <div class='box'>
//     <h2>Nouvelle Boite !</h2>
//   </div>`;
// }, 10000);

// pour pouvoir arreter
// let interval = setInterval(() => {
//   document.body.innerHTML += `
//   <div class='box'>
//     <h2>Nouvelle Boite !</h2>
//   </div>`;
// }, 1000);

window.addEventListener("click", (e) => {
  // Retirer des élements du DOM
  // e.target.remove();
  clearInterval(interval);
});

// ----------- Location
console.log(location.href);
console.log(location.host);
console.log(location.pathname);
console.log(location.search);
// location.replace("https://google.fr"); => rediriger vers un autre lien
window.onload = () => {
  // location.href = "https://google.fr"
};

// ----------- Navigator
// console.log(navigator.userAgent);

/* var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  var crd = pos.coords;

  console.log("Votre position actuelle est :");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude : ${crd.longitude}`);
  console.log(`La précision est de ${crd.accuracy} mètres.`);
}

function error(err) {
  console.warn(`ERREUR (${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options); */

// -------- History
// window.history.back(); => revenir en arrière 1 fois
// history.go(-2); => revenir 2 fois en arrière
// console.log(history);

/* **************************************************** */

/* ****************** Set property ************************ */

window.addEventListener("mousemove", (e) => {
  nav.style.setProperty("--x", e.layerX + "px");
  nav.style.setProperty("--y", e.layerY + "px");
});
