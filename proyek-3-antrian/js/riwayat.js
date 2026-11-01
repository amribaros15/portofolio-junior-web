import { Stack } from "./structures.js";

const MAKS_RIWAYAT = 50;

const undoStack = new Stack();
const redoStack = new Stack();

let teksSekarang = localStorage.getItem("catatanTerakhir") || "";

let timerDebounce;

function simpanPerubahan(teksBaru) {
  undoStack.push(teksSekarang);

  if (undoStack.size() > MAKS_RIWAYAT) {
    undoStack.items.shift();
  }

  teksSekarang = teksBaru;
  localStorage.setItem("catatanTerakhir", teksSekarang);

  redoStack.clear();
}

function simpanDenganDebounce(teksBaru) {
  clearTimeout(timerDebounce);

  timerDebounce = setTimeout(() => {
    simpanPerubahan(teksBaru);
  }, 500);
}

function undo() {
  if (undoStack.isEmpty()) {
    return teksSekarang;
  }

  redoStack.push(teksSekarang);

  teksSekarang = undoStack.pop();

  return teksSekarang;
}

function redo() {
  if (redoStack.isEmpty()) {
    return teksSekarang;
  }

  undoStack.push(teksSekarang);

  teksSekarang = redoStack.pop();

  return teksSekarang;
}

function catatanTerakhir() {
  return teksSekarang;
}

function infoRiwayat() {
  return {
    undo: undoStack.size(),
    redo: redoStack.size(),
  };
}

export { simpanDenganDebounce, undo, redo, catatanTerakhir, infoRiwayat };