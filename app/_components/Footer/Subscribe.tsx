"use client";
import { useState } from "react";

export default function Subscribe() {
    const [email, setEmail] = useState("");
    return (
        <div className="flex flex-col gap-5 items-start w-full lg:w-auto">
            <p className="text-base font-medium text-white">Subscribe for news letter</p>
            <div className="flex items-center border border-gray-600 rounded-sm overflow-hidden bg-white w-full max-w-sm">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email..."
                    className="bg-transparent text-black placeholder-gray-500 text-sm px-4 py-3 flex-1 min-w-0 outline-none"
                />
                <div className="w-px h-8 bg-black shrink-0" />
                <button
                    type="button"
                    onClick={() => { console.log("Subscribe:", email); setEmail(""); }}
                    className="px-4 py-3 text-sm font-bold tracking-wide text-black hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer shrink-0"
                >
                    SUBSCRIBE
                </button>
            </div>
        </div>
    );
}