# Lembar Kerja 1

## 1. Status code dan header server dari example.com

- Status Code: 200 OK
- Header Server: cloudflare

## 2. IP hasil nslookup dan waktu rata-rata ping

- IPv4:
  - 172.66.147.243
  - 104.20.23.154
- IPv6:
  - 2606:4700:10::6814:179a
  - 2606:4700:10::ac42:93f3
- Waktu Minimum: 30 ms
- Waktu Maksimum: 54 ms
- Waktu Rata-Rata: 37 ms
- Packet Loss: 0%
- Jumlah Hop Tracert: 12 hop
- Hasil curl -I:
  - HTTP/1.1 200 OK

## 3. Jumlah request dan total ukuran pada situs yang diamati

Situs yang diamati:

https://smkn2solo.sch.id/

- Total Request: 66
- Data Transfer: 2.9 MB
- Resources: 3.9 MB
- Finish: 25.47 s
- HTML: 2
- CSS: 30
- JavaScript: 19
- Gambar: 15

## 4. Arti status 404 dan penyebabnya

HTTP Status Code 404 Not Found menunjukkan bahwa server berhasil dihubungi, tetapi halaman atau dokumen yang diminta tidak ditemukan.

## 5. Hasil ping belajar.local dan alasannya

- IP Tujuan: 127.0.0.1 (localhost)
- Waktu Respon: <1 ms
- Packet Loss: 0%

Penjelasan:

- Domain belajar.local diarahkan ke 127.0.0.1 melalui file hosts.
- File hosts diperiksa pada tahap resolusi lokal sebelum sistem menghubungi DNS server.
- Karena data ditemukan pada file hosts, pencarian DNS eksternal tidak dilakukan.
- Waktu respon sangat cepat karena koneksi dilakukan ke komputer sendiri.

## 6. Bagian URL: skema, host, path, dan query

URL:

https://smkn2solo.sch.id/category/berita/

- Skema (Protocol): https
- Host: smkn2solo.sch.id
- Path: /category/berita/
- Query: tidak ada