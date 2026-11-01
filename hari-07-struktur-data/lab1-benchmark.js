import { LinkedQueue } from './structures.js';

const N = 100000;

const arr = [];

for (let i = 0; i < N; i++) {
  arr.push(i);
}

console.time('Array.shift');

while (arr.length > 0) {
  arr.shift();
}

console.timeEnd('Array.shift');

const q = new LinkedQueue();

for (let i = 0; i < N; i++) {
  q.enqueue(i);
}

console.time('LinkedQueue.dequeue');

while (!q.isEmpty()) {
  q.dequeue();
}

console.timeEnd('LinkedQueue.dequeue');
