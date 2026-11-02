import React from "react";
import styles from "./Badge.module.css";

/**
 * Reusable Badge Component (BEM)
 * @param {string} variant - pending | in-progress | completed | priority-high | priority-medium | priority-low | neutral
 * @param {string} size - sm | md
 * @param {boolean} showDot - show indicator dot
 */
export default function Badge({
  children,
  variant = "neutral",
  size = "md",
  showDot = true,
  className = ""
}) {
  const classNames = [
    styles.badge,
    styles[`badge--${variant}`],
    styles[`badge--${size}`],
    className
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classNames}>
      {showDot && <span className={styles.badge__dot} />}
      <span className={styles.badge__label}>{children}</span>
    </span>
  );
}

