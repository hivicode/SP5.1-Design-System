import React from "react";
import styles from "./Badge.module.css";

/**
 * Reusable Badge Component (BEM)
 * Variasi: success, warning, danger, neutral, information
 */
export default function Badge({
  children,
  variant = "neutral", // success | warning | danger | neutral | information
  showDot = true,
  className = ""
}) {
  const classNames = [
    styles.badge,
    styles[`badge--${variant}`],
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

