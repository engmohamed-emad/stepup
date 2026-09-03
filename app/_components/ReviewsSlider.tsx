import { Carousel } from "@ark-ui/react/carousel";
import ReviewCard from "./ReviewCard";

const reviews = [
    { name: "Ali", review: "Good product, really happy with the quality!", rating: 5, image: "" },
    { name: "Omar", review: "Wonderful experience, will buy again.", rating: 3.5, image: "" },
    { name: "Mohamed", review: "Great shoes, very comfortable.", rating: 4.5, image: "" },
    { name: "Sara", review: "Loved the design and fast delivery.", rating: 4, image: "" },
    { name: "Khaled", review: "Good product, really happy with the !", rating: 5, image: "" },

];

// Split into groups of 2
function chunkArray<T>(arr: T[], size: number): T[][] {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
        arr.slice(i * size, i * size + size)
    );
}

const slides = chunkArray(reviews, 2);

export default function ReviewsSlider() {
    return (
        <Carousel.Root
            defaultPage={0}
            slideCount={slides.length}
            className="w-full max-w-4xl mx-auto"
        >
            <Carousel.ItemGroup className="min-h-40">
                {slides.map((pair, index) => (
                    <Carousel.Item
                        key={index}
                        index={index}
                        className="flex gap-6 px-2-row"
                    >
                        {pair.map((review, i) => (
                            <div key={i} className="flex-1">
                                <ReviewCard
                                    image={review.image}
                                    name={review.name}
                                    rating={review.rating}
                                    review={review.review}
                                />
                            </div>
                        ))}
                        {/* If odd number of reviews, fill the empty slot */}
                        {pair.length < 2 && <div className="flex-1" />}
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