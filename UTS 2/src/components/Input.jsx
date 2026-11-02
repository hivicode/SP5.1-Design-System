import React from "react";
import styles from "./Input.module.css";

/**
 * Reusable Input Component (BEM)
 * Variasi: default, search, error, disabled
 */
export default function Input({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  variant = "default", // default | search
  error,
  disabled = false,
  className = "",
  ...rest
}) {
  const isSearch = variant === "search";

  const containerClass = [
    styles.formField,
    isSearch ? styles["formField--search"] : "",
    error ? styles["formField--error"] : "",
    disabled ? styles["formField--disabled"] : "",
    className
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={containerClass}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      )}

      <div className={styles.inputWrapper}>
        {isSearch && (
          <span className={styles.searchIcon}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </span>
        )}

        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={styles.inputControl}
          {...rest}
        />
      </div>

      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
}

