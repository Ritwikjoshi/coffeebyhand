"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function SlideOverview() {
    return (
        <section
            id="overview"
            className="min-h-screen relative flex flex-col justify-center pt-28 md:pt-32 pb-24 md:pb-28 px-4 sm:px-6 md:px-12 lg:px-16 overflow-hidden bg-[#FDFBF7]"
        >
            {/* Ambient Background Glow */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-accent/15 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-10 right-0 w-96 h-96 bg-accent-orange/10 rounded-full blur-[120px] pointer-events-none" />

            {/* Slide Header Indicator */}
            <div className="max-w-[1360px] w-full mx-auto mb-6 sm:mb-8 flex items-center justify-between border-b border-black/10 pb-3 sm:pb-4">
                <div className="flex items-center gap-2.5">
                    <span className="font-heading font-bold text-xs tracking-wider text-accent uppercase">
                        SLIDE 01 // OVERVIEW
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-xs uppercase tracking-wider text-foreground/50 font-medium">
                        Executive Summary
                    </span>
                </div>
                <div>
                    <span className="inline-block text-[10px] font-heading font-bold uppercase tracking-wider bg-black text-white px-3 py-1 rounded-full">
                        Seed Stage · Pre-Revenue
                    </span>
                </div>
            </div>

            <div className="max-w-[1360px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Content Column */}
                <div className="lg:col-span-7 flex flex-col items-start z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EFE9DF] border border-black/5 text-xs font-heading font-semibold text-foreground/80 mb-4"
                    >
                        <Sparkles className="w-3.5 h-3.5 text-accent" />
                        <span>The Modern Cold Brew Concentrate Revolution</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight leading-[1] text-foreground mb-4"
                    >
                        Blob <span className="text-accent">Coffee.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="font-serif text-xl sm:text-2xl text-foreground/80 italic leading-snug mb-6 max-w-xl"
                    >
                        &ldquo;Cafe-grade taste, concentrated for the everyday.&rdquo;
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white/90 border border-black/10 rounded-2xl p-5 sm:p-6 backdrop-blur-md mb-6 max-w-xl shadow-xs"
                    >
                        <h2 className="text-[10px] font-heading uppercase tracking-widest text-foreground/50 font-bold mb-1.5">
                            The Value Proposition
                        </h2>
                        <p className="text-sm sm:text-base text-foreground/80 leading-relaxed font-normal">
                            Premium single-origin concentrated cold brew engineered to deliver authentic barista quality at home or on the go—without the 20-minute prep, bulky machinery, or ₹300 cafe price tag.
                        </p>
                    </motion.div>

                    {/* Quick Metric Highlights */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                        className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-xl"
                    >
                        <div className="bg-[#F7F2EB] border border-black/5 p-3.5 rounded-xl">
                            <span className="text-[10px] font-heading uppercase tracking-wider text-foreground/50 block font-semibold">
                                Packaging
                            </span>
                            <span className="font-heading text-base sm:text-lg font-bold text-foreground block mt-0.5">
                                250ml Can
                            </span>
                            <span className="text-[10px] text-accent block font-medium">
                                Recyclable Alum.
                            </span>
                        </div>

                        <div className="bg-[#F7F2EB] border border-black/5 p-3.5 rounded-xl">
                            <span className="text-[10px] font-heading uppercase tracking-wider text-foreground/50 block font-semibold">
                                Shelf Life
                            </span>
                            <span className="font-heading text-base sm:text-lg font-bold text-foreground block mt-0.5">
                                9 Months
                            </span>
                            <span className="text-[10px] text-accent block font-medium">
                                Ambient Stable
                            </span>
                        </div>

                        <div className="bg-[#F7F2EB] border border-black/5 p-3.5 rounded-xl">
                            <span className="text-[10px] font-heading uppercase tracking-wider text-foreground/50 block font-semibold">
                                Preservation
                            </span>
                            <span className="font-heading text-base sm:text-lg font-bold text-foreground block mt-0.5">
                                Zero Chem.
                            </span>
                            <span className="text-[10px] text-accent block font-medium">
                                Nitrogen Flushed
                            </span>
                        </div>

                        <div className="bg-[#F7F2EB] border border-black/5 p-3.5 rounded-xl">
                            <span className="text-[10px] font-heading uppercase tracking-wider text-foreground/50 block font-semibold">
                                Capital Ask
                            </span>
                            <span className="font-heading text-base sm:text-lg font-bold text-foreground block mt-0.5">
                                ₹30 Lakhs
                            </span>
                            <span className="text-[10px] text-accent block font-medium">
                                Micro-Mfg Setup
                            </span>
                        </div>
                    </motion.div>
                </div>

                {/* Right Visual Can Showcase */}
                <div className="lg:col-span-5 relative flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="relative w-full max-w-[360px] aspect-[4/5] rounded-3xl bg-gradient-to-b from-[#EBE4DA] via-[#F2EDE4] to-[#DFD6C9] p-6 flex flex-col items-center justify-between shadow-xl border border-black/10 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(178,130,90,0.25),transparent_70%)]" />

                        {/* Top Badges */}
                        <div className="relative z-10 w-full flex items-center justify-between text-[10px] font-heading font-bold uppercase tracking-wider">
                            <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-black/10 shadow-xs">
                                Single-Origin
                            </span>
                            <span className="bg-black text-white px-3 py-1 rounded-full shadow-xs">
                                Concentrate
                            </span>
                        </div>

                        {/* Centered Product Can Image */}
                        <div className="relative w-full h-[60%] my-auto flex items-center justify-center">
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="relative w-full h-full"
                            >
                                <Image
                                    src="/images/product-can.jpg"
                                    alt="Blob Coffee 250ml Aluminum Can — Premium Cold Brew"
                                    fill
                                    className="object-contain drop-shadow-2xl"
                                    priority
                                />
                            </motion.div>
                        </div>

                        {/* Product Spec Strip */}
                        <div className="relative z-10 w-full bg-white/90 backdrop-blur-md rounded-2xl p-3.5 border border-black/10 shadow-xs">
                            <div className="flex items-center justify-between mb-1">
                                <span className="font-heading text-xs font-bold uppercase tracking-wider">
                                    Blob Cold Brew Can
                                </span>
                                <span className="text-[10px] font-heading font-bold text-accent uppercase">
                                    250ml
                                </span>
                            </div>
                            <div className="flex items-center justify-between text-[10px] text-foreground/70">
                                <span>Zero Preservatives</span>
                                <span>·</span>
                                <span>Ambient Stable</span>
                                <span>·</span>
                                <span>Slow Percolated</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
