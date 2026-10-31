"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ListOrdered } from "lucide-react";

const slides = [
    { id: "overview", title: "01 Overview" },
    { id: "team", title: "02 The Team" },
    { id: "problem", title: "03 The Problem" },
    { id: "product", title: "04 Product & Specs" },
    { id: "market", title: "05 Market & Moat" },
    { id: "traction", title: "06 Traction" },
    { id: "gtm", title: "07 GTM Strategy" },
    { id: "financials", title: "08 Use of Funds" },
    { id: "the-ask", title: "09 The Ask (₹60L)" }
];

export default function DeckController() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight / 3;
            for (let i = slides.length - 1; i >= 0; i--) {
                const el = document.getElementById(slides[i].id);
                if (el && el.offsetTop <= scrollPos) {
                    setCurrentIndex(i);
                    break;
                }
            }
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            // Ignore if input/textarea is focused
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

    return (
        <aside aria-label="Pitch deck navigation" className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
            <div className="glass border border-black/10 rounded-full px-4 py-2 shadow-xl flex items-center gap-3 text-xs font-heading">
                {/* Prev Button */}
                <button
                    onClick={() => goToSlide(Math.max(0, currentIndex - 1))}
                    disabled={currentIndex === 0}
                    className="p-1.5 rounded-full hover:bg-black/5 disabled:opacity-30 disabled:hover:bg-transparent text-foreground transition-colors"
                    aria-label="Previous Slide"
                >
                    <ChevronLeft className="w-4 h-4" />
                </button>

                {/* Current Slide Indicator */}
                <div className="flex items-center gap-2 px-2">
                    <span className="font-extrabold text-foreground">
                        {slides[currentIndex]?.title}
                    </span>
                    <span className="text-[10px] text-foreground/40 font-bold">
                        ({currentIndex + 1} of {slides.length})
                    </span>
                </div>

                {/* Next Button */}
                <button
                    onClick={() => goToSlide(Math.min(slides.length - 1, currentIndex + 1))}
                    disabled={currentIndex === slides.length - 1}
                    className="p-1.5 rounded-full hover:bg-black/5 disabled:opacity-30 disabled:hover:bg-transparent text-foreground transition-colors"
                    aria-label="Next Slide"
                >
                    <ChevronRight className="w-4 h-4" />
                </button>

                <div className="w-[1px] h-4 bg-black/10 hidden sm:block" />

                {/* Keyboard tip indicator */}
                <span className="text-[9px] uppercase tracking-wider text-foreground/40 font-semibold hidden sm:inline-block">
                    Use keys [← / →]
                </span>
            </div>
        </aside>
    );
}
