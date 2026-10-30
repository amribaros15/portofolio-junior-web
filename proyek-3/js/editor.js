import { Stack } from './structures.js';

const editor = document.getElementById('editor');
const tombolUndo = document.getElementById('undo');
const tombolRedo = document.getElementById('redo');
const info = document.getElementById('info');

const undoStack = new Stack();
const redoStack = new Stack();

let teksSekarang = '';
let timerDebounce;

function perbaruiTombol() {

  tombolUndo.disabled =
    undoStack.isEmpty();

  tombolRedo.disabled =
    redoStack.isEmpty();

  info.textContent =
    `Riwayat: ${undoStack.size()} Undo | ${redoStack.size()} Redo`;
}

editor.addEventListener('input', () => {

  clearTimeout(timerDebounce);

  timerDebounce = setTimeout(() => {

    undoStack.push(teksSekarang);

    if (undoStack.size() > 50) {
      undoStack.items.shift();
    }

    teksSekarang =
      editor.value;

    redoStack.clear();

    perbaruiTombol();

  }, 500);

});

tombolUndo.addEventListener('click', () => {

  if (undoStack.isEmpty()) {
    return;
  }

  redoStack.push(teksSekarang);

  teksSekarang =
    undoStack.pop();

  editor.value =
    teksSekarang;

  perbaruiTombol();

});

tombolRedo.addEventListener('click', () => {

  if (redoStack.isEmpty()) {
    return;
  }

  undoStack.push(teksSekarang);

  teksSekarang =
    redoStack.pop();

  editor.value =
    teksSekarang;

  perbaruiTombol();

});

