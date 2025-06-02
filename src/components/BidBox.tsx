import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

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
`;
const BidBox = () => {
  const initialSeconds = 1 * 24 * 60 * 60 + 23 * 60 * 60 + 24 * 60 + 39;
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);

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

  return (
    <BidBoxStyle>
      <div className="title">Auction Starts In</div>
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
        경매가 시작되면 입찰할 수 있습니다. 이 경매가 시작될 때 알림을 받도록 미리 알림을 설정할 수 있습니다.
      </p>
    </BidBoxStyle>
  );
};

export default BidBox;
