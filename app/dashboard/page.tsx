"use client";
import { PlusIcon } from "@/app/_icons/icons";
import TableContent from "@/app/_components/Table";
import Filter from "@/app/_components/Filter";

export default function Dashboard() {
    const items = ["All", "Man", "Woman", "Boys", "Girls"];

    return (
        <div className="min-h-screen bg-gray-50 pt-28 pb-16 px-8">

            {/* Page title */}
            <div className="mb-8">
                <h1 className="text-3xl font-black text-gray-900 tracking-tight">
                    Product Dashboard
                </h1>
                <p className="text-gray-400 mt-1 text-sm">Manage and overview your product catalogue</p>
            </div>

            {/* Toolbar: Add Product + Filter */}
            <div className="flex items-center gap-4 mb-6">
                <button
                    className="
                        flex items-center gap-2 px-5 py-2.5 rounded-xl
                        bg-black text-white font-semibold text-sm
                        shadow-sm hover:bg-gray-800
                        transition-all duration-200
                    "
                >
                    <PlusIcon />
                    Add Product
                </button>

                <Filter items={items} />
            </div>

            {/* Table */}
            <TableContent />
        </div>
    );
}