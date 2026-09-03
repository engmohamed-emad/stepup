
import ReviewsSlider from "./ReviewsSlider";
export default function Reviews() {
    return (
        <section className="w-full my-20">
            <div className="flex items-center justify-center gap-2">
                <span className="h-0.5 w-6 bg-neutral-800" />
                <p className="text-3xl font-semibold text-black tracking-tight text-center">Customer Reviews</p>
                <span className="h-0.5 w-6 bg-neutral-800" />
            </div>
            <div className="flex items-center justify-center gap-10 mt-15">
                <ReviewsSlider />
            </div>
        </section>
    );
}