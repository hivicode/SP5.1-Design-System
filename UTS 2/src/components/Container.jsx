import React from "react";
import styles from "./Container.module.css";

/**
 * Reusable Container Component (BEM)
 * Mengatur lebar dan konsistensi konten
 */
export default function Container({
  children,
  size = "lg",
  className = "",
  as: Component = "div",
  ...rest
}) {
  const classNames = [
    styles.container,
    styles[`container--${size}`],
    className
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={classNames} {...rest}>
      {children}
    </Component>
  );
}

