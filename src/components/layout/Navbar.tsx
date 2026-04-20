import React from "react";
import { useState, useEffect } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Navbar() {
    const [scrolled, setScrolled] = useState<boolean>(false);
    const [mobileOpen, setMobileOpen] = useState<boolean>(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    const navLinks = [
        { label: "Home", path: "/" },
        { label: "Shop", path: "/shop" },
        { label: "About", path: "/about" },
        { label: "Contact", path: "/contact" },
    ];
    

    return (
        <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${ 
            scrolled ? `bg-red/95 backdrop-blur-md shadow-sm` : 'bg-transparent'
        }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Link 
                        href="/"
                        className="font-heading text-2xl md:text-3xl font-semibold tracking-wide"
                    >
                        Lumière
                    </Link>

                    <div className="hidden md:flex items-center gap-10">
                        {navLinks.map(link => (
                            <Link
                                key={link.path}
                                href={link.path}
                                className={`font-body text-sm tracking-widest uppercase transition-colors duration-300 ${
                                    pathname === link.path
                                    ? "text-foreground"
                                    : "text-muted-foreground hover:text-foreground"
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div>
                        <button>
                            <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
                        </button>
                    </div>

                </div>
            </div>

        </nav>
    );
}