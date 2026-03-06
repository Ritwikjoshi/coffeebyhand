"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const products = [
    {
        id: "snap-espresso",
        title: "Snap-Espresso",
        hook: "The 1-second crema.",
        description: "Just snap and pour into hot water or milk. Pocket-sized intensity for the high-altitude traveler.",
        tag: "Instant Icon",
        color: "bg-[#d3cdc4]",
        textColor: "text-black",
        image: "/images/snap-espresso.png"
    },
    {
        id: "cold-brew",
        title: "Cold Brew Cans",
        hook: "18 hours of patience.",
        description: "Smooth, bold, and ready for the pavement. Low acidity, high energy, and a finish like velvet.",
        tag: "Liquid Silk",
        color: "bg-[#e5ddd3]",
        textColor: "text-black",
        image: "/images/cold-brew.png"
    },
    {
        id: "coffee-tubes",
        title: "Coffee Tubes",
        hook: "Precision in every drop.",
        description: "The Alchemist’s blend. Concentrated shots in minimalist glass vials for those who craft their own.",
        tag: "The Alchemist Choice",
        color: "bg-[#f5f1ed]",
        textColor: "text-black",
        image: "/images/coffee-tube.png"
    }
];

const ProductSection = ({ product, index }: { product: typeof products[0], index: number }) => {
    const isEven = index % 2 === 0;

    return (
        <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-stretch gap-8 lg:gap-16 min-h-[70vh] mb-32`}>
            {/* Image Container - Massive to highlight the product */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className={`relative w-full lg:w-3/5 rounded-[2rem] lg:rounded-[3rem] overflow-hidden ${product.color} group flex items-center justify-center p-12 lg:p-24 min-h-[50vh]`}
            >
                <motion.div
                    className="relative w-full h-full min-h-[400px] z-10 group-hover:scale-110 transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)]"
                >
                    <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-contain drop-shadow-2xl"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        priority={index === 0}
                    />
                </motion.div>

                {/* Decorative element behind image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-0" />
            </motion.div>

            {/* Text Content */}
            <motion.div
                initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="w-full lg:w-2/5 flex flex-col justify-center py-8 lg:py-0 px-4 lg:px-0"
            >
                <div>
                    <span className="text-xs font-heading font-extrabold uppercase tracking-[0.3em] opacity-50 mb-6 block">
                        {product.tag}
                    </span>
                    <h3 className="font-heading text-5xl md:text-6xl lg:text-7xl mb-6 uppercase leading-[0.9] tracking-tight">
                        {product.title}
                    </h3>
                    <p className="font-serif text-2xl md:text-3xl mb-8 text-black/80 italic leading-snug">
                        "{product.hook}"
                    </p>
                    <p className="text-lg opacity-70 leading-relaxed max-w-md font-medium mb-12">
                        {product.description}
                    </p>

                    <button className="group/btn relative inline-flex items-center gap-4 overflow-hidden rounded-full border border-black/20 bg-transparent px-8 py-4 transition-all hover:border-black">
                        <span className="relative z-10 text-xs font-heading font-extrabold uppercase tracking-[0.2em] text-black">
                            Add to Cart — $24
                        </span>
                        <div className="absolute inset-0 -translate-y-full bg-black transition-transform duration-500 ease-in-out group-hover/btn:translate-y-0" />
                        <span className="absolute inset-0 z-20 flex items-center justify-center text-xs font-heading font-extrabold uppercase tracking-[0.2em] text-white -translate-y-full transition-transform duration-500 ease-in-out group-hover/btn:translate-y-0">
                            Add to Cart — $24
                        </span>
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

const ProductGrid = () => {
    return (
        <section id="shop" className="py-24 md:py-40 px-6 md:px-12 bg-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-24 md:mb-40 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="flex-1"
                    >
                        <span className="text-sm font-heading font-bold uppercase tracking-[0.3em] opacity-40 mb-6 block">The Collection</span>
                        <h2 className="text-6xl md:text-8xl lg:text-9xl leading-[0.85] font-black uppercase tracking-tighter">
                            Pure <br />
                            <span className="text-accent underline decoration-2 underline-offset-8">Form.</span>
                        </h2>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="max-w-md text-xl opacity-60 leading-relaxed font-medium md:pb-4"
                    >
                        Three distinct rituals. Each engineered to deliver uncompromising quality in a form factor that fits your life.
                    </motion.p>
                </div>

                <div className="flex flex-col">
                    {products.map((product, index) => (
                        <ProductSection key={product.id} product={product} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductGrid;
