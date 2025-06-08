import React from 'react';
import styled from '@emotion/styled';

type TimeParts = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const WaitBoxStyle = styled.div`
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

const WaitBox: React.FC<TimeParts> = ({ days, hours, minutes, seconds }) => {
  return (
    <WaitBoxStyle>
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
    </WaitBoxStyle>
  );
};

export default WaitBox;
