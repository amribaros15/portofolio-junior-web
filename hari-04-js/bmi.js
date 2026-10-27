const berat = Number(prompt("Berat badan (kg):"));
const tinggi = Number(prompt("Tinggi badan (m):"));

const bmi = berat / (tinggi * tinggi);

let kategori;

if (bmi < 18.5) {
    kategori = "Kurang";
} else if (bmi < 25) {
    kategori = "Normal";
} else if (bmi < 30) {
    kategori = "Lebih";
} else {
    kategori = "Obesitas";
}

console.log(`BMI: ${bmi.toFixed(2)}`);
console.log(`Kategori: ${kategori}`);