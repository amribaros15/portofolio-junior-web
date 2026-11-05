var keranjang = [
    { id: 1, barang: 'T-shirt', harga: 80000, banyak: 2 },
    { id: 2, barang: 'Jeans', harga: 80000, banyak: 2 }
];

function hitungTotal(keranjang) {
    var total = 0;

    for (var i = 0; i < keranjang.length; i++) {
        total += keranjang[i].harga * keranjang[i].banyak;
    }

    return total;
}

console.log("Total Bayar: Rp" + hitungTotal(keranjang));