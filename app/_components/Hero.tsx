import Header from "./Header";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col">
            {/* Header is absolute so it floats over both panels — no bg needed */}
            <div className="absolute top-0 left-0 right-0 z-50">
                <Header />
            </div>

            {/* Hero panels fill the full screen height, header floats on top */}
            <div className="flex flex-row flex-1 min-h-screen">
                <HeroLeft />
                <HeroRight />
            </div>
        </section>
    );
}