<?php

$peserta = [
    ['nama' => 'Badru', 'kelas' => 'Web'],
    ['nama' => 'Aina', 'kelas' => 'Web'],
    ['nama' => 'Tamam', 'kelas' => 'Data'],
    ['nama' => 'Amri', 'kelas' => 'Web'],
    ['nama' => 'Haura', 'kelas' => 'Web']
];

$kataKunci = trim($_GET['q'] ?? '');

$hasil = [];

$logFile = __DIR__ . '/data/log.txt';

$barisLog =
    date('Y-m-d H:i:s')
    . ' | '
    . ($_SERVER['REMOTE_ADDR'] ?? '-')
    . ' | '
    . $kataKunci
    . PHP_EOL;

file_put_contents(
    $logFile,
    $barisLog,
    FILE_APPEND | LOCK_EX
);

if ($kataKunci !== '') {

    foreach ($peserta as $data) {

        if (
            stripos(
                $data['nama'],
                $kataKunci
            ) !== false
        ) {
            $hasil[] = $data;
        }

    }

}
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Pencarian Peserta</title>
</head>
<body>

<h1>Pencarian Peserta</h1>

<form method="get">
    <input
        name="q"
        value="<?= htmlspecialchars($kataKunci) ?>"
        placeholder="Cari nama">

    <button type="submit">
        Cari
    </button>
</form>

<?php if ($kataKunci !== ''): ?>

    <?php if ($hasil === []): ?>

        <p>Data tidak ditemukan.</p>

    <?php else: ?>

        <ul>

            <?php foreach ($hasil as $data): ?>
                <li>
                    <?= htmlspecialchars($data['nama']) ?>
                    (<?= htmlspecialchars($data['kelas']) ?>)
                </li>
            <?php endforeach; ?>

        </ul>

    <?php endif; ?>

<?php endif; ?>

</body>
</html>
