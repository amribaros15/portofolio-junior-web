import {
  hitungRataRata,
  cariTertinggi,
  cariTerendah
} from './matematika.js';

const tombol =
  document.getElementById('proses');

const hasil =
  document.getElementById('hasil');

tombol.addEventListener('click', () => {

  const input =
    document.getElementById('nilai').value;

  const daftar =
    input
      .split(',')
      .map((n) => Number(n.trim()))
      .filter((n) => !Number.isNaN(n));

  hasil.innerHTML = `
    <p>Rata-rata : ${hitungRataRata(daftar).toFixed(2)}</p>
    <p>Tertinggi : ${cariTertinggi(daftar)}</p>
    <p>Terendah : ${cariTerendah(daftar)}</p>
  `;
});

