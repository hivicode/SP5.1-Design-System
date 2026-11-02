"use client";

import React, { useMemo } from "react";
import styles from "./DashboardHeader.module.css";
import Button from "./Button";

/**
 * Dashboard Header Component (BEM)
 * Clean, concise greeting and date indicator
 */
export default function DashboardHeader({
  onOpenMobileMenu,
  onOpenQuickAdd,
  pendingCount = 0
}) {
  const formattedDate = useMemo(() => {
    const today = new Date();
    const options = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric"
    };
    return today.toLocaleDateString("id-ID", options);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.header__left}>
        <div className={styles.header__greetingWrapper}>
          <button
            type="button"
            className={styles.header__menuToggle}
            onClick={onOpenMobileMenu}
            aria-label="Buka Menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
          <div>
            <h1 className={styles.header__greeting}>Dashboard Akademik</h1>
            <p className={styles.header__subtitle}>
              {pendingCount > 0
                ? `${pendingCount} tugas aktif perlu diselesaikan`
                : "Semua tugas telah diselesaikan"}
            </p>
          </div>
        </div>
      </div>

      <div className={styles.header__right}>
        <div className={styles.header__dateBadge}>
          <svg className={styles.header__dateIcon} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          <span>{formattedDate}</span>
        </div>

        <Button
          variant="primary"
          size="md"
          onClick={onOpenQuickAdd}
          icon={
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          }
        >
          Tambah Tugas
        </Button>
      </div>
    </header>
  );
}
