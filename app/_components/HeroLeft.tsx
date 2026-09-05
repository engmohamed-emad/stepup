"use client";
import BlackButton from "./BlackButton";

export default function HeroLeft() {
    function handleShopNowClick() {
        console.log("Shop Now clicked!");
    }
    return (
        <div className="flex flex-col justify-center px-16 pb-12 w-[42%] shrink-0">

            {/* Headline */}
            <h1 className="text-8xl font-black text-black leading-tight tracking-tight">
                Find Your
                <br />
                Sole Mate
                <br />
                With Us
            </h1>

            {/* Subtitle */}
            <p className="text-lg mt-6 text-gray-700 max-w-md">
                Lorem Ipsum Dolor Sit Amet, Consectetur
                <br />
                Adipiscing Elit, Sed Do Eiusmod.
            </p>
            <div className="mt-15">
                {/* CTA Button — sharp corners, solid black, matching mockup */}
                <BlackButton text="Shop Now" handleClick={handleShopNowClick} />
            </div>
        </div>
    );
}