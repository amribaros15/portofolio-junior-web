// Bug 1
class QueueA {
  dequeue() {
    return undefined;
  }

  isEmpty() {
    return true;
  }
}

const antrean = new QueueA();

if (!antrean.isEmpty()) {
  const nomor = antrean.dequeue();
  console.log(nomor + 1);
} else {
  console.log('Antrean kosong');
}

// Bug 2
class StackA {
  pop() {
    return undefined;
  }
}

const tumpukan = new StackA();

const item = tumpukan.pop();

if (item === undefined) {
  console.log('Stack kosong');
} else {
  console.log(item.toUpperCase());
}

// Bug 3
class StackB {

  constructor() {
    this.items = ['A', 'B', 'C'];
  }

  peek() {
    return this.items[this.items.length - 1];
  }

}

console.log(
  new StackB().peek()
);

// Bug 4
class QueueB {

  constructor() {
    this.head = 2;
    this.tail = 5;
  }

  size() {
    return this.tail - this.head;
  }

}

console.log(
  new QueueB().size()
);

// Bug 5
const daftar = ['C', 'A', 'B'];

const salinan = [...daftar];

salinan.sort();

console.log(daftar);

// Bug 6
const peserta = [];

for (let i = 1; i <= 1000; i++) {
  peserta.push({
    id: i,
    nama: `Peserta ${i}`
  });
}

const pesertaById = peserta.reduce(
  (objek, p) => {
    objek[p.id] = p;
    return objek;
  },
  {}
);

for (let i = 0; i < 100000; i++) {
  pesertaById[100];
}

console.log('Selesai');
