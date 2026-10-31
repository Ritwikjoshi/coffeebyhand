"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Sparkles, Droplet, Clock, CheckCircle2, ArrowRight, Layers, Flame } from "lucide-react";

const specs = [
    {
        label: "Packaging Format",
        value: "250ml Sleek Can",
        sub: "100% Recyclable sustainable aluminum, lightweight & durable.",
        icon: Layers
    },
    {
        label: "Natural Preservation",
        value: "Nitrogen Flushed",
        sub: "Displaces oxygen at canning point. Zero artificial preservatives added.",
        icon: Shield
    },
    {
        label: "Ambient Shelf Life",
        value: "6 Months Stable",
        sub: "Zero cold-chain dependency for transport, storage, or retail dark stores.",
        icon: Clock
    },
    {
        label: "Coffee Sourcing",
        value: "Single-Origin Arabica",
        sub: "Ethically sourced high-altitude beans calibrated for cold extraction.",
        icon: Flame
    }
];

const steps = [
    {
        step: "01",
        title: "Single-Origin Selection",
        action: "START WITH PREMIUM BEANS",
        description:
            "Handpicked specialty coffee beans roasted precisely to unleash rich cocoa, hazelnut, and citrus notes without harsh pyrolysis."
    },
    {
        step: "02",
        title: "Slow Cold Percolation",
        action: "CONCENTRATE FOR MAXIMUM SPEED",
        description:
            "Extracted over 18 hours using chilled micro-filtered water to create a high-solids, smooth concentrate without thermal degradation."
    },
    {
        step: "03",
        title: "Instant Cafe Serve",
        action: "POUR AT HOME OR ON THE GO",
        description:
            "Snap open the nitrogen-sealed can and pour directly over ice, splash chilled water for Americano, or blend with oat/dairy milk for a silky latte."
    }
];

export default function SlideProduct() {
    return (
        <section
            id="product"
            className="min-h-screen relative flex flex-col justify-center py-24 px-6 md:px-12 lg:px-16 bg-[#F6F2EC] overflow-hidden"
        >
            <div className="max-w-[1360px] w-full mx-auto mb-10 flex items-center justify-between border-b border-black/10 pb-4">
                <div className="flex items-center gap-3">
                    <span className="font-heading font-black text-xs md:text-sm tracking-widest text-accent uppercase">
                        SLIDE 04 // PRODUCT SPECIFICATIONS
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-xs uppercase tracking-wider text-foreground/50 font-medium">
                        Engineering & The Ritual
                    </span>
                </div>
                <span className="text-[10px] font-heading font-bold uppercase tracking-[0.2em] bg-accent/20 text-accent px-3 py-1 rounded-full">
                    250ml Aluminum Can
                </span>
            </div>

            <div className="max-w-[1360px] w-full mx-auto">
                <div className="mb-12">
                    <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-foreground mb-4">
                        Precision Packaging. <br />
                        <span className="text-accent">Zero Compromise.</span>
                    </h2>
                    <p className="font-sans text-lg text-foreground/70 max-w-2xl font-normal leading-relaxed">
                        Formulated to solve both taste and retail logistics simultaneously through nitrogen preservation and concentrate formulation.
                    </p>
                </div>

                {/* Specs Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
                    {specs.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="bg-white rounded-2xl p-6 border border-black/10 shadow-xs flex flex-col justify-between"
                            >
                                <div className="w-10 h-10 rounded-xl bg-[#F6F2EC] flex items-center justify-center text-foreground mb-6">
                                    <Icon className="w-5 h-5 text-accent" />
                                </div>
                                <div>
                                    <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-foreground/50 block mb-1">
                                        {item.label}
                                    </span>
                                    <h3 className="font-heading text-xl font-black text-foreground mb-2">
                                        {item.value}
                                    </h3>
                                    <p className="text-xs text-foreground/70 leading-relaxed font-normal">
                                        {item.sub}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* How It Works Section: 3-Step Cold Brew Ritual */}
                <div className="bg-white rounded-3xl p-8 md:p-12 border border-black/10 shadow-sm">
                    <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <span className="text-xs font-heading font-bold uppercase tracking-widest text-accent block mb-2">
                                The Mechanism
                            </span>
                            <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase tracking-tight text-foreground">
                                How It Works
                            </h3>
                        </div>
                        <span className="text-xs font-heading font-medium text-foreground/60">
                            Fast, repeatable, cafe-grade pour in 5 seconds
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                        {steps.map((st, idx) => (
                            <motion.div
                                key={st.step}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.15 }}
                                className="p-6 rounded-2xl bg-[#FDFBF7] border border-black/5 flex flex-col justify-between group hover:border-black/20 transition-all"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="font-heading font-black text-2xl text-accent">
                                            {st.step}
                                        </span>
                                        <span className="text-[9px] font-heading font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-black/5 text-foreground/60">
                                            Step {idx + 1}
                                        </span>
                                    </div>
                                    <h4 className="font-heading text-base font-bold text-foreground mb-1">
                                        {st.title}
                                    </h4>
                                    <p className="text-[11px] font-heading font-extrabold uppercase tracking-wider text-accent mb-3">
                                        {st.action}
                                    </p>
                                    <p className="text-xs text-foreground/70 leading-relaxed font-normal">
                                        {st.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
