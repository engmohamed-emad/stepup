"use client";
import { Carousel } from "@ark-ui/react/carousel";
import ReviewCard from "./ReviewCard";
import { useEffect, useState } from "react";

const reviews = [
    { name: "Ali", review: "Good product, really happy with the quality!", rating: 5, image: "" },
    { name: "Omar", review: "Wonderful experience, will buy again.", rating: 3.5, image: "" },
    { name: "Mohamed", review: "Great shoes, very comfortable.", rating: 4.5, image: "" },
    { name: "Sara", review: "Loved the design and fast delivery.", rating: 4, image: "" },
    { name: "Khaled", review: "Good product, really happy with the !", rating: 5, image: "" },
];

// Split into groups of given size
function chunkArray<T>(arr: T[], size: number): T[][] {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
        arr.slice(i * size, i * size + size)
    );
}

const slidesMobile = chunkArray(reviews, 1); // 1 per slide on mobile
const slidesDesktop = chunkArray(reviews, 2); // 2 per slide on desktop

function SliderBlock({ slides, showTwoPerSlide }: { slides: typeof slidesMobile; showTwoPerSlide: boolean }) {
    return (
        <Carousel.Root
            defaultPage={0}
            slideCount={slides.length}
            className="w-full max-w-4xl mx-auto"
        >
            <Carousel.ItemGroup className="min-h-40">
                {slides.map((group, index) => (
                    <Carousel.Item
                        key={index}
                        index={index}
                        className="flex gap-6 px-2"
                    >
                        {group.map((review, i) => (
                            <div key={i} className={showTwoPerSlide ? "flex-1" : "w-full"}>
                                <ReviewCard
                                    image={review.image}
                                    name={review.name}
                                    rating={review.rating}
                                    review={review.review}
                                />
                            </div>
                        ))}
                        {/* Fill empty slot if odd number in desktop mode */}
                        {showTwoPerSlide && group.length < 2 && <div className="flex-1" />}
                    </Carousel.Item>
                ))}
            </Carousel.ItemGroup>

            <div className="flex items-center justify-center">
                <Carousel.IndicatorGroup className="flex gap-2 mt-10">
                    {slides.map((_, index) => (
                        <Carousel.Indicator
                            key={index}
                            index={index}
                            className="w-3 h-3 rounded-full bg-gray-300 data-current:bg-black transition-colors cursor-pointer"
                        />
                    ))}
                </Carousel.IndicatorGroup>
            </div>
        </Carousel.Root>
    );
}

export default function ReviewsSlider() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia("(max-width: 1023px)");
        setIsMobile(mq.matches);
        const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, []);

    if (isMobile) {
        return <SliderBlock slides={slidesMobile} showTwoPerSlide={false} />;
    }
    return <SliderBlock slides={slidesDesktop} showTwoPerSlide={true} />;
}