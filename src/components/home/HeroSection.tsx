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
        </section>
    );
}