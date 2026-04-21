import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { toast } from "sonner";
import { ShoppingBag } from "lucide-react";

interface Product {
    id: number;
    name: string;
    price: number;
    image_url: string;
    category: string;
    is_bestseller?: boolean;
}

interface ProductCardProps {
    product: Product;
    index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {

    const handleAddToCart = async (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        // Place holder for add to cart... waiting for database
        console.log("Adding to cart:", product);
        toast.success("Added to cart!");

    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
        >
            <Link
                href={`/product/${product.id}`}
                className="group block"
            >
                <div className="relative aspect-square overflow-hidden rounded-xl bg-muted mb-4">
                    <img 
                        src={product.image_url} 
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500" />

                    <button
                        onClick={handleAddToCart}
                        className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-background shadow-sm"
                    >
                        <ShoppingBag className="w-4 h-4 text-foreground" strokeWidth={1.5} />
                    </button>

                    {product.is_bestseller && (
                        <span className="absolute top-3 left-3 bg-primary text-primary-foreground font-body text-[10px] tracking-widest uppercase px-3 py-1 rounded-full">
                            Best Seller
                        </span>
                    )}
                </div>
                <div>
                    <p className="font-body text-xs text-muted-foreground tracking-wider uppercase mb-1">
                        {product.category?.replace(/_/g, " ")}
                    </p>
                    <h3 className="font-heading text-lg font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                        {product.name}
                    </h3>
                    <p className="font-body text-sm text-foreground mt-1">
                        LKR {product.price?.toFixed(2)}
                    </p>
                </div>
            </Link>
        </motion.div>
    );
}