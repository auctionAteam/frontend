import styled from '@emotion/styled';

import AuctionItemCard from '@/components/mypage/AuctionItemCard';
import { AUCTION_LIST } from '@/fixtures/auctionList.dummy';
import { colors } from '@/styles';

const AUCTION_FAVORITE_ITEMS = AUCTION_LIST.slice(4, 6);

const FavoriteItem = () => {
  return (
    <Section>
      <Title>관심 등록한 상품</Title>
      <ItemList>
        {AUCTION_FAVORITE_ITEMS.map((item) => (
          <AuctionItemCard
            key={item.id}
            item={item}
            priceLabel="현재 입찰가"
            extraField={
              <Field>
                <Label>판매자:</Label>
                <SellerValue>{item.sellerName}</SellerValue>
              </Field>
            }
          />
        ))}
      </ItemList>
    </Section>
  );
};

export default FavoriteItem;

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

const Field = styled.div`
  display: flex;
  gap: 8px;
`;

const Label = styled.span`
  font-weight: 600;
`;

const SellerValue = styled.span`
  color: ${colors.gray300};
  font-weight: bold;
  margin-bottom: 6px;
`;
