'use client';

import { Shoe } from '@/app/_types/types';
import EditButton from '@/app/_components/Dashboard/EditButton';
import DeleteButton from '@/app/_components/Dashboard/DeleteButton';

const sectionColors: Record<string, string> = {
    Man: 'bg-blue-50 text-blue-600 border border-blue-200',
    Woman: 'bg-pink-50 text-pink-600 border border-pink-200',
    Boys: 'bg-emerald-50 text-emerald-600 border border-emerald-200',
    Girls: 'bg-purple-50 text-purple-600 border border-purple-200',
};

interface TableRowProps {
    product: Shoe;
    isEven: boolean;
}

export default function TableRow({ product, isEven }: TableRowProps) {
    return (
        <tr
            className={`
                group border-b border-gray-100 transition-colors duration-150
                ${isEven ? 'bg-white' : 'bg-gray-50/50'}
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
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${sectionColors[product.section] ?? 'bg-gray-100 text-gray-600'}`}>
                    {product.section}
                </span>
            </td>

            {/* Actions */}
            <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                    <EditButton shoe={product} />
                    <DeleteButton shoeId={product.id} />
                </div>
            </td>
        </tr>
    );
}
