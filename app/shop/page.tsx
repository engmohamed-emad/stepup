'use client';

import { useState } from 'react';
import { useAllShoes } from '@/app/_hooks/shoesQuery';
import ShoeCard2 from '@/app/_components/Generic/ShoeCard2';
import Filter from '@/app/_components/Generic/Filter';

const SECTIONS = ['All', 'Man', 'Woman', 'Boys', 'Girls'] as const;

export default function ShopPage() {
    const { data: shoes, isLoading, error } = useAllShoes();
    const [selectedSection, setSelectedSection] = useState('All');

    /* ── Loading ── */
    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="flex flex-col items-center gap-3 text-gray-400">
                    <div className="w-10 h-10 border-4 border-gray-200 border-t-black rounded-full animate-spin" />
                    <span className="text-sm">Loading products…</span>
                </div>
            </div>
        );
    }

    /* ── Error ── */
    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-red-50 text-red-500 text-sm">
                Failed to load products: {error.message}
            </div>
        );
    }

    const list = shoes ?? [];
    const filtered = selectedSection === 'All'
        ? list
        : list.filter((s) => s.section === selectedSection);

    return (
        <div className="min-h-screen bg-gray-50 pt-28 pb-16 px-6 lg:px-16">

            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-black text-gray-900 tracking-tight">Shop</h1>
                <p className="text-gray-400 mt-1 text-sm">
                    {filtered.length} {filtered.length === 1 ? 'product' : 'products'} found
                </p>
            </div>

            {/* Filter */}
            <div className="mb-8">
                <Filter
                    items={SECTIONS}
                    selected={selectedSection}
                    onSelect={setSelectedSection}
                />
            </div>

            {/* Grid */}
            {filtered.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-24 text-gray-400 gap-2">
                    <span className="text-4xl">👟</span>
                    <p className="text-sm">No shoes found in this section.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filtered.map((shoe) => (
                        <ShoeCard2
                            key={shoe.id}
                            {...shoe}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}