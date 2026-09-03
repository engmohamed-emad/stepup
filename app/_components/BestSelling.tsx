"use client";
import BlackButton from "./BlackButton";
import { useState } from "react";
import ShoeCard2 from "./ShoeCard2";
export default function BestSelling() {

    const [chosen, setChosen] = useState([true, false, false, false]);
    function handleClick(index: number) {
        const newChosen = [false, false, false, false];
        newChosen[index] = true;
        setChosen(newChosen);
    }
    function onArrowClick() {
        console.log("Arrow clicked!");
    }

    const images = [
        "/photos/image1.png",
        "/photos/image2.png",
        "/photos/image3.png",
        "/photos/image4.png",
        "/photos/image5.png",
        "/photos/image6.png"
    ];
    return (
        <section className="w-full my-15">
            <div className="flex items-center justify-center gap-2">
                <span className="h-0.5 w-6 bg-neutral-800" />
                <p className="text-3xl font-semibold text-black tracking-tight text-center">Best Selling </p>
                <span className="h-0.5 w-6 bg-neutral-800" />
            </div>
            <div className="flex items-center justify-center gap-15 mt-10">
                <BlackButton size="small" text="Man" handleClick={() => handleClick(0)} chosen={chosen[0]} />
                <BlackButton size="small" text="Woman" handleClick={() => handleClick(1)} chosen={chosen[1]} />
                <BlackButton size="small" text="Boys" handleClick={() => handleClick(2)} chosen={chosen[2]} />
                <BlackButton size="small" text="Girls" handleClick={() => handleClick(3)} chosen={chosen[3]} />
            </div>
            <div className="grid grid-cols-3 gap-10 mt-10 px-80">
                {images.map((image, index) => (
                    <ShoeCard2 key={index} image={image} name={image} price={index + 1} originalPrice={index + 1} onArrowClick={onArrowClick} />
                ))}
            </div>

        </section>
    );
}