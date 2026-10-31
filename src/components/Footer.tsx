"use client";

import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <footer className="py-24 px-6 md:px-12 bg-white border-t border-black/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-12 mb-20">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="font-heading text-2xl mb-8 uppercase tracking-widest">Join the Ritual.</h3>
                        <p className="text-lg opacity-60 mb-8 max-w-md">
                            Receive exclusive access to new blends, limited edition drops, and stories from the field.
                        </p>
                        <form className="flex max-w-md gap-4">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="flex-1 bg-background border border-black/10 px-6 py-4 rounded-full text-sm focus:outline-none focus:border-black transition-colors"
                            />
                            <button className="bg-foreground text-background px-8 py-4 rounded-full text-xs font-heading font-extrabold uppercase tracking-widest hover:opacity-90 transition-opacity">
                                Join
                            </button>
                        </form>
                    </div>

                    <div>
                        <h4 className="font-heading text-xs uppercase tracking-[0.3em] font-bold opacity-40 mb-8">Navigation</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><a href="#shop" className="hover:opacity-50 transition-opacity">Shop All</a></li>
                            <li><a href="#story" className="hover:opacity-50 transition-opacity">Our Story</a></li>
                            <li><a href="#account" className="hover:opacity-50 transition-opacity">Subscription</a></li>
                            <li><a href="#" className="hover:opacity-50 transition-opacity">Wholesale</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-heading text-xs uppercase tracking-[0.3em] font-bold opacity-40 mb-8">Social</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><a href="#" className="hover:opacity-50 transition-opacity">Instagram</a></li>
                            <li><a href="#" className="hover:opacity-50 transition-opacity">LinkedIn</a></li>
                            <li><a href="#" className="hover:opacity-50 transition-opacity">Twitter / X</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-4">
                        <span className="font-heading text-lg font-black uppercase tracking-tighter">BLOB</span>
                        <span className="text-[10px] opacity-40 uppercase tracking-[0.2em]">© 2026 Blob Coffee</span>
                    </div>
                    <div className="flex items-center gap-8 text-[10px] uppercase tracking-widest font-bold opacity-40">
                        <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
                        <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
