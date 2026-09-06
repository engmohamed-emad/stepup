import Link from "next/link";

import { NavigationsProps } from "@/app/_types/types";
export default function Navigations({ mobile = false, onLinkClick }: NavigationsProps) {
    const links = [
        { href: "/", label: "Home" },
        { href: "/shop", label: "Shop" },
        { href: "/collection", label: "Collection" },
        { href: "/customize", label: "Customize" },
        { href: "/dashboard", label: "Dashboard" },
    ];

    if (mobile) {
        return (
            <ul className="flex flex-col gap-4">
                {links.map((link) => (
                    <li key={link.href}>
                        <Link
                            href={link.href}
                            className="text-xl text-gray-700 hover:text-gray-900 block"
                            onClick={onLinkClick}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        );
    }

    return (
        <div className="flex items-center justify-between px-4 py-2">
            <ul className="flex space-x-12">
                {links.map((link) => (
                    <li key={link.href}>
                        <Link href={link.href} className="text-xl text-gray-700 hover:text-gray-900">
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
