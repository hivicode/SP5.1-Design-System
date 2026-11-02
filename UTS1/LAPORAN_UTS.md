# LAPORAN LENGKAP UJIAN TENGAH SEMESTER (UTS)
## MATA KULIAH: STYLED DESIGN / DESIGN SYSTEM
### PROYEK: TUGAS.IN — STUDENT TASK MANAGEMENT SYSTEM

---

## 1. IDENTITAS PROYEK & LATAR BELAKANG
* **Nama Produk**: Tugas.in
* **Tagline**: *"Atur tugas, fokus masa depan."*
* **Platform**: Web Application (Next.js 15+ App Router, React 19, Vanilla CSS Modules)
* **Target Pengguna**: Mahasiswa perguruan tinggi
* **Latar Belakang Masalah**:
  Banyak mahasiswa mengalami kendala dalam mengelola banyaknya tugas dari beragam mata kuliah dengan tenggat waktu yang saling berhimpitan. Sering kali tugas terlewat karena tidak adanya sistem prioritas yang jelas. Tugas.in dibangun untuk memberikan ruang kerja akademik yang tenang, fokus, dan terstruktur tanpa distraksi visual.

---

## 2. ART DIRECTION & DESIGN TOKENS
Aplikasi dirancang dengan pendekatan **Modern Academic Productivity with Editorial Influence**, menghindari gaya "Generic AI Dashboard" (menolak gradien ungu/biru neon, glassmorphism berlebihan, dan bayangan tebal).

### Daftar Token Desain (`src/styles/tokens.css`):
1. **Warna (Colors)**:
   * Brand Primary: `#355E4B` (Muted Forest Green)
   * Primary Hover: `#284A3A`
   * Primary Light: `#EBF3EE`
   * Background: `#F7F7F2` (Warm Off-White)
   * Surface Card: `#FFFFFF`
   * Main Text: `#252923` (Charcoal)
   * Secondary Text: `#858A82` (Muted Gray)
   * Border: `#E5E7E1`
   * Feedback/Status:
     - Warning: `#E6AA4B` (Warm Amber - Belum Mulai)
     - Info: `#507D9E` (Academic Slate - Sedang Dikerjakan)
     - Success: `#4F936C` (Muted Green - Selesai)
     - Danger: `#D96868` (Muted Red - Prioritas Tinggi / Mendesak)
2. **Tipografi (Typography)**:
   * Font Family: `Plus Jakarta Sans`, sans-serif.
   * Ukuran Modular: `xs` (12px), `sm` (13.5px), `base` (15px), `md` (17px), `lg` (20px), `xl` (24px), `2xl` (30px).
   * Bobot (Font Weight): Regular (400), Medium (500), Semibold (600), Bold (700).
3. **Spasial (Spacing)**:
   * Skala: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px.
4. **Border Radius & Shadows**:
   * Radius: 4px (xs), 6px (sm), 8px (md), 12px (lg), 9999px (full).
   * Shadows: `subtle` (0 1px 2px rgba(37,41,35,0.04)), `sm` (0 2px 4px rgba(37,41,35,0.05)).

---

## 3. IMPLEMENTASI METODOLOGI BEM
Setiap elemen diatur secara ketat dengan aturan BEM (*Block, Element, Modifier*):

| Komponen | Block | Elements | Modifiers |
| :--- | :--- | :--- | :--- |
| **Button** | `.button` | `.button__icon`, `.button__text` | `--primary`, `--secondary`, `--outline`, `--danger`, `--sm`, `--md`, `--lg`, `--full`, `--disabled` |
| **Badge** | `.badge` | `.badge__dot`, `.badge__label` | `--pending`, `--in-progress`, `--completed`, `--priority-high`, `--priority-medium`, `--priority-low`, `--neutral`, `--sm`, `--md` |
| **Input** | `.formField` | `.label`, `.inputControl`, `.errorText`, `.hintText` | `--error`, `--disabled` |
| **Card** | `.card` | `.card__header`, `.card__title`, `.card__subtitle`, `.card__body`, `.card__footer` | `--default`, `--subtle`, `--flat`, `--clickable`, `--pad-sm`, `--pad-md`, `--pad-lg` |
| **Container** | `.container` | - | `--sm`, `--md`, `--lg`, `--full`, `--bordered` |
| **Sidebar** | `.sidebar` | `.sidebar__header`, `.sidebar__brand`, `.sidebar__nav`, `.sidebar__item`, `.sidebar__link` | `--item--active`, `--mobileOpen` |
| **TaskItem** | `.taskItem` | `.taskItem__checkbox`, `.taskItem__title`, `.taskItem__desc`, `.taskItem__footer`, `.taskItem__actions` | `--completed`, `--urgent` |

---

## 4. FITUR DAN FUNGSIONALITAS
1. **Pencatatan Tugas Mandiri**: Pengguna dapat memasukkan tugas baru dengan mengisi judul, mata kuliah, tenggat waktu, prioritas, dan status.
2. **Dynamic Live Statistics**: Perubahan status tugas langsung memperbarui counter *Total Tugas*, *Belum Dikerjakan*, *Sedang Dikerjakan*, dan *Selesai*.
3. **Pencarian & Multi-Filter**: Pengguna dapat mencari berdasarkan kata kunci teks, menyaring berdasarkan status pengerjaan, atau memfilter prioritas tinggi.
4. **Perhitungan Tenggat Terdekat**: Sistem secara otomatis menghitung selisih hari menuju deadline (*H-X hari*) dan mengurutkannya secara kronologis.
5. **Persistensi Data**: Terintegrasi `localStorage` peramban sehingga data tugas tidak tereset saat halaman di-refresh.

---

## 5. PENGUJIAN TAMPILAN RESPONTIF
* **Desktop (1440 × 900 px)**: Layout multi-kolom yang luas dengan sidebar navigasi tetap di sisi kiri, area tugas di tengah, dan tenggat terdekat di sisi kanan.
* **Mobile (375 × 812 px)**: Tata letak berubah menjadi single-column yang nyaman disentuh, tombol interaksi disesuaikan untuk layar sentuh, dan sidebar berubah menjadi navigation drawer dengan backdrop overlay.

---

## 6. KESIMPULAN
Aplikasi Tugas.in berhasil mengimplementasikan prinsip-prinsip *Design System* modern:
* Konsistensi token yang terpusat.
* Komponen BEM modular yang reusable dan bebas konflik gaya CSS.
* Arsitektur kode React 19 yang bersih dan mudah dipelihara.
* Telah lolos kompilasi penuh (`npm run build`).

