import { Queue } from './structures.js';

const antrian = new Queue();

let nomorTerakhir = 0;
const riwayat = [];

const dipanggil =
  document.getElementById('dipanggil');

const jumlah =
  document.getElementById('jumlah');

const daftar =
  document.getElementById('daftar');

const daftarRiwayat =
  document.getElementById('riwayat');

const tombolReset =
  document.getElementById('reset');

function formatNomor(angka) {
  return 'A' + String(angka).padStart(3, '0');
}

function tampilkanRiwayat() {

  daftarRiwayat.textContent = '';

  for (const nomor of riwayat) {

    const li =
      document.createElement('li');

    li.textContent = nomor;

    daftarRiwayat.append(li);
  }
}

function tampilkanDaftar() {

  daftar.textContent = '';

  for (
    let i = antrian.head;
    i < antrian.tail;
    i++
  ) {

    const li =
      document.createElement('li');

    li.textContent =
      antrian.items[i];

    daftar.append(li);
  }

  jumlah.textContent =
    antrian.size();
}

document
  .getElementById('ambil')
  .addEventListener('click', () => {

    nomorTerakhir++;

    antrian.enqueue(
      formatNomor(nomorTerakhir)
    );

    tampilkanDaftar();

  });

  document
  .getElementById('panggil')
  .addEventListener('click', () => {

    if (antrian.isEmpty()) {

      dipanggil.textContent =
        'Antrean kosong';

    } else {

      const nomor =
        antrian.dequeue();

      dipanggil.textContent =
        nomor;

      riwayat.unshift(nomor);

      if (riwayat.length > 5) {
        riwayat.pop();
      }

      tampilkanRiwayat();
  }

  tampilkanDaftar();

  });

  tombolReset.addEventListener('click', () => {

  antrian.items = {};
  antrian.head = 0;
  antrian.tail = 0;

  nomorTerakhir = 0;

  riwayat.length = 0;

  dipanggil.textContent = '-';

  tampilkanDaftar();
  tampilkanRiwayat();

  });

