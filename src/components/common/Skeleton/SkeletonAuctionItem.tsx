import styled from '@emotion/styled';

import useDeviceSize from '@/hooks/useDeviceSize';
import { colors } from '@/styles';

const SkeletonAuctionItem = () => {
  const { isMobile, isItemListTablet, isItemListDesktop } = useDeviceSize();

  return (
    <StyledSkeletonAuctionItemWrapper
      isMobile={isMobile}
      isItemListTablet={isItemListTablet}
      isItemListDesktop={isItemListDesktop}
    >
      {Array.from({ length: 10 }).map((_, idx) => (
        <StyledSkeletonAuctionItem key={idx} />
      ))}
    </StyledSkeletonAuctionItemWrapper>
  );
};

export default SkeletonAuctionItem;

const StyledSkeletonAuctionItemWrapper = styled.div<{
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

const StyledSkeletonAuctionItem = styled.div`
  width: 100%;
  height: 365px;
  border-radius: 8px;
  background-color: ${colors.white};
`;
