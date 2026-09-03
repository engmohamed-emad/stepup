export interface ProductCardProps {
  image: string;
  description: string;
  price: number;
}

export interface ArrowButtonProps {
  onArrowClick?: () => void;
  description: string;
}

export interface BlackButtonProps {
  text: string;
  handleClick: () => void;
  chosen?: boolean;
  size?: "small" | "large";
}

export interface ShoeCard2Props {
  image: string;
  name: string;
  price: number;
  originalPrice: number;
  isNew?: boolean;
  onArrowClick?: () => void;
}

export interface ReviewCardProps {
  image: string;
  name: string;
  rating: number; // 0–5, supports .5 steps
  review: string;
}
