import React from "react";
import Link from "next/link";
import { motion } from "motion/react";

interface Category {
    name: string;
    slug: string;
    image: string;
    description: string;
}

const categories: Category[] = [
    { 
        name: "Candles",
        slug: "candles",
        image: "/category/candles.png",
        description: "Hand-poured soy & beeswax",
    },
    { 
        name: "Home Décor",
        slug: "decor",
        image: "/category/decor.png",
        description: "Thoughtful accents for every room",
    },
    { 
        name: "Gift Sets",
        slug: "gift_sets",
        image: "/category/gift_sets.png",
        description: "Curated boxes of comfort",
    },
];

export default function CategorySection() {
    return (
        <section className="py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
                        Browse
                    </p>
                    <h2 className="font-heading text-4xl md:text-5xl font-light">
                        Our Collections
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {categories.map((cat, i) => (
                        <motion.div
                            key={cat.slug}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                        >
                            <Link
                                href={`/shop?category=${cat.slug}`}
                                className="group block relative overflow-hidden rounded-2xl aspect-4/5"
                            >
                                <img 
                                    src={cat.image} 
                                    alt={cat.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-foreground/60 via-foreground/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-8">
                                    <p className="font-body text-xs tracking-widest uppercase text-white/70 mb-2">
                                        {cat.description}
                                    </p>
                                    <h3 className="font-heading text-3xl text-white font-medium">
                                        {cat.name}
                                    </h3>
                                </div>
                            </Link>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}