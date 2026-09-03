"use client";

import Subscribe from "./Subscribe";
import QuickLinks from "./QuickLinks";
import Conclusion from "./Conclusion";

export default function Footer() {

    return (
        <footer className="w-full bg-black text-white px-15">
            {/* Main footer content */}
            <div className="flex items-start justify-between px-16 py-14 gap-10">

                <Conclusion />
                <Subscribe />
                <QuickLinks />
            </div>

            {/* Bottom bar */}
            <div className="flex flex-col items-center gap-3 pb-8">
                <div className="w-16 h-px bg-gray-600" />
                <p className="text-sm text-gray-500">www.stepup.com©all right reserve</p>
            </div>
        </footer>
    );
}
