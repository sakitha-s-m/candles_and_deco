import React from "react";
import { motion } from "motion/react";
import { Star } from "lucide-react";

interface Testimonials {
    name: string;
    text: string;
    rating: number;   
}

const testimonials: Testimonials[] = [
    {
        name: "Rithika M.",
        text: "The vanilla amber candle fills my entire living room with the most beautiful, warm scent. I\'ve ordered five times now!",
        rating: 5,
    },
    {
        name: "Kenuki M.",
        text: "Gifted the holiday set to my mom, and she absolutely loved it. The packaging alone made her day. Such attention to detail.",
        rating: 5,
    },
    {
        name: "Jagath M.",
        text: "Finally found candles that don\'t give me headaches. Natural ingredients make all the difference. The burn time is incredible too.",
        rating: 5,
    },
]

export default function TestimonialsSection() {
    return (
        <section className="py-24 lg:py-32 bg-secondary/50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
                        Testimonials
                    </p>
                    <h2 className="font-heading text-4xl md:text-5xl font-light">
                        What Our Customers Say
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            className="bg-card rounded-2xl p-8"
                        >
                            <div className="flex gap-1 mb-4">
                                {Array.from({ length: t.rating }).map((_, j) => (
                                    <Star key={j} className="w-4 h-4 fill-chart-4 text-chart-4" />
                                ))}
                            </div>
                            <p className="font-body text-sm leading-relaxed text-muted-foreground mb-6">
                                "{t.text}"
                            </p>
                            <p className="font-heading text-base font-bold">
                                "{t.name}"
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}