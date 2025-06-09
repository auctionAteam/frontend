import React from 'react';
import styled from '@emotion/styled';

const ActiveBoxStyle = styled.div`
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

type ActiveBoxProps = {
  nowBidMoney: number;
  bidNum: number;
  handleBid: (rate: number) => void;
  handleBidCheck: () => void;
  handleBidMoney: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const ActiveBox: React.FC<ActiveBoxProps> = ({
  nowBidMoney,
  bidNum,
  handleBid,
  handleBidCheck,
  handleBidMoney,
}) => {
  const rates = [1.2, 1.4, 1.6];

  return (
    <ActiveBoxStyle>
      <div className="bitTextBox">
        <div className="bidText">현재 입찰 금액:</div>
        <div className="bidMoney">{nowBidMoney}원</div>
      </div>
      <div className="bitTextBox">
        <div className="bidText">최소 입찰 금액:</div>
        <div className="bidMoney">{Math.round(nowBidMoney * 1.2)}원</div>
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
    </ActiveBoxStyle>
  );
};

export default ActiveBox;
