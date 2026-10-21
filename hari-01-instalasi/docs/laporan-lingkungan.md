# Laporan Lingkungan Pengembangan

## 1. Spesifikasi Platform

| Komponen           | Nilai                                         |
| ------------------ | --------------------------------------------- |
| Sistem Operasi     | Windows 11 Pro x64 10.0.26200 N/A Build 26200 |
| RAM                | 8,051 MB                                      |
| Penyimpanan        | ±238 GB                                       |
| Ruang kosong       | ±40 GB                                        |
| Visual Studio Code | 1.142.0                                       |
| PHP                | 8.2.12                                        |
| Apache             | 2.4.58                                        |
| Node.js            | 24.22.0                                       |
| npm                | 11.19.1                                       |
| Composer           | 2.10.3                                        |
| Git                | 2.56.0.windows.2                              |

![Gambar Spesifikasi](img/KUK%201.1%20Gambar%20Spesifikasi.png)

## 2. Kebutuhan Proyek dan Matriks Pemilihan Tools

### A. Kebutuhan Proyek

1. Menjalankan aplikasi web PHP dan database secara lokal. Alternatif tools: XAMPP atau Laragon.
2. Menulis dan mengelola source code HTML, CSS, JavaScript, dan PHP. Alternatif tools: VS Code atau Notepad++.
3. Menjalankan JavaScript di luar browser. Alternatif tools: Node.js.
4. Mengelola library atau dependency PHP. Alternatif tools: Composer.
5. Mengelola versi source code dan kolaborasi tim. Alternatif tools: Git dan GitHub.

### B. Matriks Pemilihan Tools

#### Web Server Lokal

| Kriteria                          |  XAMPP | Laragon |
| --------------------------------- | -----: | ------: |
| Kesesuaian OS peserta             |      5 |       4 |
| Kemudahan instalasi dan pemakaian |      4 |       5 |
| Kebutuhan sumber daya             |      4 |       5 |
| Dukungan dokumentasi / komunitas  |      5 |       4 |
| Lisensi dan sumber unduhan resmi  |      5 |       5 |
| **Total**                         | **23** |  **23** |

#### Code Editor

| Kriteria                          | VS Code | Notepad++ |
| --------------------------------- | ------: | --------: |
| Kesesuaian OS peserta             |       5 |         4 |
| Kemudahan instalasi dan pemakaian |       5 |         5 |
| Kebutuhan sumber daya             |       4 |         5 |
| Dukungan dokumentasi / komunitas  |       5 |         4 |
| Lisensi dan sumber unduhan resmi  |       5 |         5 |
| **Total**                         |  **24** |    **23** |

#### Kesimpulan

XAMPP dipilih sebagai server lokal karena mudah digunakan dan memiliki dokumentasi yang luas. Visual Studio Code dipilih sebagai code editor karena memiliki banyak ekstensi pendukung pengembangan web dan terminal terintegrasi.

## 3. Instalasi dan Konfigurasi Tools

### Visual Studio Code

**Versi:** 1.142.0

**Instalasi:**

- Instalasi VS Code dengan opsi:
  - Add to PATH
  - Open with Code

**Ekstensi:**

- Live Server
- PHP Intelephense
- Prettier
- ESLint
- Material Icon Theme

**Konfigurasi:**

- Auto Save: afterDelay
- Format On Save: aktif
- Tab Size: 2
- PHP Tab Size: 4

**Kendala:**
Perintah `code --version` tidak dikenali oleh terminal.

**Solusi:**
Menambahkan folder VS Code ke Environment Variable PATH hingga perintah `code --version` dapat dijalankan dengan normal.

---

### XAMPP

**Instalasi:**

- Menggunakan XAMPP sebagai web server lokal.

**Konfigurasi:**

- Menjalankan Apache melalui XAMPP Control Panel.
- Folder web ditempatkan pada:

```text
C:\xampp\htdocs
```

**Kendala:**
Menu **Open with Live Server** tidak muncul.

**Solusi:**
Mengubah workspace dari Restricted Mode menjadi Trusted sehingga ekstensi dapat dijalankan.

---

### Node.js

**Versi:** 24.22.0

**Instalasi:**

- Menggunakan Node.js versi LTS.

**Konfigurasi:**

- Menjalankan script JavaScript melalui terminal menggunakan Node.js.

**Kendala:**
Perintah `node -v` belum dikenali pada VS Code setelah instalasi.

**Solusi:**
Menutup dan membuka kembali VS Code agar PATH terbaru terbaca.

**Kendala:**
Perintah `npm -v` menampilkan pesan:

```text
running scripts is disabled on this system
```

**Solusi:**

```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

Setelah itu npm dapat digunakan dengan normal.

---

### Composer

**Versi:** 2.10.3

**Instalasi:**

- Composer dihubungkan dengan PHP XAMPP.

**Konfigurasi:**

```text
C:\xampp\php\php.exe
```

**Verifikasi:**

```bash
composer -V
```

---

### Git dan GitHub

**Versi Git:** 2.56.0.windows.2

**Instalasi:**

- Instalasi Git dengan pengaturan default.

**Konfigurasi:**

- Membuat repository GitHub:
  - portofolio-junior-web
- Menghubungkan repository lokal dengan GitHub.

**Kendala:**
Folder `hari-01-instalasi` sempat terdeteksi sebagai repository Git terpisah sehingga `git add .` gagal dijalankan.

**Solusi:**
Menghapus folder `.git` pada `hari-01-instalasi` dan menggunakan satu repository utama pada:

```text
E:\GOODIGITAL\portofolio-junior-web
```

**Hasil:**
Repository berhasil di-push ke GitHub.

## 4. Verifikasi Instalasi

### Tabel Verifikasi Versi

| Tools              | Perintah       | Versi yang Muncul | Status      |
| ------------------ | -------------- | ----------------- | ----------- |
| Visual Studio Code | code --version | 1.142.0           | ✅ Berhasil |
| PHP                | php -v         | 8.2.12            | ✅ Berhasil |
| Node.js            | node -v        | 24.22.0           | ✅ Berhasil |
| npm                | npm -v         | 11.19.1           | ✅ Berhasil |
| Composer           | composer -V    | 2.10.3            | ✅ Berhasil |
| Git                | git --version  | 2.56.0.windows.2  | ✅ Berhasil |

### Layanan Berjalan

#### Apache (XAMPP)

Status:

```text
Running
```

![Apache Running](img/KUK%202.2%20Apache%20Running.png)

#### localhost

![localhost](img/KUK%202.2%20localhost.png)

#### phpMyAdmin

![phpMyAdmin](img/KUK%202.2%20phpMyAdmin.png)

#### VS Code

![VS Code](img/KUK%202.2%20VS%20Code.png)

#### Verifikasi Terminal

```bash
code --version
php -v
node -v
npm -v
composer -V
git --version
```

#### php -v, node -v, npm -v, composer -v

![Node.js](img/KUK%202.2%20Node.js.png)

#### git --version

![git --version](img/KUK%202.2%20git.png)

### Kesimpulan

Lingkungan pengembangan berhasil dikonfigurasi. Layanan Apache berjalan dengan normal dan seluruh tools pengembangan (VS Code, PHP, Node.js, npm, Composer, dan Git) berhasil dikenali oleh terminal dan menampilkan versi aplikasi yang terpasang..

## 5. Script Uji dan Hasil Pengujian

### A. Script HTML (index.html)

Script digunakan untuk menguji tampilan halaman web dan informasi browser.

**Hasil:**

- Halaman berhasil ditampilkan melalui Live Server.
- Teks "Halo, Dunia Web!" tampil pada browser.
- Informasi browser berhasil ditampilkan.

![indeks.html](img/KUK%203.1%20indeks.html.png)

---

### B. Script JavaScript (tes.js)

Script:

```javascript
const os = require("os");

console.log("Node.js " + process.version);
console.log("OS: " + os.type() + " " + os.release());
console.log("Instalasi Node.js berhasil!");
```

Perintah:

```bash
node tes.js
```

Hasil:

```text
Node.js v24.22.0
OS: Windows_NT 10.0.26200
Instalasi Node.js berhasil!
```

![node.js](img/KUK%203.1%20node.js.png)

---

### C. Script PHP (tes.php)

Script:

```php
<?php
echo 'Instalasi Berhasil! Lingkungan pemrograman siap digunakan.<br>';
echo 'Versi PHP: ' . PHP_VERSION . '<br>';
echo 'Server: ' . $_SERVER['SERVER_SOFTWARE'] . '<br>';
echo 'Metode request: ' . $_SERVER['REQUEST_METHOD'] . '<br>';
echo 'Waktu server: ' . date('d-m-Y H:i:s');
```

URL:

```text
http://localhost/hari-01/tes.php
```

Hasil:

```text
Instalasi Berhasil! Lingkungan pemrograman siap digunakan.
Versi PHP: 8.2.12
Server: Apache/2.4.58 (Win64) OpenSSL/3.1.3 PHP/8.2.12
Metode request: GET
Waktu server: ...
```

![node.js](img/KUK%203.1%20tes.php.png)

---

### D. Pengamatan Request Lokal

#### DevTools Network

- Request Method: GET
- Status Code: 200 OK
- Remote Address: [::1]:80
- Server: Apache/2.4.58 (Win64) OpenSSL/3.1.3 PHP/8.2.12
- Content-Type: text/html; charset=UTF-8

![node.js](img/KUK%203.1%20devtools.png)

#### Pengujian curl

Perintah:

```bash
curl -i http://localhost/hari-01/tes.php
```

Hasil:

```text
HTTP/1.1 200 OK
Server: Apache/2.4.58 (Win64) OpenSSL/3.1.3 PHP/8.2.12
Content-Type: text/html; charset=UTF-8
```

Perintah:

```bash
curl -I http://localhost/hari-01/index.html
```

Hasil:

```text
HTTP/1.1 200 OK
Content-Type: text/html
```

Perintah:

```bash
curl -I http://localhost/hari-01/tidak-ada.html
```

Hasil:

```text
HTTP/1.1 404 Not Found
```

### Kesimpulan KUK 3.2

- Teks "Instalasi Berhasil!" tampil
- Versi PHP terbaca
- Informasi Apache terbaca
- Script Node.js berhasil dijalankan
- Status 200 OK untuk `tes.php`
- Status 200 OK untuk `index.html`
- Status 404 Not Found untuk `tidak-ada.html`

## Repository GitHub

Tautan repositori:

https://github.com/amribaros15/portofolio-junior-web

Status:

- Repository berhasil dibuat
- Minimal 3 commit bermakna berhasil dibuat
- Seluruh dokumen PBL Hari 1 berhasil diunggah
