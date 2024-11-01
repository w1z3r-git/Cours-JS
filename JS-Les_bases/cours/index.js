//******************* Variables *************************//

// Kamel Case => les variables
let maSuperVariable = "Hello";

// ******** Les variables ******** //

var unTexte = "Voici un texte"; // => vieux JS

const prenom = "Justine"; // => const = constante
// console.log(prenom);
// prenom = "Julie";

let unChiffre = 24; // let = la variable peut évoluer
// console.log(unChiffre);
unChiffre = 22;
// console.log(unChiffre);

let chaine = "Je suis l'une des chaines de caractères";

let nouvelleChaine =
  "Chaine précédente : " + chaine + ". Voila c'était le contenu";
// console.log(nouvelleChaine);

// Concaténation avec guillemets altgr+7
let autreConcatenation = `Chaine précédente : ${chaine}. Voila c'était le contenu`;
// console.log(autreConcatenation);

//**************************************************//

//*****************Types de données ****************//
let string = "Je suis une chaine de charactère";
let number = 24;
let boolean = true;

// Tableau => il y a des crochets []
let array = ["je", "suis", 47, true];

// Objet => accolades {}
let object = {
  prenom: "audrey",
  age: 33,
  ville: "Bordeaux",
};

// Variable sans données
let arbre;

//**************************************************//

//**************** Les opérateurs ******************//
// console.log(4 + 5);
// console.log(4 - 5);
// console.log(4 / 5);
// console.log(4 * 5);
// console.log(4 ** 5); // => puissance

// Opérateur d'affectation

let total = 0;
total++;
total--;
total += 5;
total -= 2;
total *= 2;

// console.log(total);
//**************************************************//

//**************** Structure controle ******************//
let x = 2;
let y = 8;

if (x > y) {
  // alert("yes x plus gros que y");
} else if (x < y) {
  // alert("Non x plus petit que y");
} else {
  // alert("ILS SONT EGAUX");
}

// Tester la variables si elle est True
if (x) {
  // console.log("x existe");
}

// === => test l'égalité en type et contenu
if (x === y) {
  // console.log("Ils sont égaux");
} else {
  // console.log("pas égaux ! ");
}

let a = 2;
let b = "2";
// == => test l'égalité de valeur sans prendre en compte le type
if (a == b) {
  // console.log("Ils sont égaux");
} else {
  // console.log("pas égaux ! ");
}

// || => ou
// && => et

// || soit l'un soit l'autre
if (x < y || y > 6) {
  // console.log("UI");
}

// && Il faut que toutes les conditions soit réunies
if (x < y && x < 1) {
  // console.log("UI");
}

//**************************************************//

//**************** Les Fonctions ******************//

// fonction classique (à l'ancienne)
function faireQuelquesChose() {
  console.log("Je fais un truc");
  console.log(5 + 6);
  alert("Calcule terminé !");
}

// Il faut impérativement appeler la fonction pour qu'elle se joue
// faireQuelquesChose();

// fonction flêchée
const addition = (a, b) => {
  console.log(a + b);
};
// addition(5, 6);

// La portée des variables

function add2() {
  let a = 4;
  console.log(a + 2);
}

add2();
