import React from "react";
import styles from "./Card.module.css";

/**
 * Reusable Card Component (BEM)
 * Variasi: default, subtle, highlight
 */
export default function Card({
  children,
  variant = "default",
  padding = "md",
  title,
  subtitle,
  action,
  footer,
  className = "",
  ...rest
}) {
  const classNames = [
    styles.card,
    styles[`card--${variant}`],
    styles[`card--pad-${padding}`],
    className
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classNames} {...rest}>
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

