"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Briefcase, Coffee, CheckCircle, ShieldCheck, UserCheck } from "lucide-react";

export default function SlideTeam() {
    return (
        <section
            id="team"
            className="min-h-screen relative flex flex-col justify-center pt-28 md:pt-32 pb-24 md:pb-28 px-4 sm:px-6 md:px-12 lg:px-16 bg-[#F6F2EC] overflow-hidden"
        >
            <div className="max-w-[1360px] w-full mx-auto mb-8 sm:mb-10 flex items-center justify-between border-b border-black/10 pb-3 sm:pb-4">
                <div className="flex items-center gap-2.5">
                    <span className="font-heading font-bold text-xs tracking-wider text-accent uppercase">
                        SLIDE 02 // THE TEAM
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-xs uppercase tracking-wider text-foreground/50 font-medium">
                        Leadership & Domain Authority
                    </span>
                </div>
                <span className="text-[10px] font-heading font-bold uppercase tracking-wider bg-accent/20 text-accent px-3 py-1 rounded-full">
                    8+ Years F&B Pedigree
                </span>
            </div>

            <div className="max-w-[1360px] w-full mx-auto">
                <div className="mb-8 sm:mb-10">
                    <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-foreground mb-3">
                        Operator Grit Meets <br />
                        <span className="text-accent">Coffee Science.</span>
                    </h2>
                    <p className="font-sans text-base sm:text-lg text-foreground/70 max-w-2xl font-normal leading-relaxed">
                        Blob Coffee is founded by an industry insider who bridges deep culinary business discipline with the science of cold coffee extraction.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                    {/* Founder Spotlight Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-black/10 shadow-xs flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-black/10 shadow-md shrink-0">
                                    <Image
                                        src="/images/sumit-sharma.jpg"
                                        alt="Sumit Sharma - Founder of Blob Coffee"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground uppercase tracking-tight">
                                        Sumit Sharma
                                    </h3>
                                    <p className="text-xs sm:text-sm font-heading font-bold text-accent uppercase tracking-wider">
                                        Founder & Beverage Architect
                                    </p>
                                    <span className="text-xs text-foreground/50 font-medium">
                                        Udaipur, Rajasthan
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-3 mb-6">
                                <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-black/5 flex items-start gap-3">
                                    <Briefcase className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-heading text-xs font-bold text-foreground">
                                            8+ Years F&B Venture Founder
                                        </p>
                                        <p className="text-xs text-foreground/70 mt-0.5 leading-relaxed">
                                            Successfully operating a profitable food venture for over 8 years, mastering unit economics, food safety compliance, and team operations.
                                        </p>
                                    </div>
                                </div>

                                <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-black/5 flex items-start gap-3">
                                    <Coffee className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-heading text-xs font-bold text-foreground">
                                            Certified Barista & Coffee Enthusiast
                                        </p>
                                        <p className="text-xs text-foreground/70 mt-0.5 leading-relaxed">
                                            Deep technical knowledge of bean terroir, roasting curves, grind geometry, and cold solubles extraction rates.
                                        </p>
                                    </div>
                                </div>

                                <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-black/5 flex items-start gap-3">
                                    <Award className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-heading text-xs font-bold text-foreground">
                                            Beverage Consultant
                                        </p>
                                        <p className="text-xs text-foreground/70 mt-0.5 leading-relaxed">
                                            Core consulting specialty in Brewing Methodologies, beverage stabilization, and Sensory Coffee Tasting panels.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-black/10 flex items-center justify-between text-xs text-foreground/60 font-medium">
                            <span>Specialty: Cold Percolations</span>
                            <span className="flex items-center gap-1 text-accent font-semibold">
                                <CheckCircle className="w-3.5 h-3.5" /> Bootstrapped Discipline
                            </span>
                        </div>
                    </motion.div>

                    {/* Right Competency & Moat Pillars */}
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="bg-white/90 backdrop-blur-md rounded-3xl p-5 sm:p-6 border border-black/10 flex flex-col justify-between"
                        >
                            <div className="w-9 h-9 rounded-xl bg-accent/15 text-accent flex items-center justify-center mb-4">
                                <Coffee className="w-4 h-4" />
                            </div>
                            <div>
                                <h4 className="font-heading text-sm font-bold text-foreground uppercase tracking-tight mb-1.5">
                                    Brewing Methodology Mastery
                                </h4>
                                <p className="text-xs text-foreground/70 leading-relaxed font-normal">
                                    Proprietary extraction calibration ensuring maximum TDS (Total Dissolved Solids) without the bitterness or astringency common in hurried industrial brews.
                                </p>
                            </div>
                            <div className="mt-4 pt-3 border-t border-black/5 text-[10px] font-heading font-semibold text-accent uppercase">
                                0% Oxidation Formula
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.15 }}
                            className="bg-white/90 backdrop-blur-md rounded-3xl p-5 sm:p-6 border border-black/10 flex flex-col justify-between"
                        >
                            <div className="w-9 h-9 rounded-xl bg-black text-white flex items-center justify-center mb-4">
                                <ShieldCheck className="w-4 h-4" />
                            </div>
                            <div>
                                <h4 className="font-heading text-sm font-bold text-foreground uppercase tracking-tight mb-1.5">
                                    Chemical-Free Preservation
                                </h4>
                                <p className="text-xs text-foreground/70 leading-relaxed font-normal">
                                    Formulated with zero synthetic preservatives. Nitrogen flushing naturalization allows 6-month shelf life without refrigerated cold-chain costs.
                                </p>
                            </div>
                            <div className="mt-4 pt-3 border-t border-black/5 text-[10px] font-heading font-semibold text-accent uppercase">
                                Clean Label Integrity
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-white/90 backdrop-blur-md rounded-3xl p-5 sm:p-6 border border-black/10 flex flex-col justify-between"
                        >
                            <div className="w-9 h-9 rounded-xl bg-accent-orange/15 text-accent-orange flex items-center justify-center mb-4">
                                <Briefcase className="w-4 h-4" />
                            </div>
                            <div>
                                <h4 className="font-heading text-sm font-bold text-foreground uppercase tracking-tight mb-1.5">
                                    Micro-Manufacturing Setup
                                </h4>
                                <p className="text-xs text-foreground/70 leading-relaxed font-normal">
                                    Built an efficient ₹30 Lakh micro-manufacturing facility design that eliminates contract packager margins and guarantees batch-level quality control.
                                </p>
                            </div>
                            <div className="mt-4 pt-3 border-t border-black/5 text-[10px] font-heading font-semibold text-accent uppercase">
                                50% Gross Margins
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.25 }}
                            className="bg-[#1A1816] rounded-3xl p-5 sm:p-6 text-white flex flex-col justify-between shadow-md"
                        >
                            <div className="w-9 h-9 rounded-xl bg-white/10 text-white flex items-center justify-center mb-4">
                                <UserCheck className="w-4 h-4" />
                            </div>
                            <div>
                                <h4 className="font-heading text-sm font-bold text-white uppercase tracking-tight mb-1.5">
                                    Founder Alignment
                                </h4>
                                <p className="text-xs text-white/70 leading-relaxed font-normal">
                                    Sumit is personally executing recipe crafting, machine setup, corporate sales outreach, and pilot fulfillment for total accountability.
                                </p>
                            </div>
                            <div className="mt-4 pt-3 border-t border-white/10 text-[10px] font-heading font-semibold text-accent uppercase">
                                Full-Time Dedication
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
