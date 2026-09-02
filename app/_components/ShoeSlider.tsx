'use client';

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import ShoeCard from "./ShoeCard";
export default function CarouselSpacing() {
    const images = [
        "/photos/image1.png",
        "/photos/image2.png",
        "/photos/image3.png",
        "/photos/image4.png",
        "/photos/image5.png",
        "/photos/image6.png",
        "/photos/image7.png",
        "/photos/image8.png",
        "/photos/image9.png",
        "/photos/image10.png",
    ];
    return (
        <Carousel className="w-full">
            <CarouselContent className="-ml-1">
                {images.map((image, index) => (
                    <CarouselItem key={index} className="basis-1/2 pl-1 lg:basis-1/3">
                        <div className="p-1">
                            <CardContent className="flex aspect-square border-none items-center justify-center">
                                <ShoeCard image={image} description={image} price={index + 1} />
                            </CardContent>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
