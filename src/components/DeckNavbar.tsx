"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X, ChevronDown } from "lucide-react";

const slidesList = [
    { id: "overview", num: "01", title: "Overview", short: "Overview" },
    { id: "team", num: "02", title: "The Team", short: "Team" },
    { id: "problem", num: "03", title: "Problem", short: "Problem" },
    { id: "product", num: "04", title: "Product & Specs", short: "Product" },
    { id: "market", num: "05", title: "Market & Moat", short: "Market" },
    { id: "traction", num: "06", title: "Traction", short: "Traction" },
    { id: "gtm", num: "07", title: "GTM Strategy", short: "GTM" },
    { id: "financials", num: "08", title: "Use of Funds", short: "Funds" },
    { id: "the-ask", num: "09", title: "The Ask (₹30L)", short: "The Ask" },
];

export default function DeckNavbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [activeId, setActiveId] = useState("overview");

    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
            const currentScroll = window.scrollY;
            setScrollProgress(totalScroll > 0 ? (currentScroll / totalScroll) * 100 : 0);
            setScrolled(window.scrollY > 30);

            // Determine active slide
            const scrollPos = window.scrollY + 200;
            for (let i = slidesList.length - 1; i >= 0; i--) {
                const el = document.getElementById(slidesList[i].id);
                if (el && el.offsetTop <= scrollPos) {
                    setActiveId(slidesList[i].id);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        setMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            const navbarHeight = 80; // fixed navbar approx height in px
            const elementTop = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: elementTop - navbarHeight,
                behavior: "smooth",
            });
        }
    };

    return (
        <>
            {/* Top Reading Progress Bar */}
            <div className="fixed top-0 left-0 right-0 h-1 bg-black/5 z-[60]">
                <div
                    className="h-full bg-accent transition-all duration-150 ease-out"
                    style={{ width: `${scrollProgress}%` }}
                />
            </div>

            <header
                className={`fixed top-1 left-0 right-0 z-50 transition-all duration-300 ${
                    scrolled
                        ? "glass border-b border-black/10 py-2.5 shadow-xs"
                        : "bg-[#FDFBF7]/90 backdrop-blur-md border-b border-black/5 py-3"
                }`}
            >
                <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between gap-4">
                    {/* Brand Logo & Deck Status */}
                    <Link href="/" className="flex items-center gap-2 group shrink-0">
                        <div className="flex flex-col leading-none">
                            <div className="flex items-center gap-2">
                                <span className="font-heading text-base sm:text-lg font-bold tracking-tight text-foreground">
                                    Blob Coffee
                                </span>
                                <span className="hidden sm:inline-block text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent/15 text-accent font-semibold border border-accent/20">
                                    Pitch Deck
                                </span>
                            </div>
                            <span className="text-[9px] uppercase tracking-[0.2em] text-foreground/50 font-medium">
                                Pre-Revenue · Seed 2026
                            </span>
                        </div>
                    </Link>

                    {/* Middle Slides Navigation (Desktop) - Clean & Compact */}
                    <nav className="hidden xl:flex items-center gap-0.5 bg-[#F2EDE4]/70 border border-black/5 rounded-full p-1 text-xs font-heading font-medium">
                        {slidesList.map((slide) => {
                            const isActive = activeId === slide.id;
                            return (
                                <button
                                    key={slide.id}
                                    onClick={() => scrollTo(slide.id)}
                                    className={`px-2.5 py-1 rounded-full transition-all duration-150 flex items-center gap-1 whitespace-nowrap ${
                                        isActive
                                            ? "bg-black text-white shadow-xs font-semibold"
                                            : "text-foreground/70 hover:text-black hover:bg-black/5"
                                    }`}
                                >
                                    <span className={`text-[10px] ${isActive ? "text-accent" : "opacity-40"}`}>
                                        {slide.num}
                                    </span>
                                    <span className="text-[11px]">{slide.short}</span>
                                </button>
                            );
                        })}
                    </nav>

                    {/* Medium Screen Slide Indicator */}
                    <div className="hidden lg:flex xl:hidden items-center gap-2 bg-[#F2EDE4]/80 px-3 py-1.5 rounded-full border border-black/5 text-xs font-heading font-semibold">
                        <span className="text-accent">Slide</span>
                        <span className="font-bold text-foreground">
                            {slidesList.find((s) => s.id === activeId)?.num} / 09
                        </span>
                        <span className="text-foreground/50">·</span>
                        <span className="text-foreground/80 font-medium">
                            {slidesList.find((s) => s.id === activeId)?.title}
                        </span>
                    </div>

                    {/* Right CTA Actions */}
                    <div className="flex items-center gap-2.5 shrink-0">
                        <button
                            onClick={() => scrollTo("the-ask")}
                            className="inline-flex items-center gap-1.5 bg-black text-white px-3.5 sm:px-4 py-2 rounded-full text-xs font-heading font-bold uppercase tracking-wider hover:bg-black/85 transition-all shadow-xs"
                        >
                            <span>Seed Ask: ₹30L</span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
                        </button>

                        {/* Mobile & Tablet Menu Toggle */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="xl:hidden p-2 rounded-full hover:bg-black/5 text-foreground transition-colors"
                            aria-label="Toggle Deck Navigation"
                        >
                            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile / Tablet Navigation Drawer */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-x-0 top-16 z-40 bg-white/95 backdrop-blur-xl border-b border-black/10 p-6 shadow-xl xl:hidden max-h-[85vh] overflow-y-auto"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <p className="text-[11px] font-heading uppercase tracking-widest text-foreground/50 font-bold">
                                Jump to Slide
                            </p>
                            <span className="text-xs text-accent font-semibold">
                                9 Total Slides
                            </span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                            {slidesList.map((slide) => {
                                const isActive = activeId === slide.id;
                                return (
                                    <button
                                        key={slide.id}
                                        onClick={() => scrollTo(slide.id)}
                                        className={`flex items-center gap-3 p-3 rounded-xl border text-left text-xs font-heading transition-all ${
                                            isActive
                                                ? "bg-black text-white border-black"
                                                : "bg-[#F5EFEB]/70 border-black/5 hover:bg-black/5 text-foreground"
                                        }`}
                                    >
                                        <span className={`text-[11px] font-bold ${isActive ? "text-accent" : "opacity-50"}`}>
                                            {slide.num}
                                        </span>
                                        <span className="font-semibold">{slide.title}</span>
                                    </button>
                                );
                            })}
                        </div>
                        <button
                            onClick={() => scrollTo("the-ask")}
                            className="w-full bg-accent text-white py-3 rounded-full text-center text-xs font-heading font-bold uppercase tracking-widest shadow-md"
                        >
                            Review Investment Opportunity (₹30 Lakhs)
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
