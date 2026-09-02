export default function HeroRight() {
    return (
        <div className="relative flex-1 overflow-hidden bg-gray-200 min-h-screen">

            {/* "ULTIMATE" — absolute, left side, behind the image (z-10) */}
            <span
                className="absolute left-0 top-0 bottom-0
                           text-white font-black leading-23 tracking-widest
                           select-none pointer-events-none z-0
                           text-[clamp(48px,8vw,130px)] [writing-mode:vertical-rl] rotate-180 indent-4"
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

            <div className="relative flex flex-col items-center justify-end min-h-screen pb-25 z-30">
                <p className="text-2xl font-semibold text-black tracking-tight">
                    Trendy StepUp Pro
                </p>
                <p className="text-2xl mt-1 text-gray-600">
                    ₹1200
                </p>
            </div>

        </div>
    );
}
