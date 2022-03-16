let prima = prompt ("inserisci prima parola").length
let seconda = prompt ("inserisci seconad parola").length

console.log (prima)
console.log (seconda)

if (prima > seconda){
  document.getElementById("fuori").innerHTML = "La prima parola è più lunga della seconda"

}

else {
  document.getElementById("fuori").innerHTML = "La seconda parola è più lunga della prima"
}