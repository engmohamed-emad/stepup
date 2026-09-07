'use client';

import { useAllShoes } from '@/app/_hooks/shoesQuery';
import TableRow from '@/app/_components/Dashboard/TableRow';

export default function TableContent({ selectedFilter }: { selectedFilter: string }) {
    const { data: products, isLoading, error } = useAllShoes();

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
                            selectedFilter === 'All' || product.section === selectedFilter) && (
                            <TableRow
                                key={product.id}
                                product={product}
                                isEven={idx % 2 === 0}
                            />
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
    );
}
