# LAPORAN TUGAS UTS: TUGAS.IN DESIGN SYSTEM

## 1. Konteks Aplikasi
- **Nama Aplikasi**: Tugas.in
- **Tagline**: *"Atur tugas, fokus masa depan."*
- **Target Pengguna**: Mahasiswa perguruan tinggi
- **Tujuan**: Platform manajemen tugas akademik terstruktur, melacak tenggat waktu (deadline), menetapkan prioritas, dan memantau progres produktivitas mahasiswa secara real-time.
- **Bahasa & Framework**: Next.js 15+ (App Router), React 19, JavaScript (JSX), CSS Modules & BEM murni (mengikuti standar proyek di `help/dilla`).

---

## 2. Visual Art Direction & Design Tokens
Menghindari tampilan generic AI dashboard (tanpa gradien ungu-biru, tanpa glassmorphism berlebihan, tanpa card identik berulang).
Menggunakan arah desain: **Modern Academic Productivity with Editorial Influence**.

Token tersimpan di `src/styles/tokens.css`:
- **Warna Utama**: Muted Forest Green (`#355E4B`), Hover (`#284A3A`)
- **Background**: Warm Off-White (`#F7F7F2`)
- **Permukaan (Surface)**: White (`#FFFFFF`) & Subtle Tint (`#F1F2EC`)
- **Teks**: Charcoal (`#252923`), Muted Gray (`#858A82`)
- **Border**: Soft Gray (`#E5E7E1`)
- **Aksen & Status**: Soft Orange (`#E89A52`), Muted Green (`#4F936C`), Warm Amber (`#E6AA4B`), Muted Red (`#D96868`)
- **Tipografi**: Plus Jakarta Sans, perjenjangan modular (`--font-size-xs` hingga `--font-size-2xl`), font-weight 400/500/600/700.
- **Spacing**: Skala 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px.

---

## 3. Komponen Reusable (BEM Methodology)
Semua komponen dibangun dengan pendekatan modular React Functional Component dan CSS Modules murni:

1. **`Button`** (`src/components/Button.jsx` & `Button.module.css`):
   - Block: `.button`
   - Modifiers Variant: `.button--primary`, `.button--secondary`, `.button--outline`, `.button--ghost`, `.button--danger`
   - Modifiers Ukuran: `.button--sm`, `.button--md`, `.button--lg`, `.button--full`
   - State: `.button--disabled`, `:hover`, `:focus-visible`
   
2. **`Badge`** (`src/components/Badge.jsx` & `Badge.module.css`):
   - Block: `.badge`
   - Modifiers Status: `.badge--pending`, `.badge--in-progress`, `.badge--completed`
   - Modifiers Prioritas: `.badge--priority-high`, `.badge--priority-medium`, `.badge--priority-low`, `.badge--neutral`

3. **`Input`** (`src/components/Input.jsx` & `Input.module.css`):
   - Block: `.formField`
   - Elements: `.label`, `.inputControl`, `.errorText`, `.hintText`
   - Modifiers: `.formField--error`, `.formField--disabled`
   - Mendukung polymorphic form control (`input`, `textarea`, `select`).

4. **`Card`** (`src/components/Card.jsx` & `Card.module.css`):
   - Block: `.card`
   - Elements: `.card__header`, `.card__title`, `.card__subtitle`, `.card__body`, `.card__footer`
   - Modifiers: `.card--default`, `.card--subtle`, `.card--flat`, `.card--clickable`, `.card--pad-sm/md/lg`

5. **`Container`** (`src/components/Container.jsx` & `Container.module.css`):
   - Block: `.container`
   - Modifiers: `.container--sm`, `.container--md`, `.container--lg`, `.container--full`, `.container--bordered`

6. **Komponen Dashboard Spesifik**:
   - **`Sidebar`**: Navigasi responsif (Dashboard, Semua Tugas, Prioritas, Kalender, Selesai, Settings) + Drawer mobile.
   - **`DashboardHeader`**: Sapaan dinamis, tanggal terformat lokal Indonesia (`id-ID`), notifikasi, tombol Quick Add.
   - **`Statistics`**: 4 metrik penting (Total, Belum Dikerjakan, Sedang Dikerjakan, Selesai).
   - **`TaskList` & `TaskItem`**: Pencarian kata kunci, filter status, filter prioritas, checkbox selesai dengan coretan, tombol hapus & edit.
   - **`UpcomingDeadlines`**: Komputasi selisih hari sisa (*remaining days*) secara otomatis dan pengurutan kronologis.
   - **`TaskForm`**: Modal interaktif untuk menambah & mengedit tugas.

---

## 4. Fitur Interaktif & Fungsionalitas
- Tambah tugas baru melalui modal dialog yang divalidasi.
- Update status tugas langsung (Pending -> Completed atau sebaliknya) dengan sinkronisasi statistik otomatis.
- Hapus tugas dengan konfirmasi.
- Edit tugas eksisting.
- Filter tugas menurut status dan tingkat prioritas.
- Pencarian instan (search) judul dan mata kuliah.
- Penyimpanan lokal otomatis (`localStorage`) sehingga data tidak hilang saat refresh halaman.

---

## 5. Menjalankan Aplikasi
Masuk ke direktori `UAS1` dan jalankan:
```bash
npm run dev
```
Buka browser pada alamat `http://localhost:8444` atau port yang ditentukan Next.js.

