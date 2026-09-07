"use client";
import TableContent from "@/app/_components/Dashboard/Table";
import Filter from "@/app/_components/Generic/Filter";
import AddButton from "@/app/_components/Dashboard/AddButton";
import { useState } from "react";
export default function Dashboard() {
    const items = ["All", "Man", "Woman", "Boys", "Girls"];
    const [selectedFilter, setSelectedFilter] = useState("All");
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
                <AddButton />
                <Filter items={items} selected={selectedFilter} onSelect={setSelectedFilter} />
            </div>

            {/* Table */}
            <TableContent selectedFilter={selectedFilter} />
        </div>
    );
}