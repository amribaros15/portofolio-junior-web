# Peta Perjalanan Request

URL yang diakses:

http://localhost/hari-01/tes.php

## Alur Request (T2-T6)

T2 - URL

↓

Browser menerima URL:
http://localhost/hari-01/tes.php

T3 - DNS / Hosts

↓

Browser meminta alamat IP untuk host localhost.
Sistem operasi memeriksa file hosts dan mengarahkan localhost ke 127.0.0.1 atau ::1.

T4 - HTTP Request

↓

Browser membuka koneksi ke port 80 dan mengirim request:

GET /hari-01/tes.php HTTP/1.1

T5 - Web Server

↓

Apache menerima request lalu menemukan file:

C:\xampp\htdocs\hari-01\tes.php

Karena file berekstensi .php, Apache meneruskan request ke PHP.

T6 - Response dan Render

↓

PHP menjalankan kode program dan menghasilkan output HTML.

↓

Apache mengirim response:

HTTP/1.1 200 OK

↓

Browser menerima response dan melakukan rendering halaman.

↓

Halaman ditampilkan kepada pengguna.

## Diagram Sederhana

Pengguna

↓

Browser

↓ (T2)

URL

↓ (T3)

DNS / Hosts

↓ (127.0.0.1 / ::1)

↓ (T4)

HTTP Request (GET)

↓

Apache Server

↓ (T5)

PHP Engine

↓

HTML Hasil Proses

↓

HTTP Response 200 OK

↓ (T6)

Browser Render

↓

Halaman Tampil