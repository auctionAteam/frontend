import styled from '@emotion/styled';

import AuctionItemCard from '@/components/mypage/AuctionItemCard';
import { AUCTION_LIST } from '@/fixtures/auctionList.dummy';
import { colors } from '@/styles';

const AUCTION_BIDDING_ITEMS = AUCTION_LIST.slice(0, 2);

const BiddingItem = () => {
  return (
    <Section>
      <Title>입찰 중인 상품</Title>
      <ItemList>
        {AUCTION_BIDDING_ITEMS.map((item) => (
          <AuctionItemCard key={item.id} item={item} priceLabel="내 입찰가" />
        ))}
      </ItemList>
    </Section>
  );
};

export default BiddingItem;

const Section = styled.section`
  border: #fff;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 24px;
  margin-bottom: 40px;
  transition: all 0.1s ease;
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-top: 24px;
  margin-bottom: 20px;
  border-bottom: thin solid ${colors.gray200};
  padding-bottom: 12px;
`;

const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
