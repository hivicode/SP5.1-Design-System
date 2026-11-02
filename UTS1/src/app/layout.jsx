import "../styles/globals.css";
import React from "react";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-plus-jakarta",
});

export const metadata = {
  title: "Tugas.in — Platform Manajemen Tugas Mahasiswa",
  description: "Atur tugas, fokus masa depan. Sistem manajemen produktivitas akademik dengan desain editorial terstruktur.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={plusJakartaSans.variable} suppressHydrationWarning>
      <body className={plusJakartaSans.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
