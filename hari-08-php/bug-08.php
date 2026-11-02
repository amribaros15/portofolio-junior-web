<?php

// Bug 1: Menambahkan titik koma (;)
echo 'Halo';

// Bug 2: Menggunakan operator ?? untuk nilai POST
$nama = $_POST['nama'] ?? '';

$a = 10;

// Bug 3: Mengganti = menjadi ===
if ($a === 5) {
    echo 'Nilai A adalah 5';
}

// Bug 4: Menggunakan operator . untuk string
echo 'Nama: ' . $nama;

// Bug 5: Menggunakan htmlspecialchars()
echo htmlspecialchars($_POST['pesan'] ?? '');

// Bug 6: Memastikan folder data tersedia
if (!is_dir('data')) {
    mkdir('data');
}
file_put_contents('data/log.txt', "Testing\n", FILE_APPEND);

// Bug 7: Menambahkan argumen true pada json_decode()
$isi = '{"nama":"Sari"}';
$d = json_decode($isi, true);

echo $d['nama'];

// Bug 8: Memindahkan header() sebelum output dan menambahkan exit
header('Location: bmi.php');
exit;