
const products = [
    { id: 1, name: "StepUp Air Pro", image: "/photos/image1.png", price: 120, originalPrice: 150, section: "Man" },
    { id: 2, name: "StepUp Runner X", image: "/photos/image2.png", price: 95, originalPrice: 115, section: "Man" },
    { id: 3, name: "Velvet Stride", image: "/photos/image3.png", price: 110, originalPrice: 130, section: "Woman" },
    { id: 4, name: "Bloom Flex", image: "/photos/image4.png", price: 99, originalPrice: 120, section: "Woman" },
    { id: 5, name: "Tiny Steppers", image: "/photos/image5.png", price: 60, originalPrice: 75, section: "Boys" },
    { id: 6, name: "Cloud Walker", image: "/photos/image6.png", price: 85, originalPrice: 100, section: "Girls" },
    { id: 7, name: "Urban Dash", image: "/photos/image7.png", price: 130, originalPrice: 160, section: "Man" },
    { id: 8, name: "Petal Glide", image: "/photos/image8.png", price: 105, originalPrice: 125, section: "Woman" },
    { id: 9, name: "StepUp Air Pro", image: "/photos/image1.png", price: 120, originalPrice: 150, section: "Man" },
    { id: 10, name: "StepUp Runner X", image: "/photos/image2.png", price: 95, originalPrice: 115, section: "Man" },
    { id: 11, name: "Velvet Stride", image: "/photos/image3.png", price: 110, originalPrice: 130, section: "Woman" },
    { id: 12, name: "Bloom Flex", image: "/photos/image4.png", price: 99, originalPrice: 120, section: "Woman" },
    { id: 13, name: "Tiny Steppers", image: "/photos/image5.png", price: 60, originalPrice: 75, section: "Boys" },
    { id: 14, name: "Cloud Walker", image: "/photos/image6.png", price: 85, originalPrice: 100, section: "Girls" },
    { id: 15, name: "Urban Dash", image: "/photos/image7.png", price: 130, originalPrice: 160, section: "Man" },
    { id: 16, name: "Petal Glide", image: "/photos/image8.png", price: 105, originalPrice: 125, section: "Woman" }

];

const sectionColors: Record<string, string> = {
    Man: "bg-blue-50 text-blue-600 border border-blue-200",
    Woman: "bg-pink-50 text-pink-600 border border-pink-200",
    Boys: "bg-emerald-50 text-emerald-600 border border-emerald-200",
    Girls: "bg-purple-50 text-purple-600 border border-purple-200",
};

export default function TableContent() {
    return (
        <div className="w-full rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white">

            {/* Table wrapper */}
            <div className="w-full overflow-x-auto">
                <table className="w-full text-sm">

                    {/* Header */}
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-200">
                            {["ID", "Product", "Image", "Price", "Original Price", "Section", "Actions"].map((h) => (
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
                        {products.map((product, idx) => (
                            <tr
                                key={product.id}
                                className={`
                                    group border-b border-gray-100 transition-colors duration-150
                                    ${idx % 2 === 0 ? "bg-white" : "bg-gray-50/50"}
                                    hover:bg-gray-100
                                `}
                            >
                                {/* ID */}
                                <td className="px-6 py-4 font-mono text-gray-600 text-xs">
                                    #{String(product.id).padStart(3, "0")}
                                </td>

                                {/* Name */}
                                <td className="px-6 py-4 font-semibold text-gray-800 whitespace-nowrap">
                                    {product.name}
                                </td>

                                {/* Image */}
                                <td className="px-6 py-4">
                                    <div className="w-20 h-20 rounded-xl bg-gray-100 border border-gray-200 overflow-hidden flex items-center justify-center">
                                        <img
                                            src={product.image}
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
                                    ₹{product.originalPrice}
                                </td>

                                {/* Section badge */}
                                <td className="px-6 py-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${sectionColors[product.section] ?? "bg-gray-100 text-gray-600"}`}>
                                        {product.section}
                                    </span>
                                </td>

                                {/* Actions */}
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <button className="
                                            px-3 py-1.5 rounded-lg text-xs font-semibold
                                            bg-gray-100 text-gray-700 border border-gray-200
                                            hover:bg-black hover:text-white hover:border-black
                                            transition-all duration-150
                                        ">
                                            Edit
                                        </button>
                                        <button className="
                                            px-3 py-1.5 rounded-lg text-xs font-semibold
                                            bg-red-50 text-red-500 border border-red-200
                                            hover:bg-red-500 hover:text-white hover:border-red-500
                                            transition-all duration-150
                                        ">
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
                <span className="text-xs text-gray-400">{products.length} products total</span>
                <span className="text-xs text-gray-300">StepUp Admin · 2026</span>
            </div>
        </div>
    );
}
