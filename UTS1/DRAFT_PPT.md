# DRAF MATERI PRESENTASI (SLIDE PITCH DECK UTS)
## PROYEK: TUGAS.IN — DESIGN SYSTEM & WEB APPLICATION

---

### SLIDE 1: JUDUL & IDENTITAS
- **Judul**: Tugas.in — Student Task Management System
- **Sub-judul**: Implementasi Mini Design System & BEM Methodology pada Next.js
- **Mata Kuliah**: Styled Design / Design System (UTS)
- **Tagline**: *"Atur tugas, fokus masa depan."*
- **Disusun oleh**: Mahasiswa Informatika

---

### SLIDE 2: LATAR BELAKANG & PROBLEM STATEMENT
- **Problem**: Mahasiswa sering kewalahan melacak tugas kuliah dengan tenggat waktu berdekatan, prioritas yang tumpang tindih, dan sistem pencatatan yang tercecer.
- **Solution**: Tugas.in hadir sebagai dashboard produktivitas akademik yang terstruktur, bersih, scannable, dan berfokus pada urgensi penyelesaian.
- **Brand Personality**: Modern, Praktis, Terorganisir, Minimalis Editorial (menghindari visual generic AI dashboard).

---

### SLIDE 3: VISUAL ART DIRECTION & DESIGN TOKENS
- **Konsep**: Modern Academic Productivity with Editorial Influence
- **Palet Warna Utama**:
  - `Primary (#355E4B)`: Muted Forest Green (nuansa akademik tenang & fokus)
  - `Surface & Background (#F7F7F2 & #FFFFFF)`: Warm Off-White (kontras lembut di mata)
  - `Text (#252923)`: Charcoal Text (tingkat keterbacaan tinggi WCAG AA)
  - `Aksen & Status`: Soft Orange (#E89A52), Amber Warning (#E6AA4B), Muted Red (#D96868), Green Success (#4F936C)
- **Tipografi**: Plus Jakarta Sans dengan perjenjangan modular (XS hingga 2XL).
- **Spasial**: Skala spacing konsisten 4px, 8px, 12px, 16px, 24px, 32px.

---

### SLIDE 4: ARSITEKTUR KOMPONEN & METODOLOGI BEM
- **Penerapan BEM murni** (*Block, Element, Modifier*):
  - `.button` &rarr; Modifiers: `--primary`, `--secondary`, `--outline`, `--danger`, `--sm`, `--md`
  - `.badge` &rarr; Modifiers: `--pending`, `--in-progress`, `--completed`, `--priority-high`
  - `.formField` &rarr; Elements: `.label`, `.inputControl`, `.errorText`
  - `.card` &rarr; Elements: `.card__header`, `.card__title`, `.card__body`
  - `.container` &rarr; Modifiers: `--sm`, `--md`, `--lg`
- Menggunakan **CSS Modules** murni (`*.module.css`) untuk mencegah kebocoran scope style.

---

### SLIDE 5: FITUR UTAMA & DEMONSTRASI SISTEM
1. **Dynamic Statistics Bar**: Metrik Total, Belum Dikerjakan, Sedang Dikerjakan, dan Selesai yang sinkron secara real-time.
2. **Task Management & Filter**: Fitur pencarian instan, filter status, dan filter tingkat prioritas.
3. **Upcoming Deadlines**: Perhitungan otomatis sisa hari (H-X) dengan indikator visual urgensi.
4. **Interactive Modal Form**: Validasi input saat menambah atau mengedit tugas perkuliahan.
5. **State & Storage**: Terkoneksi dengan `localStorage` sehingga data tugas tetap tersimpan saat reload halaman.

---

### SLIDE 6: KESIMPULAN & HASIL EVALUASI
- Memenuhi seluruh standar rubrik UTS Design System:
  - Mini Design System & Tokens: Tercapai
  - Minimal 5 Reusable Components: Tercapai
  - Metodologi BEM Konsisten: Tercapai
  - Layout Responsif (Desktop & Mobile): Tercapai
  - Clean Architecture & Bebas Error: 100% lulus build Next.js.

