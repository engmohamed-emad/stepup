'use client';

import { useState } from 'react';
import { useAllShoes, useDeleteShoe } from '@/app/_hooks/shoesQuery';
import { Shoe } from '@/app/_types/types';
import Modal from '@/app/_components/Generic/Modal';
import ShoeForm from '@/app/_components/Generic/Form';

const sectionColors: Record<string, string> = {
    Man: 'bg-blue-50 text-blue-600 border border-blue-200',
    Woman: 'bg-pink-50 text-pink-600 border border-pink-200',
    Boys: 'bg-emerald-50 text-emerald-600 border border-emerald-200',
    Girls: 'bg-purple-50 text-purple-600 border border-purple-200',
};

export default function TableContent() {
    const { data: products, isLoading, error } = useAllShoes();
    const deleteMutation = useDeleteShoe();

    // Edit modal state
    const [editShoe, setEditShoe] = useState<Shoe | null>(null);

    // Delete confirmation state
    const [deleteShoeId, setDeleteShoeId] = useState<string | null>(null);

    const handleDelete = () => {
        if (!deleteShoeId) return;
        deleteMutation.mutate(deleteShoeId, {
            onSuccess: () => setDeleteShoeId(null),
        });
    };

    if (isLoading) {
        return (
            <div className="w-full rounded-2xl border border-gray-200 shadow-sm bg-white p-12 flex items-center justify-center text-gray-400 text-sm">
                Loading products…
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-full rounded-2xl border border-red-200 shadow-sm bg-red-50 p-12 flex items-center justify-center text-red-500 text-sm">
                Failed to load products: {error.message}
            </div>
        );
    }

    const list = products ?? [];

    return (
        <>
            <div className="w-full rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white">

                {/* Table wrapper */}
                <div className="w-full overflow-x-auto">
                    <table className="w-full text-sm">

                        {/* Header */}
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-200">
                                {['ID', 'Product', 'Image', 'Price', 'Original Price', 'Section', 'Actions'].map((h) => (
                                    <th
                                        key={h}
                                        className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-gray-400 whitespace-nowrap"
                                    >
                                        {h}
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        {/* Body */}
                        <tbody>
                            {list.map((product, idx) => (
                                <tr
                                    key={product.id}
                                    className={`
                                        group border-b border-gray-100 transition-colors duration-150
                                        ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}
                                        hover:bg-gray-100
                                    `}
                                >
                                    {/* ID */}
                                    <td className="px-6 py-4 font-mono text-gray-600 text-xs">
                                        #{String(product.id).padStart(3, '0')}
                                    </td>

                                    {/* Name */}
                                    <td className="px-6 py-4 font-semibold text-gray-800 whitespace-nowrap">
                                        {product.name}
                                    </td>

                                    {/* Image */}
                                    <td className="px-6 py-4">
                                        <div className="w-20 h-20 rounded-xl border border-gray-200 overflow-hidden flex items-center justify-center">
                                            <img
                                                src={product.img}
                                                alt={product.name}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    </td>

                                    {/* Price */}
                                    <td className="px-6 py-4 font-bold text-gray-900">
                                        ₹{product.price}
                                    </td>

                                    {/* Original Price */}
                                    <td className="px-6 py-4 text-gray-400 line-through">
                                        ₹{product.originalprice ?? '—'}
                                    </td>

                                    {/* Section badge */}
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${sectionColors[product.section as string] ?? 'bg-gray-100 text-gray-600'}`}>
                                            {product.section as string}
                                        </span>
                                    </td>

                                    {/* Actions */}
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() => setEditShoe(product)}
                                                className="
                                                    px-3 py-1.5 rounded-lg text-xs font-semibold
                                                    bg-gray-100 text-gray-700 border border-gray-200
                                                    hover:bg-black hover:text-white hover:border-black
                                                    transition-all duration-150
                                                "
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => setDeleteShoeId(product.id)}
                                                className="
                                                    px-3 py-1.5 rounded-lg text-xs font-semibold
                                                    bg-red-50 text-red-500 border border-red-200
                                                    hover:bg-red-500 hover:text-white hover:border-red-500
                                                    transition-all duration-150
                                                "
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Footer */}
                <div className="bg-gray-50 px-6 py-3 flex items-center justify-between border-t border-gray-200">
                    <span className="text-xs text-gray-400">{list.length} products total</span>
                    <span className="text-xs text-gray-300">StepUp Admin · 2026</span>
                </div>
            </div>

            {/* ── Edit Modal ── */}
            <Modal
                isOpen={!!editShoe}
                onClose={() => setEditShoe(null)}
                title="Edit Shoe"
            >
                {editShoe && (
                    <ShoeForm
                        shoe={editShoe}
                        onSuccess={() => setEditShoe(null)}
                    />
                )}
            </Modal>

            {/* ── Delete Confirmation Modal ── */}
            <Modal
                isOpen={!!deleteShoeId}
                onClose={() => setDeleteShoeId(null)}
                title="Delete Shoe"
            >
                <p className="text-sm text-gray-600 mb-6">
                    Are you sure you want to delete this shoe? This action cannot be undone.
                </p>
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setDeleteShoeId(null)}
                        className="
                            flex-1 py-2.5 rounded-xl border border-gray-200
                            text-sm font-semibold text-gray-600
                            hover:bg-gray-50 transition-all duration-150
                        "
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleDelete}
                        disabled={deleteMutation.isPending}
                        className="
                            flex-1 py-2.5 rounded-xl
                            bg-red-500 text-white text-sm font-bold
                            hover:bg-red-600 active:scale-95
                            disabled:opacity-50 disabled:cursor-not-allowed
                            transition-all duration-150
                        "
                    >
                        {deleteMutation.isPending ? 'Deleting…' : 'Yes, Delete'}
                    </button>
                </div>
            </Modal>
        </>
    );
}
