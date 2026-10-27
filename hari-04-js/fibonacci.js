let a = 0;
let b = 1;

const hasil = [];

for (let i = 0; i < 10; i++) {
  hasil.push(a);
  [a, b] = [b, a + b];
}

console.log(hasil.join(', '));