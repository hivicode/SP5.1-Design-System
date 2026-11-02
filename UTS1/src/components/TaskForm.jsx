"use client";

import React, { useState, useEffect } from "react";
import styles from "./TaskForm.module.css";
import Input from "./Input";
import Button from "./Button";
import { COURSES } from "../data/tasks";

/**
 * TaskForm Modal Component (BEM)
 * Form for adding and editing student tasks
 */
export default function TaskForm({
  isOpen = false,
  onClose,
  onSubmit,
  editTask = null
}) {
  const [formData, setFormData] = useState({
    title: "",
    course: COURSES[0],
    deadline: "",
    priority: "medium",
    status: "pending",
    description: ""
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editTask) {
      setFormData({
        title: editTask.title || "",
        course: editTask.course || COURSES[0],
        deadline: editTask.deadline || "",
        priority: editTask.priority || "medium",
        status: editTask.status || "pending",
        description: editTask.description || ""
      });
    } else {
      // Default new task date: 3 days ahead
      const defaultDate = new Date();
      defaultDate.setDate(defaultDate.getDate() + 3);
      const isoDate = defaultDate.toISOString().split("T")[0];

      setFormData({
        title: "",
        course: COURSES[0],
        deadline: isoDate,
        priority: "medium",
        status: "pending",
        description: ""
      });
    }
    setErrors({});
  }, [editTask, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const newErrors = {};
    if (!formData.title.trim()) {
      newErrors.title = "Judul tugas wajib diisi";
    }
    if (!formData.course) {
      newErrors.course = "Mata kuliah wajib dipilih";
    }
    if (!formData.deadline) {
      newErrors.deadline = "Tenggat waktu wajib ditentukan";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSubmit({
      ...formData,
      id: editTask ? editTask.id : `task-${Date.now()}`
    });

    onClose();
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>
            {editTask ? "Edit Tugas Akademik" : "Tambah Tugas Baru"}
          </h2>
          <button
            type="button"
            className={styles.modalCloseBtn}
            onClick={onClose}
            aria-label="Tutup modal"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className={styles.modalForm}>
          <Input
            label="Judul Tugas"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Contoh: Membuat laporan praktikum basis data..."
            required
            error={errors.title}
          />

          <div className={styles.formRow}>
            <Input
              as="select"
              label="Mata Kuliah"
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
              error={errors.course}
            >
              {COURSES.map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </Input>

            <Input
              type="date"
              label="Tenggat Waktu (Deadline)"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              required
              error={errors.deadline}
            />
          </div>

          <div className={styles.formRow}>
            <Input
              as="select"
              label="Tingkat Prioritas"
              name="priority"
              value={formData.priority}
              onChange={handleChange}
            >
              <option value="low">Rendah (Fleksibel)</option>
              <option value="medium">Sedang (Standar)</option>
              <option value="high">Tinggi (Mendesak)</option>
            </Input>

            <Input
              as="select"
              label="Status Pengerjaan"
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="pending">Belum Dimulai</option>
              <option value="in_progress">Sedang Dikerjakan</option>
              <option value="completed">Selesai</option>
            </Input>
          </div>

          <Input
            as="textarea"
            label="Catatan & Deskripsi Tambahan"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Tambahkan detail instruksi dosen, format pengumpulan file, atau catatan kelompok..."
            hint="Opsional tapi sangat membantu tracking detail tugas."
          />

          <div className={styles.modalFooter}>
            <Button variant="secondary" size="md" onClick={onClose}>
              Batal
            </Button>
            <Button variant="primary" size="md" type="submit">
              {editTask ? "Simpan Perubahan" : "Simpan Tugas"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

