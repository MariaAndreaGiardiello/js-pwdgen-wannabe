const name = document.getElementById("name").innerHTML;
const nome = prompt("Inserisci Nome");
document.getElementById("name").innerHTML = `${name} ${nome}`;

const surname = document.getElementById("surname").innerHTML;
const cognome = prompt("Inserisci Cognome");
document.getElementById("surname").innerHTML = `${surname} ${cognome}`;

const favcol = document.getElementById("favcol").innerHTML;
const colore = prompt("Colore Preferito");
document.getElementById("favcol").innerHTML = `${surname} ${colore}`;

alert("Grazie, non ci prenderemo cura di queste informazioni.");
document.getElementById("recap").innerHTML = `${nome} ${cognome} ${colore}`;
