"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const products = [
    {
        id: "snap-espresso",
        title: "Snap-Espresso",
        hook: "The 1-second crema.",
        description: "Just snap and pour into hot water or milk. Pocket-sized intensity for the high-altitude traveler.",
        tag: "Instant Icon",
        color: "bg-[#F5F1ED]",
        textColor: "text-black",
        image: "/images/snap-espresso.png"
    },
    {
        id: "cold-brew",
        title: "Cold Brew Cans",
        hook: "18 hours of patience.",
        description: "Smooth, bold, and ready for the pavement. Low acidity, high energy, and a finish like velvet.",
        tag: "Liquid Silk",
        color: "bg-[#1A1816]",
        textColor: "text-white",
        image: "/images/cold-brew.png"
    },
    {
        id: "coffee-tubes",
        title: "Coffee Tubes",
        hook: "Precision in every drop.",
        description: "The Alchemist’s blend. Concentrated shots in minimalist glass vials for those who craft their own.",
        tag: "The Alchemist Choice",
        color: "bg-[#EAE3DB]",
        textColor: "text-black",
        image: "/images/coffee-tube.png"
    }
];

const ProductCard = ({ product, index }: { product: typeof products[0], index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ y: -10 }}
            className={`group relative flex flex-col h-[600px] overflow-hidden rounded-3xl p-8 md:p-12 transition-all duration-700 ${product.color} ${product.textColor}`}
        >
            <div className="absolute top-8 left-8 z-10">
                <span className="text-[10px] font-heading font-extrabold uppercase tracking-[0.3em] opacity-60">
                    {product.tag}
                </span>
            </div>

            <div className="relative z-10 mt-10">
                <h3 className="font-heading text-4xl md:text-5xl mb-4 group-hover:tracking-widest transition-all duration-700 uppercase leading-none">
                    {product.title}
                </h3>
                <p className="font-medium text-lg mb-6 opacity-70 italic">
                    "{product.hook}"
                </p>
            </div>

            <div className="relative flex-1 w-full mt-4 group-hover:scale-105 transition-transform duration-1000 ease-out">
                <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain object-center"
                />
            </div>

            <div className="relative z-10 mt-8 flex items-center justify-between">
                <p className="text-xs opacity-60 leading-relaxed max-w-[60%] font-medium">
                    {product.description}
                </p>
                <button className="flex items-center gap-4 group/btn">
                    <span className="text-[10px] font-heading font-extrabold uppercase tracking-[0.2em]">Shop</span>
                    <div className={`w-8 h-[1px] ${product.textColor === "text-white" ? "bg-white" : "bg-black"} group-hover/btn:w-12 transition-all duration-500`} />
                </button>
            </div>

            {/* Decorative product silhouette / placeholder */}
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-foreground/5 rounded-full blur-3xl group-hover:bg-foreground/10 transition-colors duration-700" />
        </motion.div>
    );
};

const ProductGrid = () => {
    return (
        <section id="shop" className="py-24 md:py-40 px-6 md:px-12 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20 md:mb-32 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1"
                    >
                        <span className="text-xs font-heading font-bold uppercase tracking-[0.3em] opacity-40 mb-6 block">The Trinity</span>
                        <h2 className="text-5xl md:text-7xl lg:text-8xl leading-[0.9] font-black uppercase text-balance">
                            Select Your <br />
                            <span className="text-accent underline decoration-1 underline-offset-8">Weapon.</span>
                        </h2>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-md text-lg opacity-60 leading-relaxed"
                    >
                        Three forms of perfection. Engineered for velocity, designed for the hand.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {products.map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductGrid;
