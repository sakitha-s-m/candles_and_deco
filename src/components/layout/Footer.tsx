import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

export default function Footer() {
    const [email, setEmail] = useState("");

    const handleNewsletter = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            toast.success("Thank you for subscribing!");
            setEmail("");
        }
    };

    const quickLinks = [
        { label: "Shop All", path: "/shop" },
        { label: "About Us", path: "/about" },
        { label: "Contact", path: "/contact" },
    ];

    const categoryLinks = [
        { label: "Candles", path: "/shop?category=candles" },
        { label: "Home Décor", path: "/shop?category=decor" },
        { label: "Gift Sets", path: "/shop?category=gift_sets" },
    ];

    return (
        <footer className="bg-primary text-primary-foreground">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    <div className="lg:col-span-1">
                        <h3 className="font-heading text-3xl font-semibold mb-4">
                            Lumière
                        </h3>
                        <p className="font-body text-sm leading-relaxed opacity-80">
                            Handcrafted candles and home décor, made with love and natural ingredients for your cozy spaces.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-body text-xs tracking-widest uppercase mb-6 opacity-60">
                            Quick Links
                        </h4>
                        <div className="space-y-3">
                            {quickLinks.map(link => (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    className="block font-body text-sm opacity-80 hover:opacity-100 transition-opacity"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-body text-xs tracking-widest uppercase mb-6 opacity-60">
                            Categories
                        </h4>
                        <div className="space-y-3">
                            {categoryLinks.map(link => (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    className="block font-body text-sm opacity-80 hover:opacity-100 transition-opacity"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-body text-xs tracking-widest uppercase mb-6 opacity-60">
                            Newsletter
                        </h4>
                        <p className="font-body text-sm opacity-80 mb-4">
                            Get updates on new arrivals and special offers.
                        </p>
                        <form
                            onSubmit={handleNewsletter}
                            className="flex gap-2"
                        >
                            <input 
                                type="email"
                                placeholder="Your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-primary-foreground/10 border rounded-md px-3 py-2 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 font-body text-sm outline-none focus:border-white/40" 
                            />
                            <button
                                type="submit"
                                className="shrink-0 bg-secondary text-secondary-foreground w-9 h-9 rounded-md flex items-center justify-center hover:bg-secondary/80 shadow-sm transition-opacity"
                            >
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="font-body text-xs opacity-50">
                        © 2026 Lumière. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <span className="font-body text-xs opacity-50">
                            Privacy Policy
                        </span>
                        <span className="font-body text-xs opacity-50">
                            Terms of Service
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}