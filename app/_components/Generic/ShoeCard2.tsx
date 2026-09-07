"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ArrowButton from "@/app/_components/Generic/ArrowButton";
import { LikeIcon } from "@/app/_icons/icons";
import { ShoeCard2Props } from "@/app/_types/types";

const sectionColors: Record<string, string> = {
    Man: 'bg-blue-50 text-blue-600 border-blue-200',
    Woman: 'bg-pink-50 text-pink-600 border-pink-200',
    Boys: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    Girls: 'bg-purple-50 text-purple-600 border-purple-200',
};

export default function ShoeCard2({
    id,
    img,
    name,
    price,
    originalprice,
    section,
    isNew = true,
}: ShoeCard2Props) {
    const [liked, setLiked] = useState(false);
    const router = useRouter();

    function onArrowClick() {
        router.push(`/shoe/${id}`);
    }

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

            {/* Section badge */}
            {section && (
                <span className={`self-start text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${sectionColors[section] ?? 'bg-gray-100 text-gray-500 border-gray-200'}`}>
                    {section}
                </span>
            )}

            {/* Shoe image */}
            <div className="flex items-center justify-center h-44">
                <img
                    src={img}
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
                            ₹ {originalprice.toFixed(2)}
                        </span>
                    </div>
                </div>

                <ArrowButton onArrowClick={onArrowClick} description={name} />
            </div>
        </div>
    );
}
