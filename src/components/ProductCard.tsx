import styled from '@emotion/styled';

interface BidHistoryProps {
  status: string;
}
const ProductCard: React.FC<BidHistoryProps> = ({ status }) => {
  return (
    <ProductCardStyle status={status}>
      <div className="productInfo">
        <h3>Apple iPod 1세대 (2001 오리지널)</h3>
      </div>
      <div className="description">
        <h3>Description</h3>
        <p>
          디지털 음악 혁신의 시작, 최초의 iPod. 박스 포함, 작동 가능 상태로 보존된 매우 희귀한 컬렉터스
          아이템.
        </p>
      </div>
      <div className="productInfoSecond">
        <div className="price">
          <h3>Starting Price</h3>
          <p>2000원</p>
        </div>
        <div className="bidState">
          <h3>Current Bid</h3>
          {status === 'wait' ? <p>No bids yet</p> : status === 'active' ? <p>4000원</p> : <p>9000원</p>}
        </div>
        <div className="startInBox">
          <h3>Time Left</h3>
          <p>2d 23h left</p>
        </div>
      </div>
      <div className="auctionStatus">
        <div className="statusTitle">Auction Status</div>
        <div className="status">
          {status === 'wait' ? (
            'Coming Soon'
          ) : status === 'active' ? (
            'Bidding Open'
          ) : (
            'Auction Ended'
          )}
        </div>

        <div className="statusTime">
        Auction starts on Jun 1, 2025, 3:21 AM...
        </div>
      </div>
      <div className="sellerIfno">
        <div className="sellerTitle">
        Seller Information
        </div>
        <div className="sellerInfoBox">

        <div className="avatar"></div>
        <div className="userInfoBox">
          <div className="userName">Seok Woo Kim</div>
          <div className="sellerRating">Rating: 4/5</div>
        </div>
        </div>
      </div>
    </ProductCardStyle>
  );
};

const ProductCardStyle = styled.div<BidHistoryProps>`
  background-color: white;
  /* border-color: rgb(226, 232, 240); */
  width: 50%;
  border-radius: 8px;
  border: 0.8px solid rgb(2, 8, 23);
  border-color: rgb(226, 232, 240);

  box-shadow:
    rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  font-weight: 400;
  height: 100%;
  pointer-events: auto;
  min-height: 360px;
  padding-left: 16px;
  box-sizing: border-box;
  aspect-ratio: 1/1;
  padding: 24px;
  .productInfo {
    font-weight: 400;
  }
  .description {
    margin-top: 16px;
    h3 {
      font-size: 14px;
      line-height: 20px;
      color: rgb(100, 116, 139);
    }
    p {
      font-weight: 400;
      margin-top: 4px;
    }
    border-bottom: 1px solid rgb(226, 232, 240);
    padding-bottom: 16px;
  }

  .productInfoSecond {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    margin-top: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid rgb(226, 232, 240);
  }
  .price {
    h3 {
      font-size: 14px;
      line-height: 20px;
      color: rgb(100, 116, 139);
    }
    p {
      font-weight: 500;
      margin-top: 4px;
      color: rgb(2, 8, 23);
    }
  }
  .bidState {
    h3 {
      font-size: 14px;
      line-height: 20px;
      color: rgb(100, 116, 139);
    }
    p {
      font-weight: 700;
      margin-top: 4px;
      font-size: 18px;
      color: rgb(2, 8, 23);
    }
  }
  .startInBox {
    h3 {
      font-size: 14px;
      line-height: 20px;
      color: rgb(100, 116, 139);
    }
    p {
      font-weight: 500;
      margin-top: 4px;
      color: rgb(2, 8, 23);
    }
  }
  .auctionStatus{
    margin-top: 16px;
    border-bottom: 1px solid rgb(226, 232, 240);
    padding-bottom: 12px;
    margin-bottom: 16px;
  }
  .status{
    height: 24px;
    align-items: center;
    display: inline-flex;
    font-size: 12px;
    font-weight: 600;
    padding: 4px 12px;
    border-radius: 12px;
    margin-top: 8px;
    box-sizing: border-box;
    background-color: ${({ status }) =>
      status === 'wait' ? 'rgb(241,245,249)' :
      status === 'active' ? 'rgb(15,23,42)' :
      'rgb(226,232,240)'};
    color: ${({ status }) =>
      status === 'wait' ? 'rgb(15,23,42)' :
      status === 'active' ?'rgb(248,250,252)' :
      'rgb(2,8,23)'};


  }
  .statusTime{
    color: rgb(100, 116, 139);
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    margin-top: 8px;
  }

  .sellerTitle {
    color: rgb(100, 116, 139);
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    margin-bottom: 8px;

}
  .sellerInfoBox {
    display: flex;
    height: 32px;
    align-items: center;
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
  .sellerRating {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    color: rgb(100, 116, 139);
  }
`;

export default ProductCard;
