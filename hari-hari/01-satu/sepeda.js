function Sepeda(jariJari) {
    this.jariJari = jariJari;

    this.diameter = function () {
        return 2 * this.jariJari;
    };
}

var sepeda = new Sepeda(25);

console.log("Diameter roda: " + sepeda.diameter() + " cm");