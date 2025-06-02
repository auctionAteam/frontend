import BidBox from '@/components/BidBox';
import BidHistory from '@/components/BidHistory';
import ProductCard from '@/components/ProductCard';
import ProductImage from '@/components/ProductImage';
import styled from '@emotion/styled';
import { useState } from 'react';

const ProductDetailPageStyle = styled.div`
  padding: 16px 32px;
  width: 100%;
  height: 100%;
  margin-top: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  .pageBox {
    max-width: 1024px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;

    justify-content: center;
    align-items: center;
  }
  .pageTopBox {
    width: 100%;
    display: flex;
    padding-bottom: 32px;
    border-bottom: 1px solid rgb(226, 232, 240);
    box-sizing: border-box;
  }
  .pageBottomBox {
    width: 100%;
    display: flex;
    margin-top: 32px;
    min-height: 200px;

    box-sizing: border-box;
  }
  button {
    position: absolute;
    top: 24px;
    right: 24px;
  }
`;

const ProductDetailPage = () => {
  const [status, setStatus] = useState('wait');
  const handleTest = () => {
    if (status === 'wait') {
      setStatus('active');
    } else if (status === 'active') {
      setStatus('end');
    } else setStatus('wait');
  };

  return (
    <ProductDetailPageStyle>
      <div className="pageBox">
        <div className="pageTopBox">
          <ProductImage
            imageUrl="https://i.namu.wiki/i/GUS1kGPpvyruUnCfZY6dn7vtmgVdvsFZyB2JtdpLC7v0PBf7EKB0C_dPRenTQDkcEfUkDSvJZnLFYNpUSawcvg.webp"
            title="황혼 속의 정원"
          />
          <ProductCard status={status} />
        </div>
        <div className="pageBottomBox">
          <BidHistory status={status} />
          <BidBox />
        </div>
      </div>
      <button onClick={handleTest}>test용</button>
    </ProductDetailPageStyle>
  );
};

export default ProductDetailPage;
