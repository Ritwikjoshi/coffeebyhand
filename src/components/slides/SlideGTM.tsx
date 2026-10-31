"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Building2, ShoppingBag, CheckCircle2, Calculator } from "lucide-react";

export default function SlideGTM() {
    const [companies, setCompanies] = useState(5);
    const cansPerCompany = 10;
    const pricePerCan = 150;
    const workingDays = 26;

    const totalCansPerDay = companies * cansPerCompany;
    const dailyRevenue = totalCansPerDay * pricePerCan;
    const monthlyRevenue = dailyRevenue * workingDays;
    const monthlyGrossProfit = monthlyRevenue * 0.5;

    return (
        <section
            id="gtm"
            className="min-h-screen relative flex flex-col justify-center pt-28 md:pt-32 pb-24 md:pb-28 px-4 sm:px-6 md:px-12 lg:px-16 bg-[#FDFBF7] overflow-hidden"
        >
            <div className="max-w-[1360px] w-full mx-auto mb-8 sm:mb-10 flex items-center justify-between border-b border-black/10 pb-3 sm:pb-4">
                <div className="flex items-center gap-2.5">
                    <span className="font-heading font-bold text-xs tracking-wider text-accent uppercase">
                        SLIDE 07 // GO-TO-MARKET STRATEGY
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-xs uppercase tracking-wider text-foreground/50 font-medium">
                        Two-Phase Expansion Flywheel
                    </span>
                </div>
                <span className="text-[10px] font-heading font-bold uppercase tracking-wider bg-black text-white px-3 py-1 rounded-full">
                    B2B Cash Engine → Q-Commerce Scale
                </span>
            </div>

            <div className="max-w-[1360px] w-full mx-auto">
                <div className="mb-8 sm:mb-10">
                    <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-foreground mb-3">
                        Phase 1 Cashflow. <br />
                        <span className="text-accent">Phase 2 Omni-Channel Scale.</span>
                    </h2>
                    <p className="font-sans text-base sm:text-lg text-foreground/70 max-w-2xl font-normal leading-relaxed">
                        Rather than burning high CAC on direct-to-consumer ads, Blob Coffee launches with predictable, high-margin B2B corporate subscriptions before scaling on Quick-Commerce.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 sm:mb-10">
                    {/* Phase 1: B2B Corporate Subscriptions */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-accent/40 shadow-xs flex flex-col justify-between relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 bg-accent text-white px-3.5 py-1 text-[10px] font-heading font-bold uppercase tracking-wider rounded-bl-2xl">
                            Immediate Focus (Day 1 - 90)
                        </div>

                        <div>
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-11 h-11 rounded-2xl bg-accent/15 text-accent flex items-center justify-center">
                                    <Building2 className="w-5 h-5" />
                                </div>
                                <div>
                                    <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-accent block">
                                        Phase 01 Launch
                                    </span>
                                    <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-foreground">
                                        B2B Corporate Subscriptions
                                    </h3>
                                </div>
                            </div>

                            <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed font-normal mb-5">
                                Daily coffee delivery subscriptions directly to high-density office pantries and executive floors in Udaipur, replacing slow coffee runs and expensive office machines.
                            </p>

                            <div className="space-y-2.5 mb-6">
                                <div className="flex items-center justify-between p-3 rounded-xl bg-[#F7F2EB] text-xs font-heading font-semibold">
                                    <span className="text-foreground/70">Target Clients</span>
                                    <span className="text-foreground font-bold">5 Major Corporates in Udaipur</span>
                                </div>
                                <div className="flex items-center justify-between p-3 rounded-xl bg-[#F7F2EB] text-xs font-heading font-semibold">
                                    <span className="text-foreground/70">Supply Rate</span>
                                    <span className="text-foreground font-bold">10 cans / company = 50 cans / day</span>
                                </div>
                                <div className="flex items-center justify-between p-3 rounded-xl bg-[#F7F2EB] text-xs font-heading font-semibold">
                                    <span className="text-foreground/70">Unit Pricing</span>
                                    <span className="text-foreground font-bold">₹150 per can</span>
                                </div>
                                <div className="flex items-center justify-between p-3 rounded-xl bg-accent/10 text-xs font-heading font-bold text-accent">
                                    <span>Monthly Run-rate</span>
                                    <span className="text-sm font-black">₹1,95,000 / month</span>
                                </div>
                                <div className="flex items-center justify-between p-3 rounded-xl bg-black text-white text-xs font-heading font-bold">
                                    <span>Gross Margin</span>
                                    <span className="text-accent text-sm font-black">50% Gross Margin</span>
                                </div>
                            </div>
                        </div>

                        <div className="pt-3.5 border-t border-black/5 text-xs text-foreground/60 flex items-center gap-1.5 font-medium">
                            <CheckCircle2 className="w-4 h-4 text-accent" />
                            <span>Zero CAC + 100% predictable recurring monthly demand</span>
                        </div>
                    </motion.div>

                    {/* Phase 2: Quick-Commerce & Digital Scale */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="bg-white rounded-3xl p-6 sm:p-8 border border-black/10 shadow-xs flex flex-col justify-between relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 bg-black/10 text-foreground/70 px-3.5 py-1 text-[10px] font-heading font-bold uppercase tracking-wider rounded-bl-2xl">
                            Expansion Stage (Month 4+)
                        </div>

                        <div>
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-11 h-11 rounded-2xl bg-black text-white flex items-center justify-center">
                                    <ShoppingBag className="w-5 h-5" />
                                </div>
                                <div>
                                    <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-foreground/50 block">
                                        Phase 02 Expansion
                                    </span>
                                    <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-foreground">
                                        Digital & Quick-Commerce Scale
                                    </h3>
                                </div>
                            </div>

                            <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed font-normal mb-5">
                                Listing on top Indian 10-minute delivery networks and national marketplaces to capture broader direct-to-consumer impulse and repeat orders.
                            </p>

                            {/* Platform Badges */}
                            <div className="grid grid-cols-2 gap-2.5 mb-6">
                                <div className="p-3 rounded-2xl bg-[#FAF7F2] border border-black/5">
                                    <span className="font-heading text-base font-bold text-foreground block">Blinkit</span>
                                    <span className="text-[10px] text-foreground/50 font-medium">10-Minute Dark Store Pilot</span>
                                </div>
                                <div className="p-3 rounded-2xl bg-[#FAF7F2] border border-black/5">
                                    <span className="font-heading text-base font-bold text-foreground block">Swiggy Instamart</span>
                                    <span className="text-[10px] text-foreground/50 font-medium">High Beverage Velocity</span>
                                </div>
                                <div className="p-3 rounded-2xl bg-[#FAF7F2] border border-black/5">
                                    <span className="font-heading text-base font-bold text-foreground block">Zepto</span>
                                    <span className="text-[10px] text-foreground/50 font-medium">Gen Z & Millennial Base</span>
                                </div>
                                <div className="p-3 rounded-2xl bg-[#FAF7F2] border border-black/5">
                                    <span className="font-heading text-base font-bold text-foreground block">Amazon India</span>
                                    <span className="text-[10px] text-foreground/50 font-medium">Pan-India 6-Pack Delivery</span>
                                </div>
                            </div>
                        </div>

                        <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-black/5 text-xs text-foreground/70 leading-relaxed">
                            <strong className="text-foreground font-semibold">The Ambient Advantage:</strong> Because Blob Coffee holds a 9-month shelf life without refrigeration, dark stores do not incur refrigerated slot surcharges, making distribution significantly cheaper than competitors.
                        </div>
                    </motion.div>
                </div>

                {/* Interactive Corporate Subscription Simulator */}
                <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-7 border border-black/10 shadow-xs">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-accent text-white flex items-center justify-center shrink-0">
                                <Calculator className="w-4 h-4" />
                            </div>
                            <div>
                                <h3 className="font-heading text-base font-bold uppercase text-foreground">
                                    Corporate Economics Simulator
                                </h3>
                                <p className="text-xs text-foreground/60">
                                    Model Phase 1 corporate expansion by scaling the number of corporate clients
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 bg-white px-3.5 py-1.5 rounded-2xl border border-black/10">
                            <span className="text-xs font-heading font-bold uppercase text-foreground/60">
                                Corporates:
                            </span>
                            <span className="font-heading text-lg font-black text-accent w-7 text-center">
                                {companies}
                            </span>
                            <input
                                type="range"
                                min={3}
                                max={25}
                                value={companies}
                                onChange={(e) => setCompanies(Number(e.target.value))}
                                className="w-24 accent-accent cursor-pointer"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                        <div className="bg-white p-3.5 rounded-2xl border border-black/5">
                            <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-foreground/50 block">
                                Daily Cans
                            </span>
                            <span className="font-heading text-xl sm:text-2xl font-bold text-foreground">
                                {totalCansPerDay}
                            </span>
                            <span className="text-[10px] text-foreground/50 block">cans / day</span>
                        </div>

                        <div className="bg-white p-3.5 rounded-2xl border border-black/5">
                            <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-foreground/50 block">
                                Daily Revenue
                            </span>
                            <span className="font-heading text-xl sm:text-2xl font-bold text-foreground">
                                ₹{dailyRevenue.toLocaleString("en-IN")}
                            </span>
                            <span className="text-[10px] text-foreground/50 block">at ₹150/can</span>
                        </div>

                        <div className="bg-white p-3.5 rounded-2xl border border-black/5">
                            <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-foreground/50 block">
                                Monthly Revenue
                            </span>
                            <span className="font-heading text-xl sm:text-2xl font-bold text-accent">
                                ₹{monthlyRevenue.toLocaleString("en-IN")}
                            </span>
                            <span className="text-[10px] text-foreground/50 block">26 working days</span>
                        </div>

                        <div className="bg-white p-3.5 rounded-2xl border border-black/5">
                            <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-foreground/50 block">
                                50% Gross Profit
                            </span>
                            <span className="font-heading text-xl sm:text-2xl font-bold text-green-700">
                                ₹{monthlyGrossProfit.toLocaleString("en-IN")}
                            </span>
                            <span className="text-[10px] text-green-600 block">Net gross cash flow</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
