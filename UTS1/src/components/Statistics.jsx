import React from "react";
import styles from "./Statistics.module.css";

/**
 * Statistics Overview Component (BEM)
 * 4 Metrics: Total Tugas, Belum Dikerjakan, Sedang Dikerjakan, Selesai
 */
export default function Statistics({ stats }) {
  const items = [
    {
      id: "total",
      label: "Total Tugas",
      value: stats.total,
      modifier: styles["stats__card--total"],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      )
    },
    {
      id: "pending",
      label: "Belum Dikerjakan",
      value: stats.pending,
      modifier: styles["stats__card--pending"],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      )
    },
    {
      id: "in_progress",
      label: "Sedang Dikerjakan",
      value: stats.inProgress,
      modifier: styles["stats__card--progress"],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
        </svg>
      )
    },
    {
      id: "completed",
      label: "Selesai",
      value: stats.completed,
      modifier: styles["stats__card--completed"],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      )
    }
  ];

  return (
    <section className={styles.stats} aria-label="Statistik Produktivitas">
      <div className={styles.stats__grid}>
        {items.map((item) => (
          <div
            key={item.id}
            className={[styles.stats__card, item.modifier].join(" ")}
          >
            <div className={styles.stats__info}>
              <span className={styles.stats__label}>{item.label}</span>
              <span className={styles.stats__value}>{item.value}</span>
            </div>
            <div className={styles.stats__iconWrapper}>{item.icon}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

