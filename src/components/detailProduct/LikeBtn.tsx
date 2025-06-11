import { useState } from 'react';
import styled from '@emotion/styled'; // emotion styled를 쓰신다면 이렇게
import { FaHeart } from 'react-icons/fa';
import { handleLike } from '@/apis/auction';

interface LikeBtnProps {
  initialFavorited?: boolean;
  onToggle?: (favorited: boolean) => void;
  disabled?: boolean;
  size: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const LikeBtn = ({
  initialFavorited = false,
  onToggle,
  disabled = false,
  size,
  onClick, // 추가 ✅
}: LikeBtnProps) => {
  const [isLiked, setIsLiked] = useState(initialFavorited);
  const [isLoading, setIsLoading] = useState(false);

  const handleToggleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onClick?.(e);

    if (disabled || isLoading) return;

    setIsLoading(true);
    setTimeout(() => {
      const newState = !isLiked;
      setIsLiked(newState);
      setIsLoading(false);
      onToggle?.(newState);
    }, 500);
  };

  return (
    <LikeBtnStyle isFavorited={isLiked} disabled={disabled} isLoading={isLoading} size={size}>
      <button
        type="button"
        onClick={handleToggleFavorite}
        disabled={disabled || isLoading}
        aria-label={isLiked ? 'Remove from favorites' : 'Add to favorites'}
      >
        <FaHeart />
      </button>
    </LikeBtnStyle>
  );
};

interface StyledProps {
  isFavorited: boolean;
  disabled: boolean;
  isLoading: boolean;
  size: string;
}

const LikeBtnStyle = styled.div<StyledProps>`
  button {
    height: ${({ size }) => (size === 'small' ? '28px' : '32px')};
    width: ${({ size }) => (size === 'small' ? '28px' : '32px')};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${({ size }) => (size === 'small' ? '4px' : '6px')};
    border: 1px solid;
    border-color: ${({ isFavorited }) => (isFavorited ? '#ef4444' : '#d1d5db')};
    background-color: ${({ isFavorited }) => (isFavorited ? '#fee2e2' : '#ffffff')};
    cursor: ${({ disabled, isLoading }) => (disabled || isLoading ? 'not-allowed' : 'pointer')};
    transition: all 0.3s ease;

    svg {
      height: ${({ size }) => (size === 'small' ? '20px' : '24px')};
      width: ${({ size }) => (size === 'small' ? '20px' : '24px')};
      color: ${({ isFavorited }) => (isFavorited ? '#ef4444' : '#9ca3af')};
      transition: color 0.3s ease;
    }
  }
`;

export default LikeBtn;
