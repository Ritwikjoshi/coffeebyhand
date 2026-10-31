"use client";

import React from "react";
import { Check } from "lucide-react";

const matrix = [
    {
        feature: "Packaging Format",
        blob: "250ml Aluminum Can",
        blueTokai: "Glass Bottles / Tetra",
        sleepyOwl: "Brew Bags / Paper Cartons"
    },
    {
        feature: "Shelf Life Stability",
        blob: "9 Months Ambient (Zero Cold Chain)",
        blueTokai: "Short Cold-Chain Dependent",
        sleepyOwl: "Ambient but requires manual water steep"
    },
    {
        feature: "Preservation Tech",
        blob: "Nitrogen Flush (0 Preservatives)",
        blueTokai: "Pasteurized / Chilled",
        sleepyOwl: "Dry coffee sealed bags"
    },
    {
        feature: "Ready Time",
        blob: "Instant (5 Seconds)",
        blueTokai: "Instant ready drink",
        sleepyOwl: "12-18 Hours steeping required"
    },
    {
        feature: "Gross Margin Profile",
        blob: "50% Target Margin (Micro-Mfg)",
        blueTokai: "High Capex & Co-pack heavy",
        sleepyOwl: "Moderate FMCG margins"
    },
    {
        feature: "Quick-Commerce Dark Store Fit",
        blob: "High (Compact, Ambient, No Chiller Cost)",
        blueTokai: "Limited by Chilled Shelf Space",
        sleepyOwl: "Good FMCG presence"
    }
];

export default function SlideMarket() {
    return (
        <section
            id="market"
            className="min-h-screen relative flex flex-col justify-center pt-28 md:pt-32 pb-24 md:pb-28 px-4 sm:px-6 md:px-12 lg:px-16 bg-[#FDFBF7] overflow-hidden"
        >
            <div className="max-w-[1360px] w-full mx-auto mb-8 sm:mb-10 flex items-center justify-between border-b border-black/10 pb-3 sm:pb-4">
                <div className="flex items-center gap-2.5">
                    <span className="font-heading font-bold text-xs tracking-wider text-accent uppercase">
                        SLIDE 05 // MARKET & COMPETITIVE LANDSCAPE
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-xs uppercase tracking-wider text-foreground/50 font-medium">
                        TAM & Positioning Moat
                    </span>
                </div>
                <span className="text-[10px] font-heading font-bold uppercase tracking-wider bg-black text-white px-3 py-1 rounded-full">
                    ₹3,200 Cr Addressable Market
                </span>
            </div>

            <div className="max-w-[1360px] w-full mx-auto">
                <div className="mb-8 sm:mb-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                    <div>
                        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-foreground mb-3">
                            Capturing a <br />
                            <span className="text-accent">₹3,200 Crore Category.</span>
                        </h2>
                        <p className="font-sans text-base sm:text-lg text-foreground/70 max-w-2xl font-normal leading-relaxed">
                            India’s ready-to-drink and specialty cold brew market is accelerating rapidly as urban consumers transition from sugar-laden instant coffees to single-origin black brews.
                        </p>
                    </div>

                    <div className="p-5 sm:p-6 rounded-3xl bg-[#F6F2EC] border border-black/10 shrink-0">
                        <span className="text-[10px] font-heading uppercase tracking-wider text-foreground/50 block font-bold mb-1">
                            Reference Addressable Market (SAM)
                        </span>
                        <div className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground">
                            ₹3,200 Cr
                        </div>
                        <span className="text-xs text-accent font-semibold block mt-0.5">
                            RTD, Cold Brew & Premium Daily Coffee
                        </span>
                    </div>
                </div>

                {/* Competitive Matrix Table */}
                <div className="bg-white rounded-3xl p-5 sm:p-6 md:p-8 border border-black/10 shadow-xs mb-6 overflow-hidden">
                    <div className="mb-4 sm:mb-6">
                        <h3 className="font-heading text-lg sm:text-xl font-bold uppercase tracking-tight text-foreground">
                            Competitive Advantage Matrix
                        </h3>
                        <p className="text-xs text-foreground/60 font-medium mt-0.5">
                            How Blob Coffee out-positions legacy RTD and manual brew brands
                        </p>
                    </div>

                    <div className="overflow-x-auto -mx-5 sm:mx-0 px-5 sm:px-0">
                        <table className="w-full text-left border-collapse min-w-[580px]">
                            <thead>
                                <tr className="border-b border-black/10 text-[10px] font-heading uppercase tracking-wider text-foreground/50">
                                    <th className="py-3 px-3 font-bold">Category Feature</th>
                                    <th className="py-3 px-3 font-bold text-foreground bg-[#FBF7F0] rounded-t-xl">
                                        Blob Coffee (Our Moat)
                                    </th>
                                    <th className="py-3 px-3 font-medium">Blue Tokai</th>
                                    <th className="py-3 px-3 font-medium">Sleepy Owl</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-black/5 text-xs">
                                {matrix.map((row) => (
                                    <tr key={row.feature} className="hover:bg-black/[0.01] transition-colors">
                                        <td className="py-3.5 px-3 font-heading font-semibold text-foreground">
                                            {row.feature}
                                        </td>
                                        <td className="py-3.5 px-3 font-semibold text-accent bg-[#FBF7F0]">
                                            <div className="flex items-center gap-1.5">
                                                <Check className="w-3.5 h-3.5 text-accent shrink-0" />
                                                <span>{row.blob}</span>
                                            </div>
                                        </td>
                                        <td className="py-3.5 px-3 text-foreground/70">
                                            {row.blueTokai}
                                        </td>
                                        <td className="py-3.5 px-3 text-foreground/70">
                                            {row.sleepyOwl}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Advantage Summary Card */}
                <div className="p-5 sm:p-7 rounded-3xl bg-[#1A1816] text-white">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div className="max-w-3xl">
                            <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-accent block mb-1">
                                The Winning Differentiation
                            </span>
                            <p className="text-xs sm:text-sm text-white/90 font-normal leading-relaxed">
                                While competitors either build heavy cafe footprints, bulky cold-chain RTD bottles, or sell brew-bags that require 18 hours of preparation, <strong className="text-white font-semibold">Blob Coffee combines a compact, high-margin, ultra-convenient aluminum can format with zero-preservative nitrogen-flushed shelf stability.</strong>
                            </p>
                        </div>
                        <div className="shrink-0 bg-white/10 px-4 py-2 rounded-2xl border border-white/10 text-center">
                            <span className="text-xs font-heading font-bold text-accent block">
                                Ambient Logistics
                            </span>
                            <span className="text-[10px] text-white/70">
                                Zero Cold Chain Overhead
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
