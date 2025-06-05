import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import type { Bid } from '@/types/product';

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
  .timeBox {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .time {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 16px;
  }
  .timeNum {
    font-size: 30px;
    font-weight: 700;
    line-height: 36px;
  }
  .timeTitle {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
  }
  p {
    color: rgb(100, 116, 139);
    font-size: 14px;
    line-height: 20px;
  }
  .bitTextBox {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
  }
  .bidText {
    color: rgb(100, 116, 139);
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }
  .bidMoney {
    color: rgb(100, 116, 139);
    font-weight: 700;
    line-height: 20px;
    margin-left: 4px;
    font-size: 14px;
  }
  .buttonBox {
    display: flex;
    align-items: center;
    margin-top: 16px;
  }
  .moneyBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    border: 0.8px solid black;
    border-color: rgb(226, 232, 240);
    color: black;
    padding: 8px 16px;
    font-weight: 500;
    color: rgb(2, 8, 23);
    white-space: nowrap;
    cursor: pointer;
    margin-right: 8px;
  }
  .bidInputBox {
    display: flex;
    align-items: center;
    margin-top: 16px;
  }
  .moneySpan {
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(100, 116, 139);
    border-radius: 6px 0 0 6px;
    padding: 4px 12px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    background-color: rgb(241, 245, 249);
  }
  .bidInput {
    width: 100%;
    border-radius: 6px;
    border: 0.8px solid black;
    border-color: rgb(226, 232, 240);
    padding: 8px 12px;
  }
  .bidBtnBox {
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }
  .bidBtn {
    border-radius: 6px;
    gap: 8px;
    font-weight: 500;
    background-color: black;
    padding: 8px 16px;
    font-size: 14;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 12px;
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
  const rates = [1.2, 1.4, 1.6];
  useEffect(() => {
    if (secondsLeft <= 0) return;

    const timer = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [secondsLeft]);

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
        <>
          <div className="timeBox">
            <div className="time">
              <div className="timeNum">{days}</div>
              <div className="timeTitle">Days</div>
            </div>
            <div className="time">
              <div className="timeNum">{hours}</div>
              <div className="timeTitle">Hours</div>
            </div>
            <div className="time">
              <div className="timeNum">{minutes}</div>
              <div className="timeTitle">Minutes</div>
            </div>
            <div className="time">
              <div className="timeNum">{seconds}</div>
              <div className="timeTitle">Seconds</div>
            </div>
          </div>
          <p>
            경매가 시작되면 입찰할 수 있습니다. 이 경매가 시작될 때 알림을 받도록 미리 알림을 설정할 수
            있습니다.
          </p>
        </>
      ) : status === 'active' ? (
        <div>
          <div className="bitTextBox">
            <div className="bidText">현재 입찰 금액:</div>
            <div className="bidMoney">{nowBidMoney}원</div>
          </div>
          <div className="bitTextBox">
            <div className="bidText">최소 입찰 금액:</div>
            <div className="bidMoney">{nowBidMoney * 1.2}원</div>
          </div>
          <div className="buttonBox">
            {rates.map((rate) => (
              <button className="moneyBtn" key={rate} onClick={() => handleBid(rate)}>
                {Math.round(nowBidMoney * rate)}원
              </button>
            ))}
          </div>
          <div className="bidInputBox">
            <span className="moneySpan">원</span>
            <input type="number" className="bidInput" value={bidNum} onChange={handleBidMoney} />
          </div>
          <div className="bidBtnBox">
            <button className="bidBtn" onClick={handleBidCheck}>
              입찰하기
            </button>
          </div>
        </div>
      ) : (
        'Auction Completed'
      )}
    </BidBoxStyle>
  );
};

export default BidBox;
