"use client";
import { useState } from "react";

export default function Subscribe() {
    const [email, setEmail] = useState("");
    return (
        <div className="flex flex-col gap-5 items-start">
            <p className="text-base font-medium text-white">Subscribe for news latter</p>
            <div className="flex items-center border border-gray-600 rounded-sm overflow-hidden bg-white">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email..."
                    className="bg-transparent text-black placeholder-gray-500 text-sm px-4 py-3 w-56 outline-none"
                />
                <div className="w-px h-8 bg-black" />
                <button
                    type="button"
                    onClick={() => { console.log("Subscribe:", email); setEmail(""); }}
                    className="px-5 py-3 text-sm font-bold tracking-wide text-black hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer"
                >
                    SUBSCRIBE
                </button>
            </div>
        </div>

    );
}