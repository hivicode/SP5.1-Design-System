# FINAL PROJECT ADJUSTMENT — COOLYEAH

Terapkan revisi berikut pada project yang sedang dikerjakan. Pertahankan seluruh struktur, fungsionalitas, komponen, design tokens, dan identitas warna biru-kuning yang telah ditentukan sebelumnya.

## 1. TYPOGRAPHY — ARIAL

Gunakan font Arial sebagai font utama seluruh aplikasi.

Ketentuan:
- Font utama: Arial.
- Fallback: Helvetica, sans-serif.
- Jangan menggunakan Google Fonts.
- Jangan menggunakan font serif.
- Jangan menggunakan font display dekoratif.
- Jangan mencampur banyak keluarga font.

Terapkan melalui CSS:

font-family: Arial, Helvetica, sans-serif;

Gunakan variasi font-weight:
- 400: Regular
- 500: Medium (gunakan fallback terdekat jika tidak tersedia)
- 600: Semibold (gunakan fallback terdekat jika tidak tersedia)
- 700: Bold

Buat hierarki tipografi berdasarkan ukuran, ketebalan, dan line-height yang konsisten.

## 2. LANGUAGE

Seluruh antarmuka aplikasi menggunakan Bahasa Indonesia.

Contoh:
- Dashboard → Beranda
- Schedule → Jadwal Kuliah
- Announcements → Pengumuman
- Academic Records → Riwayat Akademik
- Tuition → Administrasi
- Search → Cari
- See All → Lihat Semua
- Upcoming → Akan Datang
- Completed → Selesai

Ketentuan:
- Gunakan bahasa Indonesia yang natural dan mudah dipahami mahasiswa.
- Hindari lorem ipsum.
- Hindari teks bahasa Inggris yang tidak diperlukan.
- Nama komponen, file, props, function, dan variabel dalam source code tetap menggunakan Bahasa Inggris.
- Dokumentasi, laporan, dan slide presentasi menggunakan Bahasa Indonesia.

## 3. KONFIRMASI KOMPONEN UTS

Pastikan minimal enam komponen reusable berikut benar-benar diimplementasikan:

1. Button
   Variasi primary, secondary, outline, ghost.

2. Card
   Digunakan pada beberapa konteks informasi.

3. Input
   Variasi default dan search.

4. Badge
   Variasi success, warning, danger, neutral, information.

5. Container
   Mengatur lebar dan konsistensi konten.

6. SectionHeader
   Judul, deskripsi, dan action opsional.

Gunakan React Functional Components, JSX, dan props.

Pastikan terdapat pemisahan yang jelas antara komponen, data, dan halaman.

## 4. KONFIRMASI IMPLEMENTASI CSS DAN BEM

Gunakan plain CSS dengan:
- CSS Custom Properties.
- Flexbox.
- CSS Grid.
- Media Queries.
- Pseudo-classes.
- Hover dan focus states.

Gunakan metodologi BEM secara konsisten:

.block
.block__element
.block--modifier

Jangan mengganti BEM dengan pendekatan penamaan class lainnya.

## 5. SCREENSHOT RESPONSIVE TESTING

Siapkan screenshot hasil implementasi pada minimal dua ukuran layar.

Utamakan tiga ukuran:
- Desktop: 1440 × 900.
- Tablet: 768 × 1024.
- Mobile: 390 × 844.

Simpan screenshot aktual ke folder:

screenshots/
  desktop.png
  tablet.png
  mobile.png

Pastikan screenshot diambil dari halaman yang benar-benar berjalan, bukan mockup.

Jangan mengklaim pengujian berhasil sebelum benar-benar memeriksanya.

## 6. LAPORAN UTS

Setelah implementasi selesai, buat laporan ringkas berbahasa Indonesia sebanyak 3–5 halaman.

Isi laporan:

1. Pendahuluan dan konteks aplikasi RuangKampus.
2. Perancangan design tokens (warna, tipografi, spacing).
3. Implementasi reusable components.
4. Penerapan JSX/React dan metodologi BEM.
5. Teknik styling yang digunakan.
6. Hasil pengujian responsive design beserta screenshot.

Gunakan bahasa formal akademik yang natural dan mudah dipahami.

## 7. SLIDE PRESENTASI

Buat presentasi sebanyak 5–8 slide menggunakan Bahasa Indonesia.

Urutan materi yang disarankan:

1. Cover dan identitas project.
2. Latar belakang dan konsep aplikasi.
3. Design system dan design tokens.
4. Reusable components dan variasinya.
5. Implementasi JSX/React dan BEM.
6. Responsive design dan hasil pengujian.
7. Kesimpulan.

Sesuaikan materi dengan durasi presentasi 7–10 menit.

## 8. FINAL VALIDATION

Sebelum project dinyatakan selesai, pastikan:

- Project dapat dijalankan melalui npm run dev.
- Tidak terdapat error build.
- Komponen reusable benar-benar digunakan.
- Variasi komponen dapat diperlihatkan.
- Design tokens diterapkan secara konsisten.
- Penamaan BEM benar.
- Responsive layout sudah diperiksa.
- Screenshot aktual tersedia.
- Laporan berjumlah 3–5 halaman.
- Slide berjumlah 5–8 halaman.
- Semua dokumentasi sesuai dengan implementasi sebenarnya.

Jangan mengorbankan persyaratan akademik demi dekorasi visual. Prioritaskan kualitas implementasi, konsistensi, keterbacaan, dan kemudahan menjelaskan source code saat presentasi.

