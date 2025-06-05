import BidBox from '@/components/detailProduct/BidBox';
import BidHistory from '@/components/detailProduct/BidHistory';
import ProductCard from '@/components/detailProduct/ProductCard';
import ProductImage from '@/components/detailProduct/ProductImage';
import type { Bid } from '@/types/product';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

const ProductDetailPageStyle = styled.div`
  padding: 16px 32px;
  width: 100%;
  height: 100%;

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
    padding-top: 88px;
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
  .testBtn {
    position: absolute;
    top: 88px;
    right: 24px;
  }
`;

const bidList = [
  {
    id: 0,
    name: 'kim',
    time: '4 hours ago',
    money: 20000,
  },
  {
    id: 1,
    name: 'seok',
    time: '5 hours ago',
    money: 18000,
  },
  {
    id: 2,
    name: 'woo',
    time: '6 hours ago',
    money: 16000,
  },
  {
    id: 3,
    name: 'check',
    time: '12 hours ago',
    money: 14000,
  },
];

const ProductDetailPage = () => {
  const [status, setStatus] = useState('wait');
  const [newBidList, setNewBidList] = useState<Bid[]>(bidList);
  const handleTest = () => {
    if (status === 'wait') {
      setStatus('active');
    } else if (status === 'active') {
      setStatus('end');
    } else setStatus('wait');
  };
  useEffect(() => {
    console.log(newBidList);
  }, [newBidList]);
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
          <BidHistory status={status} bidList={newBidList} />
          <BidBox status={status} setBidList={setNewBidList} bidList={newBidList} />
        </div>
      </div>
      <button className="testBtn" onClick={handleTest}>
        test용
      </button>
    </ProductDetailPageStyle>
  );
};

export default ProductDetailPage;
