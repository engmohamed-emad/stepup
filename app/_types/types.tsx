export interface Shoe {
  id: string;
  name: string;
  img: string;
  price: number;
  originalprice: number;
  section: string;
  createdAt: string;
}

export interface ProductCardProps {
  id: string;
  name: string;
  img: string;
  price: number;
  originalprice: number;
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

export interface ShoeCard2Props extends Shoe {
  isNew?: boolean;
  onArrowClick?: () => void;
}

export interface ReviewCardProps {
  image: string;
  name: string;
  rating: number; // 0–5, supports .5 steps
  review: string;
}

export interface NavigationsProps {
  mobile?: boolean;
  onLinkClick?: () => void;
}
