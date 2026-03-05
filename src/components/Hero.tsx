"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="relative h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-background">
            {/* Background Subtle Elements */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-accent blur-[120px] rounded-full" />
                <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-accent-orange/30 blur-[150px] rounded-full" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="mb-12"
                >
                    <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1] md:leading-[1.1] text-foreground text-balance">
                        "Because the best part of your day shouldn't be a luxury—it should be a ritual held in the palm of your hand."
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                >
                    <button className="group relative px-10 py-4 bg-transparent border border-foreground/20 hover:border-foreground overflow-hidden transition-all duration-500 rounded-full">
                        <span className="relative z-10 font-heading text-sm uppercase tracking-widest font-bold text-foreground">
                            Explore the Collection
                        </span>
                        <div className="absolute inset-0 bg-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                        <span className="absolute inset-0 z-20 flex items-center justify-center font-heading text-sm uppercase tracking-widest font-bold text-background translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                            Explore the Collection
                        </span>
                    </button>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-[0.2em] opacity-40 font-bold">Scroll</span>
                <div className="w-[1px] h-12 bg-foreground/20 relative overflow-hidden">
                    <motion.div
                        animate={{ y: ["-100%", "100%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute top-0 left-0 w-full h-1/2 bg-foreground"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
