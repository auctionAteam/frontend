import styled from '@emotion/styled';
import { MdOutlineSearch } from 'react-icons/md';

import AuctionList from '@/components/auction/auctionList';
import { Flex, Input, Motion, SelectBox, Text } from '@/components/common';
import SkeletonAuctionItem from '@/components/common/Skeleton/SkeletonAuctionItem';
import PageWrapper from '@/components/layout/PageWrapper';
import { AUCTION_SORTED_LIST } from '@/constants/auction';
import useMediaQuery from '@/hooks/useMediaQuery';

import useMain from './hooks/useMain';

const MainPage = () => {
  const isNotMobile = useMediaQuery('(min-width: 1020px)');
  const {
    ObserverRef,
    data,
    searchKeyword,
    auctionInProgressState,
    isLoading,
    onCheckedSelectValue,
    handleChangeSearchInput,
    handleEnterKeyword,
  } = useMain();

  return (
    <PageWrapper>
      <StyledMainPage isNotMobile={isNotMobile}>
        <Motion key={auctionInProgressState}>
          <Flex direction="column" gap="10px">
            <Text font="h2">
              {auctionInProgressState === 'before'
                ? '경매 시작전인 물품'
                : auctionInProgressState === 'auction'
                  ? '경매 진행중인 물품'
                  : '경매 완료된 물품'}
            </Text>
            <Text font="subTitle2" color="gray300">
              {auctionInProgressState === 'before'
                ? '경매 시작전인 상품들을 구경해보세요.'
                : auctionInProgressState === 'auction'
                  ? '경매 진행중인 상품들을 확인해보세요.'
                  : '경매 완료된 상품들을 확인해보세요.'}
            </Text>
          </Flex>
        </Motion>
        <Flex gap="15px">
          <Flex style={{ width: '300px' }}>
            <Input
              placeholder="검색어를 입력해주세요."
              value={searchKeyword}
              onChange={handleChangeSearchInput}
              onKeyDown={handleEnterKeyword}
              inputIcon={<MdOutlineSearch />}
            />
          </Flex>
          <Flex style={{ width: '200px' }}>
            <SelectBox
              options={AUCTION_SORTED_LIST}
              onCheckedValue={onCheckedSelectValue}
              defaultValue="before"
            />
          </Flex>
        </Flex>
      </StyledMainPage>
      {isLoading ? (
        <SkeletonAuctionItem />
      ) : (
        <Motion key={auctionInProgressState}>
          <AuctionList auctionItems={data?.pages?.flatMap((page) => page.items) ?? []} />
        </Motion>
      )}
      <StyledObserverBottom ref={ObserverRef} />
    </PageWrapper>
  );
};

export default MainPage;

const StyledMainPage = styled.div<{ isNotMobile: boolean }>`
  display: flex;
  justify-content: space-between;
  flex-direction: ${({ isNotMobile }) => (isNotMobile ? 'row' : 'column')};
  gap: 20px;
  padding-bottom: 50px;
`;

const StyledObserverBottom = styled.div`
  width: 100%;
  height: 30px;
  margin-top: 30px;
  margin-bottom: 80px;
  touch-action: none;
`;
