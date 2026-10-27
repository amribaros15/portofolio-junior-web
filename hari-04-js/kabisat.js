const tahun = Number(prompt('Masukkan tahun:'));

if ((tahun % 4 === 0 && tahun % 100 !== 0) || tahun % 400 === 0) {
    console.log(`${tahun} adalah tahun kabisat`);
} else {
    console.log(`${tahun} bukan tahun kabisat`);
}