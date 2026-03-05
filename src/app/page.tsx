import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Philosophy from "@/components/Philosophy";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-accent selection:text-foreground">
      <Navbar />
      <Hero />
      <ProductGrid />
      <Philosophy />
      <Footer />
    </main>
  );
}
