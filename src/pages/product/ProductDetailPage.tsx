import { getItem, getItemStatusOnly, type UserInfomation } from '@/apis/auction';
import BidBox from '@/components/detailProduct/BidBox';
import BidHistory from '@/components/detailProduct/BidHistory';
import ProductCard from '@/components/detailProduct/ProductCard';
import ProductImage from '@/components/detailProduct/ProductImage';

import type { ActionItem, Bid } from '@/types/product';
import styled from '@emotion/styled';

import { ACCESS_TOKEN } from '@/constants/token';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

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
    price: 20000,
  },
  {
    id: 1,
    name: 'seok',
    time: '5 hours ago',
    price: 18000,
  },
  {
    id: 2,
    name: 'woo',
    time: '6 hours ago',
    price: 16000,
  },
  {
    id: 3,
    name: 'check',
    time: '12 hours ago',
    price: 14000,
  },
];

const ProductDetailPage = () => {
  const location = useLocation();
  const token = localStorage.getItem(ACCESS_TOKEN);
  const userId = Number(localStorage.getItem('userId'));
  const { id } = location.state || {};

  const [status, setStatus] = useState<string>('before');
  const [newBidList, setNewBidList] = useState<Bid[]>(bidList);
  const [item, setItem] = useState<ActionItem>();
  const [images, setImages] = useState<string[]>([]);
  const [userInfo, setUserInfo] = useState<UserInfomation | null>(null);

  const fetchItem = () => {
    if (!id) return;
    getItem({
      id,
      setItem,
      setImages,
      setStatus,
    });
  };

  const fetchItemStatusOnly = () => {
    if (!id) return;
    getItemStatusOnly({
      id,
      setItem,
      setStatus,
    });
  };

  useEffect(() => {
    fetchItem();
  }, [id]);

  const handleTest = () => {
    if (status === 'before') {
      setStatus('auction');
    } else if (status === 'auction') {
      setStatus('end');
    } else {
      setStatus('before');
    }
  };

  if (!id || !token || !userId) return;
  return (
    <ProductDetailPageStyle>
      <div className="pageBox">
        <div className="pageTopBox">
          <ProductImage imageUrl={images[0]} />
          {!!item && <ProductCard status={status} item={item} />}
        </div>
        <div className="pageBottomBox">
          <BidHistory status={status} bidList={newBidList} />
          {item && !!item.startPrice && !!item.endPrice && !!item.PriceUnit && (
            <BidBox
              status={status}
              startTime={item.startTime}
              setBidList={setNewBidList}
              bidList={newBidList}
              fetchItem={fetchItemStatusOnly}
              startPrice={item.startPrice}
              buyerId={userId}
              token={token}
              itemId={id}
              endPrice={item.endPrice}
              priceUnit={item.PriceUnit}
            />
          )}
        </div>
      </div>
      <button className="testBtn" onClick={handleTest}>
        test용
      </button>
    </ProductDetailPageStyle>
  );
};

export default ProductDetailPage;
