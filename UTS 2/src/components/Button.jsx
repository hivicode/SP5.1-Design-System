import React from "react";
import styles from "./Button.module.css";

/**
 * Reusable Button Component (BEM)
 * Variasi: primary, secondary (yellow), outline, ghost
 */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  icon = null,
  className = "",
  type = "button",
  onClick,
  ...rest
}) {
  const classNames = [
    styles.button,
    styles[`button--${variant}`],
    styles[`button--${size}`],
    className
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      className={classNames}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {icon && <span className={styles.button__icon}>{icon}</span>}
      <span className={styles.button__text}>{children}</span>
    </button>
  );
}

