"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { DollarSign, PieChart, Wrench, Factory, Package, Zap, Users, Home, TrendingUp, CheckCircle2 } from "lucide-react";

const capitalItems = [
    {
        name: "Can + Print (Working Capital)",
        unitCost: "₹35 / unit (50k units)",
        totalCost: "₹17,50,000",
        amountNum: 1750000,
        percentage: "29.2%",
        category: "Inventory & Working Capital",
        icon: Package
    },
    {
        name: "Packaging (Boxes, Shippers, Sleeves)",
        unitCost: "₹15 / unit (50k units)",
        totalCost: "₹7,50,000",
        amountNum: 750000,
        percentage: "12.5%",
        category: "Packaging Materials",
        icon: Package
    },
    {
        name: "Industrial Precision Grinder",
        unitCost: "₹3,00,000 / unit",
        totalCost: "₹3,00,000",
        amountNum: 300000,
        percentage: "5.0%",
        category: "Micro-Mfg Machinery",
        icon: Factory
    },
    {
        name: "2x Can Sealing Machines",
        unitCost: "₹50,000 / machine",
        totalCost: "₹1,00,000",
        amountNum: 100000,
        percentage: "1.7%",
        category: "Micro-Mfg Machinery",
        icon: Wrench
    },
    {
        name: "Deep Fridge Storage",
        unitCost: "₹50,000 / unit",
        totalCost: "₹50,000",
        amountNum: 50000,
        percentage: "0.8%",
        category: "Micro-Mfg Machinery",
        icon: Factory
    },
    {
        name: "Brewing Tools & Fittings",
        unitCost: "₹50,000 setup",
        totalCost: "₹50,000",
        amountNum: 50000,
        percentage: "0.8%",
        category: "Micro-Mfg Machinery",
        icon: Wrench
    }
];

const opexItems = [
    {
        name: "Factory Facility Rent",
        rate: "₹20,000 / month",
        annual: "₹2,40,000 / yr",
        icon: Home
    },
    {
        name: "Production Staff Salaries",
        rate: "₹15,000 / employee (2 workers)",
        annual: "₹3,60,000 / yr",
        icon: Users
    },
    {
        name: "Industrial Power & Electricity",
        rate: "₹5,000 / month",
        annual: "₹60,000 / yr",
        icon: Zap
    }
];

export default function SlideFinancials() {
    const [filterCategory, setFilterCategory] = useState<"all" | "capex" | "opex">("all");

    return (
        <section
            id="financials"
            className="min-h-screen relative flex flex-col justify-center py-24 px-6 md:px-12 lg:px-16 bg-[#F6F2EC] overflow-hidden"
        >
            <div className="max-w-[1360px] w-full mx-auto mb-10 flex items-center justify-between border-b border-black/10 pb-4">
                <div className="flex items-center gap-3">
                    <span className="font-heading font-black text-xs md:text-sm tracking-widest text-accent uppercase">
                        SLIDE 08 // USE OF FUNDS & FINANCIALS
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-xs uppercase tracking-wider text-foreground/50 font-medium">
                        Capital Allocation Model
                    </span>
                </div>
                <span className="text-[10px] font-heading font-bold uppercase tracking-[0.2em] bg-black text-white px-3 py-1 rounded-full">
                    Total Ask: ₹60 Lakhs
                </span>
            </div>

            <div className="max-w-[1360px] w-full mx-auto">
                <div className="mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                    <div>
                        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-foreground mb-4">
                            Micro-Manufacturing <br />
                            <span className="text-accent">Capital Efficiency.</span>
                        </h2>
                        <p className="font-sans text-lg text-foreground/70 max-w-2xl font-normal leading-relaxed">
                            A pragmatic capital allocation model designed to stand up an independent micro-canning unit, fund 50,000 cans of working capital, and provide comfortable operational runway.
                        </p>
                    </div>

                    {/* Top Macro Summary Badges */}
                    <div className="flex items-center gap-4">
                        <div className="p-6 rounded-3xl bg-white border border-black/10 shadow-xs">
                            <span className="text-[10px] font-heading uppercase tracking-widest text-foreground/50 block font-bold mb-1">
                                Upfront Capital Setup
                            </span>
                            <div className="font-heading text-3xl font-black text-foreground">
                                ₹30 Lakhs
                            </div>
                            <span className="text-xs text-accent font-semibold block mt-1">
                                Capex & Inventory Launch
                            </span>
                        </div>

                        <div className="p-6 rounded-3xl bg-[#1A1816] text-white shadow-md">
                            <span className="text-[10px] font-heading uppercase tracking-widest text-white/50 block font-bold mb-1">
                                Monthly Recurring OPEX
                            </span>
                            <div className="font-heading text-3xl font-black text-white">
                                ₹60,000 / mo
                            </div>
                            <span className="text-xs text-accent font-semibold block mt-1">
                                Ultra-Lean Overhead
                            </span>
                        </div>
                    </div>
                </div>

                {/* Capital Allocation Detailed Breakdown Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
                    {/* Left: Detailed Equipment & Inventory Line Items */}
                    <div className="lg:col-span-8 bg-white rounded-3xl p-6 md:p-8 border border-black/10 shadow-sm">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h3 className="font-heading text-xl font-black uppercase text-foreground">
                                    Capital Setup & Inventory Breakdown
                                </h3>
                                <p className="text-xs text-foreground/60 font-medium mt-0.5">
                                    Total Upfront Capital Budget: ₹30,00,000
                                </p>
                            </div>
                            <span className="text-xs font-heading font-extrabold uppercase px-3 py-1 rounded-full bg-accent/15 text-accent">
                                Phase 1 Ready
                            </span>
                        </div>

                        <div className="space-y-3">
                            {capitalItems.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={item.name}
                                        className="p-4 rounded-2xl bg-[#FDFBF7] border border-black/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-black/20 transition-all"
                                    >
                                        <div className="flex items-center gap-3.5">
                                            <div className="w-9 h-9 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                                                <Icon className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <h4 className="font-heading text-sm font-bold text-foreground">
                                                    {item.name}
                                                </h4>
                                                <span className="text-xs text-foreground/50 font-medium">
                                                    {item.unitCost} · {item.category}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between sm:justify-end gap-4 text-right">
                                            <span className="text-xs font-heading font-bold text-foreground/40 sm:block hidden">
                                                {item.percentage}
                                            </span>
                                            <span className="font-heading text-base font-black text-foreground">
                                                {item.totalCost}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right: Operational Runway Baseline */}
                    <div className="lg:col-span-4 bg-[#FAF7F2] rounded-3xl p-6 md:p-8 border border-black/10 flex flex-col justify-between">
                        <div>
                            <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-accent block mb-1">
                                Operational Baseline
                            </span>
                            <h3 className="font-heading text-xl font-black uppercase text-foreground mb-4">
                                Monthly Recurring OPEX
                            </h3>
                            <p className="text-xs text-foreground/70 leading-relaxed font-normal mb-6">
                                Fixed monthly operational expenses kept intentionally lean in Udaipur, enabling break-even with just 15 cans/day of corporate orders.
                            </p>

                            <div className="space-y-3 mb-6">
                                {opexItems.map((op) => {
                                    const Icon = op.icon;
                                    return (
                                        <div key={op.name} className="p-3.5 rounded-2xl bg-white border border-black/5">
                                            <div className="flex items-center justify-between mb-1">
                                                <span className="font-heading text-xs font-bold text-foreground">
                                                    {op.name}
                                                </span>
                                                <span className="font-heading text-xs font-black text-accent">
                                                    {op.rate}
                                                </span>
                                            </div>
                                            <span className="text-[10px] text-foreground/50 font-medium block">
                                                {op.annual}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="p-4 rounded-2xl bg-black text-white text-xs">
                            <div className="flex items-center justify-between font-heading font-bold mb-1">
                                <span>Total Monthly Overhead:</span>
                                <span className="text-accent font-black text-sm">₹60,000 / mo</span>
                            </div>
                            <span className="text-[10px] text-white/60">
                                Break-even achieved at ~14.4 corporate cans/day
                            </span>
                        </div>
                    </div>
                </div>

                {/* Fund Utilization Bar Visual */}
                <div className="p-6 rounded-3xl bg-white border border-black/10 shadow-xs">
                    <div className="flex items-center justify-between mb-3 text-xs font-heading font-bold uppercase tracking-wider">
                        <span className="text-foreground/70">Seed Fund Allocation Map (₹60 Lakhs)</span>
                        <span className="text-accent">100% Accounted</span>
                    </div>

                    <div className="w-full h-4 bg-black/5 rounded-full overflow-hidden flex gap-1 p-0.5">
                        <div className="bg-[#B2825A] h-full rounded-full" style={{ width: "29.2%" }} title="Can + Print" />
                        <div className="bg-[#D4A373] h-full rounded-full" style={{ width: "12.5%" }} title="Packaging" />
                        <div className="bg-[#1A1816] h-full rounded-full" style={{ width: "8.3%" }} title="Machines (Grinder, Sealer, Fridge)" />
                        <div className="bg-[#E66B32] h-full rounded-full" style={{ width: "11.0%" }} title="OPEX Runway" />
                        <div className="bg-[#8C7862] h-full rounded-full" style={{ width: "39.0%" }} title="GTM Buffer & Growth Working Capital" />
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mt-4 text-[10px] font-heading font-semibold text-foreground/70">
                        <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#B2825A]" />
                            <span>Can + Print (29.2%)</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#D4A373]" />
                            <span>Packaging (12.5%)</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#1A1816]" />
                            <span>Machinery (8.3%)</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#E66B32]" />
                            <span>OPEX Runway (11.0%)</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#8C7862]" />
                            <span>GTM Scale Reserve (39.0%)</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
