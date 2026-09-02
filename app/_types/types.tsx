export interface ProductCardProps {
  image: string;
  description: string;
  price: number;
}

export interface ArrowButtonProps {
  onArrowClick: () => void;
  description: string;
}

export interface BlackButtonProps {
  text: string;
  handleClick: () => void;
}