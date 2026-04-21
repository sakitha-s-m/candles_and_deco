import React from "react";
import { motion } from "motion/react";
import { Heart, Leaf, Sun } from "lucide-react";
import AppLayout from "@/components/layout/AppLayout";

const values = [
    {
        icon: Heart,
        title: "Handcrafted with Love",
        description: "Every product is made by hand in small batches, ensuring the highest quality and a personal touch in every piece.",
    },
    {
        icon: Leaf,
        title: 'Natural Ingredients',
        description: 'We use only pure soy wax, beeswax, essential oils, and cotton wicks. No synthetic fragrances, no harmful chemicals.',
    },
    {
        icon: Sun,
        title: 'Sustainable Practices',
        description: 'From recyclable packaging to locally sourced materials, we strive to minimize our footprint while maximizing warmth.',
    },
];

export default function About() {
    return (
        <AppLayout>
            <div className="pt-28 pb-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
                            Our Story
                        </p>
                        <h1 className="font-heading text-4xl md:text-6xl font-light">
                            About Lumière
                        </h1>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="rounded-2xl overflow-hidden"
                        >
                            <img 
                                src="/banners/about_banner.png" 
                                alt="Work Place Banner"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                        >
                            <h2 className="font-heading text-3xl md:text-4xl font-light mb-6">
                                A family tradition of <span className="italic">warmth</span>
                            </h2>
                            <div className="space-y-4 font-body text-sm text-muted-foreground leading-relaxed">
                                <p>
                                    Lumière was born in a small kitchen, where our founder began hand-pouring candles as gifts for
                                    friends and family. What started as a weekend hobby quickly blossomed into a passion and a
                                    mission to bring handcrafted warmth into every home.
                                </p>
                                <p>
                                    Today, we're a small family-run studio, still making each candle by hand using the same
                                    techniques and care that started it all. We believe in slow craftsmanship, natural materials,
                                    and the simple joy of a flickering flame.
                                </p>
                                <p>
                                    Every product you see in our collection represents hours of love, countless test batches, and an
                                    unwavering commitment to quality. We don't mass-produce. We create with intention.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="mb-24">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-16"
                        >
                            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
                                What we believe
                            </p>
                            <h2 className="font-heading text-3xl md:text-4xl font-light">
                                Our Values
                            </h2>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {values.map((v, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: i * 0.15 }}
                                    className="text-center p-8"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-6">
                                        <v.icon className="w-6 h-6 text-foreground" strokeWidth={2} />
                                    </div>
                                    <h3 className="font-heading text-xl font-medium mb-3">
                                        {v.title}
                                    </h3>
                                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                                        {v.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}