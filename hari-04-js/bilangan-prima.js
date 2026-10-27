for (let angka = 2; angka <= 50; angka++) {
  let prima = true;

  for (let pembagi = 2; pembagi * pembagi <= angka; pembagi++) {
    if (angka % pembagi === 0) {
      prima = false;
      break;
    }
  }

  if (prima) console.log(angka);
}