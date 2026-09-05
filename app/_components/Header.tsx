"use client";

import { useEffect, useState } from "react";
import Navigations from "./Navigations";
import NavIcons from "./NavIcons";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`
                fixed top-0 left-0 right-0 z-50
                flex items-center justify-between px-16 w-full
                transition-all duration-300 ease-in-out
                ${scrolled
                    ? "py-3 bg-white shadow-md"
                    : "py-4 mt-6 bg-transparent"
                }
            `}
        >
            {/* Brand */}
            <span className="text-4xl font-black text-black tracking-tight">StepUp</span>

            {/* Nav links */}
            <Navigations />

            {/* Icons */}
            <NavIcons />
        </header>
    );
}