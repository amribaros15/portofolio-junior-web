import { LinkedQueue } from "./structures.js";

const AWALAN_NOMOR = "A";

const antrian = new LinkedQueue();

let nomorTerakhir = 0;

function formatNomor(nomor) {
  return AWALAN_NOMOR + String(nomor).padStart(3, "0");
}

function ambilNomor() {
  nomorTerakhir++;

  const nomor = formatNomor(nomorTerakhir);

  antrian.enqueue(nomor);

  return nomor;
}

function panggilNomor() {
  if (antrian.isEmpty()) {
    return "Antrean kosong";
  }

  return antrian.dequeue();
}

export { antrian, ambilNomor, panggilNomor };