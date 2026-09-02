import { SearchIcon, CartIcon, DashboardIcon } from "../_icons/icons";
export default function NavIcons() {
    return (
        <div className="flex items-center space-x-10">
            <button type="button" className="cursor-pointer">
                <SearchIcon className="h-6 w-6 text-gray-600" />
            </button>
            <button type="button" className="cursor-pointer">
                <CartIcon className="h-6 w-6 text-gray-600" />
            </button>
            <button type="button" className="cursor-pointer">
                <DashboardIcon className="h-6 w-6 text-gray-600" />
            </button>
        </div>

    );
}   