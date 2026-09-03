import StarRating from "./StarRating";

import { ReviewCardProps } from "../_types/types";
export default function ReviewCard({ image, name, rating, review }: ReviewCardProps) {
    return (
        <div className="flex items-start gap-5 bg-gray-100 rounded-2xl p-5 w-full max-w-md shadow-sm">
            {/* Avatar */}
            <img
                src={image}
                alt={name}
                className="w-24 h-24 rounded-xl object-cover shrink-0"
            />

            {/* Content */}
            <div className="flex flex-col gap-1.5">
                <p className="text-lg font-bold text-gray-900 leading-tight">{name}</p>
                <StarRating rating={rating} />
                <p className="text-sm text-gray-600 leading-relaxed mt-1">{review}</p>
            </div>
        </div>
    );
}