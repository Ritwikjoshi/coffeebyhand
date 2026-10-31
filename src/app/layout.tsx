import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Blob Coffee — Investor Pitch Deck | Seed Round ₹30 Lakhs",
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
        className={`${inter.variable} ${plusJakarta.variable} ${fraunces.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
