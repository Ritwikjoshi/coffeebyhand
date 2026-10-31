"use client";

import React from "react";
import { motion } from "framer-motion";

const Philosophy = () => {
    return (
        <section id="story" className="py-24 md:py-48 px-6 md:px-12 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="max-w-xl lg:pr-10"
                    >
                        <span className="text-xs font-heading font-medium uppercase tracking-[0.4em] text-accent mb-8 block">Modern Rituals</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black leading-[1] mb-12 uppercase text-balance">
                            Engineered <br />
                            <span className="opacity-40">for the</span> <br />
                            Modern Life.
                        </h2>
                        <div className="w-20 h-[2px] bg-foreground mb-12" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <p className="text-xl md:text-2xl font-light leading-relaxed mb-8 opacity-70">
                            We didn’t reinvent coffee; we just liberated it from the kitchen counter.
                        </p>
                        <p className="text-lg leading-relaxed opacity-60 mb-12">
                            Whether you’re at 30,000 feet or your office desk, Blob Coffee ensures the quality of a boutique cafe follows you everywhere. Precision packaging meets premium beans, designed to fit into the palm of your hand and the pace of your day.
                        </p>

                        <motion.div
                            whileHover={{ x: 10 }}
                            className="flex items-center gap-6 group cursor-pointer"
                        >
                            <div className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center group-hover:border-foreground transition-all duration-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-all duration-500"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </div>
                            <span className="text-xs font-heading font-extrabold uppercase tracking-widest">Our full story</span>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
