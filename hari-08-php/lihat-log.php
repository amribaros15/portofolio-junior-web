<?php

$logFile = __DIR__ . '/data/log.txt';

$isi = [];

if (file_exists($logFile)) {
    $isi = array_slice(
        array_reverse(file($logFile)),
        0,
        20
    );
}
?>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Log Pengunjung</title>
</head>
<body>

<h1>20 Log Terakhir</h1>

<pre>
<?php
foreach ($isi as $baris) {
    echo htmlspecialchars($baris);
}
?>
</pre>

</body>
</html>
