# Proyek 4 - Buku Tamu Berbasis File

## Deskripsi

Aplikasi buku tamu berbasis PHP tanpa database. Data tamu disimpan ke file JSON dan dapat dicari berdasarkan nama.

## Struktur Folder

```text
proyek-4-buku-tamu
│
├── index.php
├── functions.php
├── admin.php
├── export-csv.php
├── README.md
│
└── data
    ├── .htaccess
    ├── tamu.json
    └── ip-log.json
```

## Cara Menjalankan

1. Jalankan Apache melalui XAMPP.
2. Simpan proyek di folder htdocs.
3. Buka browser.
4. Akses: 
  - Buku tamu  
  http://localhost/hari-08/proyek-4-buku-tamu/index.php
  - Admin  
  http://localhost/hari-08/proyek-4-buku-tamu/admin.php

## Fitur

- Validasi data tamu.
- Penyimpanan data ke JSON.
- Pencarian berdasarkan nama.
- Pesan terbaru tampil di bagian atas.
- Paginasi data.
- Pembatasan pengiriman pesan 30 detik per IP.
- Hapus pesan melalui halaman admin.
- Ekspor data CSV.

## Dokumentasi Screenshot

### Form buku tamu.
![Screenshots-01](screenshots/bukutamu-01.png)
### Validasi nama.
![Screenshots-01](screenshots/bukutamu-02.png)
### Validasi email.
![Screenshots-01](screenshots/bukutamu-03.png)
### Validasi pesan.
![Screenshots-01](screenshots/bukutamu-04.png)
### Pesan berhasil disimpan.
![Screenshots-01](screenshots/bukutamu-05.png)
### Isi file tamu.json.
![Screenshots-01](screenshots/bukutamu-06.png)
### Daftar tamu.
![Screenshots-01](screenshots/bukutamu-07.png)
### Hasil pencarian nama.
![Screenshots-01](screenshots/bukutamu-08a.png)
![Screenshots-01](screenshots/bukutamu-08b.png)
### Paginasi daftar tamu.
![Screenshots-01](screenshots/bukutamu-09.png)
### Peringatan batas 30 detik per IP.
![Screenshots-01](screenshots/bukutamu-10.png)
### Halaman admin.
![Screenshots-01](screenshots/admin-01.png)
### Konfirmasi hapus pesan.
![Screenshots-01](screenshots/hapus-01.png)
### Data setelah dihapus.
![Screenshots-01](screenshots/hapus-02.png)
### Ekspor data CSV.
![Screenshots-01](screenshots/csv-01.png)
![Screenshots-01](screenshots/csv-02.png)
### File tamu.csv hasil ekspor.
![Screenshots-01](screenshots/csv-03.png)