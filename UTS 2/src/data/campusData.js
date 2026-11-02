export const SCHEDULES = [
  {
    id: "sch-1",
    course: "Desain Sistem & Antarmuka",
    code: "IF312",
    lecturer: "Dr. Hendra Gunawan, M.T.",
    day: "Senin",
    time: "08:00 - 10:30 WIB",
    room: "Lab Komputer 302",
    sks: 3,
    status: "upcoming"
  },
  {
    id: "sch-2",
    course: "Pemrograman Web Berbasis Komponen",
    code: "IF315",
    lecturer: "Rina Wijaya, S.Kom., M.Cs.",
    day: "Senin",
    time: "13:00 - 15:30 WIB",
    room: "Ruang Kuliah 204",
    sks: 3,
    status: "upcoming"
  },
  {
    id: "sch-3",
    course: "Basis Data Lanjut",
    code: "IF318",
    lecturer: "Budi Santoso, Ph.D.",
    day: "Selasa",
    time: "09:30 - 12:00 WIB",
    room: "Lab Basis Data",
    sks: 3,
    status: "upcoming"
  },
  {
    id: "sch-4",
    course: "Kecerdasan Buatan & Machine Learning",
    code: "IF325",
    lecturer: "Agus Pratama, M.Sc.",
    day: "Rabu",
    time: "08:00 - 10:30 WIB",
    room: "Ruang Teori 105",
    sks: 3,
    status: "upcoming"
  },
  {
    id: "sch-5",
    course: "Rekayasa Perangkat Lunak",
    code: "IF320",
    lecturer: "Siti Rahma, M.Kom.",
    day: "Kamis",
    time: "10:00 - 12:30 WIB",
    room: "Gedung D Lt. 2",
    sks: 3,
    status: "completed"
  },
  {
    id: "sch-6",
    course: "Jaringan Komputer & Keamanan Siber",
    code: "IF322",
    lecturer: "Fajar Nugraha, S.T., M.T.",
    day: "Jumat",
    time: "08:30 - 11:00 WIB",
    room: "Lab Jaringan C",
    sks: 3,
    status: "completed"
  }
];

export const ANNOUNCEMENTS = [
  {
    id: "ann-1",
    title: "Jadwal Pelaksanaan Ujian Tengah Semester (UTS) Ganjil",
    category: "Akademik",
    date: "03 November 2026",
    badgeType: "warning",
    summary: "Seluruh mahasiswa wajib melunasi administrasi dan mencetak kartu ujian fisik paling lambat H-3 sebelum ujian perdana dimulai."
  },
  {
    id: "ann-2",
    title: "Workshop Desain UI/UX & Design System Industry Standard",
    category: "Kegiatan",
    date: "01 November 2026",
    badgeType: "information",
    summary: "Biro Kemahasiswaan menyelenggarakan workshop intensif bersama praktisi UI/UX. Pendaftaran dibuka gratis untuk 100 pendaftar pertama."
  },
  {
    id: "ann-3",
    title: "Pemberitahuan Dispensasi KRS dan Revisi Mata Kuliah",
    category: "Administrasi",
    date: "28 Oktober 2026",
    badgeType: "neutral",
    summary: "Layanan perbaikan Kartu Rencana Studi (KRS) dilayani secara online melalui portal mahasiswa hingga akhir pekan ini."
  },
  {
    id: "ann-4",
    title: "Pembukaan Beasiswa Prestasi Akademik Semester Ganjil",
    category: "Beasiswa",
    date: "25 Oktober 2026",
    badgeType: "success",
    summary: "Diberitahukan kepada mahasiswa dengan IPK di atas 3.50 dapat mengajukan berkas beasiswa potongan SPP/UKT 50%."
  }
];

export const ACADEMIC_RECORDS = [
  { code: "IF312", name: "Desain Sistem & Antarmuka", sks: 3, grade: "A", semester: "Semester 5" },
  { code: "IF315", name: "Pemrograman Web Berbasis Komponen", sks: 3, grade: "A", semester: "Semester 5" },
  { code: "IF318", name: "Basis Data Lanjut", sks: 3, grade: "A-", semester: "Semester 5" },
  { code: "IF210", name: "Struktur Data & Algoritma", sks: 4, grade: "A", semester: "Semester 4" },
  { code: "IF214", name: "Pemrograman Berorientasi Objek", sks: 3, grade: "A", semester: "Semester 4" },
  { code: "IF216", name: "Sistem Operasi", sks: 3, grade: "B+", semester: "Semester 4" }
];

export const TUITION_BILLS = [
  { id: "bill-1", item: "UKT Pokok Semester 5", amount: "Rp 4.500.000", status: "Lunas", badge: "success", date: "15 September 2026" },
  { id: "bill-2", item: "Iuran Praktikum Lab Komputer", amount: "Rp 350.000", status: "Lunas", badge: "success", date: "20 September 2026" },
  { id: "bill-3", item: "Biaya Sertifikasi Kompetensi", amount: "Rp 250.000", status: "Menunggu Pembayaran", badge: "warning", date: "10 November 2026" }
];

export const ACADEMIC_SUMMARY = {
  gpa: "3.84",
  totalCredits: "92 SKS",
  completedCourses: "28 Mata Kuliah",
  activeSemester: "Semester 5 (Ganjil)"
};
