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
  return (
    <ProductImageStyle>
      <img src={imageUrl} alt={title} className="imgArea" />
    </ProductImageStyle>
  );
};
export default ProductImage;
