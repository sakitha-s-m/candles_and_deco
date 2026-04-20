import { useState, ReactNode } from "react";
import Navbar from "./Navbar";

export default function AppLayout({ children }: { children: ReactNode }) {
    const [cartOpen, setCartOpen] = useState(false);

    return (
        <div>
            <Navbar />

            {/* Main Content */}
            <main>
                {children}
            </main>

            
        </div>
    );
}