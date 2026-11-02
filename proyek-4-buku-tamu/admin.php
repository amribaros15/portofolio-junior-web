<?php
declare(strict_types=1);

require_once __DIR__ . '/functions.php';

$daftarAsli = ambilSemuaTamu();

if (isset($_GET['hapus'])) {

    $id = (int) $_GET['hapus'];

    $daftarAsli = array_values(
        array_filter(
            $daftarAsli,
            fn(array $tamu): bool => $tamu['id'] !== $id
        )
    );

    file_put_contents(
        FILE_TAMU,
        json_encode(
            $daftarAsli,
            JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE
        ),
        LOCK_EX
    );

    header('Location: admin.php');
    exit;
}

$daftarTamu = array_reverse($daftarAsli);

?>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Admin Buku Tamu</title>
</head>
<body>

<h1>Admin Buku Tamu</h1>

<p>
    <a href="export-csv.php">
        Ekspor CSV
    </a>
</p>

<?php if ($daftarTamu === []): ?>

    <p>Belum ada data.</p>

<?php else: ?>

    <?php foreach ($daftarTamu as $tamu): ?>

        <article>

            <h3><?= e($tamu['nama']) ?></h3>

            <p>
                <small><?= e($tamu['waktu']) ?></small>
            </p>

            <p><?= e($tamu['email']) ?></p>

            <p><?= e($tamu['pesan']) ?></p>

            <a 
                href="admin.php?hapus=<?= $tamu['id'] ?>"
                onclick="return confirm('Yakin ingin menghapus pesan ini?')"
            >
                Hapus
            </a>

        </article>

        <hr>

    <?php endforeach; ?>

<?php endif; ?>

</body>
</html>
