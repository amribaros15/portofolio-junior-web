import { antrian, ambilNomor, panggilNomor } from "./antrian.js";

import {
  simpanDenganDebounce,
  undo,
  redo,
  infoRiwayat,
  catatanTerakhir,
} from "./riwayat.js";

const editor = document.getElementById("editor");

const tombolUndo = document.getElementById("undo");

const tombolRedo = document.getElementById("redo");

const info = document.getElementById("info");

const dipanggil = document.getElementById("dipanggil");

const jumlah = document.getElementById("jumlah");

const daftar = document.getElementById("daftar");

const tombolAmbil = document.getElementById("ambil");

const tombolPanggil = document.getElementById("panggil");

const tombolReset = document.getElementById("reset-antrean");

const riwayatPanggilan = [];

const daftarRiwayat = document.getElementById("riwayat-panggilan");

function perbaruiInfoRiwayat() {
  const data = infoRiwayat();

  tombolUndo.disabled = data.undo === 0;

  tombolRedo.disabled = data.redo === 0;

  info.textContent = `Riwayat: ${data.undo} undo, ${data.redo} redo`;
}

function tampilkanAntrean() {
  daftar.textContent = "";

  for (const nomor of antrian.toArray()) {
    const li = document.createElement("li");

    li.textContent = nomor;

    daftar.append(li);
  }

  jumlah.textContent = antrian.size();
}

editor.addEventListener("input", () => {
  simpanDenganDebounce(editor.value);

  setTimeout(perbaruiInfoRiwayat, 600);
});

tombolUndo.addEventListener("click", () => {
  editor.value = undo();

  perbaruiInfoRiwayat();
});

tombolRedo.addEventListener("click", () => {
  editor.value = redo();

  perbaruiInfoRiwayat();
});

tombolAmbil.addEventListener("click", () => {
  ambilNomor();

  tampilkanAntrean();
});

tombolPanggil.addEventListener("click", () => {
  const nomor = panggilNomor();

  dipanggil.textContent = nomor;

  if (nomor !== "Antrean kosong") {
    riwayatPanggilan.unshift(nomor);

    if (riwayatPanggilan.length > 5) {
      riwayatPanggilan.pop();
    }

    tampilkanRiwayatPanggilan();
  }

  tampilkanAntrean();
});

tombolReset.addEventListener("click", () => {
  if (!confirm("Reset antrean?")) {
    return;
  }

  antrian.clear();

  dipanggil.textContent = "-";

  tampilkanAntrean();

  riwayatPanggilan.length = 0;

  tampilkanRiwayatPanggilan();
});

function tampilkanRiwayatPanggilan() {
  daftarRiwayat.textContent = "";

  for (const nomor of riwayatPanggilan) {
    const li = document.createElement("li");

    li.textContent = nomor;

    daftarRiwayat.append(li);
  }
}

editor.value = catatanTerakhir();

perbaruiInfoRiwayat();
tampilkanAntrean();