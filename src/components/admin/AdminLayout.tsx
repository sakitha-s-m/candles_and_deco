import { ReactNode, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Package, ShoppingCart, ArrowLeft, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
    { to: "/admin", label: "Overview", icon: LayoutDashboard, exact: true },
    { to: "/admin/products", label: "Products", icon: Package, exact: false },
    { to: "/admin/orders", label: "Orders", icon: ShoppingCart, exact: false },
];

export default function AdminLayout({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const isActive = (to: string, exact: boolean) =>
        exact ? pathname === to : pathname.startsWith(to);

    return (
        <div className="min-h-screen bg-background">

            {/* Mobile top bar */}
            <div className="lg:hidden sticky top-0 z-40 flex items-center justify-between h-14 px-4 border-b border-border bg-background">
                <Link href="/admin" className="font-heading text-xl">Ember Admin</Link>
                <button onClick={() => setOpen(o => !o)} className="h-9 w-9 inline-flex items-center justify-center rounded-md hover:bg-secondary">
                    {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
            </div>

            <div className="flex">

                {/* Sidebar */}
                <aside className={cn(
                    "fixed lg:sticky top-0 z-30 h-screen w-64 shrink-0 border-r border-border bg-background transition-transform flex flex-col",
                    open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
                )}>
                    {/* Brand */}
                    <div className="h-20 px-6 flex items-center border-b border-border">
                        <Link href="/admin" className="font-heading text-2xl font-semibold">
                            Lumière Admin
                        </Link>
                    </div>

                    {/* Nav links */}
                    <nav className="p-4 space-y-1 flex-1">
                        {nav.map(n => {
                            const Icon = n.icon;
                            const active = isActive(n.to, n.exact);
                            return (
                                <Link
                                    key={n.to}
                                    href={n.to}
                                    onClick={() => setOpen(false)}
                                    className={cn(
                                        "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm transition-colors",
                                        active
                                            ? "bg-accent text-foreground font-medium"
                                            : "text-muted-foreground hover:bg-accent/60 hover:text-foreground"
                                    )}
                                >
                                    <Icon className="h-4 w-4" />
                                    {n.label}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Back to store */}
                    <div className="p-4 border-t border-border">
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <ArrowLeft className="h-4 w-4" /> Back to store
                        </Link>
                    </div>
                </aside>

                {/* Mobile overlay */}
                {open && (
                    <button
                        type="button"
                        aria-label="Close menu"
                        onClick={() => setOpen(false)}
                        className="lg:hidden fixed inset-0 z-20 bg-black/30"
                    />
                )}

                {/* Main content */}
                <main className="flex-1 min-w-0">
                    <div className="px-5 md:px-10 py-8 md:py-10">
                        {children}
                    </div>
                </main>

            </div>
        </div>
    );
}