"use client";

import React, { useState, useMemo } from "react";
import Sidebar from "../components/Sidebar";
import Container from "../components/Container";
import Card from "../components/Card";
import Button from "../components/Button";
import Input from "../components/Input";
import Badge from "../components/Badge";
import SectionHeader from "../components/SectionHeader";
import {
  SCHEDULES,
  ANNOUNCEMENTS,
  ACADEMIC_RECORDS,
  TUITION_BILLS,
  ACADEMIC_SUMMARY
} from "../data/campusData";
import "../styles/portal.css";

export default function Home() {
  const [activeTab, setActiveTab] = useState("beranda");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchSchedule, setSearchSchedule] = useState("");
  const [searchAnnouncement, setSearchAnnouncement] = useState("");
  const [selectedDay, setSelectedDay] = useState("Semua");

  // Filter jadwal untuk tab jadwal
  const filteredSchedules = useMemo(() => {
    return SCHEDULES.filter((s) => {
      const matchSearch =
        s.course.toLowerCase().includes(searchSchedule.toLowerCase()) ||
        s.lecturer.toLowerCase().includes(searchSchedule.toLowerCase()) ||
        s.room.toLowerCase().includes(searchSchedule.toLowerCase());
      const matchDay = selectedDay === "Semua" || s.day === selectedDay;
      return matchSearch && matchDay;
    });
  }, [searchSchedule, selectedDay]);

  // Filter pengumuman untuk tab pengumuman
  const filteredAnnouncements = useMemo(() => {
    return ANNOUNCEMENTS.filter((ann) => {
      return (
        ann.title.toLowerCase().includes(searchAnnouncement.toLowerCase()) ||
        ann.category.toLowerCase().includes(searchAnnouncement.toLowerCase()) ||
        ann.summary.toLowerCase().includes(searchAnnouncement.toLowerCase())
      );
    });
  }, [searchAnnouncement]);

  const daysList = ["Semua", "Senin", "Selasa", "Rabu", "Kamis", "Jumat"];

  const tabTitles = {
    beranda: {
      title: "Portal Mahasiswa",
      subtitle: "Selamat datang kembali di sistem informasi akademik CoolYeah"
    },
    jadwal: {
      title: "Jadwal Perkuliahan",
      subtitle: "Jadwal kelas, dosen pengampu, dan alokasi ruang semester aktif"
    },
    pengumuman: {
      title: "Pengumuman Akademik",
      subtitle: "Warta resmi, dispensasi, workshop, dan informasi kampus"
    },
    akademik: {
      title: "Riwayat Akademik & Nilai",
      subtitle: "Transkrip nilai semester, perolehan SKS, dan indeks prestasi kumulatif"
    },
    administrasi: {
      title: "Administrasi & Keuangan",
      subtitle: "Tagihan UKT, riwayat pembayaran, dan verifikasi kartu ujian"
    }
  };

  const currentTabInfo = tabTitles[activeTab] || tabTitles.beranda;

  return (
    <div className="layout">
      {/* Sidebar Navigasi */}
      <Sidebar
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      <div className="layout__main">
        <main className="layout__content">
          <Container size="lg">
            {/* Top Bar Header Dinamis Sesuai Konteks Tab */}
            <header className="topHeader">
              <div className="topHeader__left">
                <button
                  type="button"
                  className="topHeader__menuToggle"
                  onClick={() => setMobileMenuOpen(true)}
                  aria-label="Buka Menu"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                </button>
                <div>
                  <h1 className="topHeader__title">{currentTabInfo.title}</h1>
                  <p className="topHeader__subtitle">{currentTabInfo.subtitle}</p>
                </div>
              </div>

              {/* ACTION / SEARCH KONTEN: HANYA TAMPIL DI HALAMAN YANG RELEVAN */}
              {activeTab === "jadwal" && (
                <div className="topHeader__right">
                  <Input
                    variant="search"
                    placeholder="Cari mata kuliah atau dosen..."
                    value={searchSchedule}
                    onChange={(e) => setSearchSchedule(e.target.value)}
                  />
                </div>
              )}

              {activeTab === "pengumuman" && (
                <div className="topHeader__right">
                  <Input
                    variant="search"
                    placeholder="Cari pengumuman..."
                    value={searchAnnouncement}
                    onChange={(e) => setSearchAnnouncement(e.target.value)}
                  />
                </div>
              )}

              {activeTab === "beranda" && (
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Button variant="outline" size="sm" onClick={() => setActiveTab("jadwal")}>
                    Jadwal Kuliah
                  </Button>
                  <Button variant="primary" size="sm" onClick={() => setActiveTab("administrasi")}>
                    Cek Tagihan
                  </Button>
                </div>
              )}

              {activeTab === "akademik" && (
                <Button variant="outline" size="sm">
                  Unduh Transkrip (PDF)
                </Button>
              )}

              {activeTab === "administrasi" && (
                <Button variant="secondary" size="sm">
                  Panduan Pembayaran
                </Button>
              )}
            </header>

            {/* TAB 1: BERANDA */}
            {activeTab === "beranda" && (
              <>
                <section className="statsRow" aria-label="Statistik Akademik">
                  <Card variant="default" padding="md">
                    <div className="statItem">
                      <span className="statItem__label">Indeks Prestasi Kumulatif</span>
                      <span className="statItem__val">{ACADEMIC_SUMMARY.gpa}</span>
                    </div>
                  </Card>

                  <Card variant="default" padding="md">
                    <div className="statItem">
                      <span className="statItem__label">Total SKS Ditempuh</span>
                      <span className="statItem__val">{ACADEMIC_SUMMARY.totalCredits}</span>
                    </div>
                  </Card>

                  <Card variant="default" padding="md">
                    <div className="statItem">
                      <span className="statItem__label">Mata Kuliah Selesai</span>
                      <span className="statItem__val">{ACADEMIC_SUMMARY.completedCourses}</span>
                    </div>
                  </Card>

                  <Card variant="highlight" padding="md">
                    <div className="statItem">
                      <span className="statItem__label">Status Perkuliahan</span>
                      <span className="statItem__val" style={{ fontSize: "18px" }}>
                        {ACADEMIC_SUMMARY.activeSemester}
                      </span>
                    </div>
                  </Card>
                </section>

                <div className="portalGrid">
                  <div className="portalMain">
                    <SectionHeader
                      title="Jadwal Hari Ini"
                      description="Perkuliahan yang dijadwalkan pada hari ini"
                      action={
                        <Button variant="outline" size="sm" onClick={() => setActiveTab("jadwal")}>
                          Lihat Semua
                        </Button>
                      }
                    />

                    <div className="scheduleList">
                      {SCHEDULES.slice(0, 3).map((item) => (
                        <article key={item.id} className="scheduleItem">
                          <div className="scheduleItem__info">
                            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                              <span style={{ fontSize: "12px", fontWeight: "bold", color: "var(--color-primary)" }}>
                                [{item.code}]
                              </span>
                              <h3 className="scheduleItem__title">{item.course}</h3>
                            </div>
                            <div className="scheduleItem__meta">
                              <span>{item.lecturer}</span> &bull; <span>{item.sks} SKS</span>
                            </div>
                          </div>

                          <div className="scheduleItem__right">
                            <div>
                              <div className="scheduleItem__time">{item.time}</div>
                              <div className="scheduleItem__room">{item.room}</div>
                            </div>
                            <Badge variant={item.status === "completed" ? "success" : "information"}>
                              {item.status === "completed" ? "Selesai" : "Akan Datang"}
                            </Badge>
                          </div>
                        </article>
                      ))}
                    </div>

                    {/* Showcase 6 Reusable Components (Termasuk Input Default dan Search) */}
                    <SectionHeader
                      title="Showcase 6 Komponen Reusable UTS"
                      description="Demonstrasi seluruh komponen dan variasinya sesuai rubrik penilaian"
                    />

                    <Card variant="default" padding="lg">
                      <div className="showcaseGrid">
                        {/* 1. Button Variations */}
                        <div>
                          <h4 style={{ fontSize: "14px", marginBottom: "8px", fontWeight: "bold" }}>
                            1. Variasi Button
                          </h4>
                          <div className="showcaseRow">
                            <Button variant="primary" size="sm">Primary</Button>
                            <Button variant="secondary" size="sm">Secondary</Button>
                            <Button variant="outline" size="sm">Outline</Button>
                            <Button variant="ghost" size="sm">Ghost</Button>
                          </div>
                        </div>

                        {/* 2. Badge Variations */}
                        <div>
                          <h4 style={{ fontSize: "14px", marginBottom: "8px", fontWeight: "bold" }}>
                            2. Variasi Badge
                          </h4>
                          <div className="showcaseRow">
                            <Badge variant="success">Success</Badge>
                            <Badge variant="warning">Warning</Badge>
                            <Badge variant="danger">Danger</Badge>
                            <Badge variant="neutral">Neutral</Badge>
                            <Badge variant="information">Information</Badge>
                          </div>
                        </div>

                        {/* 3. Input Variations (Default & Search) */}
                        <div style={{ gridColumn: "1 / -1", marginTop: "8px" }}>
                          <h4 style={{ fontSize: "14px", marginBottom: "10px", fontWeight: "bold" }}>
                            3. Variasi Input Form
                          </h4>
                          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                            <Input
                              variant="default"
                              label="Input Default"
                              placeholder="Ketik catatan di sini..."
                            />
                            <Input
                              variant="search"
                              label="Input Search"
                              placeholder="Cari data akademik..."
                            />
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>

                  <aside className="portalAside">
                    <SectionHeader
                      title="Pengumuman Terbaru"
                      description="Warta resmi civitas akademika"
                      action={
                        <Button variant="ghost" size="sm" onClick={() => setActiveTab("pengumuman")}>
                          Semua
                        </Button>
                      }
                    />

                    <div className="announcementList">
                      {ANNOUNCEMENTS.slice(0, 2).map((ann) => (
                        <article key={ann.id} className="announcementItem">
                          <div className="announcementItem__top">
                            <Badge variant={ann.badgeType} showDot={false}>
                              {ann.category}
                            </Badge>
                            <span className="announcementItem__date">{ann.date}</span>
                          </div>
                          <h3 className="announcementItem__title">{ann.title}</h3>
                          <p className="announcementItem__summary">{ann.summary}</p>
                        </article>
                      ))}
                    </div>

                    <Card variant="highlight" padding="md" title="Administrasi Akademik">
                      <p style={{ fontSize: "13.5px", color: "var(--color-text-secondary)", lineHeight: 1.5, marginBottom: "14px" }}>
                        Cek status pelunasan UKT semester ini untuk mencetak kartu ujian UTS.
                      </p>
                      <Button variant="secondary" size="sm" onClick={() => setActiveTab("administrasi")}>
                        Ke Halaman Administrasi
                      </Button>
                    </Card>
                  </aside>
                </div>
              </>
            )}

            {/* TAB 2: JADWAL KULIAH */}
            {activeTab === "jadwal" && (
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div className="dayFilters">
                  <span style={{ fontSize: "13px", color: "var(--color-text-secondary)", marginRight: "8px" }}>
                    Filter Hari:
                  </span>
                  {daysList.map((day) => (
                    <button
                      key={day}
                      type="button"
                      className={`dayBtn ${selectedDay === day ? "dayBtn--active" : ""}`}
                      onClick={() => setSelectedDay(day)}
                    >
                      {day}
                    </button>
                  ))}
                </div>

                <div className="scheduleList">
                  {filteredSchedules.map((item) => (
                    <article key={item.id} className="scheduleItem">
                      <div className="scheduleItem__info">
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                          <span style={{ fontSize: "12px", fontWeight: "bold", color: "var(--color-primary)" }}>
                            [{item.code}]
                          </span>
                          <h3 className="scheduleItem__title">{item.course}</h3>
                          <Badge variant="neutral" showDot={false}>{item.day}</Badge>
                        </div>
                        <div className="scheduleItem__meta">
                          <span>{item.lecturer}</span> &bull; <span>{item.sks} SKS</span>
                        </div>
                      </div>

                      <div className="scheduleItem__right">
                        <div>
                          <div className="scheduleItem__time">{item.time}</div>
                          <div className="scheduleItem__room">{item.room}</div>
                        </div>
                        <Badge variant={item.status === "completed" ? "success" : "information"}>
                          {item.status === "completed" ? "Selesai" : "Akan Datang"}
                        </Badge>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: PENGUMUMAN */}
            {activeTab === "pengumuman" && (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "16px" }}>
                {filteredAnnouncements.map((ann) => (
                  <Card key={ann.id} variant="default" padding="lg">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                      <Badge variant={ann.badgeType}>{ann.category}</Badge>
                      <span style={{ fontSize: "12px", color: "var(--color-text-tertiary)" }}>{ann.date}</span>
                    </div>
                    <h3 style={{ fontSize: "16px", fontWeight: "bold", color: "var(--color-text-main)", marginBottom: "8px" }}>
                      {ann.title}
                    </h3>
                    <p style={{ fontSize: "13.5px", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
                      {ann.summary}
                    </p>
                  </Card>
                ))}
              </div>
            )}

            {/* TAB 4: RIWAYAT AKADEMIK */}
            {activeTab === "akademik" && (
              <Card variant="default" padding="lg" title="Transkrip Nilai Akademik Mahasiswa" subtitle="Daftar perolehan nilai mata kuliah semester berjalan">
                <table className="academicTable">
                  <thead>
                    <tr>
                      <th>Kode</th>
                      <th>Mata Kuliah</th>
                      <th>Semester</th>
                      <th>SKS</th>
                      <th>Nilai Huruf</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ACADEMIC_RECORDS.map((rec) => (
                      <tr key={rec.code}>
                        <td><strong>{rec.code}</strong></td>
                        <td>{rec.name}</td>
                        <td>{rec.semester}</td>
                        <td>{rec.sks} SKS</td>
                        <td><strong style={{ color: "var(--color-primary)" }}>{rec.grade}</strong></td>
                        <td><Badge variant="success">Lulus</Badge></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card>
            )}

            {/* TAB 5: ADMINISTRASI */}
            {activeTab === "administrasi" && (
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <Card variant="highlight" padding="lg" title="Status Pembayaran Kuliah (UKT / SPP)">
                  <table className="academicTable">
                    <thead>
                      <tr>
                        <th>Uraian Tagihan</th>
                        <th>Tanggal Batas</th>
                        <th>Jumlah Nominal</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {TUITION_BILLS.map((bill) => (
                        <tr key={bill.id}>
                          <td><strong>{bill.item}</strong></td>
                          <td>{bill.date}</td>
                          <td>{bill.amount}</td>
                          <td><Badge variant={bill.badge}>{bill.status}</Badge></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </Card>

                <Card variant="subtle" padding="lg" title="Kartu Peserta Ujian Tengah Semester (UTS)">
                  <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", marginBottom: "16px", lineHeight: 1.6 }}>
                    Status Administrasi Anda telah <strong>TERVERIFIKASI</strong>. Anda dapat mengunduh dan mencetak Kartu Peserta Ujian untuk ditunjukkan kepada pengawas ujian.
                  </p>
                  <Button variant="primary" size="md">
                    Cetak Kartu Ujian (PDF)
                  </Button>
                </Card>
              </div>
            )}
          </Container>
        </main>
      </div>
    </div>
  );
}
