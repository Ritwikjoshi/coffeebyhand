"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function DeckFooter() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="py-12 px-6 md:px-12 lg:px-16 bg-white border-t border-black/10">
            <div className="max-w-[1360px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-3">
                    <span className="font-heading font-black text-base uppercase text-foreground">
                        Blob Coffee
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-foreground/40 font-semibold">
                        © 2026 Confidential Investor Pitch Deck
                    </span>
                </div>

                <div className="flex items-center gap-6 text-xs text-foreground/60 font-medium">
                    <span>Udaipur, Rajasthan</span>
                    <span>·</span>
                    <span>Pre-Revenue Seed Stage</span>
                    <span>·</span>
                    <button
                        onClick={scrollToTop}
                        className="inline-flex items-center gap-1.5 text-accent hover:text-black font-semibold transition-colors"
                    >
                        <span>Back to Top</span>
                        <ArrowUp className="w-3.5 h-3.5" />
                    </button>
                </div>
            </div>
        </footer>
    );
}
