"use strict"
document.getElementById("patvirtinta").addEventListener("click", function() {

    let sk1, sk2;
    sk1 = parseFloat(document.getElementById("sk1").value);
    sk2 = parseFloat(document.getElementById("sk2").value);

    const kvadratas = {
        sk1: sk1,
        sk2: sk2,
        plotas: function() {
            return this.sk1 * this.sk2;
        },
    };
});
