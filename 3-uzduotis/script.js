"use strict"
document.getElementById("patvirtinta").addEventListener("click", function() {

    let sk1, sk2;
    sk1 = parseFloat(document.getElementById("sk1").value);
    sk2 = parseFloat(document.getElementById("sk2").value);

    const kvadratas = {
        
        plotas: function(a, b) {
            return a * b;
            
        },
        perimetras: function(a, b){
            return 2 * a + 2 * b;
        },
        istrizaine: function(a, b) {
            return Math.sqrt(a * a + b * b);
        },
        rezultatas: function(a, b) {
            document.getElementById("plotas").innerHTML = "Plotas: " + this.plotas(a, b);
            document.getElementById("perimetras").innerHTML = "Perimetras: " + this.perimetras(a, b);
            document.getElementById("istrizaine").innerHTML = "Įstrižainė: " + this.istrizaine(a, b);
        },
    };

kvadratas.rezultatas(sk1, sk2);

});
