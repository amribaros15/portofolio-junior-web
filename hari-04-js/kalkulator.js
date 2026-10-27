const angka1 = Number(prompt("Angka pertama:"));
const operator = prompt("Operator (+, -, *, /):");
const angka2 = Number(prompt("Angka kedua:"));

let hasil;

switch (operator) {
    case "+":
        hasil = angka1 + angka2;
        break;

    case "-":
        hasil = angka1 - angka2;
        break;

    case "*":
        hasil = angka1 * angka2;
        break;

    case "/":
        if (angka2 === 0) {
            hasil = "Tidak bisa dibagi nol";
        } else {
            hasil = angka1 / angka2;
        }
        break;

    default:
        hasil = "Operator tidak valid";
}

console.log(`Hasil: ${hasil}`);

