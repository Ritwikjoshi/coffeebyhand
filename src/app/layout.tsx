import type { Metadata } from "next";
import { Inter, Syne, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blob Coffee — Investor Pitch Deck | Seed Round ₹60 Lakhs",
  description: "Blob Coffee is a premium single-origin concentrated cold brew designed for cafe-grade taste at home or on the go. Seed Round Pitch Deck.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${syne.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
