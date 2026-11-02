"use client";

import React from "react";
import styles from "./TaskItem.module.css";
import Badge from "./Badge";

/**
 * TaskItem Component (BEM)
 * Individual task display with status toggle, priority indicator, and action buttons
 */
export default function TaskItem({
  task,
  onToggleStatus,
  onDelete,
  onEdit
}) {
  const isCompleted = task.status === "completed";

  // Priority mapping
  const priorityMap = {
    high: { label: "Prioritas Tinggi", variant: "priority-high" },
    medium: { label: "Prioritas Sedang", variant: "priority-medium" },
    low: { label: "Prioritas Rendah", variant: "priority-low" }
  };

  // Status mapping
  const statusMap = {
    pending: { label: "Belum Dimulai", variant: "pending" },
    in_progress: { label: "Sedang Dikerjakan", variant: "in-progress" },
    completed: { label: "Selesai", variant: "completed" }
  };

  // Format date helper
  const formatDate = (dateStr) => {
    if (!dateStr) return "-";
    const date = new Date(dateStr);
    return date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "short",
      year: "numeric"
    });
  };

  const priorityInfo = priorityMap[task.priority] || priorityMap.medium;
  const statusInfo = statusMap[task.status] || statusMap.pending;

  const itemClassNames = [
    styles.taskItem,
    isCompleted ? styles["taskItem--completed"] : "",
    task.priority === "high" && !isCompleted ? styles["taskItem--urgent"] : ""
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={itemClassNames}>
      <div className={styles.taskItem__checkWrapper}>
        <button
          type="button"
          role="checkbox"
          aria-checked={isCompleted}
          className={styles.taskItem__checkbox}
          onClick={() => onToggleStatus(task.id)}
          title={isCompleted ? "Tandai belum selesai" : "Tandai selesai"}
        >
          {isCompleted && (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          )}
        </button>
      </div>

      <div className={styles.taskItem__body}>
        <div className={styles.taskItem__headerRow}>
          <Badge variant="neutral" size="sm" showDot={false}>
            {task.course}
          </Badge>
          <Badge variant={priorityInfo.variant} size="sm">
            {priorityInfo.label}
          </Badge>
          <Badge variant={statusInfo.variant} size="sm">
            {statusInfo.label}
          </Badge>
        </div>

        <h3 className={styles.taskItem__title}>{task.title}</h3>

        {task.description && (
          <p className={styles.taskItem__desc}>{task.description}</p>
        )}

        <div className={styles.taskItem__footer}>
          <span className={styles.taskItem__deadline}>
            <svg className={styles.taskItem__deadlineIcon} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            Tenggat: {formatDate(task.deadline)}
          </span>
        </div>
      </div>

      <div className={styles.taskItem__actions}>
        {onEdit && (
          <button
            type="button"
            className={styles.taskItem__actionBtn}
            onClick={() => onEdit(task)}
            title="Edit tugas"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>
          </button>
        )}
        <button
          type="button"
          className={[styles.taskItem__actionBtn, styles["taskItem__actionBtn--delete"]].join(" ")}
          onClick={() => onDelete(task.id)}
          title="Hapus tugas"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          </svg>
        </button>
      </div>
    </article>
  );
}

