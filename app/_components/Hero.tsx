import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

export default function Hero() {
    return (
        <section className="flex flex-col lg:flex-row w-full overflow-hidden">
            <HeroLeft />
            <HeroRight />
        </section>
    );
}