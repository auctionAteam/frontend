import styled from '@emotion/styled';
import React from 'react';

interface ProductImageProps {
  imageUrl?: string;
  title?: string;
}

const ProductImageStyle = styled.div`
  aspect-ratio: 1/1;
  background-color: white;
  width: 50%;
  border-radius: 8px;
  padding-right: 16px;
  box-sizing: border-box;
  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    /* object-fit: cover; */
  }
`;

const ProductImage: React.FC<ProductImageProps> = ({ imageUrl, title }) => {
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = '/images/basic_image.jpg';
  };
  return (
    <ProductImageStyle>
      <img src={imageUrl} alt={title} className="imgArea" onError={handleError} />
    </ProductImageStyle>
  );
};
export default ProductImage;
