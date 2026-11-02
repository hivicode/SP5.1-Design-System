import React from "react";
import styles from "./Container.module.css";

/**
 * Reusable Container Component (BEM)
 * Consistent page max-width and responsive horizontal padding
 */
export default function Container({
  children,
  size = "lg",
  bordered = false,
  className = "",
  as: Component = "div",
  ...rest
}) {
  const classNames = [
    styles.container,
    styles[`container--${size}`],
    bordered ? styles["container--bordered"] : "",
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

