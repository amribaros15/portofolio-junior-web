const lamaParkir = Number(prompt("Masukkan lama parkir (jam):"));

let tarif;

if (lamaParkir <= 2) {
    tarif = 3000;
} else {
    tarif = 3000 + ((lamaParkir - 2) * 2000);
}

if (tarif > 15000) {
    tarif = 15000;
}

console.log(`Lama parkir: ${lamaParkir} jam`);
console.log(`Tarif parkir: Rp${tarif}`);