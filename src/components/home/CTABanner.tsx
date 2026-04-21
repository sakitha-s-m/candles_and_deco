import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function CTABanner() {
    return (
        <section className="py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground px-8 py-16 md:px-16 md:py-24 text-center"
                >
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-primary-foreground blur-3xl" />
                        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-primary-foreground blur-3xl"/>
                    </div>
                    <div className="relative">
                    <h2 className="font-heading text-4xl md:text-6xl font-light mb-6">
                        Transform your space
                    </h2>
                    <p className="font-body text-sm md:text-base opacity-70 max-w-md mx-auto mb-10">
                        Explore our full collection of handcrafted candles and home accessories designed to bring warmth and beauty to every corner.
                    </p>
                    <Link href="/shop">
                        
                    </Link>
                </div>
                </motion.div>
            </div>
        </section>
    );
}