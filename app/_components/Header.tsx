import Navigations from "./Navigations";
import NavIcons from "./NavIcons";

export default function Header() {
    return (
        <header className="mt-6 flex items-center justify-between px-16 py-4 w-full bg-transparent">
            {/* Brand */}
            <span className="text-4xl font-black text-black tracking-tight">StepUp</span>

            {/* Nav links */}
            <Navigations />

            {/* Icons */}
            <NavIcons />
        </header>
    );
}