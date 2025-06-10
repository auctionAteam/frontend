import styled from '@emotion/styled';
import Flex from '@/components/common/Flex';
import Text from '@/components/common/Text';
import { colors, fonts } from '@/styles';
import type { AuctionItemType } from '@/types/auction';

interface Props {
  item: AuctionItemType;
  priceLabel?: string;
  priceValue?: number;
  extraField?: React.ReactNode;
}

const AuctionItemCard = ({ item, priceLabel = '입찰가', priceValue, extraField }: Props) => {
  return (
    <CardWrapper>
      <ImageSection>
        <Image src={item.thumbnail} alt={item.name} />
      </ImageSection>
      <Content>
        <IdValue>{item.id}</IdValue>
        <NameValue>{item.name}</NameValue>
        <DescValue>{item.description}</DescValue>
        {extraField}
        <PriceRow>
          <Text font="subTitle2">{priceLabel}: </Text>
          <PriceValue>{(priceValue ?? item.startPrice).toLocaleString()}원</PriceValue>
        </PriceRow>
      </Content>
    </CardWrapper>
  );
};

export default AuctionItemCard;

const CardWrapper = styled(Flex)`
  flex-direction: column;
  padding: 12px 0;
`;

const ImageSection = styled(Flex)`
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

const Content = styled(Flex)`
  flex-direction: column;
  gap: 16px;
`;

const PriceRow = styled(Flex)`
  gap: 8px;
  align-items: center;
`;

const IdValue = styled.span`
  font-size: 10px;
  background-color: ${colors.gray200};
  border-radius: 8px;
  padding: 2px 6px;
  align-self: flex-start;
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

const PriceValue = styled.span`
  ${fonts.subTitle2};
  color: #449c4a;
  font-weight: bold;
  margin-bottom: 0;
  line-height: normal;
  display: inline-block;
`;
