import { useState } from 'react';
import styled from '@emotion/styled'; // emotion styled를 쓰신다면 이렇게
import { FaHeart } from 'react-icons/fa';
import { handleLike } from '@/apis/auction';

interface LikeBtnProps {
  initialFavorited?: boolean;
  onToggle?: (favorited: boolean) => void;
  disabled?: boolean;
 
}

const LikeBtn = ({ initialFavorited = false, onToggle, disabled = false, }: LikeBtnProps) => {
  const [isLiked, setIsLiked] = useState(initialFavorited);
  const [isLoading, setIsLoading] = useState(false);

  const handleToggleFavorite = () => {
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
    <LikeBtnStyle
      isFavorited={isLiked}
      disabled={disabled}
      isLoading={isLoading}

    >
      <button
        type="button"
        onClick={handleToggleFavorite}
        disabled={disabled || isLoading}
        aria-label={isLiked ? "Remove from favorites" : "Add to favorites"}
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
}

const LikeBtnStyle = styled.div<StyledProps>`
  button {
    height: 32px;
    width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    border: 1px solid;
    border-color: ${({ isFavorited }) => (isFavorited ? '#ef4444' : '#d1d5db')};
    background-color: ${({ isFavorited }) => (isFavorited ? '#fee2e2' : '#ffffff')};
    cursor: ${({ disabled, isLoading }) => (disabled || isLoading ? 'not-allowed' : 'pointer')};
    transition: all 0.3s ease;

    svg {
      height: 24px;
      width: 24px;
      color: ${({ isFavorited }) => (isFavorited ? '#ef4444' : '#9ca3af')};
      transition: color 0.3s ease;
    }
  }
`;

export default LikeBtn;
