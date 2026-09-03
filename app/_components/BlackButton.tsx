"use client";
import { BlackButtonProps } from "../_types/types";

export default function BlackButton({ text, handleClick, chosen = true, size = "large" }: BlackButtonProps) {
    return (
        <button
            type="button"
            className={`${size === "small" ? "text-lg" : "text-2xl"} w-fit ${chosen ? "bg-black text-white hover:bg-gray-900" : "bg-white text-black border-2 border-gray-400 hover:bg-gray-200"} cursor-pointer font-semibold px-8 py-3 tracking-wide transition-colors duration-200`}
            onClick={handleClick}
        >
            {text}
        </button>
    );
}