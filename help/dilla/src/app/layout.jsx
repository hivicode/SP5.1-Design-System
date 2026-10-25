import "./globals.css";
import React from "react";

export const metadata = {
  title: "Katalog Produk UMKM Pilihan",
  description: "Platform katalog produk UMKM terbaik",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
