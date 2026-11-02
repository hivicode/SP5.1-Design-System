import React from "react";
import styles from "./Input.module.css";

/**
 * Reusable Input Component (BEM)
 * Handles text, date, textarea, and select options
 */
export default function Input({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
  hint,
  required = false,
  disabled = false,
  as = "input",
  children,
  className = "",
  ...rest
}) {
  const containerClass = [
    styles.formField,
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
          <span>
            {label}
            {required && <span className={styles.required}>*</span>}
          </span>
        </label>
      )}

      {as === "select" ? (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={styles.inputControl}
          {...rest}
        >
          {children}
        </select>
      ) : as === "textarea" ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          rows={3}
          className={styles.inputControl}
          {...rest}
        />
      ) : (
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
      )}

      {error ? (
        <span className={styles.errorText}>{error}</span>
      ) : hint ? (
        <span className={styles.hintText}>{hint}</span>
      ) : null}
    </div>
  );
}

