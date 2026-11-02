<?php

$peserta = [
    ['nama' => 'Amri', 'kelas' => 'Web', 'nilai' => 97],
    ['nama' => 'Badru', 'kelas' => 'Web', 'nilai' => 100],
    ['nama' => 'Tamam', 'kelas' => 'Data', 'nilai' => 87],
];

$jsonFile = __DIR__ . '/data/peserta.json';

file_put_contents(
    $jsonFile,
    json_encode(
        $peserta,
        JSON_PRETTY_PRINT
    )
);

$data =
    json_decode(
        file_get_contents($jsonFile),
        true
    );

$data[] = [
    'nama' => 'Amri',
    'kelas' => 'Web',
    'nilai' => 97
];

file_put_contents(
    $jsonFile,
    json_encode(
        $data,
        JSON_PRETTY_PRINT
    )
);

echo '<pre>';
print_r($data);
echo '</pre>';

