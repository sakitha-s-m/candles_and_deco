import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductCard from '../products/ProductCard';

interface Product {
    id: number;
    name: string;
    price: number;
    image_url: string;
    category: string;
    is_bestseller?: boolean;
    is_featured?: boolean;
}

interface FeaturedProductsProps {
    title?: string;
    filterKey?: string;
}

export default function FeaturedProducts({ title = "Featured Products", filterKey = "is_featured" }) {

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`/api/products?filterKey=${filterKey}`)
            .then(r => r.json())
            .then(data => {
                setProducts(data)
                setLoading(false)
            })
    }, [filterKey])

    if (loading) return <p>Loading...</p>
    if (products.length === 0) return null;

    return (
        <section className="py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex items-end justify-between mb-16"
                >
                    <div>
                        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
                            Curated
                        </p>
                        <h2 className="font-heading text-4xl md:text-5xl font-light">
                            {title}
                        </h2>
                    </div>
                    <Link
                        href="/shop"
                        className="hidden md:flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors group"
                    >
                        View All
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
                    {products.map((product, i) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            index={i}
                        />
                    ))}
                </div>

                <div className="md:hidden mt-8 text-center">
                    <Link
                        href="/shop"
                        className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
                    >
                        View All Products <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}