"use client";

import React from "react";
import { Factory, Package, Wrench, Home, Users, Zap } from "lucide-react";

const capitalItems = [
    {
        name: "Can + Print (Working Capital)",
        unitCost: "₹35 / unit (50k units)",
        totalCost: "₹17,50,000",
        percentage: "58.3%",
        category: "Inventory & Working Capital",
        icon: Package
    },
    {
        name: "Packaging (Boxes, Shippers, Sleeves)",
        unitCost: "₹15 / unit (50k units)",
        totalCost: "₹7,50,000",
        percentage: "25.0%",
        category: "Packaging Materials",
        icon: Package
    },
    {
        name: "Industrial Precision Grinder",
        unitCost: "₹3,00,000 / unit",
        totalCost: "₹3,00,000",
        percentage: "10.0%",
        category: "Micro-Mfg Machinery",
        icon: Factory
    },
    {
        name: "2x Can Sealing Machines",
        unitCost: "₹50,000 / machine",
        totalCost: "₹1,00,000",
        percentage: "3.3%",
        category: "Micro-Mfg Machinery",
        icon: Wrench
    },
    {
        name: "Deep Fridge Storage",
        unitCost: "₹50,000 / unit",
        totalCost: "₹50,000",
        percentage: "1.7%",
        category: "Micro-Mfg Machinery",
        icon: Factory
    },
    {
        name: "Brewing Tools & Fittings",
        unitCost: "₹50,000 setup",
        totalCost: "₹50,000",
        percentage: "1.7%",
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
    return (
        <section
            id="financials"
            className="min-h-screen relative flex flex-col justify-center pt-28 md:pt-32 pb-24 md:pb-28 px-4 sm:px-6 md:px-12 lg:px-16 bg-[#F6F2EC] overflow-hidden"
        >
            <div className="max-w-[1360px] w-full mx-auto mb-8 sm:mb-10 flex items-center justify-between border-b border-black/10 pb-3 sm:pb-4">
                <div className="flex items-center gap-2.5">
                    <span className="font-heading font-bold text-xs tracking-wider text-accent uppercase">
                        SLIDE 08 // USE OF FUNDS & FINANCIALS
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-xs uppercase tracking-wider text-foreground/50 font-medium">
                        Capital Allocation Model
                    </span>
                </div>
                <span className="text-[10px] font-heading font-bold uppercase tracking-wider bg-black text-white px-3 py-1 rounded-full">
                    Total Ask: ₹30 Lakhs
                </span>
            </div>

            <div className="max-w-[1360px] w-full mx-auto">
                <div className="mb-8 sm:mb-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                    <div>
                        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-foreground mb-3">
                            Micro-Manufacturing <br />
                            <span className="text-accent">Capital Efficiency.</span>
                        </h2>
                        <p className="font-sans text-base sm:text-lg text-foreground/70 max-w-2xl font-normal leading-relaxed">
                            A pragmatic capital allocation model designed to stand up an independent micro-canning unit in Udaipur, fund 50,000 cans of working capital, and launch with maximum capital efficiency.
                        </p>
                    </div>

                    {/* Top Macro Summary Badges */}
                    <div className="flex items-center gap-3 sm:gap-4 shrink-0">
                        <div className="p-4 sm:p-5 rounded-3xl bg-white border border-black/10 shadow-xs">
                            <span className="text-[10px] font-heading uppercase tracking-wider text-foreground/50 block font-bold mb-0.5">
                                Capital Ask (100% Setup)
                            </span>
                            <div className="font-heading text-2xl sm:text-3xl font-extrabold text-foreground">
                                ₹30 Lakhs
                            </div>
                            <span className="text-[10px] sm:text-xs text-accent font-semibold block mt-0.5">
                                Capex & 50k Can Inventory
                            </span>
                        </div>

                        <div className="p-4 sm:p-5 rounded-3xl bg-[#1A1816] text-white shadow-md">
                            <span className="text-[10px] font-heading uppercase tracking-wider text-white/50 block font-bold mb-0.5">
                                Monthly Recurring OPEX
                            </span>
                            <div className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                                ₹60,000 / mo
                            </div>
                            <span className="text-[10px] sm:text-xs text-accent font-semibold block mt-0.5">
                                Ultra-Lean Overhead
                            </span>
                        </div>
                    </div>
                </div>

                {/* Capital Allocation Detailed Breakdown Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8 sm:mb-10">
                    {/* Left: Detailed Equipment & Inventory Line Items */}
                    <div className="lg:col-span-8 bg-white rounded-3xl p-5 sm:p-7 border border-black/10 shadow-xs">
                        <div className="flex items-center justify-between mb-5">
                            <div>
                                <h3 className="font-heading text-lg sm:text-xl font-bold uppercase text-foreground">
                                    Capital Setup & Inventory Breakdown
                                </h3>
                                <p className="text-xs text-foreground/60 font-medium mt-0.5">
                                    Total Upfront Capital Budget: ₹30,00,000 (100% of Seed Round)
                                </p>
                            </div>
                            <span className="text-xs font-heading font-bold uppercase px-3 py-1 rounded-full bg-accent/15 text-accent">
                                Phase 1 Ready
                            </span>
                        </div>

                        <div className="space-y-2.5">
                            {capitalItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={item.name}
                                        className="p-3.5 rounded-2xl bg-[#FDFBF7] border border-black/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 hover:border-black/20 transition-all"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                                                <Icon className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <h4 className="font-heading text-xs sm:text-sm font-bold text-foreground">
                                                    {item.name}
                                                </h4>
                                                <span className="text-[11px] text-foreground/50 font-medium">
                                                    {item.unitCost} · {item.category}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between sm:justify-end gap-3 text-right">
                                            <span className="text-xs font-heading font-semibold text-foreground/40 sm:block hidden">
                                                {item.percentage}
                                            </span>
                                            <span className="font-heading text-sm sm:text-base font-bold text-foreground">
                                                {item.totalCost}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right: Operational Runway Baseline */}
                    <div className="lg:col-span-4 bg-[#FAF7F2] rounded-3xl p-5 sm:p-7 border border-black/10 flex flex-col justify-between">
                        <div>
                            <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-accent block mb-0.5">
                                Operational Baseline
                            </span>
                            <h3 className="font-heading text-lg sm:text-xl font-bold uppercase text-foreground mb-3">
                                Monthly Recurring OPEX
                            </h3>
                            <p className="text-xs text-foreground/70 leading-relaxed font-normal mb-5">
                                Fixed monthly operational expenses kept intentionally lean in Udaipur, enabling break-even with just 15 cans/day of corporate orders.
                            </p>

                            <div className="space-y-2.5 mb-5">
                                {opexItems.map((op) => {
                                    return (
                                        <div key={op.name} className="p-3 rounded-2xl bg-white border border-black/5">
                                            <div className="flex items-center justify-between mb-0.5">
                                                <span className="font-heading text-xs font-bold text-foreground">
                                                    {op.name}
                                                </span>
                                                <span className="font-heading text-xs font-bold text-accent">
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

                        <div className="p-3.5 rounded-2xl bg-black text-white text-xs">
                            <div className="flex items-center justify-between font-heading font-bold mb-0.5">
                                <span>Total Monthly Overhead:</span>
                                <span className="text-accent font-bold text-sm">₹60,000 / mo</span>
                            </div>
                            <span className="text-[10px] text-white/60">
                                Break-even achieved at ~14.4 corporate cans/day
                            </span>
                        </div>
                    </div>
                </div>

                {/* Fund Utilization Bar Visual */}
                <div className="p-5 sm:p-6 rounded-3xl bg-white border border-black/10 shadow-xs">
                    <div className="flex items-center justify-between mb-3 text-xs font-heading font-bold uppercase tracking-wider">
                        <span className="text-foreground/70">Seed Fund Allocation Map (₹30 Lakhs)</span>
                        <span className="text-accent">100% Allocated</span>
                    </div>

                    <div className="w-full h-3.5 bg-black/5 rounded-full overflow-hidden flex gap-1 p-0.5">
                        <div className="bg-[#B2825A] h-full rounded-full" style={{ width: "58.3%" }} title="Can + Print (58.3%)" />
                        <div className="bg-[#D4A373] h-full rounded-full" style={{ width: "25.0%" }} title="Packaging (25.0%)" />
                        <div className="bg-[#1A1816] h-full rounded-full" style={{ width: "10.0%" }} title="Industrial Grinder (10.0%)" />
                        <div className="bg-[#E66B32] h-full rounded-full" style={{ width: "3.3%" }} title="Can Sealing (3.3%)" />
                        <div className="bg-[#8C7862] h-full rounded-full" style={{ width: "3.4%" }} title="Fridge & Brewing Gear (3.4%)" />
                    </div>

                    <div className="flex flex-wrap gap-x-4 gap-y-2 mt-3.5 text-[10px] font-heading font-medium text-foreground/70">
                        <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#B2825A]" />
                            <span>Can + Print (58.3% · ₹17.5L)</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#D4A373]" />
                            <span>Packaging (25.0% · ₹7.5L)</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#1A1816]" />
                            <span>Industrial Grinder (10.0% · ₹3.0L)</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#E66B32]" />
                            <span>2x Can Sealers (3.3% · ₹1.0L)</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#8C7862]" />
                            <span>Fridge & Tools (3.4% · ₹1.0L)</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
