<?php

$folderData = __DIR__ . '/data';

if (!is_dir($folderData)) {
    mkdir($folderData);
}

echo 'Folder data siap digunakan.';

$namaFile = __DIR__ . '/data/contoh.txt';

if (!file_exists($namaFile)) {
    echo '<br>File tidak ditemukan.';
}

$jsonFile = __DIR__ . '/data/rusak.json';

if (!file_exists($jsonFile)) {

    echo '<br>File JSON tidak ditemukan.';

} else {

    $data = file_get_contents($jsonFile);

    $hasil = json_decode($data, true);

    if (json_last_error() !== JSON_ERROR_NONE) {
        echo '<br>JSON rusak.';
    }

}

