"use strict"
document.getElementById("patvirtinta").addEventListener("click", function() {

    let sk1, sk2;
    sk1 = parseFloat(document.getElementById("sk1").value);
    sk2 = parseFloat(document.getElementById("sk2").value);

    const skaiciuotuvas = {
        sk1: sk1,
        sk2: sk2,
        sudetis: function() {
            return this.sk1 + this.sk2;
        },
        atimtis: function() {
            return this.sk1 - this.sk2;
        },
        daugyba: function() {
            return this.sk1 * this.sk2;
        },
        dalyba: function() {
            return this.sk1 / this.sk2;
        },
        saknisSk1: function() {
            return Math.sqrt(this.sk1);
        },
        saknisSk2: function() {
            return Math.sqrt(this.sk2);
        },
        liekana: function() {
            return this.sk1 % this.sk2;
        },
        rezultatas: function() {
            const masyvas = [this.sudetis(), 
                             this.atimtis(), 
                             this.daugyba(), 
                             this.dalyba(), 
                             this.saknisSk1(), 
                             this.saknisSk2(), 
                             this.liekana()];
            return masyvas;

        },
        vidurkis: function() {
            let sum = 0;
            let masIlg = this.rezultatas().length;
            for (let i=0; i < masIlg; i++) {
            sum = sum + this.rezultatas[i];
            }
            let vid = sum / masIlg;
            return vid;
        },
    };
console.log(skaiciuotuvas.rezultatas());
console.log(skaiciuotuvas.vidurkis());
});
