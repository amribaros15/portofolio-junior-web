# Aplikasi Konsol Pengolah Nilai

Aplikasi berbasis Node.js untuk mengelola data nilai siswa melalui terminal. Program dapat menyimpan data siswa, menampilkan statistik nilai, menentukan grade dan status kelulusan, menampilkan ranking siswa, serta menyajikan histogram grade.

## Fitur

- Input nilai siswa
- Validasi nama dan nilai
- Menampilkan statistik nilai
- Menampilkan predikat siswa
- Menampilkan ranking siswa
- Menampilkan histogram grade
- Menu interaktif berbasis terminal

## Aturan Penilaian

### Grade

- A : ≥ 85
- B : 70 - 84
- C : 55 - 69
- D : < 55

### Status Kelulusan

- Lulus : ≥ 70
- Tidak Lulus : < 70

## Cara Menjalankan

Pastikan Node.js telah terpasang pada komputer.

Buka terminal pada folder proyek, kemudian jalankan:

```bash
node pengolah-nilai.js
```

## Menu Program

```text
===== PENGOLAH NILAI =====

1. Input nilai siswa
2. Tampilkan statistik
3. Tampilkan predikat per siswa
4. Ranking siswa
5. Histogram grade
6. Keluar
```

## Contoh Keluaran

### Statistik

```text
===== STATISTIK =====

Rata-rata         : 80.27
Nilai tertinggi   : 100
Nilai terendah    : 40
Jumlah lulus      : 8
Jumlah tidak lulus: 3
```

### Predikat Siswa

```text
===== PREDIKAT SISWA =====

Amri | Nilai: 97 | Grade: A | Lulus
Badru | Nilai: 100 | Grade: A | Lulus
Abdul | Nilai: 95 | Grade: A | Lulus
Tamam | Nilai: 87 | Grade: A | Lulus
Azzam | Nilai: 75 | Grade: B | Lulus
Yaqin | Nilai: 56 | Grade: C | Tidak Lulus
Quo | Nilai: 64 | Grade: C | Tidak Lulus
Haura | Nilai: 99 | Grade: A | Lulus
Aina | Nilai: 86 | Grade: A | Lulus
Levan | Nilai: 84 | Grade: B | Lulus
Dia | Nilai: 40 | Grade: D | Tidak Lulus
```

### Ranking Siswa

```text
===== RANKING SISWA =====

1. Badru - 100
2. Haura - 99
3. Amri - 97
4. Abdul - 95
5. Tamam - 87
6. Aina - 86
7. Levan - 84
8. Azzam - 75
9. Quo - 64
10. Yaqin - 56
11. Dia - 40
```

### Histogram Grade

```text
===== HISTOGRAM GRADE =====

Grade A: ****** (6)
Grade B: ** (2)
Grade C: ** (2)
Grade D: * (1)
```

## Struktur Data

Program menggunakan dua array untuk menyimpan data siswa:

```javascript
daftarNama[]
daftarNilai[]
```

Setiap indeks merepresentasikan data siswa yang sama.

Contoh:

```javascript
daftarNama = ["Amri", "Badru"];
daftarNilai = [97, 100];
```

## Teknologi

- JavaScript
- Node.js
- readline/promises

## Pengembang

Dibuat sebagai Project Based Learning (PBL) Hari 4 pada pelatihan Junior Web Programmer.