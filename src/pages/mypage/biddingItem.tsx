import styled from '@emotion/styled';

import { biddingMockItem } from "@/constants/mockItem";
import { colors } from '@/styles';

const BiddingItem = () => {
  return (
    <Section>
      <Title>입찰 중인 상품</Title>
      <ItemList>
        {biddingMockItem.map((item) => (
          <ItemCard key={item.id}>
            <ImageList>
              {item.imageUrls.map((url, i) => (
                <Image key={i} src={url} alt={`${item.name}-${i}`} />
              ))}
            </ImageList>
            <ItemInfo>
              <Field>
                <IdValue>{item.id}</IdValue>
              </Field>
              <Field>
                <NameValue>{item.name}</NameValue>
              </Field>
              <Field>
                <DescValue>{item.description}</DescValue>
              </Field>
              <Field>
                <Label>내 입찰가:</Label>
                <BidValue>{item.bidprice.toLocaleString()}원</BidValue>
              </Field>
            </ItemInfo>
          </ItemCard>
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

const ItemCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 0;
`;

const ImageList = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 16px;
`;

const Image = styled.img`
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 6px;
  border: 1px solid ${colors.gray100};
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Field = styled.div`
  display: flex;
  gap: 8px;
`;

const Label = styled.span`
  font-weight: 600;
`;

const IdValue = styled.span`
  font-size: 10px;
  background-color: ${colors.gray200};
  border-radius: 8px;
  padding: 2px 6px;
`;

const NameValue = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const DescValue = styled.span`
  font-size: 12px;
  margin-bottom: 6px;
`;

const BidValue = styled.span`
  color: #449c4a;
  font-weight: bold;
  margin-bottom: 24px;
`;
