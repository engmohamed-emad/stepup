import Link from "next/link";
export default function Navigations() {
    return (
        <div className="flex items-center justify-between px-4 py-2">
            <ul className="flex space-x-12">
                <li>
                    <Link href="/" className="text-xl text-gray-700 hover:text-gray-900">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/shop" className="text-xl text-gray-700 hover:text-gray-900">
                        Shop
                    </Link>
                </li>
                <li>
                    <Link href="/collection" className="text-xl text-gray-700 hover:text-gray-900">
                        Collection
                    </Link>
                </li>
                <li>
                    <Link href="/customize" className="text-xl text-gray-700 hover:text-gray-900">
                        Customize
                    </Link>
                </li>
                <li>
                    <Link href="/dashboard" className="text-xl text-gray-700 hover:text-gray-900">
                        Dashboard
                    </Link>
                </li>
            </ul>
        </div>
    );
};

