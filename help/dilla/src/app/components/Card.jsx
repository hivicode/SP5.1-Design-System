"use client";

import React, { useState } from "react";
import styles from "./Card.module.css";

export default function Card({ product }) {
  const [isOpen, setIsOpen] = useState(false);

  const themeClass =
    product.theme === "green"
      ? styles.cardGreen
      : product.theme === "red"
      ? styles.cardRed
      : styles.cardBlue;

  const badgeClass =
    product.theme === "green"
      ? styles.badgeGreen
      : product.theme === "red"
      ? styles.badgeRed
      : styles.badgeBlue;

  const buyBtnClass =
    product.theme === "red" ? styles.btnDanger : styles.btnPrimary;

  return (
    <>
      <article className={[styles.card, themeClass].join(" ")} suppressHydrationWarning>
        <div className={styles.media} suppressHydrationWarning>
          <img
            src={product.image}
            alt={product.name}
            className={styles.image}
            loading="lazy"
          />
        </div>

        <div className={styles.content} suppressHydrationWarning>
          <span className={styles.category}>{product.category}</span>
          <h2 className={styles.title}>{product.name}</h2>
          <p className={styles.description}>{product.description}</p>

          <div className={styles.footerWrapper} suppressHydrationWarning>
            <div className={styles.badgeWrapper} suppressHydrationWarning>
              <span className={[styles.badge, badgeClass].join(" ")}>
                {product.badge}
              </span>
            </div>

            <p className={styles.price}>{product.price}</p>

            <div className={styles.actionsGrid} suppressHydrationWarning>
              <button
                type="button"
                className={styles.btnSecondary}
                onClick={() => setIsOpen(true)}
              >
                Detail
              </button>
              <button
                type="button"
                className={buyBtnClass}
                onClick={() => alert("Anda memilih membeli: " + product.name)}
              >
                Beli
              </button>
            </div>
          </div>
        </div>
      </article>

      {isOpen && (
        <div
          className={styles.modalOverlay}
          onClick={() => setIsOpen(false)}
          suppressHydrationWarning>
          <div
            className={styles.modalBox}
            onClick={(e) => e.stopPropagation()}
            suppressHydrationWarning>
            <button
              type="button"
              className={styles.btnClose}
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>

            <div className={styles.modalImageContainer} suppressHydrationWarning>
              <img
                src={product.image}
                alt={product.name}
                className={styles.modalImage}
              />
            </div>

            <div className={styles.modalBody} suppressHydrationWarning>
              <span className={[styles.badge, badgeClass].join(" ")}>
                {product.badge}
              </span>
              <h3 className={styles.modalTitle}>{product.name}</h3>
              <p className={styles.modalDescription}>{product.description}</p>

              <p className={styles.modalPrice}>{product.price}</p>

              <button
                type="button"
                className={buyBtnClass}
                style={{ width: "100%", marginTop: "16px" }}
                onClick={() => {
                  alert("Anda memilih membeli: " + product.name);
                  setIsOpen(false);
                }}
              >
                Beli Sekarang
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}