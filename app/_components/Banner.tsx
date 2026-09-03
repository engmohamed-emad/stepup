"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
    "/photos/image1.png",
    "/photos/image2.png",
    "/photos/image3.png",
    "/photos/image4.png",
    "/photos/image5.png",
    "/photos/image6.png",
];

export default function Banner() {
    return (
        <section className="mx-32 my-15">
            <div className="relative w-full rounded-3xl bg-[#FD8B92] overflow-hidden px-12 py-10">

                {/* Watermark text */}
                <span className="absolute inset-0 z-0 flex items-center justify-center text-[22vw] font-black text-white/20 select-none leading-none pointer-events-none whitespace-nowrap overflow-hidden">
                    StepUP
                </span>

                {/* Content — pinned to the right */}
                <div className="relative z-20 flex flex-col items-end gap-4">

                    {/* Headline */}
                    <div className="text-left">
                        <h2 className="text-5xl font-bold text-white leading-tight">
                            Are you ready
                            <br />
                            to lead the way
                        </h2>
                        <p className="mt-3 text-white/80 text-base max-w-xs">
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do.
                        </p>
                    </div>

                    {/* Explore button */}
                    <button
                        type="button"
                        className="mt-1 bg-white text-[#FD8B92] font-bold text-lg px-10 py-2.5 rounded-sm hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
                        onClick={() => console.log("Explore clicked")}
                    >
                        Explore
                    </button>

                    {/* Shoe thumbnail carousel */}
                    <div className="w-72 mt-2 mx-10">
                        <Carousel
                            opts={{ align: "start", loop: true }}
                            className="w-full"
                        >
                            <CarouselContent className="-ml-2">
                                {images.map((image, index) => (
                                    <CarouselItem
                                        key={index}
                                        className="basis-1/3 pl-2"
                                    >
                                        <div className="bg-white/30 rounded-xl p-1.5 flex items-center justify-center aspect-square">
                                            <img
                                                src={image}
                                                alt={`Shoe ${index + 1}`}
                                                className="h-full w-full object-contain"
                                            />
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="" />
                            <CarouselNext className="" />
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    );
}
