const keranjang = [
  { nama: 'Buku', harga: 25000, jumlah: 2 },
  { nama: 'Pensil', harga: 3000, jumlah: 10 },
  { nama: 'Penghapus', harga: 2000 }
];

//B-03 Properti jumlah tidak ada (undefined) 
function hitungSubtotal(item) {
  return item.harga * (item.jumlah ?? 1);
}

//B-02 TypeError: Cannot read properties of undefined (reading 'harga')
function hitungTotal(daftar) {
  let total = 0;
  for (let i = 0; i < daftar.length; i++) {
    total += hitungSubtotal(daftar[i]);
  }
  return total;
}

//B-04 Diskon tidak diterapkan karena total < 50000
function hitungDiskon(total) {
  if (total >= 50000) {
    return total * 0.1;
  }
  return 0;
}

function formatRupiah(angka) {
  return 'Rp' + angka.toLocaleString('id-ID');
}

const total = hitungTotal(keranjang);
const diskon = hitungDiskon(total);

//B-01 SyntaxError: missing ) after argument list
console.log('Total bayar: ' + formatRupiah(total - diskon));

