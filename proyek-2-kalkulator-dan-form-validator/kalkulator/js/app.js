import { hitung } from './operasi.js';

const layarEl = document.getElementById('layar');
const papan = document.getElementById('papan');

let layar = '0';
let angkaPertama = null;
let operator = null;
let siapReset = false;
const riwayat = [];
const tombolRiwayat =
  document.getElementById('tampil-riwayat');

const daftarRiwayat =
  document.getElementById('riwayat');

  tombolRiwayat.addEventListener('click', () => {
  daftarRiwayat.hidden =
    !daftarRiwayat.hidden;
  });  

function perbaruiLayar() {
  layarEl.textContent = layar;
}

function masukkanAngka(digit) {
  if (digit === '.' && layar.includes('.') && !siapReset) return;

  if (layar === '0' && digit !== '.') {
    layar = digit;
  } else if (siapReset) {
    layar = digit === '.' ? '0.' : digit;
    siapReset = false;
  } else {
    layar += digit;
  }
}

function hitungHasil() {
  if (operator === null) return;

  try {
    const hasil = hitung(
      operator,
      angkaPertama,
      Number(layar)
    );

    riwayat.unshift(
      `${angkaPertama} ${operator} ${Number(layar)} = ${hasil}`
    );

    if (riwayat.length > 5) {
      riwayat.pop();
    }

    tampilkanRiwayat();

    layar = String(
      Number(hasil.toFixed(10))
    );

  } catch (error) {
    layar = error.message;
  }

  operator = null;
  angkaPertama = null;
  siapReset = true;
}

function tampilkanRiwayat() {

  daftarRiwayat.innerHTML = '';
    
  riwayat.forEach((item) => {
  
    const li =
      document.createElement('li');

    li.textContent = item;

    daftarRiwayat.appendChild(li);
  });
}

function pilihOperator(op) {

  if (
    operator !== null &&
    !siapReset
  ) {
    hitungHasil();
  }

  angkaPertama = Number(layar);
  operator = op;
  siapReset = true;
}

function hapusSatuKarakter() {

  if (layar.length <= 1) {
    layar = '0';
    return;
  }

  layar = layar.slice(0, -1);
}

function bersihkan() {
  layar = '0';
  angkaPertama = null;
  operator = null;
  siapReset = false;
}

papan.addEventListener('click', (event) => {

  const tombol =
    event.target.closest('button');

  if (!tombol) return;

  if (
    tombol.dataset.angka !== undefined
  ) {
    masukkanAngka(
      tombol.dataset.angka
    );
  }

  else if (
    tombol.dataset.operator
  ) {
    pilihOperator(
      tombol.dataset.operator
    );
  }

  else if (
    tombol.dataset.aksi === 'sama'
  ) {
    hitungHasil();
  }

  else if (
    tombol.dataset.aksi === 'hapus'
  ) {
    bersihkan();
  }

  else if (
    tombol.dataset.aksi === 'hapus-satu'
  ) {
    hapusSatuKarakter();
  }

  perbaruiLayar();
});

document.addEventListener('keydown', (event) => {

  const tombol = event.key;

  if ('0123456789.'.includes(tombol)) {
    masukkanAngka(tombol);
  }

  else if ('+-*/'.includes(tombol)) {
    pilihOperator(tombol);
  }

  else if (tombol === 'Enter') {
    event.preventDefault();
    hitungHasil();
  }

  else if (tombol === 'Backspace') {
    event.preventDefault();
    hapusSatuKarakter();
  }

  else if (tombol === 'Delete') {
    event.preventDefault();
    bersihkan();
  }

  perbaruiLayar();
});
