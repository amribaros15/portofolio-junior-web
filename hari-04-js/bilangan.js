const bilangan = Number(prompt("Masukkan bilangan:"));

let kategori;
let jenis;

if (bilangan > 0) {
    kategori = "Positif";
} else if (bilangan < 0) {
    kategori = "Negatif";
} else {
    kategori = "Nol";
}

if (bilangan % 2 === 0) {
    jenis = "Genap";
} else {
    jenis = "Ganjil";
}

console.log(`Bilangan: ${bilangan}`);
console.log(`Kategori: ${kategori}`);
console.log(`Jenis: ${jenis}`);

