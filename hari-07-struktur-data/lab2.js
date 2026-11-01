const folder = {
  nama: 'proyek',
  anak: [
    {
      nama: 'css',
      anak: [
        {
          nama: 'style.css',
          anak: [],
        },
      ],
    },
    {
      nama: 'js',
      anak: [
        {
          nama: 'app.js',
          anak: [],
        },
        {
          nama: 'api.js',
          anak: [],
        },
      ],
    },
  ],
};

function cetakPohon(node, tingkat = 0) {
  console.log(' '.repeat(tingkat * 2) + node.nama);

  for (const anak of node.anak) {
    cetakPohon(anak, tingkat + 1);
  }
}

function hitungNode(node) {
  let total = 1;

  for (const anak of node.anak) {
    total += hitungNode(anak);
  }

  return total;
}

function cariNode(node, nama, jalur = '') {
  const jalurSekarang = jalur ? `${jalur}/${node.nama}` : node.nama;

  if (node.nama === nama) {
    return jalurSekarang;
  }

  for (const anak of node.anak) {
    const hasil = cariNode(anak, nama, jalurSekarang);

    if (hasil) {
      return hasil;
    }
  }

  return undefined;
}

console.log('\nStruktur Folder');
cetakPohon(folder);

console.log('\nJumlah Node');
console.log(hitungNode(folder));

console.log('\nCari Node');

console.log(cariNode(folder, 'app.js'));

class BstNode {
  constructor(nilai) {
    this.nilai = nilai;
    this.kiri = null;
    this.kanan = null;
  }
}

class BinarySearchTree {
  #akar = null;

  insert(nilai) {
    const baru = new BstNode(nilai);

    if (this.#akar === null) {
      this.#akar = baru;
      return;
    }

    let saatIni = this.#akar;

    while (true) {
      if (nilai < saatIni.nilai) {
        if (saatIni.kiri === null) {
          saatIni.kiri = baru;
          return;
        }

        saatIni = saatIni.kiri;
      } else {
        if (saatIni.kanan === null) {
          saatIni.kanan = baru;
          return;
        }

        saatIni = saatIni.kanan;
      }
    }
  }

  has(nilai) {
    let saatIni = this.#akar;

    while (saatIni !== null) {
      if (nilai === saatIni.nilai) {
        return true;
      }

      saatIni = nilai < saatIni.nilai ? saatIni.kiri : saatIni.kanan;
    }

    return false;
  }

  inOrder() {
    const hasil = [];

    const telusuri = (node) => {
      if (node === null) {
        return;
      }

      telusuri(node.kiri);
      hasil.push(node.nilai);
      telusuri(node.kanan);
    };

    telusuri(this.#akar);

    return hasil;
  }
}

const bst = new BinarySearchTree();

bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(40);
bst.insert(60);
bst.insert(80);

console.log('\nIn Order');
console.log(bst.inOrder());

console.log('\nHas 60');
console.log(bst.has(60));

console.log('\nHas 65');
console.log(bst.has(65));

const graf = {
  Solo: ['Jogja', 'Semarang'],
  Jogja: ['Solo', 'Surabaya'],
  Semarang: ['Solo', 'Bandung'],
  Surabaya: ['Jogja', 'Jakarta'],
  Bandung: ['Semarang', 'Jakarta'],
  Jakarta: ['Surabaya', 'Bandung'],
};

function bfs(graf, mulai) {
  const dikunjungi = new Set();
  const antrean = [mulai];

  dikunjungi.add(mulai);

  while (antrean.length > 0) {
    const kota = antrean.shift();

    console.log(kota);

    for (const tetangga of graf[kota]) {
      if (!dikunjungi.has(tetangga)) {
        dikunjungi.add(tetangga);
        antrean.push(tetangga);
      }
    }
  }
}

function dfs(graf, mulai, dikunjungi = new Set()) {
  console.log(mulai);

  dikunjungi.add(mulai);

  for (const tetangga of graf[mulai]) {
    if (!dikunjungi.has(tetangga)) {
      dfs(graf, tetangga, dikunjungi);
    }
  }
}

function jarakTerpendek(graf, asal, tujuan) {
  const antrean = [[asal, 0]];

  const dikunjungi = new Set([asal]);

  while (antrean.length > 0) {
    const [kota, jarak] = antrean.shift();

    if (kota === tujuan) {
      return jarak;
    }

    for (const tetangga of graf[kota]) {
      if (!dikunjungi.has(tetangga)) {
        dikunjungi.add(tetangga);

        antrean.push([tetangga, jarak + 1]);
      }
    }
  }

  return -1;
}

console.log('\nBFS');

bfs(graf, 'Solo');

console.log('\nDFS');

dfs(graf, 'Solo');

console.log('\nJarak Solo -> Jakarta');

console.log(jarakTerpendek(graf, 'Solo', 'Jakarta'));

console.log('\nJarak Jogja -> Bandung');

console.log(jarakTerpendek(graf, 'Jogja', 'Bandung'));
