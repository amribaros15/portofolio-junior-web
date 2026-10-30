export class Stack {

  constructor() {
    this.items = [];
  }

  // Menambahkan elemen ke bagian atas stack
  push(item) {
    this.items.push(item);
  }

  // Mengambil elemen paling atas dari stack
  pop() {
    return this.isEmpty()
      ? undefined
      : this.items.pop();
  }

  // Melihat elemen paling atas tanpa menghapusnya
  peek() {
    return this.isEmpty()
      ? undefined
      : this.items[this.items.length - 1];
  }

  // Mengecek apakah stack kosong
  isEmpty() {
    return this.items.length === 0;
  }

  // Menghitung jumlah elemen dalam stack
  size() {
    return this.items.length;
  }

  // Menghapus seluruh elemen stack
  clear() {
    this.items = [];
  }

}

export class Queue {

  constructor() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }

  // Menambahkan elemen ke bagian belakang antrean
  enqueue(item) {
    this.items[this.tail] = item;
    this.tail++;
  }

  // Mengambil elemen terdepan antrean
  dequeue() {

    if (this.isEmpty()) {
      return undefined;
    }

    const item = this.items[this.head];

    delete this.items[this.head];

    this.head++;

    return item;
  }

  // Melihat elemen terdepan tanpa menghapusnya
  front() {
    return this.items[this.head];
  }

  // Mengecek apakah antrean kosong
  isEmpty() {
    return this.tail === this.head;
  }

  // Menghitung jumlah elemen dalam antrean
  size() {
    return this.tail - this.head;
  }

}
