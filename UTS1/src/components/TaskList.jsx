"use client";

import React, { useState, useMemo } from "react";
import styles from "./TaskList.module.css";
import TaskItem from "./TaskItem";
import Button from "./Button";

/**
 * TaskList Component (BEM)
 * Comprehensive task management view with search, status filters, and priority filters
 */
export default function TaskList({
  tasks = [],
  onToggleStatus,
  onDeleteTask,
  onEditTask,
  onOpenQuickAdd
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all"); // all, pending, in_progress, completed
  const [priorityFilter, setPriorityFilter] = useState("all"); // all, high, medium, low

  // Filtered task results
  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchSearch =
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.course.toLowerCase().includes(searchTerm.toLowerCase());

      const matchStatus =
        statusFilter === "all" || task.status === statusFilter;

      const matchPriority =
        priorityFilter === "all" || task.priority === priorityFilter;

      return matchSearch && matchStatus && matchPriority;
    });
  }, [tasks, searchTerm, statusFilter, priorityFilter]);

  const statusOptions = [
    { id: "all", label: "Semua Status" },
    { id: "pending", label: "Belum Dikerjakan" },
    { id: "in_progress", label: "Sedang Dikerjakan" },
    { id: "completed", label: "Selesai" }
  ];

  const priorityOptions = [
    { id: "all", label: "Semua Prioritas" },
    { id: "high", label: "Tinggi" },
    { id: "medium", label: "Sedang" },
    { id: "low", label: "Rendah" }
  ];

  return (
    <div className={styles.taskList}>
      {/* Filtering & Search Toolbar */}
      <div className={styles.taskList__toolbar}>
        <div className={styles.taskList__topControls}>
          <div className={styles.taskList__searchBox}>
            <svg className={styles.taskList__searchIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              placeholder="Cari tugas berdasarkan judul atau mata kuliah..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.taskList__searchInput}
            />
          </div>

          <Button
            variant="secondary"
            size="sm"
            onClick={onOpenQuickAdd}
            icon={
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            }
          >
            Tugas Baru
          </Button>
        </div>

        {/* Filter Pills */}
        <div className={styles.taskList__filterPills}>
          <span style={{ fontSize: "0.75rem", color: "var(--color-text-secondary)", marginRight: "4px" }}>
            Status:
          </span>
          {statusOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              className={[
                styles.taskList__filterBtn,
                statusFilter === opt.id ? styles["taskList__filterBtn--active"] : ""
              ].join(" ")}
              onClick={() => setStatusFilter(opt.id)}
            >
              {opt.label}
            </button>
          ))}

          <span style={{ fontSize: "0.75rem", color: "var(--color-text-secondary)", marginLeft: "10px", marginRight: "4px" }}>
            Prioritas:
          </span>
          {priorityOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              className={[
                styles.taskList__filterBtn,
                priorityFilter === opt.id ? styles["taskList__filterBtn--active"] : ""
              ].join(" ")}
              onClick={() => setPriorityFilter(opt.id)}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Task List Content */}
      <div className={styles.taskList__items}>
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggleStatus={onToggleStatus}
              onDelete={onDeleteTask}
              onEdit={onEditTask}
            />
          ))
        ) : (
          <div className={styles.taskList__empty}>
            <div className={styles.taskList__emptyIcon}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 17h6M9 13h6M9 9h6M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path>
              </svg>
            </div>
            <h4 className={styles.taskList__emptyTitle}>Tidak ada tugas yang cocok</h4>
            <p className={styles.taskList__emptyDesc}>
              Coba sesuaikan kata kunci pencarian atau ubah filter status & prioritas di atas.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

