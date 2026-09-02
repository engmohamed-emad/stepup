'use client';
import BlackButton from "./BlackButton";
import ShoeSlider from "./ShoeSlider";
export default function Trending() {
    function handleClick() {
        console.log("Explore Now clicked!");
    }
    return (
        <div className="flex mx-16">
            <div className="flex flex-col justify-center px-16 pt-28 pb-12 flex-1 space-y-6">
                <p className="text-xl font-semibold text-black tracking-tight">Our Trending Shoe</p>
                <p className="text-6xl font-bold text-black tracking-tight">Most Popular Products</p>
                <p className="text-lg font-medium text-gray-600">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit,</p>
                <BlackButton text="Explore" handleClick={handleClick} />
            </div>
            <div className="w-[65%] pt-28 pb-12 mx-10">
                <ShoeSlider />
            </div>
        </div>
    );
}