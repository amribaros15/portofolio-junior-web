export class Stack {
  constructor() {
    this.items = [];
  }

  /**
   * Menambahkan elemen ke bagian atas stack.
   * @param {*} item
   */
  push(item) {
    this.items.push(item);
  }

  /**
   * Mengambil elemen paling atas dari stack.
   * @returns {*}
   */
  pop() {
    return this.isEmpty() ? undefined : this.items.pop();
  }

  /**
   * Melihat elemen paling atas tanpa menghapusnya.
   * @returns {*}
   */
  peek() {
    return this.isEmpty() ? undefined : this.items[this.items.length - 1];
  }

  /**
   * Mengecek apakah stack kosong.
   * @returns {boolean}
   */
  isEmpty() {
    return this.items.length === 0;
  }

  /**
   * Menghitung jumlah elemen dalam stack.
   * @returns {number}
   */
  size() {
    return this.items.length;
  }

  /**
   * Menghapus seluruh elemen stack.
   */
  clear() {
    this.items = [];
  }
}

class Node {
  /**
   * Membuat node baru untuk Linked List.
   * @param {*} data
   */
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export class LinkedList {
  #head = null;
  #tail = null;
  #size = 0;

  /**
   * Menambahkan data di awal list.
   * @param {*} data
   */
  addFirst(data) {
    const node = new Node(data);

    node.next = this.#head;
    this.#head = node;

    if (this.#tail === null) {
      this.#tail = node;
    }

    this.#size++;
  }

  /**
   * Menambahkan data di akhir list.
   * @param {*} data
   */
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

  /**
   * Menghapus data pertama pada list.
   * @returns {*}
   */
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

  /**
   * Melihat data pertama tanpa menghapusnya.
   * @returns {*}
   */
  peekFirst() {
    return this.#head === null ? undefined : this.#head.data;
  }

  /**
   * Mencari data berdasarkan kondisi tertentu.
   * @param {Function} predikat
   * @returns {*}
   */
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

  /**
   * Menghitung jumlah elemen dalam list.
   * @returns {number}
   */
  size() {
    return this.#size;
  }

  /**
   * Mengecek apakah list kosong.
   * @returns {boolean}
   */
  isEmpty() {
    return this.#size === 0;
  }

  /**
   * Mengubah isi list menjadi array.
   * @returns {Array}
   */
  toArray() {
    const hasil = [];

    let saatIni = this.#head;

    while (saatIni !== null) {
      hasil.push(saatIni.data);
      saatIni = saatIni.next;
    }

    return hasil;
  }

  /**
   * Menghapus data tertentu dari list.
   * @param {*} data
   * @returns {boolean}
   */
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

  /**
   * Menambahkan item ke dalam antrean.
   * @param {*} item
   */
  enqueue(item) {
    this.#daftar.addLast(item);
  }

  /**
   * Menghapus item dari depan antrean.
   * @returns {*}
   */
  dequeue() {
    return this.#daftar.removeFirst();
  }

  /**
   * Melihat item di depan antrean tanpa menghapusnya.
   * @returns {*}
   */
  front() {
    return this.#daftar.peekFirst();
  }

  /**
   * Mengecek apakah antrean kosong.
   * @returns {boolean}
   */
  isEmpty() {
    return this.#daftar.isEmpty();
  }

  /**
   * Menghitung jumlah item dalam antrean.
   * @returns {number}
   */
  size() {
    return this.#daftar.size();
  }

  /**
   * Mengubah antrean menjadi array.
   * @returns {Array}
   */
  toArray() {
    return this.#daftar.toArray();
  }

  /**
   * Mengosongkan seluruh antrean.
   */
  clear() {
    this.#daftar = new LinkedList();
  }
}