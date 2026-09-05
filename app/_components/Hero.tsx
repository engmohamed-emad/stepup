import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

export default function Hero() {
    return (
        <section className="flex flex-row min-h-screen">
            <HeroLeft />
            <HeroRight />
        </section>
    );
}