var etalase = [
    { id: 1, barang: 'T-shirt', harga: 80000 },
    { id: 2, barang: 'Jeans', harga: 90000 },
    { id: 3, barang: 'Tote Bag', harga: 20000 },
    { id: 4, barang: 'School Bag', harga: 25000 },
    { id: 5, barang: 'Shoes', harga: 120000 }
];

function urutkanHarga(data) {
    return data.slice().sort(function (a, b) {
        return a.harga - b.harga;
    });
}

function cariBarang(data, kataKunci) {
    return data.filter(function (item) {
        return item.barang
            .toLowerCase()
            .includes(kataKunci.toLowerCase());
    });
}

function barangTermurah(data) {
    return data.reduce(function (termurah, item) {
        return item.harga < termurah.harga ? item : termurah;
    });
}

console.log(barangTermurah(etalase));
console.log(cariBarang(etalase, 'bag'));
console.log(urutkanHarga(etalase));