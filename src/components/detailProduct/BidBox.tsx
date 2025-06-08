import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import type { Bid } from '@/types/product';
import WaitBox from './bidBox/WaitBox';
import ActiveBox from './bidBox/activeBox';

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
  bidList: Bid[];
  setBidList: React.Dispatch<React.SetStateAction<Bid[]>>;
}
const BidBox: React.FC<BidHistoryProps> = ({ status, setBidList, bidList }) => {
  const initialSeconds = 1 * 24 * 60 * 60 + 23 * 60 * 60 + 24 * 60 + 39;
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
  const [nowBidMoney, setNowBidMoeny] = useState(20000);
  const [bidNum, setBidNum] = useState(0);

  const days = Math.floor(secondsLeft / (24 * 60 * 60));
  const hours = Math.floor((secondsLeft % (24 * 60 * 60)) / 3600);
  const minutes = Math.floor((secondsLeft % 3600) / 60);
  const seconds = secondsLeft % 60;

  const handleBid = (r: number) => {
    setBidNum(r * nowBidMoney);
  };
  const handleBidMoney = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBidNum(Number(e.target.value));
  };

  const handleBidCheck = () => {
    setBidList([
      {
        id: 11,
        name: 'dd',
        time: '00',
        money: bidNum,
      },
      ...bidList,
    ]);
    setBidNum(0);
  };

  useEffect(() => {
    if (secondsLeft <= 0) return;

    const timer = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [secondsLeft]);
  return (
    <BidBoxStyle>
      <div className="title">
        {status === 'wait'
          ? 'Auction Starts In'
          : status === 'active'
            ? 'Place Your Bid'
            : 'Auction Completed'}
      </div>
      {status === 'wait' ? (
        <WaitBox days={days} hours={hours} minutes={minutes} seconds={seconds} />
      ) : status === 'active' ? (
        <ActiveBox
          nowBidMoney={nowBidMoney}
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
