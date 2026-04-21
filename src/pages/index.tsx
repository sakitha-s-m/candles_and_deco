import React from "react";
import AppLayout from "@/components/layout/AppLayout";
import HeroSection from "@/components/home/HeroSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import CategorySection from "@/components/home/CategorySection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTABanner from "@/components/home/CTABanner";

// Home Page
export default function Home() {
  return (
    <AppLayout>
      <HeroSection />
      <FeaturedProducts />
      <CategorySection />
      <TestimonialsSection />
      <CTABanner />
    </AppLayout>
  );
}