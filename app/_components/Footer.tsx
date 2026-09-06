"use client";

import Subscribe from "./Subscribe";
import QuickLinks from "./QuickLinks";
import Conclusion from "./Conclusion";

export default function Footer() {

    return (
        <footer className="w-full bg-black text-white">
            {/* Main footer content */}
            <div className="flex flex-col lg:flex-row items-start justify-between px-8 lg:px-16 py-10 lg:py-14 gap-10">
                <Conclusion />
                <Subscribe />
                <QuickLinks />
            </div>

            {/* Bottom bar */}
            <div className="flex flex-col items-center gap-3 pb-8">
                <div className="w-16 h-px bg-gray-600" />
                <p className="text-sm text-gray-500 text-center px-4">www.stepup.com © all rights reserved</p>
            </div>
        </footer>
    );
}
