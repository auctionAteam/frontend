import styled from '@emotion/styled';

import { AuctionItem } from '@/components/common';
import useDeviceSize from '@/hooks/useDeviceSize';
import type { AuctionItemType } from '@/types/auction';

type AuctionListProps = {
  auctionItems: AuctionItemType[];
};

const AuctionList = ({ auctionItems }: AuctionListProps) => {
  const { isMobile, isItemListTablet, isItemListDesktop } = useDeviceSize();

  return (
    <>
      <StyledAuctionList
        isMobile={isMobile}
        isItemListTablet={isItemListTablet}
        isItemListDesktop={isItemListDesktop}
      >
        {auctionItems.map((auctionItem, idx) => (
          <AuctionItem key={idx} {...auctionItem} />
        ))}
      </StyledAuctionList>
    </>
  );
};

export default AuctionList;

const StyledAuctionList = styled.div<{
  isMobile?: boolean;
  isItemListTablet?: boolean;
  isItemListDesktop?: boolean;
}>`
  display: grid;
  gap: 15px;
  grid-template-columns: ${({ isMobile, isItemListTablet, isItemListDesktop }) => {
    if (isItemListDesktop) return 'repeat(4, 1fr)';
    if (isItemListTablet) return 'repeat(3, 1fr)';
    if (isMobile) return 'repeat(2, 1fr)';

    return 'repeat(5, 1fr)';
  }};
`;
