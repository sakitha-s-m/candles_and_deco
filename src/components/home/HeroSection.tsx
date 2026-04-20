import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from 'framer-motion';

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center">
            <div className="absolute inset-0">
                <img
                    src="/banners/home_banner.png" 
                    alt="Handcrafted candles and Home decor banner"
                    className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-linear-to-r from-background/80 via-background/50 to-transparent" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{duration: 1, ease: "easeOut" }}
                    className="max-w-xl"
                >
                    <p className="font-body text-xs tracking-[0.3em] uppercase mb-6 text-muted-foreground">
                        Artisan Collection 2026
                    </p>
                    <h1 className="font-heading text-5xl md:text-7xl font-light leading-tight text-foreground mb-6">
                        Handcrafted
                        <br />
                        <span className="italic font-light">warmth</span> for
                        <br />
                        your home
                    </h1>
                    <p className="font-body text-base text-muted-foreground leading-relaxed mb-10 max-w-md">
                        Discover our collection of handmade candles and home décor, crafted with natural ingredients and endless care.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/shop">
                            <button className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground shadow font-body text-xs tracking-widest uppercase h-12 px-8 rounded-full hover:bg-primary/90">
                                Shop Now
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}