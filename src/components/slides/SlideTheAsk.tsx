"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, CheckCircle2, Mail, Phone, Calendar, Download, ShieldCheck, Factory, Building2, ShoppingBag } from "lucide-react";

export default function SlideTheAsk() {
    const [submitted, setSubmitted] = useState(false);
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email.trim()) {
            setSubmitted(true);
        }
    };

    return (
        <section
            id="the-ask"
            className="min-h-screen relative flex flex-col justify-center py-24 px-6 md:px-12 lg:px-16 bg-[#FDFBF7] overflow-hidden"
        >
            <div className="max-w-[1360px] w-full mx-auto mb-10 flex items-center justify-between border-b border-black/10 pb-4">
                <div className="flex items-center gap-3">
                    <span className="font-heading font-black text-xs md:text-sm tracking-widest text-accent uppercase">
                        SLIDE 09 // THE ASK & PARTNERSHIP
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-xs uppercase tracking-wider text-foreground/50 font-medium">
                        Seed Round Opportunity
                    </span>
                </div>
                <span className="text-[10px] font-heading font-bold uppercase tracking-[0.2em] bg-accent text-white px-3 py-1 rounded-full">
                    Raising ₹60 Lakhs
                </span>
            </div>

            <div className="max-w-[1360px] w-full mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Left Column: The Vision & Investment Summary */}
                    <div className="lg:col-span-7">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/15 border border-accent/25 text-xs font-heading font-bold uppercase tracking-wider text-accent mb-6">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>The Mission</span>
                        </div>

                        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-foreground mb-6">
                            Partner With Us to Make Cold Brew a <br />
                            <span className="text-accent">Daily Default.</span>
                        </h2>

                        <p className="font-sans text-lg text-foreground/80 leading-relaxed font-normal mb-8 max-w-2xl">
                            We are raising <strong className="text-foreground font-bold">₹60 Lakhs</strong> to establish micro-manufacturing infrastructure, validate Phase 1 corporate subscriptions in Udaipur, and scale into high-velocity quick-commerce distribution.
                        </p>

                        {/* 3 Milestone Unlocks */}
                        <div className="space-y-4 mb-8">
                            <div className="p-4 rounded-2xl bg-[#F6F2EC] border border-black/5 flex items-start gap-4">
                                <div className="w-9 h-9 rounded-xl bg-black text-white flex items-center justify-center shrink-0 mt-0.5">
                                    <Factory className="w-4 h-4" />
                                </div>
                                <div>
                                    <h4 className="font-heading text-sm font-black uppercase text-foreground">
                                        Milestone 01: Commission Micro-Manufacturing
                                    </h4>
                                    <p className="text-xs text-foreground/70 mt-0.5 leading-relaxed">
                                        Deploy industrial grinder, nitrogen flushing, and 2x can sealers in Udaipur to achieve in-house 50,000 can capacity at 50% gross margin.
                                    </p>
                                </div>
                            </div>

                            <div className="p-4 rounded-2xl bg-[#F6F2EC] border border-black/5 flex items-start gap-4">
                                <div className="w-9 h-9 rounded-xl bg-accent text-white flex items-center justify-center shrink-0 mt-0.5">
                                    <Building2 className="w-4 h-4" />
                                </div>
                                <div>
                                    <h4 className="font-heading text-sm font-black uppercase text-foreground">
                                        Milestone 02: Phase 1 Corporate Validation
                                    </h4>
                                    <p className="text-xs text-foreground/70 mt-0.5 leading-relaxed">
                                        Fulfill 5 corporate subscriptions in Udaipur (50 cans/day, ₹1,95,000/month run-rate) to establish cash-flow break-even.
                                    </p>
                                </div>
                            </div>

                            <div className="p-4 rounded-2xl bg-[#F6F2EC] border border-black/5 flex items-start gap-4">
                                <div className="w-9 h-9 rounded-xl bg-accent-orange text-white flex items-center justify-center shrink-0 mt-0.5">
                                    <ShoppingBag className="w-4 h-4" />
                                </div>
                                <div>
                                    <h4 className="font-heading text-sm font-black uppercase text-foreground">
                                        Milestone 03: Quick-Commerce Dark Store Listing
                                    </h4>
                                    <p className="text-xs text-foreground/70 mt-0.5 leading-relaxed">
                                        Leverage 6-month ambient shelf life to onboard Blinkit, Zepto, and Instamart dark stores without cold-chain inventory surcharges.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Investor Connect & Data Room Card */}
                    <div className="lg:col-span-5">
                        <div className="bg-[#1A1816] text-white rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] pointer-events-none" />

                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-6">
                                    <span className="text-[10px] font-heading font-extrabold uppercase tracking-widest text-accent">
                                        Direct Founder Access
                                    </span>
                                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                                </div>

                                <h3 className="font-heading text-2xl font-black uppercase text-white mb-2">
                                    Connect With Sumit Sharma
                                </h3>
                                <p className="text-xs text-white/70 leading-relaxed font-normal mb-8">
                                    Schedule a direct briefing, request the detailed financial model spreadsheet, or arrange sampling in Udaipur.
                                </p>

                                {!submitted ? (
                                    <form onSubmit={handleSubmit} className="space-y-4 mb-6">
                                        <div>
                                            <label className="text-[10px] font-heading uppercase tracking-wider text-white/60 block mb-1">
                                                Investor Email Address
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="investor@fund.com"
                                                className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-accent text-white py-3.5 rounded-2xl font-heading font-bold text-xs uppercase tracking-wider hover:bg-accent/90 transition-all flex items-center justify-center gap-2 shadow-md"
                                        >
                                            <span>Request Data Room & Term Sheet</span>
                                            <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </form>
                                ) : (
                                    <div className="p-6 rounded-2xl bg-white/10 border border-accent/40 mb-6 text-center">
                                        <CheckCircle2 className="w-8 h-8 text-accent mx-auto mb-2" />
                                        <h4 className="font-heading text-sm font-bold text-white uppercase">
                                            Request Recorded
                                        </h4>
                                        <p className="text-xs text-white/70 mt-1">
                                            The investor data room and financial model will be shared with <span className="text-accent">{email}</span>.
                                        </p>
                                    </div>
                                )}

                                {/* Direct Contact Channels */}
                                <div className="pt-6 border-t border-white/10 space-y-3 text-xs text-white/80">
                                    <div className="flex items-center justify-between">
                                        <span className="text-white/50">Founder:</span>
                                        <span className="font-semibold text-white">Sumit Sharma (F&B Founder)</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-white/50">Location:</span>
                                        <span className="font-semibold text-white">Udaipur, Rajasthan, India</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-white/50">Format:</span>
                                        <span className="font-semibold text-accent">Seed Round Equity · ₹60 Lakhs</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
