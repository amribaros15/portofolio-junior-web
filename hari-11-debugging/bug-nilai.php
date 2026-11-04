<?php
declare(strict_types=1);
//B-02 Nilai '68' bertipe string
$nilai = [
    'Sari' => 90,
    'Budi' => 68,
    'Citra' => 82,
    'Dewi' => 70
];
//B-03 Dibagi count - 1
function hitungRataRata(array $daftar): float
{
    $total = 0;

    foreach ($daftar as $n) {
        $total += $n;
    }

    return $total / count($daftar);
}
//B-04 Kurang dari 70
function hitungLulus(array $daftar): int
{
    $lulus = 0;

    foreach ($daftar as $nama => $n) {

        if ($n >= 70) {
            $lulus++;
        }

    }
    //B-01 return $lulus tanpa titik koma 
    return $lulus;
}

//B-06 header() setelah echo 
header('X-Debug: selesai');

echo 'Rata-rata: ' . hitungRataRata($nilai) . '<br>';
echo 'Lulus: ' . hitungLulus($nilai) . '<br>';
//B-05 Nilai Eko tidak ada di array
if (isset($nilai['Eko'])) {
    echo 'Nilai Eko: ' . $nilai['Eko'];
} else {
    echo 'Nilai Eko: Tidak ada';
};


