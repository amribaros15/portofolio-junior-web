const peserta = [  
  { id: 1, nama: 'Amri', kelas: 'Web', nilai: 97 },
  { id: 2, nama: 'Badru', kelas: 'Web', nilai: 100 },
  { id: 3, nama: 'Abdul', kelas: 'Data', nilai: 95 },
  { id: 4, nama: 'Tamam', kelas: 'Data', nilai: 87 },
  { id: 5, nama: 'Azzam', kelas: 'Web', nilai: 75 },
  { id: 6, nama: 'Yaqin', kelas: 'Data', nilai: 56 },
  { id: 7, nama: 'Quo', kelas: 'Data', nilai: 64 },
  { id: 8, nama: 'Haura', kelas: 'Web', nilai: 99 },
  { id: 9, nama: 'Aina', kelas: 'Data', nilai: 86 },
  { id: 10, nama: 'Levan', kelas: 'Web', nilai: 84 },
  { id: 11, nama: 'Dia', kelas: 'Web', nilai: 40 },  
];

const pesertaLulus = peserta
  .filter((p) => p.nilai >= 70)
  .map((p) => p.nama);

console.log('Peserta Lulus:');
console.log(pesertaLulus);

const kelasWeb = peserta.filter(
  (p) => p.kelas === 'Web'
);

const kelasData = peserta.filter(
  (p) => p.kelas === 'Data'
);

const rataWeb =
  kelasWeb.reduce(
    (jumlah, p) => jumlah + p.nilai,
    0
  ) / kelasWeb.length;

const rataData =
  kelasData.reduce(
    (jumlah, p) => jumlah + p.nilai,
    0
  ) / kelasData.length;

console.log('\nRata-rata per Kelas');
console.log('Web :', rataWeb.toFixed(2));
console.log('Data:', rataData.toFixed(2));

const pesertaTerbaik = peserta.reduce(
  (tertinggi, p) =>
    p.nilai > tertinggi.nilai
      ? p
      : tertinggi
);

console.log('\nPeserta Nilai Tertinggi');
console.log(pesertaTerbaik);

const kataCari = 'am';

const hasilCari = peserta.filter(
  (p) =>
    p.nama.toLowerCase()
      .includes(kataCari.toLowerCase())
);

console.log('\nHasil Pencarian');
console.log(hasilCari);

const peringkat = [...peserta]
  .sort((a, b) => b.nilai - a.nilai);

console.log('\nDaftar Peringkat');

peringkat.forEach((p, index) => {
  console.log(
    `${index + 1}. ${p.nama} - ${p.nilai}`
  );
});

const email = [
  'amri@gmail.com',
  'badru@gmail.com',
  'amri@gmail.com',
  'haura@gmail.com',
  'badru@gmail.com'
];

const emailUnik = [...new Set(email)];

console.log('\nEmail Unik');
console.log(emailUnik);

