import styled from '@emotion/styled';

import AuctionItem from '@/components/common/AuctionItem';
import { AUCTION_LIST } from '@/fixtures/auctionList.dummy';
import useDeviceSize from '@/hooks/useDeviceSize';

const AuctionList = () => {
  const { isMobile, isItemListTablet, isItemListDesktop } = useDeviceSize();

  return (
    <StyledAuctionList
      isMobile={isMobile}
      isItemListTablet={isItemListTablet}
      isItemListDesktop={isItemListDesktop}
    >
      {AUCTION_LIST.map((auctionItem) => (
        <AuctionItem key={auctionItem.id} {...auctionItem} />
      ))}
    </StyledAuctionList>
  );
};

export default AuctionList;

const StyledAuctionList = styled.div<{
  isMobile?: boolean;
  isItemListTablet?: boolean;
  isItemListDesktop?: boolean;
}>`
  padding-top: 50px;
  padding-bottom: 90px;
  display: grid;
  gap: 15px;
  grid-template-columns: ${({ isMobile, isItemListTablet, isItemListDesktop }) => {
    if (isItemListDesktop) return 'repeat(4, 1fr)';
    if (isItemListTablet) return 'repeat(3, 1fr)';
    if (isMobile) return 'repeat(2, 1fr)';

    return 'repeat(5, 1fr)';
  }};
`;
