"use client";
import BlackButton from "@/app/_components/Generic/BlackButton";
import { useRouter } from "next/navigation";
export default function HeroLeft() {
    const router = useRouter();
    function handleShopNowClick() {
       router.push('/shop');
    }
    return (
        <div className="flex flex-col justify-center px-8 pt-28 pb-12 lg:px-16 lg:pt-0 w-full lg:w-[42%] lg:shrink-0 lg:min-h-screen">

            {/* Headline */}
            <h1 className="text-5xl lg:text-8xl font-black text-black leading-tight tracking-tight">
                Find Your
                <br />
                Sole Mate
                <br />
                With Us
            </h1>

            {/* Subtitle */}
            <p className="text-base lg:text-lg mt-6 text-gray-700 max-w-md">
                Lorem Ipsum Dolor Sit Amet, Consectetur
                <br />
                Adipiscing Elit, Sed Do Eiusmod.
            </p>
            <div className="mt-8 lg:mt-15">
                {/* CTA Button */}
                <BlackButton text="Shop Now" handleClick={handleShopNowClick} />
            </div>
        </div>
    );
}