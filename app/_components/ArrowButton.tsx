import { RightArrowIcon } from "../_icons/icons";
import type { ArrowButtonProps } from "../_types/types";

export default function ArrowButton({ onArrowClick, description }: ArrowButtonProps) {
    return (
        <button
            type="button"
            onClick={onArrowClick}
            aria-label={`View ${description} details`}
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black text-white transition-colors hover:bg-gray-800"
        >
            <RightArrowIcon className="h-3 w-3" />
        </button>
    );
}