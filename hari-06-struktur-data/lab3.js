import { Stack } from './structures.js';

const tumpukan = new Stack();

tumpukan.push('A');
tumpukan.push('B');
tumpukan.push('C');

console.log('Peek');
console.log(tumpukan.peek());

console.log('\nPop 1');
console.log(tumpukan.pop());

console.log('\nPop 2');
console.log(tumpukan.pop());

console.log('\nPop 3');
console.log(tumpukan.pop());

console.log('\nPop Kosong');
console.log(tumpukan.pop());

function kurungSeimbang(teks) {

  const pasangan = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  const tumpukan = new Stack();

  for (const karakter of teks) {

    if ('([{'.includes(karakter)) {
      tumpukan.push(karakter);
    }

    else if (karakter in pasangan) {

      if (
        tumpukan.isEmpty() ||
        tumpukan.pop() !== pasangan[karakter]
      ) {
        return false;
      }

    }

  }

  return tumpukan.isEmpty();
}

console.log('\nKurung Seimbang');

console.log(
  kurungSeimbang('(a+b)*[c-d]')
);

console.log(
  kurungSeimbang('(a+b]')
);

console.log(
  kurungSeimbang('((a)')
);

console.log(
  kurungSeimbang('')
);

function balikString(teks) {

  const tumpukan = new Stack();

  for (const karakter of teks) {
    tumpukan.push(karakter);
  }

  let hasil = '';

  while (!tumpukan.isEmpty()) {
    hasil += tumpukan.pop();
  }

  return hasil;
}

console.log('\nBalik String');

console.log(
  balikString('WEB')
);

console.log('\nPalindrom');

console.log(
  'katak:',
  palindrom('katak')
);

console.log(
  'web:',
  palindrom('web')
);

console.log(
  'malam:',
  palindrom('malam')
);

function palindrom(teks) {

  const normal =
    teks.toLowerCase();

  return normal === balikString(normal);
}

