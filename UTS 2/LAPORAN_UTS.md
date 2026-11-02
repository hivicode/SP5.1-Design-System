# LAPORAN LENGKAP UJIAN TENGAH SEMESTER (UTS)
## MATA KULIAH: STYLED DESIGN / DESIGN SYSTEM
### PROYEK: COOLYEAH (RUANGKAMPUS) — PORTAL AKADEMIK MAHASISWA

---

## 1. PENDAHULUAN DAN KONTEKS APLIKASI
* **Nama Produk**: CoolYeah (RuangKampus)
* **Jenis Aplikasi**: Portal Informasi Akademik Mahasiswa
* **Platform**: Next.js 15+ (App Router), React 19, Vanilla CSS Modules & CSS Custom Properties
* **Tujuan**: Menyediakan portal terpadu bagi mahasiswa untuk memantau jadwal kuliah harian, warta pengumuman resmi, transkrip nilai akademik, serta tagihan administrasi perkuliahan dalam satu antarmuka berbahasa Indonesia yang bersih, terstruktur, responsif, dan kontekstual.
* **Identitas Visual**: Biru Akademik (`#1A56DB`) dipadukan dengan Aksen Kuning/Amber (`#F59E0B`).

---

## 2. PERANCANGAN DESIGN TOKENS
Sesuai dengan ketentuan revisi, aplikasi menggunakan sistem token CSS murni (*CSS Custom Properties*) yang didefinisikan pada `src/styles/tokens.css`:

### A. Tipografi — Arial (Strictly No Google Fonts)
* **Font Utama**: `Arial, Helvetica, sans-serif`
* **Variasi Font-Weight**:
  * 400: Regular
  * 500: Medium
  * 600: Semibold
  * 700: Bold
* **Hierarki Ukuran**:
  * `xs` (12px), `sm` (13.5px), `base` (15px), `md` (17px), `lg` (20px), `xl` (24px), `2xl` (28px).

### B. Palet Warna (Identitas Biru - Kuning)
* **Primary (Biru)**: `--color-primary: #1A56DB`, Hover: `#1342AC`, Light: `#EBF2FE`
* **Secondary (Kuning)**: `--color-secondary: #F59E0B`, Hover: `#D97706`, Light: `#FEF3C7`
* **Background & Surface**:
  * Background: `--color-bg: #F4F6F9`
  * Surface Card: `--color-surface: #FFFFFF`
  * Subtle Surface: `--color-surface-subtle: #EEF2F6`
* **Status Semantic**:
  * Success: `--color-success: #16A34A`
  * Warning: `--color-warning: #D97706`
  * Danger: `--color-danger: #DC2626`
  * Information: `--color-info: #0284C7`

### C. Skala Spasial & Border Radius
* Spacing: 4px, 8px, 12px, 16px, 24px, 32px, 48px.
* Radius: 4px, 6px, 8px, 12px, 9999px.

---

## 3. IMPLEMENTASI 6 REUSABLE COMPONENTS
Berikut adalah 6 komponen reusable yang dibangun secara modular dan telah diimplementasikan:

1. **Button (`Button.jsx` & `Button.module.css`)**
   * *Block*: `.button`
   * *Variasi Modifier*: `.button--primary`, `.button--secondary` (kuning), `.button--outline`, `.button--ghost`
   * *Ukuran Modifier*: `.button--sm`, `.button--md`, `.button--lg`
   * *State*: `:hover`, `:focus-visible`, `:disabled`

2. **Card (`Card.jsx` & `Card.module.css`)**
   * *Block*: `.card`
   * *Variasi Modifier*: `.card--default`, `.card--subtle`, `.card--highlight` (aksen border biru kiri)
   * *Padding Modifier*: `.card--pad-sm`, `.card--pad-md`, `.card--pad-lg`
   * *Elements*: `.card__header`, `.card__title`, `.card__subtitle`, `.card__body`, `.card__footer`

3. **Input (`Input.jsx` & `Input.module.css`)**
   * *Block*: `.formField`
   * *Variasi Modifier*: `.formField--search` (dengan ikon pencarian terintegrasi), `.formField--error`, `.formField--disabled`
   * *Elements*: `.label`, `.inputWrapper`, `.inputControl`, `.searchIcon`, `.errorText`
   * *Penerapan Kontekstual*: Search bar hanya diletakkan pada halaman pencarian data (Jadwal Kuliah & Pengumuman), sedangkan halaman Beranda, Transkrip, dan Administrasi menggunakan tombol aksi kontekstual. Kedua variasi (Default & Search) tetap ditampilkan secara eksplisit pada card Showcase Komponen Reusable UTS.

4. **Badge (`Badge.jsx` & `Badge.module.css`)**
   * *Block*: `.badge`
   * *Variasi Modifier*:
     - `.badge--success` (Hijau)
     - `.badge--warning` (Kuning)
     - `.badge--danger` (Merah)
     - `.badge--neutral` (Abu-abu)
     - `.badge--information` (Biru)
   * *Elements*: `.badge__dot`, `.badge__label`

5. **Container (`Container.jsx` & `Container.module.css`)**
   * *Block*: `.container`
   * *Variasi Modifier*: `.container--sm`, `.container--md`, `.container--lg`, `.container--full`
   * *Fungsi*: Memastikan keseragaman lebar konten dan padding tepi pada setiap viewport.

6. **SectionHeader (`SectionHeader.jsx` & `SectionHeader.module.css`)**
   * *Block*: `.sectionHeader`
   * *Elements*: `.sectionHeader__info`, `.sectionHeader__title`, `.sectionHeader__desc`, `.sectionHeader__action`
   * *Fungsi*: Menyeragamkan header judul bagian konten lengkap dengan tombol aksi pendukung.

---

## 4. PENERAPAN JSX/REACT, METODOLOGI BEM, DAN MULTI-VIEW PORTAL
* **Struktur Halaman Interaktif (Multi-View)**:
  * **Beranda**: Ringkasan IPK/SKS, jadwal hari ini, pengumuman terbaru, dan showcase 6 komponen UTS.
  * **Jadwal Kuliah**: Dilengkapi filter hari (Senin–Jumat) dan search bar filter dosen/mata kuliah.
  * **Pengumuman**: Feed warta akademik lengkap dengan search bar filter berita.
  * **Riwayat Akademik**: Tabel transkrip nilai mahasiswa resmi dan tombol unduh PDF.
  * **Administrasi**: Tabel rincian tagihan UKT dan status kartu ujian UTS.
* **Standar BEM Murni**: Setiap class CSS mengikuti format `block`, `block__element`, dan `block--modifier` tanpa kebocoran style lintas modul.

---

## 5. HASIL PENGUJIAN RESPONSIVE DESIGN
Pengujian dilakukan pada 3 standar ukuran viewport dan tangkapan layar disimpan secara nyata:
1. **Desktop (1440 × 900 px)**: Layout multi-kolom yang luas dengan sidebar navigasi tetap di sisi kiri.
2. **Tablet (768 × 1024 px)**: Penyesuaian grid ringkasan statistik menjadi 2 kolom dan tata letak konten adaptif.
3. **Mobile (390 × 844 px)**: Sidebar bertransformasi menjadi drawer tersembunyi dengan trigger tombol menu, komponen touch-friendly, dan single-column flow.

*File tangkapan layar aktual tersimpan pada*:
* `screenshots/desktop.png`
* `screenshots/tablet.png`
* `screenshots/mobile.png`

---

## 6. KESIMPULAN
Aplikasi CoolYeah / RuangKampus telah berhasil memenuhi seluruh syarat revisi final UTS:
* Tipografi eksklusif menggunakan **Arial, Helvetica, sans-serif** tanpa Google Fonts.
* Seluruh antarmuka menggunakan **Bahasa Indonesia** natural.
* Enam komponen reusable terbukti fungsional dengan seluruh variasinya.
* Penempatan search bar disesuaikan secara fungsional berdasarkan konteks halaman.
* Telah diverifikasi dan lulus proses build Next.js (`npm run build`) tanpa error.
