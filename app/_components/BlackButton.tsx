"use client";
import { BlackButtonProps } from "../_types/types";

export default function BlackButton({ text, handleClick }: BlackButtonProps) {
    return (
        <button
            type="button"
            className="text-2xl w-fit bg-black text-white font-semibold px-8 py-3 tracking-wide hover:bg-gray-800 transition-colors duration-200"
            onClick={handleClick}
        >
            {text}
        </button>
    );
}