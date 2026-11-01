function cariLinear(data, target) {
  for (let i = 0; i < data.length; i++) {
    if (data[i] === target) {
      return i;
    }
  }

  return -1;
}

function cariBiner(data, target) {
  let kiri = 0;
  let kanan = data.length - 1;

  while (kiri <= kanan) {
    const tengah = Math.floor((kiri + kanan) / 2);

    if (data[tengah] === target) {
      return tengah;
    }

    if (data[tengah] < target) {
      kiri = tengah + 1;
    } else {
      kanan = tengah - 1;
    }
  }

  return -1;
}

function bubbleSort(data) {
  const hasil = [...data];

  for (let i = 0; i < hasil.length - 1; i++) {
    for (let j = 0; j < hasil.length - 1 - i; j++) {
      if (hasil[j] > hasil[j + 1]) {
        const sementara = hasil[j];

        hasil[j] = hasil[j + 1];
        hasil[j + 1] = sementara;
      }
    }
  }

  return hasil;
}

function merge(kiri, kanan) {
  const hasil = [];

  let i = 0;
  let j = 0;

  while (i < kiri.length && j < kanan.length) {
    if (kiri[i] < kanan[j]) {
      hasil.push(kiri[i]);
      i++;
    } else {
      hasil.push(kanan[j]);
      j++;
    }
  }

  return hasil.concat(kiri.slice(i)).concat(kanan.slice(j));
}

function mergeSort(data) {
  if (data.length <= 1) {
    return data;
  }

  const tengah = Math.floor(data.length / 2);

  const kiri = mergeSort(data.slice(0, tengah));

  const kanan = mergeSort(data.slice(tengah));

  return merge(kiri, kanan);
}

function bubbleSortHitung(data) {
  const hasil = [...data];

  let perbandingan = 0;

  for (let i = 0; i < hasil.length - 1; i++) {
    for (let j = 0; j < hasil.length - 1 - i; j++) {
      perbandingan++;

      if (hasil[j] > hasil[j + 1]) {
        const sementara = hasil[j];

        hasil[j] = hasil[j + 1];
        hasil[j + 1] = sementara;
      }
    }
  }

  return perbandingan;
}

function insertionSortHitung(data) {
  const hasil = [...data];

  let perbandingan = 0;

  for (let i = 1; i < hasil.length; i++) {
    const sekarang = hasil[i];

    let j = i - 1;

    while (j >= 0) {
      perbandingan++;

      if (hasil[j] > sekarang) {
        hasil[j + 1] = hasil[j];

        j--;
      } else {
        break;
      }
    }

    hasil[j + 1] = sekarang;
  }

  return perbandingan;
}

function buatDataAcak(jumlah) {
  return Array.from({ length: jumlah }, () =>
    Math.floor(Math.random() * jumlah),
  );
}

const arrayKosong = [];

const satuElemen = [7];

const sudahTerurut = [1, 2, 3, 4, 5];

const terbalik = [5, 4, 3, 2, 1];

const duplikat = [5, 2, 5, 1, 2];

console.log('\nLinear Search');
console.log(cariLinear([10, 20, 30, 40], 30));

console.log('\nBinary Search');
console.log(cariBiner([10, 20, 30, 40], 30));

console.log('\nBubble Sort');

console.log(bubbleSort(arrayKosong));

console.log(bubbleSort(satuElemen));

console.log(bubbleSort(sudahTerurut));

console.log(bubbleSort(terbalik));

console.log(bubbleSort(duplikat));

console.log('\nMerge Sort');

console.log(mergeSort(arrayKosong));

console.log(mergeSort(satuElemen));

console.log(mergeSort(sudahTerurut));

console.log(mergeSort(terbalik));

console.log(mergeSort(duplikat));

const dataAcak = Array.from({ length: 1000 }, () =>
  Math.floor(Math.random() * 1000),
);

const dataTerurut = Array.from({ length: 1000 }, (_, i) => i);

const dataTerbalik = Array.from({ length: 1000 }, (_, i) => 1000 - i);

console.log('\nPerbandingan Data Acak');

console.log('Bubble:', bubbleSortHitung(dataAcak));

console.log('Insertion:', insertionSortHitung(dataAcak));

console.log('\nPerbandingan Data Terurut');

console.log('Bubble:', bubbleSortHitung(dataTerurut));

console.log('Insertion:', insertionSortHitung(dataTerurut));

console.log('\nPerbandingan Data Terbalik');

console.log('Bubble:', bubbleSortHitung(dataTerbalik));

console.log('Insertion:', insertionSortHitung(dataTerbalik));

const data10k = buatDataAcak(10000);

console.time('Bubble Sort 10K');

bubbleSort(data10k);

console.timeEnd('Bubble Sort 10K');

console.time('Merge Sort 10K');

mergeSort(data10k);

console.timeEnd('Merge Sort 10K');

console.time('Array.sort 10K');

[...data10k].sort((a, b) => a - b);

console.timeEnd('Array.sort 10K');

const data100k = buatDataAcak(100000);

console.time('Merge Sort 100K');

mergeSort(data100k);

console.timeEnd('Merge Sort 100K');

console.time('Array.sort 100K');

[...data100k].sort((a, b) => a - b);

console.timeEnd('Array.sort 100K');
