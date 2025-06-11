import React from 'react';
import styled from '@emotion/styled';
import type { TimeParts } from '@/apis/auction';

interface BeforeBoxProps extends TimeParts {
  handleAuction: () => void;
}

const BeforeBox: React.FC<BeforeBoxProps> = ({ days, hours, minutes, seconds, handleAuction }) => {
  const isStarted = days === 0 && hours === 0 && minutes === 0 && seconds === 0;

  return (
    <BeforeBoxStyle>
      {!isStarted ? (
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

          <p>경매가 곧 시작됩니다. 잠시만 기다려주세요.</p>
        </>
      ) : (
        <div className="bidBtnBox">
          <button className="bidBtn" onClick={handleAuction}>
            경매 시작
          </button>
          <p>경매 가능 시간이 되었습니다. 경매를 시작하주세요.</p>
        </div>
      )}
    </BeforeBoxStyle>
  );
};

export default BeforeBox;

const BeforeBoxStyle = styled.div`
  .timeBox {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 16px;
  }
  .time {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    text-align: center;
  }
  .bidBtnBox {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    p {
      margin-top: 14px;
    }
  }
  .bidBtn {
    border-radius: 6px;
    gap: 8px;
    font-weight: 600;
    width: 160px;
    background-color: black;
    padding: 10px 24px;
    font-size: 16px;

    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 12px;
    cursor: pointer;
  }
`;
