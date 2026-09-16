"use client";

import { useAllShoes } from "@/app/_hooks/shoesQuery";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { useRouter } from "next/navigation";


export default function Banner() {
    const { data: products, isLoading, error } = useAllShoes();
    const router = useRouter();
    function handleThumbnailClick(productId: string) {
        router.push(`/shoe/${productId}`);
    }
    return (
        <section className="mx-4 lg:mx-32 my-10 lg:my-15 overflow-visible">
            <div className="relative w-full rounded-3xl bg-[#FD8B92] overflow-visible px-6 py-8 lg:px-12 lg:py-10">

                {/* Watermark text */}
                <span className="absolute inset-0 z-0 flex items-center justify-center text-[22vw] font-black text-white/20 select-none leading-none pointer-events-none whitespace-nowrap overflow-hidden">
                    StepUP
                </span>

                {/* Banner person image - left side, overflowing top, hidden on mobile */}
                <div className="hidden lg:block absolute left-0 bottom-0 z-10 pointer-events-none ml-20" style={{ height: '130%' }}>
                    <img
                        src="/photos/banner.png"
                        alt="Banner Person"
                        className="h-full w-auto object-contain object-bottom"
                    />
                </div>

                {/* Content */}

                <div className="relative z-20 flex flex-col items-start lg:items-end gap-4 mr-20">

                    {/* Headline */}
                    <div className="text-left">
                        <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
                            Are you ready
                            <br />
                            to lead the way
                        </h2>
                        <p className="mt-3 text-white/80 text-sm lg:text-base max-w-xs">
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do.
                        </p>
                        {/* Explore button */}
                        <button
                            type="button"
                            className="mt-1 bg-white text-[#FD8B92] font-bold text-base lg:text-lg px-8 lg:px-10 py-2.5 rounded-sm hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
                            onClick={() => router.push('/shop')}
                        >
                            Explore
                        </button>
                    </div>



                    {/* Shoe thumbnail carousel */}
                    <div className="w-full max-w-[288px] mt-2 lg:mx-10">
                        <Carousel
                            opts={{ align: "start", loop: true }}
                            className="w-full"
                        >
                            <CarouselContent className="-ml-2">
                                {products?.map((product, index) => (
                                    <CarouselItem
                                        key={index}
                                        className="basis-1/3 pl-2"
                                    >
                                        <div onClick={() => handleThumbnailClick(product.id)} className="bg-white/30 rounded-xl p-1.5 flex items-center justify-center aspect-square">
                                            <img
                                                src={product.img}
                                                alt={product.name}
                                                className="h-20 lg:h-24 w-auto object-contain"
                                            />
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="hidden lg:flex" />
                            <CarouselNext className="hidden lg:flex" />
                        </Carousel>
                    </div>
                </div>
            </div>

        </section >
    );
}
