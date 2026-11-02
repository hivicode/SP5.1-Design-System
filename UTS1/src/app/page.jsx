"use client";

import React, { useState, useEffect, useMemo } from "react";
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";
import Statistics from "../components/Statistics";
import TaskList from "../components/TaskList";
import UpcomingDeadlines from "../components/UpcomingDeadlines";
import TaskForm from "../components/TaskForm";
import { INITIAL_TASKS } from "../data/tasks";
import "../styles/dashboard.css";

const STORAGE_KEY = "tugasin_student_tasks_data";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [isInitialized, setIsInitialized] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  // Load from localStorage or defaults
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setTasks(JSON.parse(saved));
      } else {
        setTasks(INITIAL_TASKS);
      }
    } catch (e) {
      setTasks(INITIAL_TASKS);
    }
    setIsInitialized(true);
  }, []);

  // Save to localStorage
  useEffect(() => {
    if (isInitialized) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
      } catch (e) {
        console.warn("Could not write to localStorage:", e);
      }
    }
  }, [tasks, isInitialized]);

  // Dynamic Statistics
  const stats = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter((t) => t.status === "completed").length;
    const inProgress = tasks.filter((t) => t.status === "in_progress").length;
    const pending = tasks.filter((t) => t.status === "pending").length;
    const highPriority = tasks.filter((t) => t.priority === "high" && t.status !== "completed").length;

    return { total, completed, inProgress, pending, highPriority };
  }, [tasks]);

  // Tab filtering logic
  const displayedTasks = useMemo(() => {
    if (activeTab === "priority") {
      return tasks.filter((t) => t.priority === "high");
    }
    if (activeTab === "completed") {
      return tasks.filter((t) => t.status === "completed");
    }
    return tasks;
  }, [tasks, activeTab]);

  // Handlers
  const handleToggleStatus = (taskId) => {
    setTasks((prev) =>
      prev.map((t) => {
        if (t.id === taskId) {
          const nextStatus = t.status === "completed" ? "pending" : "completed";
          return { ...t, status: nextStatus };
        }
        return t;
      })
    );
  };

  const handleDeleteTask = (taskId) => {
    if (window.confirm("Hapus tugas ini dari daftar?")) {
      setTasks((prev) => prev.filter((t) => t.id !== taskId));
    }
  };

  const handleSaveTask = (newTaskData) => {
    setTasks((prev) => {
      const exists = prev.some((t) => t.id === newTaskData.id);
      if (exists) {
        return prev.map((t) => (t.id === newTaskData.id ? newTaskData : t));
      }
      return [newTaskData, ...prev];
    });
  };

  const handleOpenAddModal = () => {
    setTaskToEdit(null);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (task) => {
    setTaskToEdit(task);
    setIsModalOpen(true);
  };

  return (
    <div className="layout">
      {/* Sidebar Navigation */}
      <Sidebar
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        taskCounts={{
          total: stats.total,
          highPriority: stats.highPriority,
          completed: stats.completed
        }}
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      {/* Main Content Area */}
      <div className="layout__main">
        <main className="layout__content">
          {/* Dashboard Header - Clean & Focused */}
          <DashboardHeader
            onOpenMobileMenu={() => setMobileMenuOpen(true)}
            onOpenQuickAdd={handleOpenAddModal}
            pendingCount={stats.pending + stats.inProgress}
          />

          {/* Statistics Overview */}
          <Statistics stats={stats} />

          {/* Grid Layout: Main Task Management + Deadlines */}
          <div className="dashboardGrid">
            <section className="dashboardMain">
              <div className="sectionHeader">
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <h2 className="sectionTitle">
                    {activeTab === "priority"
                      ? "Prioritas Tinggi"
                      : activeTab === "completed"
                      ? "Arsip Tugas Selesai"
                      : "Daftar Tugas"}
                  </h2>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      backgroundColor: "var(--color-surface-subtle)",
                      color: "var(--color-text-secondary)",
                      padding: "2px 8px",
                      borderRadius: "999px",
                      border: "1px solid var(--color-border)"
                    }}
                  >
                    {displayedTasks.length}
                  </span>
                </div>
              </div>

              <TaskList
                tasks={displayedTasks}
                onToggleStatus={handleToggleStatus}
                onDeleteTask={handleDeleteTask}
                onEditTask={handleOpenEditModal}
                onOpenQuickAdd={handleOpenAddModal}
              />
            </section>

            {/* Aside Column: Upcoming Deadlines */}
            <aside className="dashboardAside">
              <UpcomingDeadlines tasks={tasks} />
            </aside>
          </div>
        </main>
      </div>

      {/* Task Creation & Editing Modal */}
      <TaskForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSaveTask}
        editTask={taskToEdit}
      />
    </div>
  );
}
