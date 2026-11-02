import React from "react";
import styles from "./Button.module.css";

/**
 * Reusable Button Component following BEM methodology
 * @param {string} variant - primary | secondary | outline | ghost | danger
 * @param {string} size - sm | md | lg
 * @param {boolean} fullWidth - expand to full width
 * @param {boolean} disabled - disabled state
 * @param {React.ReactNode} icon - optional icon
 * @param {string} className - extra classes
 */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
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
    fullWidth ? styles["button--full"] : "",
    disabled ? styles["button--disabled"] : "",
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

