import type { Bid } from '@/types/product';
import styled from '@emotion/styled';
import React, { useState } from 'react';

const BidHistoryStyle = styled.div`
  width: 50%;
  display: flex;
  background-color: white;
  flex: 1;
  border-radius: 8px;
  min-height: 280px; 
  border: 0.8px solid rgb(2, 8, 23);
  border-color: rgb(226, 232, 240);
  padding: 24px;
  box-sizing: border-box;
  box-shadow:
    rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  font-weight: 400;
  height: 100%;
  pointer-events: auto;
  flex-direction: column;
  margin-right: 16px;
  h3 {
    padding: 12px 0;
  }

  .bitHistoryBox {
    padding: 24px 0 48px 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: rgb(100, 116, 139);
    div:last-child {
      border-bottom: none;
    }
  }
  .bidBox {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgb(2, 8, 23);
    border-color: rgb(226, 232, 240);
    padding: 12px 0;
  }

  .historyText{
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 48px;
    
  }

  .historyLeftBox {
    display: flex;
    height: 32px;
  }

  .avatar {
    width: 32px;
    height: 32px;
    border-radius: 16px;
    margin-right: 16px;
    background-color: rgb(2, 8, 23);
  }
  .userInfoBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .userName {
    font-size: 14px;
    font-weight: 500;
    line-height: 14px;
    color: rgb(2, 8, 23);
  }
  .bidTime {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    color: rgb(100, 116, 139);
  }
  .historyRightBox {
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    color: rgb(2, 8, 23);
  }
`;

type BidHistoryProps = {
  status: string;
  bidList: Bid[]; // 여러 개 받을 수 있게
};

const BidHistory: React.FC<BidHistoryProps> = ({ status, bidList }) => {
  return (
    <BidHistoryStyle>
      <h3 className="title">Bid History</h3>
      {status === 'before' && (
        <>
          <div className="bitHistoryBox" style={{ paddingLeft: '24px', paddingRight: '24px' }}>
            경매가 아직 시작되지 않았습니다. 시작되면 다시 확인해 주세요.
          </div>
        </>
      )}
      {status === 'auction' && (
        <div className="bitHistoryBox">
          {
            bidList.length === 0 ?   <div className="historyText" style={{ paddingLeft: '24px', paddingRight: '24px' }}>
            첫 입찰의 주인공이 되어보세요.
          </div> : 
          <>
          {bidList.map((b,i ) => {
            return (
              <div className="bidBox" key={i}>
                <div className="historyLeftBox">
                  <div className="avatar"></div>
                  <div className="userInfoBox">
                    <div className="userName">{b.buyerName}</div>
                    <div className="bidTime">{b.bidTime}</div>
                  </div>
                </div>
                <div className="historyRightBox">{b.price} 원</div>
              </div>
            );
          })}
          </>
        }
        </div>
      )}
      {/* {status === 'end' && (
        <>
          <div className="bitHistoryBox">경매가 아직 시작되지 않았습니다. 시작되면 다시 확인해 주세요.</div>
        </>
      )} */}
    </BidHistoryStyle>
  );
};

export default BidHistory;
