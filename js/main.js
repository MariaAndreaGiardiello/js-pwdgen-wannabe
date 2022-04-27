
const nome = prompt("Inserisci Nome");
console.log(nome)

const cognome = prompt("Inserisci Cognome");
console.log(cognome)


const colore = prompt("Colore Preferito");
console.log(colore)

const numero = "21"

alert("Grazie, non ci prenderemo cura di queste informazioni.");
document.getElementById("password").innerHTML = `${nome}${cognome}${colore}${numero}`;
