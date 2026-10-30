import { Queue } from './structures.js';

const antrean = new Queue();

antrean.enqueue('A');
antrean.enqueue('B');
antrean.enqueue('C');

console.log('Front');
console.log(antrean.front());

console.log('\nDequeue 1');
console.log(antrean.dequeue());

console.log('\nDequeue 2');
console.log(antrean.dequeue());

console.log('\nDequeue 3');
console.log(antrean.dequeue());

console.log('\nDequeue Kosong');
console.log(antrean.dequeue());

