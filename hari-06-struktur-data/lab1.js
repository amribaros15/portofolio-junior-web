const peserta = [
  { id: 1, nama: 'Levan', kelas: 'Web', nilai: 84, aktif: true },
  { id: 2, nama: 'Aina', kelas: 'Web', nilai: 86, aktif: true },
  { id: 3, nama: 'Dia', kelas: 'Data', nilai: 40, aktif: false },
  { id: 4, nama: 'Amri', kelas: 'Web', nilai: 97, aktif: true },
  { id: 5, nama: 'Badru', kelas: 'Web', nilai: 100, aktif: true },
  { id: 6, nama: 'Abdul', kelas: 'Data', nilai: 95, aktif: true },
  { id: 7, nama: 'Tamam', kelas: 'Data', nilai: 87, aktif: true },
  { id: 8, nama: 'Azzam', kelas: 'Web', nilai: 75, aktif: true },
  { id: 9, nama: 'Yaqin', kelas: 'Data', nilai: 56, aktif: false },
  { id: 10, nama: 'Haura', kelas: 'Web', nilai: 99, aktif: true }
];

function tampilkanPesertaAktif(data) {
  return data.filter((p) => p.aktif);
}

console.log('Peserta Aktif');
console.log(
  tampilkanPesertaAktif(peserta)
);

function urutNama(data) {
  return [...data].sort(
    (a, b) => a.nama.localeCompare(b.nama)
  );
}

console.log('\nUrut Berdasarkan Nama');
console.log(
  urutNama(peserta)
);

function cariPeserta(id) {
  const hasil = peserta.find(
    (p) => p.id === id
  );

  if (!hasil) {
    return 'Peserta tidak ditemukan';
  }

  return hasil;
}

console.log('\nCari ID 5');
console.log(cariPeserta(5));

console.log('\nCari ID 99');
console.log(cariPeserta(99));

function hitungPerKelas(data) {

  const perKelas = {};

  for (const peserta of data) {
    perKelas[peserta.kelas] =
      (perKelas[peserta.kelas] || 0) + 1;
  }

  return perKelas;
}

console.log('\nJumlah Peserta per Kelas');
console.log(
  hitungPerKelas(peserta)
);

const dataPeserta = [...peserta];

dataPeserta.push({
  id: 11,
  nama: 'Quo',
  kelas: 'Data',
  nilai: 64,
  aktif: true
});

console.log('\nSetelah Tambah Peserta');
console.log(dataPeserta);

dataPeserta[2].nilai = 65;

console.log('\nSetelah Ubah Nilai Dia');
console.log(dataPeserta[2]);

const setelahHapus =
  dataPeserta.filter(
    (p) => p.id !== 9
  );

console.log('\nSetelah Hapus ID 9');
console.log(setelahHapus);

const pesertaById = peserta.reduce(
  (objek, p) => {

    objek[p.id] = p;

    return objek;

  },
  {}
);

console.log('\nObjek Berindeks ID');
console.log(pesertaById);

console.log('\nPeserta ID 5');
console.log(pesertaById[5]);

console.log('\nPeserta ID 10');
console.log(pesertaById[10]);

