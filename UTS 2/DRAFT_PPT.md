# DRAF MATERI SLIDE PRESENTASI (7 SLIDE)
## PROYEK: COOLYEAH (RUANGKAMPUS) — PORTAL AKADEMIK MAHASISWA
### Mata Kuliah: Styled Design / Design System (UTS)

---

### SLIDE 1: COVER & IDENTITAS PROYEK
- **Judul**: CoolYeah (RuangKampus)
- **Sub-judul**: Implementasi Mini Design System Portal Akademik Berbasis BEM & Next.js
- **Identitas Visual**: Biru Akademik (`#1A56DB`) & Kuning Amber (`#F59E0B`)
- **Penyusun**: Mahasiswa Informatika

---

### SLIDE 2: LATAR BELAKANG & KONSEP MULTI-VIEW
- **Latar Belakang**: Kebutuhan portal akademik mahasiswa yang terstruktur, responsif, dan mudah dipindai tanpa distraksi visual.
- **Konsep Multi-View Funagsional**:
  - Beranda: Ringkasan akademik, jadwal perkuliahan hari ini, dan pengumuman terbaru.
  - Jadwal Kuliah: Jadwal mingguan dengan filter hari (Senin–Jumat) & pencarian instan.
  - Pengumuman: Feed berita kampus dan beasiswa dengan fitur filter kata kunci.
  - Riwayat Akademik: Transkrip nilai resmi dan status kelulusan mata kuliah.
  - Administrasi: Status pembayaran UKT dan pencetakan Kartu Ujian UTS.
- **Bahasa Antarmuka**: 100% Bahasa Indonesia natural.

---

### SLIDE 3: DESIGN SYSTEM & DESIGN TOKENS
- **Tipografi**: Murni menggunakan `Arial, Helvetica, sans-serif` dengan variasi ketebalan 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold) tanpa Google Fonts.
- **Palet Warna**:
  - `Primary`: Biru Kampus (`#1A56DB`) & Deep Blue Hover (`#1342AC`)
  - `Secondary`: Kuning Amber (`#F59E0B`)
  - `Background`: Clean Light Gray (`#F4F6F9`)
  - `Surface`: White (`#FFFFFF`)
  - `Status`: Hijau (Success), Amber (Warning), Merah (Danger), Sky Blue (Information).
- **Spacing**: Skala modular 4px hingga 48px terpusat pada file `tokens.css`.

---

### SLIDE 4: 6 REUSABLE COMPONENTS & PENERAPAN KONTEKSTUAL
1. **Button**: Varian `primary`, `secondary` (kuning), `outline`, `ghost`, ukuran `sm`, `md`, `lg`.
2. **Card**: Varian `default`, `subtle`, `highlight` (aksen border biru kiri).
3. **Input**: Varian `default` dan `search`. Diterapkan secara kontekstual (hanya pada halaman pencarian jadwal & pengumuman) dan dishowcase lengkap di Beranda.
4. **Badge**: Varian `success`, `warning`, `danger`, `neutral`, `information`.
5. **Container**: Ukuran `sm`, `md`, `lg`, `full` untuk konsistensi layout.
6. **SectionHeader**: Struktur judul, deskripsi, dan tombol aksi opsional.

---

### SLIDE 5: ARSITEKTUR REACT 19 & METODOLOGI BEM
- **Pemisahan Logika & Tampilan**:
  - Data mock terisolasi di `src/data/campusData.js`.
  - Komponen modular tersimpan di `src/components/`.
  - Halaman terintegrasi di `src/app/page.jsx`.
- **Standar Penamaan BEM Murni**:
  - Pola `.block`, `.block__element`, `.block--modifier`.
  - Menggunakan CSS Modules murni untuk isolasi style dan mencegah konflik class.

---

### SLIDE 6: RESPONSIVE DESIGN & HASIL PENGUJIAN
- **Pengujian Multi-Device**:
  - **Desktop (1440 × 900)**: Layout 2 kolom lengkap dengan sidebar statis.
  - **Tablet (768 × 1024)**: Tata letak adaptif 2-kolom pada ringkasan statistik.
  - **Mobile (390 × 844)**: Sidebar beralih menjadi drawer responsif dengan overlay backdrop; card tersusun vertikal yang ramah sentuhan.
- **Validasi Build**: Sukses 100% tanpa error via `npm run build`.

---

### SLIDE 7: KESIMPULAN
- Memenuhi seluruh revisi akademik UTS:
  1. Tipografi Arial konsisten tanpa ketergantungan Google Fonts.
  2. Implementasi identitas warna biru-kuning secara harmonis.
  3. Enam komponen reusable terbukti fungsional dengan variasi lengkap.
  4. Penempatan search bar & action buttons tepat guna sesuai konteks halaman.
  5. Kode bersih, terstruktur, dan siap dipresentasikan di hadapan penguji.
