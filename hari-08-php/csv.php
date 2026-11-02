<?php

$peserta = [
    ['Amri', 'Web', 97],
    ['Badru', 'Web', 100],
    ['Tamam', 'Data', 87],
];

$csvFile = __DIR__ . '/data/peserta.csv';

$file = fopen($csvFile, 'w');

foreach ($peserta as $baris) {
    fputcsv($file, $baris);
}

fclose($file);

$hasil = [];

$file = fopen($csvFile, 'r');

while (($baris = fgetcsv($file)) !== false) {
    $hasil[] = $baris;
}

fclose($file);
?>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>CSV Peserta</title>
</head>
<body>

<h1>Data Peserta dari CSV</h1>

<table border="1" cellpadding="5">
    <tr>
        <th>Nama</th>
        <th>Kelas</th>
        <th>Nilai</th>
    </tr>

    <?php foreach ($hasil as $baris): ?>
        <tr>
            <td><?= htmlspecialchars($baris[0]) ?></td>
            <td><?= htmlspecialchars($baris[1]) ?></td>
            <td><?= htmlspecialchars($baris[2]) ?></td>
        </tr>
    <?php endforeach; ?>

</table>

</body>
</html>

