"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Minimize2, Maximize2 } from "lucide-react";

const slides = [
    { id: "overview", title: "Overview" },
    { id: "team", title: "The Team" },
    { id: "problem", title: "The Problem" },
    { id: "product", title: "Product & Specs" },
    { id: "market", title: "Market & Moat" },
    { id: "traction", title: "Traction" },
    { id: "gtm", title: "GTM Strategy" },
    { id: "financials", title: "Use of Funds" },
    { id: "the-ask", title: "The Ask" }
];

export default function DeckController() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [minimized, setMinimized] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY + 250;
            for (let i = slides.length - 1; i >= 0; i--) {
                const el = document.getElementById(slides[i].id);
                if (el && el.offsetTop <= scrollPos) {
                    setCurrentIndex(i);
                    break;
                }
            }
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            if (["INPUT", "TEXTAREA"].includes((document.activeElement as HTMLElement)?.tagName)) {
                return;
            }

            if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === "PageDown") {
                e.preventDefault();
                goToSlide(Math.min(slides.length - 1, currentIndex + 1));
            } else if (e.key === "ArrowLeft" || e.key === "ArrowUp" || e.key === "PageUp") {
                e.preventDefault();
                goToSlide(Math.max(0, currentIndex - 1));
            } else if (e.key === "Home") {
                e.preventDefault();
                goToSlide(0);
            } else if (e.key === "End") {
                e.preventDefault();
                goToSlide(slides.length - 1);
            }
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [currentIndex]);

    const goToSlide = (idx: number) => {
        const target = slides[idx];
        if (target) {
            const el = document.getElementById(target.id);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
                setCurrentIndex(idx);
            }
        }
    };

    if (minimized) {
        return (
            <aside aria-label="Pitch deck navigation" className="fixed bottom-4 right-4 z-40">
                <button
                    onClick={() => setMinimized(false)}
                    className="glass border border-black/10 rounded-full px-3 py-1.5 shadow-md flex items-center gap-1.5 text-[11px] font-heading font-semibold hover:bg-black/5 transition-all text-foreground"
                    title="Expand slide navigator"
                >
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    <span>Slide {currentIndex + 1}/9</span>
                    <Maximize2 className="w-3 h-3 text-foreground/50 ml-0.5" />
                </button>
            </aside>
        );
    }

    return (
        <aside aria-label="Pitch deck navigation" className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 max-w-[95vw]">
            <div className="glass border border-black/10 rounded-full px-3 py-1.5 shadow-lg flex items-center gap-2 text-xs font-heading">
                {/* Prev Button */}
                <button
                    onClick={() => goToSlide(Math.max(0, currentIndex - 1))}
                    disabled={currentIndex === 0}
                    className="p-1 rounded-full hover:bg-black/5 disabled:opacity-30 disabled:hover:bg-transparent text-foreground transition-colors"
                    aria-label="Previous Slide"
                >
                    <ChevronLeft className="w-3.5 h-3.5" />
                </button>

                {/* Current Slide Indicator */}
                <div className="flex items-center gap-1.5 px-1 whitespace-nowrap">
                    <span className="font-bold text-foreground text-[11px]">
                        {String(currentIndex + 1).padStart(2, "0")} {slides[currentIndex]?.title}
                    </span>
                    <span className="text-[10px] text-foreground/40 font-semibold">
                        / {String(slides.length).padStart(2, "0")}
                    </span>
                </div>

                {/* Next Button */}
                <button
                    onClick={() => goToSlide(Math.min(slides.length - 1, currentIndex + 1))}
                    disabled={currentIndex === slides.length - 1}
                    className="p-1 rounded-full hover:bg-black/5 disabled:opacity-30 disabled:hover:bg-transparent text-foreground transition-colors"
                    aria-label="Next Slide"
                >
                    <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <div className="w-[1px] h-3 bg-black/10 hidden sm:block" />

                {/* Keyboard tip indicator */}
                <span className="text-[9px] uppercase tracking-wider text-foreground/40 font-medium hidden sm:inline-block">
                    [← / →]
                </span>

                {/* Minimize Button */}
                <button
                    onClick={() => setMinimized(true)}
                    className="p-1 rounded-full hover:bg-black/5 text-foreground/40 hover:text-foreground transition-colors ml-0.5"
                    title="Minimize navigation bar"
                    aria-label="Minimize navigation bar"
                >
                    <Minimize2 className="w-3 h-3" />
                </button>
            </div>
        </aside>
    );
}
