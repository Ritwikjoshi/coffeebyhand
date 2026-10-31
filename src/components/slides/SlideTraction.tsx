"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, FlaskConical, Users, Award, ArrowUpRight } from "lucide-react";

export default function SlideTraction() {
    return (
        <section
            id="traction"
            className="min-h-screen relative flex flex-col justify-center pt-28 md:pt-32 pb-24 md:pb-28 px-4 sm:px-6 md:px-12 lg:px-16 bg-[#F6F2EC] overflow-hidden"
        >
            <div className="max-w-[1360px] w-full mx-auto mb-8 sm:mb-10 flex items-center justify-between border-b border-black/10 pb-3 sm:pb-4">
                <div className="flex items-center gap-2.5">
                    <span className="font-heading font-bold text-xs tracking-wider text-accent uppercase">
                        SLIDE 06 // TRACTION & VALIDATION
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-xs uppercase tracking-wider text-foreground/50 font-medium">
                        Product Calibration
                    </span>
                </div>
                <span className="text-[10px] font-heading font-bold uppercase tracking-wider bg-accent/20 text-accent px-3 py-1 rounded-full">
                    Pre-Revenue · Active Field Testing
                </span>
            </div>

            <div className="max-w-[1360px] w-full mx-auto">
                <div className="mb-8 sm:mb-10">
                    <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-foreground mb-3">
                        Calibrated in the Lab. <br />
                        <span className="text-accent">Tested in the Field.</span>
                    </h2>
                    <p className="font-sans text-base sm:text-lg text-foreground/70 max-w-2xl font-normal leading-relaxed">
                        The venture is currently pre-revenue with active field testing, sensory panel calibrations, and corporate pilot discussions underway in Udaipur.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8 sm:mb-10">
                    {/* Status Pill 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="bg-white rounded-3xl p-6 sm:p-7 border border-black/10 shadow-xs flex flex-col justify-between"
                    >
                        <div>
                            <div className="w-10 h-10 rounded-2xl bg-accent/15 text-accent flex items-center justify-center mb-5">
                                <FlaskConical className="w-5 h-5" />
                            </div>
                            <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-foreground/50 block mb-1">
                                Recipe & Extraction
                            </span>
                            <h3 className="font-heading text-xl font-bold uppercase text-foreground mb-2">
                                100+ Brew Iterations
                            </h3>
                            <p className="text-xs text-foreground/70 leading-relaxed font-normal">
                                Rigorously tested grind-size distributions, steep times, and water mineral profiles to eliminate acidity spike and preserve pure specialty notes.
                            </p>
                        </div>
                        <div className="mt-5 pt-3.5 border-t border-black/5 flex items-center gap-1.5 text-xs font-heading font-semibold text-accent">
                            <CheckCircle2 className="w-4 h-4" /> Recipe Formula Locked
                        </div>
                    </motion.div>

                    {/* Status Pill 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="bg-white rounded-3xl p-6 sm:p-7 border border-black/10 shadow-xs flex flex-col justify-between"
                    >
                        <div>
                            <div className="w-10 h-10 rounded-2xl bg-black text-white flex items-center justify-center mb-5">
                                <Users className="w-5 h-5" />
                            </div>
                            <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-foreground/50 block mb-1">
                                Field Testing
                            </span>
                            <h3 className="font-heading text-xl font-bold uppercase text-foreground mb-2">
                                Corporate Taste Panels
                            </h3>
                            <p className="text-xs text-foreground/70 leading-relaxed font-normal">
                                Conducted sampling rounds with office executives, software engineers, and specialty coffee lovers. Overwhelming preference for convenience and clean palate feel.
                            </p>
                        </div>
                        <div className="mt-5 pt-3.5 border-t border-black/5 flex items-center gap-1.5 text-xs font-heading font-semibold text-foreground">
                            <CheckCircle2 className="w-4 h-4 text-accent" /> 92% Positive Repeat Intent
                        </div>
                    </motion.div>

                    {/* Status Pill 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="bg-white rounded-3xl p-6 sm:p-7 border border-black/10 shadow-xs flex flex-col justify-between"
                    >
                        <div>
                            <div className="w-10 h-10 rounded-2xl bg-accent-orange/15 text-accent-orange flex items-center justify-center mb-5">
                                <Award className="w-5 h-5" />
                            </div>
                            <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-foreground/50 block mb-1">
                                Packaging Validation
                            </span>
                            <h3 className="font-heading text-xl font-bold uppercase text-foreground mb-2">
                                Nitrogen Sealing Trial
                            </h3>
                            <p className="text-xs text-foreground/70 leading-relaxed font-normal">
                                Validated gas displacement protocols on 250ml aluminum format, achieving zero dissolved oxygen and ambient stability.
                            </p>
                        </div>
                        <div className="mt-5 pt-3.5 border-t border-black/5 flex items-center gap-1.5 text-xs font-heading font-semibold text-accent-orange">
                            <CheckCircle2 className="w-4 h-4" /> 9-Month Shelf Validation
                        </div>
                    </motion.div>
                </div>

                {/* Status Quote Banner */}
                <div className="p-6 sm:p-7 rounded-3xl bg-[#FAF7F2] border border-black/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div>
                        <span className="text-xs font-heading font-bold uppercase tracking-wider text-accent block mb-0.5">
                            Current Stage
                        </span>
                        <h4 className="font-heading text-lg sm:text-xl font-bold text-foreground uppercase">
                            Ready for Micro-Manufacturing Deployment
                        </h4>
                        <p className="text-xs text-foreground/70 mt-1 max-w-2xl">
                            Field testing has de-risked taste profiles, recipe consistency, and can preservation. The seed round finances the in-house micro-canning equipment to turn validation into Phase 1 revenue.
                        </p>
                    </div>

                    <a
                        href="#gtm"
                        className="shrink-0 bg-black text-white px-5 py-2.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider hover:bg-black/85 transition-all flex items-center gap-1.5"
                    >
                        <span>View GTM Plan</span>
                        <ArrowUpRight className="w-4 h-4 text-accent" />
                    </a>
                </div>
            </div>
        </section>
    );
}
