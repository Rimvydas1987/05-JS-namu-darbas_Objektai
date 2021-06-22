"use strict"
document.getElementById("patvirtinta").addEventListener("click", function() {

    let a, b;
    a = parseFloat(document.getElementById("sk1").value);
    b = parseFloat(document.getElementById("sk2").value);

    const kvadratas = {
        a: 5,
        b: 4,
        aktyvavimas: function() {
            this.a = a;
            this.b = b;
        },
        plotas: function() {
            return a * b;
        },
        perimetras: function(){
            return 2 * (a + b);
        },
        istrizaine: function() {
            return Math.sqrt(a * a + b * b);
        },
        nubrezk: function() {
            let elementas = document.querySelector(".keturkampis");
            elementas.style.width = this.a + "px";
            elementas.style.height = this.b + "px";
        },
        rezultatas: function() {
            document.getElementById("plotas").innerHTML = "Plotas: " + this.plotas();
            document.getElementById("perimetras").innerHTML = "Perimetras: " + this.perimetras();
            document.getElementById("istrizaine").innerHTML = "Įstrižainė: " + this.istrizaine();
        },
    };
kvadratas.aktyvavimas();
kvadratas.rezultatas();
kvadratas.nubrezk();
});
