"use client"
import { ScrollDownIcon } from "@/app/_icons/icons";
interface FilterProps {
  items: readonly string[];
  selected?: string;
  onSelect?: (item: string) => void;
}

export default function Filter({ items, selected, onSelect }: FilterProps) {
  return (
    <div className="relative w-48">
      <select
        value={selected ?? "All"}
        onChange={(e) => onSelect?.(e.target.value)}
        className="
          w-full appearance-none
          px-4 py-2.5 pr-10
          rounded-xl border border-gray-300 bg-white
          text-sm font-medium text-gray-700
          focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
          cursor-pointer transition-all duration-150
        "
      >
        {items.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      {/* Chevron icon */}
      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
         <ScrollDownIcon className="h-5 w-5 text-gray-400" />
      </div>
    </div>
  )
}
