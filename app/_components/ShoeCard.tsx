"use client";
import type { ProductCardProps } from "../_types/types";
import ArrowButton from "./ArrowButton";

function onArrowClick() {
  console.log("Arrow clicked!");
}
export default function ProductCard({
  image,
  description,
  price,
}: ProductCardProps) {
  return (
    <div className="w-[260px] rounded-[20px] bg-[#D9D9D9]/15 p-4 border border-[#D9D9D9] shadow-sm">
      {/* Image area */}
      <div className="flex h-50 items-center justify-center">
        <img
          src={image}
          alt={description}
          className="h-40 w-auto object-contain"
        />
      </div>

      {/* Details */}
      <div className="mt-4 mb-3 flex items-end justify-between px-1">
        <div className="flex flex-col gap-1">
          <p className="text-[15px] font-medium leading-tight text-gray-900">
            {description}
          </p>
          <p className="text-[15px] mt-2 font-medium text-gray-900">
            ₹ {price.toFixed(2)}
          </p>
        </div>

        <ArrowButton onArrowClick={onArrowClick} description={description} />
      </div>
    </div>
  );
}