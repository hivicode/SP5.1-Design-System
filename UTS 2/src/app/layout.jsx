import "../styles/globals.css";
import React from "react";

export const metadata = {
  title: "CoolYeah — Portal Akademik Mahasiswa",
  description: "Sistem Informasi Akademik dan Portal Mahasiswa CoolYeah / RuangKampus.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
