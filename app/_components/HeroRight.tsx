export default function HeroRight() {
    return (
        <div className="relative w-full overflow-hidden bg-gray-200 h-[80vw] lg:h-auto lg:flex-1 lg:min-h-screen">

            {/* "ULTIMATE" — absolute, left side, behind the image (z-10) */}
            <span
                className="absolute left-0 top-0 bottom-0
                           text-white font-black leading-none tracking-widest
                           select-none pointer-events-none z-0
                           text-[clamp(28px,6vw,130px)] [writing-mode:vertical-rl] rotate-180 indent-2 lg:indent-4"
            >
                ULTIMATE
            </span>

            {/* Shoe image — fills the full HeroRight area, above ULTIMATE (z-20) */}
            <img
                src="/photos/image1.png"
                alt="Trendy StepUp Pro"
                className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl z-20"
            />

            {/* Product info — pinned at bottom center, above everything (z-30) */}
            <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center pb-4 lg:pb-10 z-30">
                <p className="text-lg lg:text-2xl font-semibold text-black tracking-tight">
                    Trendy StepUp Pro
                </p>
                <p className="text-lg lg:text-2xl mt-1 text-gray-600">
                    ₹1200
                </p>
            </div>

        </div>
    );
}
