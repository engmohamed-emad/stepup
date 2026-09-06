"use client";

import { useEffect, useState } from "react";
import Navigations from "./Navigations";
import NavIcons from "./NavIcons";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`
                fixed top-0 left-0 right-0 z-50
                flex flex-col w-full
                transition-all duration-300 ease-in-out
                ${scrolled || menuOpen
                    ? "bg-white shadow-md"
                    : "bg-transparent"
                }
            `}
        >
            {/* Top bar */}
            <div className="flex items-center justify-between px-6 lg:px-16 w-full py-3 lg:py-4 lg:mt-6">
                {/* Brand */}
                <span className="text-3xl lg:text-4xl font-black text-black tracking-tight">StepUp</span>

                {/* Desktop Nav links */}
                <div className="hidden lg:block">
                    <Navigations />
                </div>

                {/* Desktop Icons */}
                <div className="hidden lg:block">
                    <NavIcons />
                </div>

                {/* Mobile right — icons + hamburger */}
                <div className="flex items-center gap-4 lg:hidden">
                    <NavIcons />
                    <button
                        type="button"
                        aria-label="Toggle menu"
                        className="flex flex-col gap-1.5 cursor-pointer"
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        <span className={`block h-0.5 w-6 bg-black transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                        <span className={`block h-0.5 w-6 bg-black transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                        <span className={`block h-0.5 w-6 bg-black transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                    </button>
                </div>
            </div>

            {/* Mobile dropdown nav */}
            {menuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4">
                    <Navigations mobile onLinkClick={() => setMenuOpen(false)} />
                </div>
            )}
        </header>
    );
}