import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import type React from "react";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "CodeBridge - Ծրագրավորման դպրոց Արմավիրում",
  description:
    "Օֆլայն ծրագրավորման դասընթացներ, որակյալ դասեր Արմավիր քաղաքում",
  generator: "v0.dev",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans`}>{children}</body>
    </html>
  );
}
