import styled from '@emotion/styled';

import { colors } from '@/styles';

const RegisterItem = () => {
  const mockItems = [
    // mock데이터로 임시 표시
    {
      id: 'B-01',
      name: '전통 도자기',
      description: '조선시대 백자',
      bidprice: 1500000,
      imageUrls: ['/images/mypageImage/Porcelain.jpeg'],
    },
    {
      id: 'B-02',
      name: '명품 가방',
      description: '샤넬 클래식 백, 정품 인증서 포함',
      bidprice: 2800000,
      imageUrls: ['/images/mypageImage/ChanelBag.jpeg'],
    },
  ];

  return (
    <Section>
      <Title>경매에 등록한 상품</Title>
      <ItemList>
        {mockItems.map((item) => (
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
                <Label>현재 입찰가:</Label>
                <CurrValue>{item.bidprice.toLocaleString()}원</CurrValue>
              </Field>
            </ItemInfo>
          </ItemCard>
        ))}
      </ItemList>
    </Section>
  );
};

export default RegisterItem;

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
  border: 1px solid ${colors.gray100}c;
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

const CurrValue = styled.span`
  color: #449c4a;
  font-weight: bold;
  margin-bottom: 24px;
`;
