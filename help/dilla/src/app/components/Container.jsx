import React from "react";
import styles from "./Container.module.css";

export default function Container({
  size = "medium",
  bordered = false,
  title,
  children,
}) {
  const classList = [
    styles.container,
    styles[`container--${size}`] || styles["container--medium"],
    bordered ? styles["container--bordered"] : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classList}>
      {title && <h3 className={styles.container__title}>{title}</h3>}
      <div>{children}</div>
    </div>
  );
}
