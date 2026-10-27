# Bilangan Ganjil/Genap dan Positif/Negatif/Nol

Mulai

Input bilangan

Jika bilangan > 0
    status = Positif
Jika bilangan < 0
    status = Negatif
Jika bilangan = 0
    status = Nol

Jika bilangan % 2 = 0
    jenis = Genap
Jika tidak
    jenis = Ganjil

Tampilkan status
Tampilkan jenis

Selesai

# Tarif Parkir

Mulai

Input lamaParkir

Jika lamaParkir <= 2
    tarif = 3000
Jika tidak
    tarif = 3000 + ((lamaParkir - 2) × 2000)

Jika tarif > 15000
    tarif = 15000

Tampilkan tarif

Selesai

# Kalkulator Sederhana

Mulai

Input angka1
Input operator
Input angka2

Switch operator

    +
        hasil = angka1 + angka2

    -
        hasil = angka1 - angka2

    *
        hasil = angka1 × angka2

    /
        Jika angka2 = 0
            Tampilkan "Tidak bisa dibagi nol"
        Jika tidak
            hasil = angka1 / angka2

Tampilkan hasil

Selesai

# Penentu BMI

Mulai

Input berat
Input tinggi

BMI = berat / (tinggi × tinggi)

Jika BMI < 18.5
    kategori = Kurang

Jika BMI >= 18.5 dan BMI < 25
    kategori = Normal

Jika BMI >= 25 dan BMI < 30
    kategori = Lebih

Jika BMI >= 30
    kategori = Obesitas

Tampilkan BMI
Tampilkan kategori

Selesai

