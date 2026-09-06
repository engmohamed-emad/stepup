'use client';

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import ShoeCard from "@/app/_components/Generic/ShoeCard";
import { useAllShoes } from "@/app/_hooks/shoesQuery";
export default function CarouselSpacing() {

    const {data:products , isLoading, error} = useAllShoes();
 
    if (isLoading) {
        return <p className="text-center text-gray-500">Loading...</p>;
    }
    if (error) {
        return <p className="text-center text-red-500">Error: {error.message}</p>;
    }
    return (

        <Carousel className="w-full">
            <CarouselContent className="-ml-1">
                {products?.map((product, index) => (
                    <CarouselItem key={index} className="basis-full pl-1 lg:basis-1/3">
                        <div className="p-1">
                            <CardContent className="flex aspect-square border-none items-center justify-center">
                                <ShoeCard id={product.id} img={product.img} name={product.name} price={product.price} originalprice={product.originalprice} />
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
