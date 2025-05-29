import styled from '@emotion/styled';
import { forwardRef, type Ref } from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';

import { colors } from '@/styles';
import { ellipsis } from '@/styles/ellipsis';
import type { AuctionItemType } from '@/types/auction';
import { getRemainingTime } from '@/utils/date';

import Flex from '../Flex';
import Text from '../Text';

const AuctionItem = forwardRef(
  (
    { thumbnail, name, startTime, endTime, startPrice, sellerName }: AuctionItemType,
    ref: Ref<HTMLDivElement>,
  ) => {
    return (
      <StyledActionItem ref={ref}>
        <StyledThumbnailWrapper>
          <img src={thumbnail} alt="item-image" />
        </StyledThumbnailWrapper>
        <Flex direction="column" gap="3px" style={{ width: '100%' }}>
          <Text font="subTitle1" css={ellipsis}>
            {name}
          </Text>
          <Flex gap="8px" align="center">
            <Text font="h3">
              {startPrice.toLocaleString()}
              <Text font="body1">원</Text>
            </Text>
            <Text font="body2" color="gray250">
              [시작 가격]
            </Text>
          </Flex>
          <Flex gap="5px" align="flex-start" style={{ marginTop: '8px', marginBottom: '3px' }}>
            <AiOutlineClockCircle style={{ fill: colors.gray250 }} />
            <Text font="body2" color="gray250">
              {getRemainingTime(startTime, endTime)}
            </Text>
          </Flex>
          <Text font="body2" color="gray250">
            판매자: {sellerName}
          </Text>
        </Flex>
      </StyledActionItem>
    );
  },
);

export default AuctionItem;

const StyledActionItem = styled.div`
  width: 230px;
  height: 365px;
  padding: 8px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  cursor: pointer;
`;

const StyledThumbnailWrapper = styled.div`
  width: 214px;
  height: 230px;
  border-radius: 8px;
  background-color: ${colors.white};
  overflow: hidden;
  margin-bottom: 5px;

  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    transition: 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
