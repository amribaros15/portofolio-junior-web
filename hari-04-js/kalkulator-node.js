const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

async function main() {
    const angka1 = Number(await rl.question('Angka pertama: '));

    if (Number.isNaN(angka1)) {
        console.log('Input angka pertama tidak valid');
        rl.close();
        return;
    }

    const operator = await rl.question('Operator (+, -, *, /): ');

    const angka2 = Number(await rl.question('Angka kedua: '));

    if (Number.isNaN(angka2)) {
        console.log('Input angka kedua tidak valid');
        rl.close();
        return;
    }

    let hasil;

    switch (operator) {
        case '+':
            hasil = angka1 + angka2;
            break;

        case '-':
            hasil = angka1 - angka2;
            break;

        case '*':
            hasil = angka1 * angka2;
            break;

        case '/':
            if (angka2 === 0) {
                hasil = 'Tidak bisa dibagi nol';
            } else {
                hasil = angka1 / angka2;
            }
            break;

        default:
            hasil = 'Operator tidak valid';
    }

    console.log(`Hasil: ${hasil}`);

    rl.close();
}

main();