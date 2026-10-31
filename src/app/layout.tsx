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
  title: "Blob Coffee | Modern Coffee Rituals",
  description: "The best part of your day shouldn't be a luxury—it should be a ritual held in the palm of your hand.",
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
