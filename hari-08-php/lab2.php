<?php

declare(strict_types=1);

$peserta = [
    ['nama' => 'Sari', 'kelas' => 'Web', 'nilai' => 90],
    ['nama' => 'Budi', 'kelas' => 'Web', 'nilai' => 68],
    ['nama' => 'Citra', 'kelas' => 'Data', 'nilai' => 82],
];

function hitungRataRata(array $daftar): float
{
    if (count($daftar) === 0) {
        return 0;
    }

    $jumlah = 0;

    foreach ($daftar as $peserta) {
        $jumlah += $peserta['nilai'];
    }

    return $jumlah / count($daftar);
}

function cariTertinggi(array $daftar): ?array
{
    if (count($daftar) === 0) {
        return null;
    }

    $tertinggi = $daftar[0];

    foreach ($daftar as $peserta) {

        if ($peserta['nilai'] > $tertinggi['nilai']) {
            $tertinggi = $peserta;
        }

    }

    return $tertinggi;
}

function filterLulus(
    array $peserta,
    int $batas = 70
): array {

    return array_filter(
        $peserta,
        fn($p) => $p['nilai'] >= $batas
    );
}

function urutkanNilai(array $peserta): array
{
    $hasil = $peserta;

    usort(
        $hasil,
        fn($a, $b) => $b['nilai'] <=> $a['nilai']
    );

    return $hasil;
}

function kelompokkanPerKelas(array $peserta): array
{
    $hasil = [];

    foreach ($peserta as $data) {

        $kelas = $data['kelas'];

        $hasil[$kelas][] = $data;
    }

    return $hasil;
}

function tentukanGrade(int $nilai): string
{
    return match (true) {
        $nilai >= 85 => 'A',
        $nilai >= 70 => 'B',
        $nilai >= 55 => 'C',
        default => 'D'
    };
}

echo '<h2>Rata-rata Nilai</h2>';

echo hitungRataRata($peserta);

echo '<h2>Peserta Nilai Tertinggi</h2>';

echo '<pre>';
print_r(cariTertinggi($peserta));
echo '</pre>';

echo '<h2>Peserta Lulus</h2>';

echo '<pre>';
print_r(filterLulus($peserta));
echo '</pre>';

echo '<h2>Urut Berdasarkan Nilai</h2>';

echo '<pre>';
print_r(urutkanNilai($peserta));
echo '</pre>';

echo '<h2>Kelompok Peserta per Kelas</h2>';

echo '<pre>';
print_r(kelompokkanPerKelas($peserta));
echo '</pre>';

echo '<h2>Data Peserta</h2>';

echo "<table border='1' cellpadding='5'>";

echo "
<tr>
    <th>No</th>
    <th>Nama</th>
    <th>Kelas</th>
    <th>Nilai</th>
    <th>Grade</th>
</tr>
";

$nomor = 1;

foreach ($peserta as $data) {

    echo '<tr>';

    echo '<td>' . $nomor++ . '</td>';

    echo '<td>' .
        htmlspecialchars($data['nama']) .
        '</td>';

    echo '<td>' .
        htmlspecialchars($data['kelas']) .
        '</td>';

    echo '<td>' .
        htmlspecialchars((string) $data['nilai']) .
        '</td>';

    echo '<td>' .
        tentukanGrade($data['nilai']) .
        '</td>';

    echo '</tr>';
}

echo '</table>';

