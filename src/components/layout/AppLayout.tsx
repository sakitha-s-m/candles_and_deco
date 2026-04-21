import { useState, ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function AppLayout({ children }: { children: ReactNode }) {
    const [cartOpen, setCartOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col font-body bg-background">
            <Navbar />

            {/* Main Content */}
            <main className="flex-1">
                {children}
            </main>

            <Footer />

            
        </div>
    );
}