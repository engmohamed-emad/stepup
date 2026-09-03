"use client";
import { useState } from "react";
import ArrowButton from "./ArrowButton";
import { LikeIcon } from "../_icons/icons";
import { ShoeCard2Props } from "../_types/types";


export default function ShoeCard2({
    image,
    name,
    price,
    originalPrice,
    isNew = true,
    onArrowClick,
}: ShoeCard2Props) {
    const [liked, setLiked] = useState(false);

    return (
        <div className="relative w-full rounded-2xl bg-white border border-gray-200 shadow-sm p-4 flex flex-col gap-3 hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
            {/* Top row: New badge + Heart */}
            <div className="flex items-start justify-between">
                {isNew ? (
                    <span className="bg-black text-white text-xs font-semibold px-2.5 py-1 rounded-sm">
                        New
                    </span>
                ) : (
                    <span />
                )}
                <button
                    type="button"
                    onClick={() => setLiked((prev) => !prev)}
                    className="text-gray-400 hover:text-red-500 transition-colors duration-200 cursor-pointer"
                    aria-label="Add to wishlist"
                >
                    <LikeIcon className="h-6 w-6" liked={liked} />
                </button>
            </div>

            {/* Shoe image */}
            <div className="flex items-center justify-center h-44">
                <img
                    src={image}
                    alt={name}
                    className="h-36 w-auto object-contain drop-shadow-md"
                />
            </div>

            {/* Name + Price row */}
            <div className="flex items-end justify-between px-1 mt-1">
                <div className="flex flex-col gap-1">
                    <p className="text-[15px] font-semibold text-gray-900 leading-snug">
                        {name}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                        <span className="text-[15px] font-semibold text-gray-900">
                            ₹ {price.toFixed(2)}
                        </span>
                        <span className="text-[13px] text-gray-400 line-through">
                            ₹ {originalPrice.toFixed(2)}
                        </span>
                    </div>
                </div>

                <ArrowButton onArrowClick={onArrowClick} description={name} />
            </div>
        </div>
    );
}
