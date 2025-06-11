import { fetchBidHistory, getItem, getItemStatusOnly, getUserInformation, type UserInfomation } from '@/apis/auction';
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


    align-items: stretch; 
    box-sizing: border-box;
    div {
      height: 100%;
    }
  }
  .testBtn {
    position: absolute;
    top: 88px;
    right: 24px;
  }
`;



const ProductDetailPage = () => {
  const location = useLocation();
  const token = localStorage.getItem(ACCESS_TOKEN);
  const email = localStorage.getItem('email');
  const buyerId = Number(localStorage.getItem('userId'));

  const { id } = location.state || {};

  const [status, setStatus] = useState<string>('before');
  const [newBidList, setNewBidList] = useState<Bid[]>([]);
  const [item, setItem] = useState<ActionItem>();
  const [images, setImages] = useState<string[]>([]);
  const [userInfo, setUserInfo] = useState<UserInfomation | null>(null);
  const [nowBidMoney, setNowBidMoney] = useState<number>(0);   
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

  const getBidHistory = async () => {
    const result = await fetchBidHistory(
      id
    )
    
    setNewBidList(result.info)
  }

  useEffect(() => {
    fetchItem();
    getBidHistory()
  }, [id]);
  
  useEffect(() => {
    setNowBidMoney(
      newBidList && newBidList.length > 0
        ? newBidList[0].price
        : item?.startPrice || 0
    );
  }, [newBidList, item]);

  const handleTest = () => {
    if (status === 'before') {
      setStatus('auction');
    } else if (status === 'auction') {
      setStatus('end');
    } else {
      setStatus('before');
    }
  };
  
  if (!id) return;
  return (
    <ProductDetailPageStyle>
      <div className="pageBox">
        <div className="pageTopBox">
          <ProductImage imageUrl={images[0]} />
          {!!item && <ProductCard status={status} item={item} />}
        </div>
        <div className="pageBottomBox">
          <BidHistory status={status} bidList={newBidList} />
          {item && !!item.startPrice && !!item.endPrice && !!item.PriceUnit && token && (
            <BidBox
              status={status}
              startTime={item.startTime}
              setBidList={setNewBidList}
              bidList={newBidList}
              fetchItem={fetchItemStatusOnly}
              startPrice={item.startPrice}
              buyerId={buyerId}
              token={token}
              itemId={id}
              endPrice={nowBidMoney}
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
