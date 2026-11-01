export class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.isEmpty() ? undefined : this.items.pop();
  }

  peek() {
    return this.isEmpty() ? undefined : this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

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

  enqueue(item) {
    this.items[this.tail] = item;
    this.tail++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }

    const item = this.items[this.head];

    delete this.items[this.head];

    this.head++;

    return item;
  }

  front() {
    return this.items[this.head];
  }

  isEmpty() {
    return this.tail === this.head;
  }

  size() {
    return this.tail - this.head;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export class LinkedList {
  #head = null;
  #tail = null;
  #size = 0;

  addFirst(data) {
    const node = new Node(data);

    node.next = this.#head;

    this.#head = node;

    if (this.#tail === null) {
      this.#tail = node;
    }

    this.#size++;
  }

  addLast(data) {
    const node = new Node(data);

    if (this.#tail === null) {
      this.#head = node;
    } else {
      this.#tail.next = node;
    }

    this.#tail = node;

    this.#size++;
  }

  removeFirst() {
    if (this.#head === null) {
      return undefined;
    }

    const data = this.#head.data;

    this.#head = this.#head.next;

    if (this.#head === null) {
      this.#tail = null;
    }

    this.#size--;

    return data;
  }

  peekFirst() {
    return this.#head === null ? undefined : this.#head.data;
  }

  find(predikat) {
    let saatIni = this.#head;

    while (saatIni !== null) {
      if (predikat(saatIni.data)) {
        return saatIni.data;
      }

      saatIni = saatIni.next;
    }

    return undefined;
  }

  size() {
    return this.#size;
  }

  isEmpty() {
    return this.#size === 0;
  }

  toArray() {
    const hasil = [];

    let saatIni = this.#head;

    while (saatIni !== null) {
      hasil.push(saatIni.data);

      saatIni = saatIni.next;
    }

    return hasil;
  }

  remove(data) {
    if (this.#head === null) {
      return false;
    }

    if (this.#head.data === data) {
      this.removeFirst();
      return true;
    }

    let saatIni = this.#head;

    while (saatIni.next !== null && saatIni.next.data !== data) {
      saatIni = saatIni.next;
    }

    if (saatIni.next === null) {
      return false;
    }

    if (saatIni.next === this.#tail) {
      this.#tail = saatIni;
    }

    saatIni.next = saatIni.next.next;

    this.#size--;

    return true;
  }
}

export class LinkedQueue {
  #daftar = new LinkedList();

  enqueue(item) {
    this.#daftar.addLast(item);
  }

  dequeue() {
    return this.#daftar.removeFirst();
  }

  front() {
    return this.#daftar.peekFirst();
  }

  isEmpty() {
    return this.#daftar.isEmpty();
  }

  size() {
    return this.#daftar.size();
  }

  toArray() {
    return this.#daftar.toArray();
  }
}
