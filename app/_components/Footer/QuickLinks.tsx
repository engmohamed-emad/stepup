export default function QuickLinks() {
    return (
        <div className="flex flex-col gap-3">
            <p className="text-base font-semibold text-white">Quick Links</p>
            {["Home", "Shop", "Category", "Contact", "Privacy"].map((link) => (
                <a
                    key={link}
                    href="#"
                    className="text-sm text-white hover:text-white transition-colors duration-200"
                >
                    {link}
                </a>
            ))}
        </div>
    );
}