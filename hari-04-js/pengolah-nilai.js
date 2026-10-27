const readline = require('readline/promises'); 
const { stdin: input, stdout: output } = require('process');  

// Konstanta aturan penilaian
const NILAI_MIN = 0; 
const NILAI_MAKS = 100; 
const BATAS_LULUS = 70;  

const GRADE_A = 85;
const GRADE_B = 70;
const GRADE_C = 55;

async function main() { 
  const rl = readline.createInterface({ input, output }); 
  const daftarNama = []; 
  const daftarNilai = []; 
  let jalan = true;  

  while (jalan) { 
    console.log('\n===== PENGOLAH NILAI ====='); 
    console.log('1. Input nilai siswa'); 
    console.log('2. Tampilkan statistik'); 
    console.log('3. Tampilkan predikat per siswa'); 
    console.log('4. Ranking siswa');
    console.log('5. Histogram grade');
    console.log('6. Keluar');
    const pilihan = await rl.question('Pilih menu (1-6): ');  

    switch (pilihan) { 
      case '1': { 
        const nama = (await rl.question('Nama siswa: ')).trim(); 
        const nilai = Number(await rl.question('Nilai (0-100): '));

        if (nama === '') {
          console.log('Nama tidak boleh kosong.');
          break;
        }

        if (
          Number.isNaN(nilai) ||
          nilai < NILAI_MIN ||
          nilai > NILAI_MAKS
        ) {
          console.log('Nilai harus berupa angka 0-100.');
          break;
        }

        // Menyimpan data siswa
        daftarNama.push(nama);
        daftarNilai.push(nilai);

        console.log('Data berhasil disimpan.');
        break; 
      } 
      case '2': {

        // Menghitung statistik nilai
        if (daftarNilai.length === 0) {
          console.log('Belum ada data siswa.');
          break;
        }

        let total = 0;
        let tertinggi = daftarNilai[0];
        let terendah = daftarNilai[0];
        let jumlahLulus = 0;
        let jumlahTidakLulus = 0;

        for (let i = 0; i < daftarNilai.length; i++) {
          const nilai = daftarNilai[i];

          total += nilai;

          if (nilai > tertinggi) {
            tertinggi = nilai;
          }

          if (nilai < terendah) {
            terendah = nilai;
          }

          if (nilai >= BATAS_LULUS) {
            jumlahLulus++;
          } else {
            jumlahTidakLulus++;
          }
        }

        const rataRata = total / daftarNilai.length;

        console.log('\n===== STATISTIK =====');
        console.log(`Rata-rata         : ${rataRata.toFixed(2)}`);
        console.log(`Nilai tertinggi   : ${tertinggi}`);
        console.log(`Nilai terendah    : ${terendah}`);
        console.log(`Jumlah lulus      : ${jumlahLulus}`);
        console.log(`Jumlah tidak lulus: ${jumlahTidakLulus}`);

        break; 
      } 
      case '3': { 
        
        if (daftarNilai.length === 0) {
          console.log('Belum ada data siswa.');
          break;
        }

        console.log('\n===== PREDIKAT SISWA =====');

        for (let i = 0; i < daftarNilai.length; i++) {

          const nama = daftarNama[i];
          const nilai = daftarNilai[i];

          let grade;

          // Menentukan grade siswa
          if (nilai >= GRADE_A) {
            grade = 'A';
          } else if (nilai >= GRADE_B) {
            grade = 'B';
          } else if (nilai >= GRADE_C) {
            grade = 'C';
          } else {
            grade = 'D';
          }

          const status =
            nilai >= BATAS_LULUS
              ? 'Lulus'
              : 'Tidak Lulus';

          console.log(
            `${nama} | Nilai: ${nilai} | Grade: ${grade} | ${status}`
          );
        }
        break; 
      }
      case '4': {
        
        if (daftarNilai.length === 0) {
          console.log('Belum ada data siswa.');
          break;
        }

        const namaUrut = [...daftarNama];
        const nilaiUrut = [...daftarNilai];

        for (let i = 0; i < nilaiUrut.length - 1; i++) {
          for (let j = 0; j < nilaiUrut.length - 1 - i; j++) {

            if (nilaiUrut[j] < nilaiUrut[j + 1]) {
              
              [nilaiUrut[j], nilaiUrut[j + 1]] = 
              [nilaiUrut[j + 1], nilaiUrut[j]];

              [namaUrut[j], namaUrut[j + 1]] = 
              [namaUrut[j + 1], namaUrut[j]];
            }
          }
        }
      
        console.log('\n===== RANKING SISWA =====');

        for (let i = 0; i < namaUrut.length; i++) {
          console.log(
            `${i + 1}. ${namaUrut[i]} - ${nilaiUrut[i]}`
          );
        }

        break;
      }            
      case '5': {

        if (daftarNilai.length === 0) {
          console.log('Belum ada data siswa.');
          break;
        }

        let gradeA = 0;
        let gradeB = 0;
        let gradeC = 0;
        let gradeD = 0;

        for (let i = 0; i < daftarNilai.length; i++) {

          const nilai = daftarNilai[i];

          if (nilai >= GRADE_A) {
            gradeA++;
          } else if (nilai >= GRADE_B) {
            gradeB++;
          } else if (nilai >= GRADE_C) {
            gradeC++;
          } else {
            gradeD++;
          }
        }

        console.log('\n===== HISTOGRAM GRADE =====');
        console.log(`Grade A: ${'*'.repeat(gradeA)} (${gradeA})`);
        console.log(`Grade B: ${'*'.repeat(gradeB)} (${gradeB})`);
        console.log(`Grade C: ${'*'.repeat(gradeC)} (${gradeC})`);
        console.log(`Grade D: ${'*'.repeat(gradeD)} (${gradeD})`);

        break;
      }
      case '6': 
        jalan = false; 
        console.log('Terima kasih.'); 
        break; 
      default: 
        console.log('Pilihan tidak valid.'); 
    } 
  } 
  rl.close(); 
}  

main();