<?php

$nama = 'Amri';
$umur = 38;
$statusAktif = true;

echo "<h2>Data Peserta</h2>";

echo "Nama: $nama <br>";
echo "Umur: $umur <br>";
echo "Status Aktif: $statusAktif <br><br>";

echo "<h3>var_dump()</h3>";

var_dump($nama);
echo "<br>";

var_dump($umur);
echo "<br>";

var_dump($statusAktif);

echo "<h2>Tabel Perkalian 1-10</h2>";

echo "<table border='1' cellpadding='5'>";

for ($i = 1; $i <= 10; $i++) {

  echo "<tr>";

  for ($j = 1; $j <= 10; $j++) {

    echo "<td>" . ($i * $j) . "</td>";

  }

  echo "</tr>";
}

echo "</table>";
echo "<br>";
echo "<h2>FizzBuzz</h2>";

for ($i = 1; $i <= 30; $i++) {

  if ($i % 3 === 0 && $i % 5 === 0) {
    echo "FizzBuzz";
  }

  elseif ($i % 3 === 0) {
    echo "Fizz";
  }

  elseif ($i % 5 === 0) {
    echo "Buzz";
  }

  else {
    echo $i;
  }

  echo "<br>";
}

echo "<h2>Konversi Nilai ke Grade</h2>";

$nilai = 78;

$grade = match (true) {
  $nilai >= 85 => 'A',
  $nilai >= 70 => 'B',
  $nilai >= 55 => 'C',
  default => 'D'
};

echo "Nilai: $nilai <br>";
echo "Grade: $grade";

echo "<h2>Kalender Sederhana</h2>";

$namaHari = [
  'Minggu',
  'Senin',
  'Selasa',
  'Rabu',
  'Kamis',
  'Jumat',
  'Sabtu'
];

$hariIni = date('w');

echo "Hari ini: " . $namaHari[$hariIni];

