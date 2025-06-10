import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import type { Bid } from '@/types/product';
import BeforeBox from './bidBox/BeforeBox';
import AuctionBox from './bidBox/AuctionBox';
import { bidAuction, startAuction, type TimeParts } from '@/apis/auction';
import { getRemainingTime } from '@/utils/timeUtils';
import toast from 'react-hot-toast';

const BidBoxStyle = styled.div`
  background-color: white;
  width: 50%;
  border-radius: 8px;
  border: 0.8px solid rgb(2, 8, 23);
  border-color: rgb(226, 232, 240);
  padding-right: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 24px;
  .title {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 24px;
  }
`;

interface BidHistoryProps {
  status: string;
  fetchItem: () => void;
  itemId: number;
  bidList: Bid[];
  setBidList: React.Dispatch<React.SetStateAction<Bid[]>>;
  startPrice: number;
  endPrice: number;
  priceUnit: number;
  token: string;
  buyerId: number;
  startTime: string;
}

const BidBox: React.FC<BidHistoryProps> = ({
  status,
  fetchItem,
  startTime,
  endPrice,
  priceUnit,
  buyerId,
  token,
  itemId,
}) => {
  const [timeParts, setTimeParts] = useState<TimeParts>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [nowBidMoney, setNowBidMoney] = useState<number>(endPrice);
  const [bidNum, setBidNum] = useState(0);

  const handleBid = (r: number) => {
    setBidNum(r * priceUnit + nowBidMoney);
  };

  const handleBidMoney = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBidNum(Number(e.target.value));
  };

  const handleBidCheck = async () => {
    if (!token) {
      alert('로그인 정보가 없습니다. 다시 로그인해주세요.');
      return;
    }
    try {
      if (status === 'before') {
        const result = await startAuction({
          itemId: itemId,
          token: token,
        });

        toast.success('첫 입찰 성공');
        fetchItem();
      } else {
        // 실제 입찰 요청 주석 해제 필요
        // const result = await bidAuction({
        //   itemId: itemId,
        //   buyerId: buyerId,
        //   price: bidNum,
        //   token: token,
        // });
        console.log('입찰 성공:', itemId, buyerId, bidNum, token);
        setBidNum(0);
      }
    } catch (err) {
      console.error('에러 발생:', err);
      alert('요청 처리 중 문제가 발생했습니다. 다시 시도해주세요.');
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeParts(getRemainingTime(startTime));
    }, 1000);
    return () => clearInterval(timer);
  }, [startTime]);

  const { days, hours, minutes, seconds } = timeParts;

  return (
    <BidBoxStyle>
      <div className="title">
        {status === 'before'
          ? 'Auction Starts In'
          : status === 'auction'
            ? 'Place Your Bid'
            : 'Auction Completed'}
      </div>

      {status === 'before' ? (
        <BeforeBox
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          handleAuction={handleBidCheck}
        />
      ) : status === 'auction' ? (
        <AuctionBox
          nowBidMoney={nowBidMoney}
          priceUnit={priceUnit}
          bidNum={bidNum}
          handleBid={handleBid}
          handleBidCheck={handleBidCheck}
          handleBidMoney={handleBidMoney}
        />
      ) : (
        'Auction Completed'
      )}
    </BidBoxStyle>
  );
};

export default BidBox;
