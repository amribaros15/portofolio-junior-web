function tambah(a, b) {
  return a + b;
}

console.log(tambah(5, 3));

function hitungRataRata(daftar) {
  if (daftar.length === 0) return 0;

  return daftar.reduce((j, n) => j + n, 0) / daftar.length;
}

console.log(hitungRataRata([]));

const angka = [10, 2, 5];

angka.sort((a, b) => a - b);

console.log(angka);

const tombol = [];

for (let i = 0; i < 3; i++) {
  tombol.push(() => console.log(i));
}

tombol[0]();
tombol[1]();
tombol[2]();
