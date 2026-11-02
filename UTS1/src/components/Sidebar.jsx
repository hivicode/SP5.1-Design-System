"use client";

import React from "react";
import styles from "./Sidebar.module.css";

/**
 * Sidebar Navigation Component (BEM)
 * Menu: Dashboard, Semua Tugas, Prioritas, Kalender, Selesai, Settings
 */
export default function Sidebar({
  activeTab = "dashboard",
  onSelectTab,
  taskCounts = { total: 0, highPriority: 0, completed: 0 },
  isOpen = false,
  onClose
}) {
  const navItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7"></rect>
          <rect x="14" y="3" width="7" height="7"></rect>
          <rect x="14" y="14" width="7" height="7"></rect>
          <rect x="3" y="14" width="7" height="7"></rect>
        </svg>
      )
    },
    {
      id: "all_tasks",
      label: "Semua Tugas",
      count: taskCounts.total,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 11l3 3L22 4"></path>
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
        </svg>
      )
    },
    {
      id: "priority",
      label: "Prioritas Tinggi",
      count: taskCounts.highPriority,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      )
    },
    {
      id: "calendar",
      label: "Jadwal & Deadline",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
      )
    },
    {
      id: "completed",
      label: "Selesai",
      count: taskCounts.completed,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      )
    }
  ];

  const secondaryNavItems = [
    {
      id: "settings",
      label: "Pengaturan & Akun",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      )
    }
  ];

  const handleSelect = (id) => {
    if (onSelectTab) onSelectTab(id);
    if (onClose) onClose();
  };

  return (
    <>
      {isOpen && <div className={styles.sidebarBackdrop} onClick={onClose} />}

      <aside className={[styles.sidebar, isOpen ? styles["sidebar--mobileOpen"] : ""].join(" ")}>
        {/* Brand Header */}
        <div className={styles.sidebar__header}>
          <div className={styles.sidebar__brand}>
            <div className={styles.sidebar__logoBadge}>T</div>
            <div>
              <span className={styles.sidebar__brandName}>
                Tugas<span className={styles.sidebar__brandDot}>.in</span>
              </span>
            </div>
          </div>
          <p className={styles.sidebar__tagline}>Atur tugas, fokus masa depan.</p>
        </div>

        {/* Navigation Items */}
        <nav className={styles.sidebar__nav}>
          <span className={styles.sidebar__navSectionTitle}>Menu Akademik</span>
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <div
                key={item.id}
                className={[
                  styles.sidebar__item,
                  isActive ? styles["sidebar__item--active"] : ""
                ].join(" ")}
              >
                <button
                  type="button"
                  className={styles.sidebar__link}
                  onClick={() => handleSelect(item.id)}
                >
                  <span className={styles.sidebar__icon}>{item.icon}</span>
                  <span className={styles.sidebar__label}>{item.label}</span>
                  {typeof item.count === "number" && (
                    <span className={styles.sidebar__count}>{item.count}</span>
                  )}
                </button>
              </div>
            );
          })}

          <span className={styles.sidebar__navSectionTitle}>Lainnya</span>
          {secondaryNavItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <div
                key={item.id}
                className={[
                  styles.sidebar__item,
                  isActive ? styles["sidebar__item--active"] : ""
                ].join(" ")}
              >
                <button
                  type="button"
                  className={styles.sidebar__link}
                  onClick={() => handleSelect(item.id)}
                >
                  <span className={styles.sidebar__icon}>{item.icon}</span>
                  <span className={styles.sidebar__label}>{item.label}</span>
                </button>
              </div>
            );
          })}
        </nav>

        {/* Sidebar Footer User Info */}
        <div className={styles.sidebar__footer}>
          <div className={styles.sidebar__user}>
            <div className={styles.sidebar__avatar}>MH</div>
            <div className={styles.sidebar__userInfo}>
              <div className={styles.sidebar__userName}>Mahasiswa Teknik</div>
              <div className={styles.sidebar__userRole}>Semester 5 &bull; Informatika</div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

