"use client";

import React from "react";
import styles from "./Sidebar.module.css";

/**
 * Sidebar Navigation Component (BEM)
 * Menu: Beranda, Jadwal Kuliah, Pengumuman, Riwayat Akademik, Administrasi
 */
export default function Sidebar({
  activeTab = "beranda",
  onSelectTab,
  isOpen = false,
  onClose
}) {
  const menuItems = [
    {
      id: "beranda",
      label: "Beranda",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      )
    },
    {
      id: "jadwal",
      label: "Jadwal Kuliah",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
      )
    },
    {
      id: "pengumuman",
      label: "Pengumuman",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
      )
    },
    {
      id: "akademik",
      label: "Riwayat Akademik",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
      )
    },
    {
      id: "administrasi",
      label: "Administrasi",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
          <line x1="1" y1="10" x2="23" y2="10"></line>
        </svg>
      )
    }
  ];

  return (
    <>
      {isOpen && <div className={styles.sidebarBackdrop} onClick={onClose} />}

      <aside className={[styles.sidebar, isOpen ? styles["sidebar--mobileOpen"] : ""].join(" ")}>
        <div className={styles.sidebar__header}>
          <div className={styles.sidebar__brand}>
            <div className={styles.sidebar__logoBadge}>C</div>
            <div>
              <span className={styles.sidebar__brandName}>
                Cool<span>Yeah</span>
              </span>
            </div>
          </div>
        </div>

        <nav className={styles.sidebar__nav}>
          {menuItems.map((item) => {
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
                  onClick={() => {
                    onSelectTab(item.id);
                    if (onClose) onClose();
                  }}
                >
                  <span className={styles.sidebar__icon}>{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              </div>
            );
          })}
        </nav>

        <div className={styles.sidebar__footer}>
          <div className={styles.sidebar__user}>
            <div className={styles.sidebar__avatar}>RK</div>
            <div>
              <div className={styles.sidebar__userName}>Bintang Mahasiswa</div>
              <div className={styles.sidebar__userRole}>NIM: 220101089</div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

