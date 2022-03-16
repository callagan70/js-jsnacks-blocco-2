// // SECTION - Snack1 - Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

let x = parseInt  (prompt("Inserisci un numero pari"));

if (x % 2 == 0) {
document.getElementById("numero").innerHTML = `Il numero ${x} è pari!`;}

else {
        alert ("Sbagliato")
        document.getElementById("numero").innerHTML = `Il numero ${x} non è pari!`;}
// !SECTION

// // SECTION - Generatore di “nomi cognomi” casuali: il Grande Gatsby ha  una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.

let nome = ["Minny", "Pippo", "Pluto", "Paperino", "Qui", "Quo", "Qua",];
let cognome = ["Bassettini", "Paperone", "Paperon", "Paperin", "Truzzo", "Truzzone", "Truzzetto",];

let xNome = nome [ Math.floor (Math.random( ) * 6 ) ];
let yCognome = cognome [ Math.floor (Math.random( ) * 6 ) ];

document.getElementById("nome").innerHTML= xNome;
document.getElementById("cognome").innerHTML= yCognome;
// !SECTION

// SECTION - Snack3 -Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione dispari

 var array = []

 let z =  Math.floor (Math.random( ) * 10 + 10 )

 for (i = 1; i<=z; i++ ){
    let k =  Math.floor (Math.random( ) * 100 + 1 );
    k = array.push(k);}

 var x1 = 0

 for (i = 0; i < array.length; i++){
        if (i % 2 == 0) {}
        else {x1 += array[i]}
 }
 document.getElementById("sommArray").innerHTML = `Somma Array: ${x1}`
// !SECTION

// SECTION Snack4 (Bonus) Crea due array che hanno un numero di elementi diversi.  Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

var array1Snack4 = [];
var array2Snack4 = [];

let zSnack4_1 =  Math.floor (Math.random( ) * 10 + 10 )

 for (i = 1; i <= zSnack4_1; i++ ){
    let kSnack4 =  Math.floor (Math.random( ) * 100 + 1 )
    kSnack4 = array1Snack4.push(kSnack4);}
                      console.log(array1Snack4)

let zSnack4_2 =  Math.floor (Math.random( ) * 10 + 10 )

for (i = 1; i <= zSnack4_2; i++ ){
    let kSnack4 =  Math.floor (Math.random( ) * 100 + 1 )
    kSnack4 = array2Snack4.push(kSnack4);}
                      console.log(array2Snack4)

let difArray = array1Snack4.length - array2Snack4.length;

if (difArray == 0){
        document.getElementById("differenza").innerHTML = "Che culo! non devo fare nulla ! I due array hanno la stessa lunghezza";}
else if (difArray < 0){
        difArray = array2Snack4.length - array1Snack4.length
        document.getElementById("differenza").innerHTML = `Il primo array ha un length inferiore rispetto al secondo di ${difArray}`;
        for (i=1; i <= difArray; i++){
          let k =  Math.floor (Math.random( ) * 100 + 1 );
          k = array1Snack4.push(k)
        document.getElementById("aggiunti").innerHTML = `Aggiunti ${difArray} ora il primo array è di ${array1Snack4.length} uguale al secondo`;}
}
else {
        document.getElementById("differenza").innerHTML = `Il secondo array ha un length inferiore rispetto al secondo di ${difArray}`;
        for (i=1; i <= difArray; i++){
          let k =  Math.floor (Math.random( ) * 100 + 1 );
          k = array2Snack4.push(k)
        document.getElementById("aggiunti").innerHTML = `Aggiunti ${difArray} ora il secondo array è di ${array2Snack4.length} uguale al primo`;}
      }

      console.log(`Primo array ${array1Snack4}`)
      console.log(`Secondo array ${array2Snack4}`)

// !SECTION