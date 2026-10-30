const kalimat =
  'saya belajar web saya suka web';

const frekuensi = new Map();

for (const kata of kalimat.split(' ')) {
  frekuensi.set(
    kata,
    (frekuensi.get(kata) || 0) + 1
  );
}

const hasil =
  [...frekuensi.entries()]
    .sort((a, b) => b[1] - a[1]);

console.log('Frekuensi Kata');
console.log(hasil);

const email = [
  'amri@gmail.com',
  'badru@gmail.com',
  'amri@gmail.com',
  'haura@gmail.com',
  'badru@gmail.com'
];

console.log('\nSebelum Set');
console.log(email);

const emailUnik = [...new Set(email)];

console.log('\nSesudah Set');
console.log(emailUnik);

const kelasA = [
  'Amri',
  'Badru',
  'Aina',
  'Haura',
  'Tamam'
];

const kelasB = [
  'Badru',
  'Tamam',
  'Azzam',
  'Abdul',
  'Haura'
];

const setB = new Set(kelasB);

const irisan =
  kelasA.filter((nama) =>
    setB.has(nama)
  );

console.log('\nIrisan Kelas A dan B');
console.log(irisan);

function adaDuplikat(daftar) {
  return new Set(daftar).size !== daftar.length;
}

console.log('\nArray Kosong');
console.log(adaDuplikat([]));

console.log('\nSatu Elemen');
console.log(adaDuplikat(['Amri']));

console.log('\nElemen Berulang');
console.log(
  adaDuplikat([
    'Amri',
    'Badru',
    'Amri'
  ])
);

