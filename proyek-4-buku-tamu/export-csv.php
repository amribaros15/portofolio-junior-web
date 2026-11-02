<?php
declare(strict_types=1);

require_once __DIR__ . '/functions.php';

$daftarTamu = ambilSemuaTamu();

header('Content-Type: text/csv');
header('Content-Disposition: attachment; filename="tamu.csv"');

$output = fopen('php://output', 'w');

fputcsv(
    $output,
    ['ID', 'Nama', 'Email', 'Pesan', 'Waktu']
);

foreach ($daftarTamu as $tamu) {
    fputcsv(
        $output,
        [
            $tamu['id'],
            $tamu['nama'],
            $tamu['email'],
            $tamu['pesan'],
            $tamu['waktu']
        ]
    );
}

fclose($output);
exit;