import React from "react";
import styles from "./SectionHeader.module.css";

/**
 * Reusable SectionHeader Component (BEM)
 * Judul, deskripsi, dan action opsional
 */
export default function SectionHeader({
  title,
  description,
  action,
  className = ""
}) {
  return (
    <header className={[styles.sectionHeader, className].filter(Boolean).join(" ")}>
      <div className={styles.sectionHeader__info}>
        <h2 className={styles.sectionHeader__title}>{title}</h2>
        {description && <p className={styles.sectionHeader__desc}>{description}</p>}
      </div>
      {action && <div className={styles.sectionHeader__action}>{action}</div>}
    </header>
  );
}

