"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
    const [beans, setBeans] = useState<{ x: string; y: string; delay: number; duration: number }[]>([]);

    useEffect(() => {
        // Generate beans once on mount to avoid hydration mismatch
        const newBeans = [...Array(6)].map(() => ({
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            delay: Math.random() * 5,
            duration: 15 + Math.random() * 10
        }));
        setBeans(newBeans);
    }, []);

    return (
        <section className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-white pt-24 pb-12">
            {/* Splashing Beans Background */}
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-20">
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        rotate: [2, -2, 2],
                        scale: [1, 1.05, 1]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="relative w-full h-[150%] max-w-7xl"
                >
                    <Image
                        src="/images/beans-splash.png"
                        alt="Coffee Beans Splash"
                        fill
                        className="object-contain"
                        priority
                    />
                </motion.div>
            </div>

            {/* Additional Floating Beans for depth */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {beans.map((bean, i) => (
                    <motion.div
                        key={i}
                        initial={{
                            x: bean.x,
                            y: bean.y,
                            opacity: 0
                        }}
                        animate={{
                            y: ["0%", "-10%", "0%"],
                            opacity: [0, 0.4, 0],
                            rotate: 360
                        }}
                        transition={{
                            duration: bean.duration,
                            repeat: Infinity,
                            delay: bean.delay
                        }}
                        className="absolute w-12 h-12"
                    >
                        <Image
                            src="/images/beans-splash.png"
                            alt="Bean"
                            width={48}
                            height={48}
                            className="object-contain filter blur-[1px]"
                        />
                    </motion.div>
                ))}
            </div>

            {/* Decorative Blur Elements */}
            <div className="absolute inset-0 opacity-30 pointer-events-none z-1">
                <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-accent/20 blur-[150px] rounded-full" />
                <div className="absolute bottom-[10%] right-[5%] w-[30rem] h-[30rem] bg-accent-orange/10 blur-[180px] rounded-full" />
            </div>

            <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 lg:gap-16 items-center">

                {/* Text Content */}
                <div className="text-left flex flex-col items-start pt-12 lg:pt-0 order-2 lg:order-1">
                    <motion.div
                        initial={{ opacity: 0, y: 40, filter: "blur(20px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="mb-10 lg:mb-16"
                    >
                        <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] text-[#1A1816] text-balance tracking-tight">
                            "Because the best part of your day shouldn't be a luxury—it should be a ritual held in the palm of your hand."
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                    >
                        <button className="group relative px-10 py-5 bg-transparent border border-black/20 hover:border-black overflow-hidden transition-all duration-700 rounded-full">
                            <span className="relative z-10 font-heading text-xs lg:text-sm uppercase tracking-[0.3em] font-bold text-black">
                                Explore the Collection
                            </span>
                            <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out" />
                            <span className="absolute inset-0 z-20 flex items-center justify-center font-heading text-xs lg:text-sm uppercase tracking-[0.3em] font-bold text-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out">
                                Explore the Collection
                            </span>
                        </button>
                    </motion.div>
                </div>

                {/* Hero Product Image Spotlight */}
                <div className="relative w-full aspect-[4/5] lg:aspect-square flex items-center justify-center order-1 lg:order-2 group">
                    {/* The new massive vibe image highlight */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1], delay: 0.6 }}
                        className="relative w-[90%] lg:w-[120%] h-[90%] lg:h-[120%] lg:-mr-[20%]"
                    >
                        <Image
                            src="/images/hero-vibe.png"
                            alt="Blob Coffee Vibe"
                            fill
                            className="object-contain drop-shadow-2xl z-20"
                            priority
                            sizes="(max-width: 1024px) 100vw, 60vw"
                        />

                        {/* Glow Behind the Hero Image */}
                        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-1/2 bg-gradient-radial from-white via-white/50 to-transparent blur-3xl -z-10 group-hover:scale-110 transition-transform duration-1000 opacity-60" />
                    </motion.div>
                </div>

            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[9px] uppercase tracking-[0.2em] opacity-40 font-bold">Scroll</span>
                <div className="w-[1px] h-10 bg-foreground/20 relative overflow-hidden">
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
