export default function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => {
                const filled = rating >= star;
                const half = !filled && rating >= star - 0.5;
                return (
                    <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                    >
                        {half ? (
                            // Half-star: left half filled, right half empty
                            <defs>
                                <linearGradient id={`half-${star}`}>
                                    <stop offset="50%" stopColor="#FBBF24" />
                                    <stop offset="50%" stopColor="#D1D5DB" />
                                </linearGradient>
                            </defs>
                        ) : null}
                        <polygon
                            points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
                            fill={
                                filled
                                    ? "#FBBF24"
                                    : half
                                        ? `url(#half-${star})`
                                        : "#D1D5DB"
                            }
                        />
                    </svg>
                );
            })}
        </div>
    );
}
