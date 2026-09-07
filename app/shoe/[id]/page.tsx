'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useShoeById } from '@/app/_hooks/shoesQuery';


const EU_SIZES = ['39', '40', '41', '42', '43', '44'] as const;

const sectionColors: Record<string, string> = {
  Man: 'text-blue-600',
  Woman: 'text-pink-500',
  Boys: 'text-emerald-600',
  Girls: 'text-purple-600',
};

export default function ShoePage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const { data: shoe, isLoading, error } = useShoeById(id);
  const [selectedSize, setSelectedSize] = useState('');

  /* ── Loading ── */
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center gap-3 text-gray-400">
          <div className="w-10 h-10 border-4 border-gray-200 border-t-black rounded-full animate-spin" />
          <span className="text-sm">Loading…</span>
        </div>
      </div>
    );
  }

  /* ── Error ── */
  if (error || !shoe) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 gap-4 text-gray-500">
        <p className="text-lg font-semibold">Shoe not found</p>
        <button onClick={() => router.back()} className="text-sm underline hover:text-black transition-colors">
          ← Go back
        </button>
      </div>
    );
  }

  const discount = shoe.originalprice
    ? Math.round(((shoe.originalprice - shoe.price) / shoe.originalprice) * 100)
    : null;

  return (
    <div className="mb-16 mt-6 bg-white pt-24 pb-16 px-6 lg:px-16">

      {/* Back link */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-black transition-colors mb-8"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Back to shop
      </button>

      {/* Main layout */}
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

        {/* ── Left: Image ── */}
        <div className="w-full lg:w-[45%] flex-shrink-0">
          <div className="w-full aspect-square rounded-3xl bg-gray-100 flex items-center justify-center overflow-hidden">
            <img
              src={shoe.img}
              alt={shoe.name}
              className="w-[85%] h-[85%] object-contain drop-shadow-xl transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* ── Right: Info ── */}
        <div className="flex-1 flex flex-col gap-5">

          {/* Section badge */}
          <span className={`text-xs font-bold uppercase tracking-widest ${sectionColors[shoe.section] ?? 'text-gray-500'}`}>
            {shoe.section}
          </span>

          {/* Name */}
          <h1 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight">
            {shoe.name}
          </h1>

          {/* Stars */}
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-gray-500 font-medium">4.8 (126 reviews)</span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3 flex-wrap">
            <span className="text-3xl font-black text-gray-900">
              ₹ {shoe.price.toLocaleString('en-IN')}.00
            </span>
            {shoe.originalprice && (
              <span className="text-lg text-gray-400 line-through font-medium">
                ₹ {shoe.originalprice.toLocaleString('en-IN')}.00
              </span>
            )}
            {discount && (
              <span className="text-xs font-bold text-green-600 bg-green-50 border border-green-200 px-2 py-0.5 rounded-full">
                {discount}% OFF
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-sm text-gray-500 leading-relaxed max-w-md">
            A breathable upper over a cushioned midsole, built to hold its shape through daily wear.
            Comes with a durable rubber outsole and a padded collar for comfort from the first step.
          </p>

          {/* Divider */}
          <div className="border-t border-gray-100" />

          {/* ── Size selector ── */}
          <div>
            <p className="text-sm font-semibold text-gray-800 mb-3">
              Select size <span className="text-gray-400 font-normal">(EU)</span>
            </p>
            <div className="flex flex-wrap gap-2">
              {EU_SIZES.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`
                    w-14 h-12 rounded-xl text-sm font-semibold border transition-all duration-150
                    ${selectedSize === size
                      ? 'bg-black text-white border-black shadow-md scale-105'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400'
                    }
                  `}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3 flex-wrap">
            <button className="flex-1 min-w-[140px] py-3.5 rounded-2xl bg-black text-white font-bold text-sm hover:bg-gray-800 active:scale-95 transition-all duration-150 shadow-sm">
              Add to bag
            </button>
            <button className="flex-1 min-w-[140px] py-3.5 rounded-2xl border-2 border-gray-200 text-gray-800 font-bold text-sm hover:border-black hover:bg-gray-50 active:scale-95 transition-all duration-150">
              Buy now
            </button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-6 mt-1">
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8" />
              </svg>
              Free delivery over ₹ 2,000
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              30-day free returns
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}