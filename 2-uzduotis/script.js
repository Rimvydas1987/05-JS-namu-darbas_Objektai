"use strict";
document.getElementById("mygtukas").addEventListener("click", function() {

const masyvas = [];

//const objektas = {};
for (let i=0; i<100; i++) {
    let objektas = {
        id: i+1,
        vardas: "vardas"+[i+1]
    }                    
    masyvas[i] = objektas;

    let div = document.createElement("div");
    div.innerHTML = objektas.id + " " + objektas.vardas;
    document.querySelector(".rezultatasDiv").append(div);            
}
});