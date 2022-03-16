// // SECTION - Snack1 - Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

let x = parseInt  (prompt("Inserisci nummero"));
    console.log(x)

// if (isNaN(x)) {
//   alert("Not a Number!");
// }
// NOTE Come usare il isNUN e tornare indietro
if (x % 2 == 0) {
document.getElementById("numero").innerHTML = `Il numero ${x} è pari!`;
}
else {
 console.log(x);
 alert ("Sbagliato")
 document.getElementById("numero").innerHTML = `Il numero ${x} non è pari!`;
 }
// // !SECTION

// // SECTION - Generatore di “nomi cognomi” casuali: il Grande Gatsby ha  una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.

 let nome = ["Minny", "Pippo", "Pluto", "Paperino", "Qui", "Quo", "Qua",];
 let cognome = ["Bassettini", "Paperone", "Paperon", "Paperin", "Truzzo", "Truzzone", "Truzzetto",];

 let xNome = nome [ Math.floor (Math.random( ) * 6 ) ]
 let yCognome = cognome [ Math.floor (Math.random( ) * 6 ) ]

 document.getElementById("nome").innerHTML= xNome
 document.getElementById("cognome").innerHTML= yCognome
// !SECTION

// SECTION - Snack3 -Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione dispari

 var array = []

 let z =  Math.floor (Math.random( ) * 10 + 10 )
               console.log(`z ${z}`)
 for (i = 1; i<=z; i++ ){

   let k =  Math.floor (Math.random( ) * 100 + 1 )
   console.log(k)

  k = array.push(k);}
 var x1 = 0
 console.log(`Array ${array}`)

 for (i = 0; i < array.length; i++){

  if (array[i] % 2 == 0) {
  console.log(`Array ${array[i]} pari`)
   }
   else {
     x1 += array[i]
     console.log(`Valore x1 ${x1}`)
   }
 }