import React from "react";
import styles from "./Card.module.css";

/**
 * Reusable Card Component (BEM)
 * @param {string} variant - default | subtle | flat
 * @param {string} padding - sm | md | lg
 * @param {boolean} clickable - hover lift effect
 * @param {string} title - optional card title
 * @param {string} subtitle - optional card subtitle
 * @param {React.ReactNode} action - right-aligned header action
 * @param {React.ReactNode} footer - optional footer
 */
export default function Card({
  children,
  variant = "default",
  padding = "md",
  clickable = false,
  title,
  subtitle,
  action,
  footer,
  className = "",
  onClick,
  ...rest
}) {
  const classNames = [
    styles.card,
    styles[`card--${variant}`],
    styles[`card--pad-${padding}`],
    clickable ? styles["card--clickable"] : "",
    className
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classNames} onClick={onClick} {...rest}>
      {(title || action) && (
        <div className={styles.card__header}>
          <div>
            {title && <h3 className={styles.card__title}>{title}</h3>}
            {subtitle && <p className={styles.card__subtitle}>{subtitle}</p>}
          </div>
          {action && <div className={styles.card__action}>{action}</div>}
        </div>
      )}

      <div className={styles.card__body}>{children}</div>

      {footer && <div className={styles.card__footer}>{footer}</div>}
    </div>
  );
}

