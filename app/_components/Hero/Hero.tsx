import HeroLeft from "@/app/_components/Hero/HeroLeft";
import HeroRight from "@/app/_components/Hero/HeroRight";

export default function Hero() {
    return (
        <section className="flex flex-col lg:flex-row w-full overflow-hidden">
            <HeroLeft />
            <HeroRight />
        </section>
    );
}