const PAJAK = 0.11;

const BATAS_GRADE = {
  A: 85,
  B: 70,
  C: 55,
};

/**
 * Menghitung rata-rata nilai.
 */
function hitungRataRata(daftarNilai) {
  if (daftarNilai.length === 0) {
    return 0;
  }

  const jumlah = daftarNilai.reduce((total, nilai) => total + nilai, 0);

  return jumlah / daftarNilai.length;
}

/**
 * Menentukan grade berdasarkan nilai.
 */
function tentukanGrade(nilai) {
  if (nilai >= BATAS_GRADE.A) return 'A';
  if (nilai >= BATAS_GRADE.B) return 'B';
  if (nilai >= BATAS_GRADE.C) return 'C';

  return 'D';
}

/**
 * Menghitung harga setelah pajak.
 */
function hitungHargaDenganPajak(harga) {
  return harga * (1 + PAJAK);
}

const daftarNilai = [80, 65, 90];

const rataRata = hitungRataRata(daftarNilai);

if (rataRata === 80) {
  console.log('bagus');
}

console.log(tentukanGrade(rataRata));

console.log(
  hitungHargaDenganPajak(100000)
);