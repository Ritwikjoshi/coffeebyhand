"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, DollarSign, AlertTriangle, Check, ArrowRight, Zap, Coffee, Sparkles } from "lucide-react";

const problems = [
    {
        tag: "OUT-OF-HOME CAFES",
        title: "Expensive & Inconvenient",
        highlight: "EXPENSIVE",
        badgeColor: "bg-red-500/10 text-red-700 border-red-500/20",
        stats: "₹250 - ₹400 / cup",
        detour: "+25 min detour daily",
        description:
            "Adds substantial recurring cost and transit friction to a daily biological habit. Not feasible for multiple cups a day.",
        icon: DollarSign,
        flaw: "High recurring spend & commute time"
    },
    {
        tag: "MANUAL HOME BREW",
        title: "Slow & Laborious",
        highlight: "SLOW",
        badgeColor: "bg-amber-500/10 text-amber-700 border-amber-500/20",
        stats: "15 - 20 mins prep",
        detour: "Messy grinders & cleanup",
        description:
            "Requires expensive gear (burr grinders, aeropress, scales), prior planning, and messy wet grounds before your morning brain even functions.",
        icon: Clock,
        flaw: "Friction-heavy mornings & inconsistent extraction"
    },
    {
        tag: "INSTANT COFFEES",
        title: "Compromised Flavor",
        highlight: "COMPROMISED",
        badgeColor: "bg-orange-500/10 text-orange-700 border-orange-500/20",
        stats: "Burnt & astringent",
        detour: "Heavily processed powder",
        description:
            "Trades away the nuanced acidity, crema, and terroir of specialty coffee for artificial convenience. Fails discerning palates.",
        icon: AlertTriangle,
        flaw: "Lacks cafe-grade aromatics and depth"
    }
];

export default function SlideProblem() {
    return (
        <section
            id="problem"
            className="min-h-screen relative flex flex-col justify-center py-24 px-6 md:px-12 lg:px-16 bg-[#FDFBF7] overflow-hidden"
        >
            <div className="max-w-[1360px] w-full mx-auto mb-10 flex items-center justify-between border-b border-black/10 pb-4">
                <div className="flex items-center gap-3">
                    <span className="font-heading font-black text-xs md:text-sm tracking-widest text-accent uppercase">
                        SLIDE 03 // THE PROBLEM
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-xs uppercase tracking-wider text-foreground/50 font-medium">
                        Market Inefficiency
                    </span>
                </div>
                <span className="text-[10px] font-heading font-bold uppercase tracking-[0.2em] bg-black text-white px-3 py-1 rounded-full">
                    The Daily Coffee Trade-Off
                </span>
            </div>

            <div className="max-w-[1360px] w-full mx-auto">
                <div className="mb-12">
                    <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-foreground mb-4">
                        A Daily Habit Broken by <br />
                        <span className="text-accent">Bad Trade-Offs.</span>
                    </h2>
                    <p className="font-sans text-lg text-foreground/70 max-w-2xl font-normal leading-relaxed">
                        Every day, millions of coffee lovers are forced to choose between wasting time, burning money, or drinking subpar instant coffee.
                    </p>
                </div>

                {/* 3 Flawed Options Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {problems.map((prob, index) => {
                        const IconComponent = prob.icon;
                        return (
                            <motion.div
                                key={prob.tag}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className="bg-white rounded-3xl p-8 border border-black/10 shadow-xs flex flex-col justify-between hover:border-black/25 transition-all group"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-6">
                                        <span className="text-[10px] font-heading font-extrabold uppercase tracking-widest text-foreground/50">
                                            {prob.tag}
                                        </span>
                                        <span className={`text-[10px] font-heading font-bold px-2.5 py-1 rounded-full border ${prob.badgeColor}`}>
                                            {prob.highlight}
                                        </span>
                                    </div>

                                    <div className="w-12 h-12 rounded-2xl bg-[#FAF6F0] flex items-center justify-center text-foreground mb-6 group-hover:scale-105 transition-transform">
                                        <IconComponent className="w-6 h-6 text-foreground/80" />
                                    </div>

                                    <h3 className="font-heading text-2xl font-black uppercase tracking-tight text-foreground mb-3">
                                        {prob.title}
                                    </h3>

                                    <p className="text-sm text-foreground/70 leading-relaxed font-normal mb-6">
                                        {prob.description}
                                    </p>
                                </div>

                                <div className="pt-6 border-t border-black/5">
                                    <div className="flex items-center justify-between text-xs font-semibold mb-1">
                                        <span className="text-foreground/50">Metric</span>
                                        <span className="text-red-700">{prob.stats}</span>
                                    </div>
                                    <div className="flex items-center justify-between text-xs font-semibold">
                                        <span className="text-foreground/50">Friction</span>
                                        <span className="text-foreground/80">{prob.detour}</span>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* The Solution Banner: The Fourth Option */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="relative rounded-3xl bg-[#1A1816] text-white p-8 md:p-12 overflow-hidden shadow-2xl"
                >
                    <div className="absolute -right-10 -bottom-10 w-96 h-96 bg-accent/20 rounded-full blur-[100px] pointer-events-none" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent text-xs font-heading font-bold uppercase tracking-wider mb-4">
                                <Sparkles className="w-3.5 h-3.5" />
                                <span>The Solution</span>
                            </div>

                            <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
                                The Fourth Option: <br />
                                <span className="text-accent">Blob Coffee.</span>
                            </h3>

                            <p className="text-base sm:text-lg text-white/80 font-normal leading-relaxed max-w-2xl">
                                Blob Coffee eliminates the traditional three-way trade-off by concentrating authentic single-origin cold brew into a ready-to-pour 250ml aluminum can.
                            </p>
                        </div>

                        <div className="lg:col-span-4 flex flex-col gap-3">
                            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-3.5">
                                <div className="w-7 h-7 rounded-full bg-accent/30 flex items-center justify-center text-accent shrink-0">
                                    <Check className="w-4 h-4" />
                                </div>
                                <span className="text-xs font-heading font-semibold text-white/90">
                                    No waiting or queueing (Ready in 5s)
                                </span>
                            </div>

                            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-3.5">
                                <div className="w-7 h-7 rounded-full bg-accent/30 flex items-center justify-center text-accent shrink-0">
                                    <Check className="w-4 h-4" />
                                </div>
                                <span className="text-xs font-heading font-semibold text-white/90">
                                    Zero expensive equipment or messy cleanup
                                </span>
                            </div>

                            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-3.5">
                                <div className="w-7 h-7 rounded-full bg-accent/30 flex items-center justify-center text-accent shrink-0">
                                    <Check className="w-4 h-4" />
                                </div>
                                <span className="text-xs font-heading font-semibold text-white/90">
                                    100% Cafe-grade taste, uncompromised
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
