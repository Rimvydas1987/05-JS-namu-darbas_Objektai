"use strict";
document.getElementById("mygtukas").addEventListener("click", function() {

const masyvas = [];
const objektas = {};
for (let i=0; i<100; i++) {
    objektas[i+1] = {
        id: i+1,
        vardas: "vardas"+[i+1]
    }                    
    masyvas[i] = objektas[i+1];
    let divElementas = document.createElement("div"); 
    divElementas.classList.add("div-dydis");
    divElementas.innerText = "Vardas: " + masyvas[i].vardas + " " + "ID: " + masyvas[i].id; 
    if( (i+1) % 2 == 0 ) {
        divElementas.classList.add("blue");
    }
    document.querySelector(".rezultatas").append(divElementas);            
}
});