// SECTION - Snack1 - Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

let x = parseInt  (prompt("Inserisci nummero"));

if (x % 2 == 0) {
document.getElementById("fuori").innerHTML = x
}
else {
console.log(x);
alert ("Sbagliato")
document.getElementById("fuori").innerHTML = "Sbagliato"
}

