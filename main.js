// SECTION - Snack1 - Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

// let x = parseInt  (prompt("Inserisci nummero"));
// NOTE Come usare il isNUN
// if (x % 2 == 0) {
// document.getElementById("numero").innerHTML = `Il numero ${x} è pari!`;
// }
// else {
// console.log(x);
// alert ("Sbagliato")
// document.getElementById("numero").innerHTML = `Il numero ${x} non è pari!`;
// }
// !SECTION

// SECTION - Generatore di “nomi cognomi” casuali: il Grande Gatsby ha  una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.

let nome = ["Minny", "Pippo", "Pluto", "Paperino", "Qui", "Quo", "Qua",];
let cognome = ["Bassettini", "Paperone", "Paperon", "Paperin", "Truzzo", "Truzzone", "Truzzetto",];

let x = nome [ Math.floor (Math.random( ) * 6 ) ]
let y = cognome [ Math.floor (Math.random( ) * 6 ) ]

document.getElementById("nome").innerHTML= x
document.getElementById("cognome").innerHTML= y