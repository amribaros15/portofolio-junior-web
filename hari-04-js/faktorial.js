const n = 5;

let faktorial = 1;

for (let i = 2; i <= n; i++) {
  faktorial *= i;
}

console.log(`${n}! = ${faktorial}`);