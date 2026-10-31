"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Logo = () => (
    <div className="flex items-center gap-2 group cursor-pointer">
        <div className="flex items-end gap-[2px] h-6 mb-1">
            <motion.div
                className="w-[3px] bg-foreground"
                animate={{ height: ["40%", "70%", "40%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="w-[3px] bg-foreground"
                animate={{ height: ["60%", "90%", "60%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            />
            <motion.div
                className="w-[3px] bg-foreground"
                animate={{ height: ["50%", "100%", "50%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            />
            <motion.div
                className="w-[3px] bg-foreground"
                animate={{ height: ["30%", "60%", "30%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            />
        </div>
        <div className="flex flex-col leading-none">
            <span className="font-heading text-xl tracking-tight font-extrabold uppercase">BLOB</span>
            <span className="text-[7px] tracking-[0.3em] font-light opacity-60 ml-[1px]">C O F F E E</span>
        </div>
    </div>
);

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass border-b border-black/5 py-4" : "bg-transparent py-8"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
                <Link href="/">
                    <Logo />
                </Link>

                <nav className="hidden md:flex items-center gap-12 font-medium text-sm tracking-wide">
                    <Link href="#shop" className="hover:opacity-50 transition-opacity">Shop</Link>
                    <Link href="#story" className="hover:opacity-50 transition-opacity">Our Story</Link>
                    <Link href="#account" className="hover:opacity-50 transition-opacity">Account</Link>
                </nav>

                <div className="flex items-center gap-6">
                    <button className="md:hidden text-foreground">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    </button>
                </div>
            </div>
        </motion.header>
    );
};

export default Navbar;
