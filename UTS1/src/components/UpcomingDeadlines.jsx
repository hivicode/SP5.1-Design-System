"use client";

import React, { useMemo } from "react";
import styles from "./UpcomingDeadlines.module.css";
import Badge from "./Badge";

/**
 * UpcomingDeadlines Component (BEM)
 * Displays impending assignments sorted chronologically with remaining days calculation
 */
export default function UpcomingDeadlines({ tasks = [] }) {
  // Filter unfinished tasks and calculate days left
  const upcomingList = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return tasks
      .filter((task) => task.status !== "completed" && task.deadline)
      .map((task) => {
        const dDate = new Date(task.deadline);
        dDate.setHours(0, 0, 0, 0);
        const diffTime = dDate.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return {
          ...task,
          diffDays
        };
      })
      .sort((a, b) => a.diffDays - b.diffDays)
      .slice(0, 5); // top 5 upcoming
  }, [tasks]);

  return (
    <section className={styles.deadlines} aria-label="Tenggat Waktu Terdekat">
      <div className={styles.deadlines__header}>
        <h2 className={styles.deadlines__title}>
          <svg className={styles.deadlines__headerIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          Tenggat Terdekat
        </h2>
        <span style={{ fontSize: "0.75rem", color: "var(--color-text-secondary)" }}>
          {upcomingList.length} Tugas
        </span>
      </div>

      <div className={styles.deadlines__list}>
        {upcomingList.length > 0 ? (
          upcomingList.map((item) => {
            const isUrgent = item.diffDays <= 2;
            const isSoon = item.diffDays > 2 && item.diffDays <= 5;

            const modifierClass = isUrgent
              ? styles["deadlines__item--urgent"]
              : isSoon
              ? styles["deadlines__item--soon"]
              : "";

            const daysText =
              item.diffDays < 0
                ? "Lewat"
                : item.diffDays === 0
                ? "Hari Ini"
                : `${item.diffDays} hari`;

            return (
              <div
                key={item.id}
                className={[styles.deadlines__item, modifierClass].join(" ")}
              >
                <div className={styles.deadlines__countdown}>
                  <span className={styles.deadlines__countdownNum}>
                    {item.diffDays < 0 ? "!" : item.diffDays === 0 ? "0" : item.diffDays}
                  </span>
                  <span className={styles.deadlines__countdownUnit}>
                    {item.diffDays < 0 ? "LEWAT" : "HARI"}
                  </span>
                </div>

                <div className={styles.deadlines__info}>
                  <p className={styles.deadlines__taskTitle} title={item.title}>
                    {item.title}
                  </p>
                  <div className={styles.deadlines__meta}>
                    <span>{item.course}</span>
                    &bull;
                    <Badge
                      variant={
                        item.priority === "high"
                          ? "priority-high"
                          : item.priority === "medium"
                          ? "priority-medium"
                          : "priority-low"
                      }
                      size="sm"
                    >
                      {item.priority === "high" ? "Penting" : item.priority === "medium" ? "Sedang" : "Santai"}
                    </Badge>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className={styles.deadlines__empty}>
            Tidak ada tenggat waktu mendesak. Kerja bagus!
          </p>
        )}
      </div>
    </section>
  );
}

