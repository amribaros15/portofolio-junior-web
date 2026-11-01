import { LinkedList, LinkedQueue } from './structures.js';

const daftar = new LinkedList();

daftar.addFirst('B');
daftar.addFirst('A');

daftar.addLast('C');
daftar.addLast('D');

console.log('Isi LinkedList');
console.log(daftar.toArray());

console.log('\nPeek First');
console.log(daftar.peekFirst());

console.log('\nRemove First');
console.log(daftar.removeFirst());

console.log('\nIsi Setelah Remove');
console.log(daftar.toArray());

console.log('\nCari Data');

console.log(daftar.find((item) => item === 'C'));

console.log(daftar.find((item) => item === 'Z'));

const antrean = new LinkedQueue();

antrean.enqueue('A');
antrean.enqueue('B');
antrean.enqueue('C');

console.log('\nFront');
console.log(antrean.front());

console.log('\nDequeue 1');
console.log(antrean.dequeue());

console.log('\nDequeue 2');
console.log(antrean.dequeue());

console.log('\nIsi Antrean');
console.log(antrean.toArray());

const kosong = new LinkedList();

console.log('\nLinkedList Kosong');
console.log(kosong.toArray());
console.log(kosong.peekFirst());
console.log(kosong.removeFirst());

const satuData = new LinkedList();

satuData.addFirst('Satu');

console.log('\nLinkedList Satu Elemen');
console.log(satuData.toArray());
console.log(satuData.peekFirst());

console.log('\nRemove Satu Elemen');
console.log(satuData.removeFirst());

console.log('\nSetelah Remove');
console.log(satuData.toArray());

const hapusData = new LinkedList();

hapusData.addLast('A');
hapusData.addLast('B');
hapusData.addLast('C');

console.log('\nData Awal');
console.log(hapusData.toArray());

hapusData.remove('A');

console.log('\nHapus Kepala');
console.log(hapusData.toArray());

hapusData.remove('B');

console.log('\nHapus Tengah');
console.log(hapusData.toArray());

hapusData.addLast('D');
hapusData.addLast('E');

console.log('\nTambah Lagi');
console.log(hapusData.toArray());

hapusData.remove('E');

console.log('\nHapus Ekor');
console.log(hapusData.toArray());

console.log('\nHapus Data Tidak Ada');
console.log(hapusData.remove('Z'));

console.log(hapusData.toArray());
