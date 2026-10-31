import React from "react";
import DeckNavbar from "@/components/DeckNavbar";
import SlideOverview from "@/components/slides/SlideOverview";
import SlideTeam from "@/components/slides/SlideTeam";
import SlideProblem from "@/components/slides/SlideProblem";
import SlideProduct from "@/components/slides/SlideProduct";
import SlideMarket from "@/components/slides/SlideMarket";
import SlideTraction from "@/components/slides/SlideTraction";
import SlideGTM from "@/components/slides/SlideGTM";
import SlideFinancials from "@/components/slides/SlideFinancials";
import SlideTheAsk from "@/components/slides/SlideTheAsk";
import DeckFooter from "@/components/DeckFooter";
import DeckController from "@/components/DeckController";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] selection:bg-accent selection:text-white">
      {/* Pitch Deck Top Navigation Bar */}
      <DeckNavbar />

      {/* Slide 01: Overview */}
      <SlideOverview />

      {/* Slide 02: The Team */}
      <SlideTeam />

      {/* Slide 03: The Problem */}
      <SlideProblem />

      {/* Slide 04: Product Details & Specifications */}
      <SlideProduct />

      {/* Slide 05: Market Landscape & Competitors */}
      <SlideMarket />

      {/* Slide 06: Traction */}
      <SlideTraction />

      {/* Slide 07: Go-to-Market (GTM) Strategy */}
      <SlideGTM />

      {/* Slide 08: Use of Funds & Financial Breakdown */}
      <SlideFinancials />

      {/* Slide 09: The Ask (₹30 Lakhs) */}
      <SlideTheAsk />

      {/* Deck Footer */}
      <DeckFooter />

      {/* Floating Presentation Slide Controller & Keyboard Shortcuts */}
      <DeckController />
    </main>
  );
}
