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
  ({ img, itemName, endTime, startPrice, userName }: AuctionItemType, ref: Ref<HTMLDivElement>) => {
    return (
      <StyledActionItem ref={ref}>
        <StyledThumbnailWrapper>
          <img src={img[0]} alt="item-image" />
        </StyledThumbnailWrapper>
        <Flex direction="column" gap="3px" style={{ width: '100%' }}>
          <Text font="subTitle1" css={ellipsis}>
            {itemName}
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
          <Flex gap="5px" align="flex-start" style={{ marginTop: '5px', marginBottom: '3px' }}>
            <AiOutlineClockCircle style={{ fill: colors.gray250 }} />
            <Text font="body2" color="gray250">
              {getRemainingTime(endTime)} {/** 이 부분 모든 API가 연결된 이후 추가 수정이 필요해보임 */}
            </Text>
          </Flex>
          <Text font="body2" color="gray250">
            판매자: {userName}
          </Text>
        </Flex>
      </StyledActionItem>
    );
  },
);

export default AuctionItem;

const StyledActionItem = styled.div`
  width: 100%;
  height: 365px;
  padding: 12px;
  border: 1px solid ${colors.gray150};
  border-radius: 8px;
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
`;

const StyledThumbnailWrapper = styled.div`
  width: 100%;
  height: 230px;
  border-radius: 8px;
  margin-bottom: 8px;
  overflow: hidden;

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
