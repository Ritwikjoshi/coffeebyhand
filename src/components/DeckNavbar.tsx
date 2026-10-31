"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const slidesList = [
    { id: "overview", num: "01", title: "Overview" },
    { id: "team", num: "02", title: "The Team" },
    { id: "problem", num: "03", title: "The Problem" },
    { id: "product", num: "04", title: "Product & Specs" },
    { id: "market", num: "05", title: "Market & Moat" },
    { id: "traction", num: "06", title: "Traction" },
    { id: "gtm", num: "07", title: "GTM Strategy" },
    { id: "financials", num: "08", title: "Use of Funds" },
    { id: "the-ask", num: "09", title: "The Ask (₹60L)" },
];

export default function DeckNavbar({ activeSlide }: { activeSlide?: string }) {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
            const currentScroll = window.scrollY;
            setScrollProgress(totalScroll > 0 ? (currentScroll / totalScroll) * 100 : 0);
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        setMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
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

            <motion.header
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className={`fixed top-1 left-0 right-0 z-50 transition-all duration-300 ${
                    scrolled
                        ? "glass border-b border-black/5 py-3 shadow-xs"
                        : "bg-white/80 backdrop-blur-md border-b border-black/5 py-4"
                }`}
            >
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex items-center justify-between">
                    {/* Brand Logo & Deck Status */}
                    <div className="flex items-center gap-4">
                        <Link href="/" className="flex items-center gap-2.5 group">
                            <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center text-white font-heading font-black text-xs tracking-tighter">
                                BC
                            </div>
                            <div className="flex flex-col leading-none">
                                <div className="flex items-center gap-2">
                                    <span className="font-heading text-lg font-black tracking-tight text-foreground">
                                        BLOB COFFEE
                                    </span>
                                    <span className="hidden sm:inline-block text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-full bg-accent/15 text-accent font-semibold border border-accent/20">
                                        Seed Deck
                                    </span>
                                </div>
                                <span className="text-[8px] uppercase tracking-[0.25em] text-foreground/50 font-medium">
                                    Pitch Presentation · 2026
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Middle Slides Navigation (Desktop) */}
                    <nav className="hidden lg:flex items-center gap-1 bg-[#F2EDE4]/60 border border-black/5 rounded-full px-3 py-1.5 text-xs font-heading font-semibold">
                        {slidesList.map((slide) => {
                            const isActive = activeSlide === slide.id;
                            return (
                                <button
                                    key={slide.id}
                                    onClick={() => scrollTo(slide.id)}
                                    className={`px-3 py-1 rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                                        isActive
                                            ? "bg-black text-white shadow-xs"
                                            : "text-foreground/70 hover:text-black hover:bg-black/5"
                                    }`}
                                >
                                    <span className="opacity-40 text-[10px]">{slide.num}</span>
                                    <span>{slide.title}</span>
                                </button>
                            );
                        })}
                    </nav>

                    {/* Right CTA Actions */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => scrollTo("the-ask")}
                            className="hidden sm:inline-flex items-center gap-1.5 bg-black text-white px-4 py-2 rounded-full text-xs font-heading font-bold uppercase tracking-wider hover:bg-black/85 transition-all shadow-xs"
                        >
                            <span>Seed Ask: ₹60L</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="lg:hidden p-2 rounded-full hover:bg-black/5 text-foreground transition-colors"
                            aria-label="Toggle Deck Navigation"
                        >
                            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Navigation Drawer */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-x-0 top-16 z-40 bg-white/95 backdrop-blur-xl border-b border-black/10 p-6 shadow-xl lg:hidden"
                    >
                        <p className="text-[11px] font-heading uppercase tracking-widest text-foreground/50 mb-3 font-semibold">
                            Table of Contents
                        </p>
                        <div className="grid grid-cols-2 gap-2 mb-6">
                            {slidesList.map((slide) => (
                                <button
                                    key={slide.id}
                                    onClick={() => scrollTo(slide.id)}
                                    className="flex items-center gap-2 p-2.5 rounded-xl bg-[#F5EFEB] hover:bg-black hover:text-white transition-all text-left text-xs font-heading font-medium"
                                >
                                    <span className="text-[10px] opacity-50">{slide.num}</span>
                                    <span>{slide.title}</span>
                                </button>
                            ))}
                        </div>
                        <button
                            onClick={() => scrollTo("the-ask")}
                            className="w-full bg-black text-white py-3 rounded-full text-center text-xs font-heading font-bold uppercase tracking-widest"
                        >
                            Review Investment Opportunity (₹60 Lakhs)
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
