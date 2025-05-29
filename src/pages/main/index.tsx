import { AnimatePresence } from 'framer-motion';
import { MdOutlineSearch } from 'react-icons/md';

import { Flex, Input, Motion, SelectBox, Text } from '@/components/common';
import PageWrapper from '@/components/layout/PageWrapper';
import { AUCTION_SORTED_LIST } from '@/constants/auction';

import useMain from './hooks/useMain';

const MainPage = () => {
  const { isAuctionInProgress, onCheckedSelectValue } = useMain();

  return (
    <PageWrapper>
      <Flex justify="space-between">
        <Flex direction="column" gap="10px">
          <Motion key={isAuctionInProgress}>
            <Text font="h2">
              {isAuctionInProgress === 'AUCTION_INPROGRESS' ? '경매 진행중인 물품' : '경매 완료된 물품'}
            </Text>
          </Motion>
          <AnimatePresence mode="wait">
            <Motion key={isAuctionInProgress}>
              <Text font="subTitle2" color="gray300">
                {isAuctionInProgress === 'AUCTION_INPROGRESS'
                  ? '경매 진행중인 상품들을 구경해보세요.'
                  : '경매 완료된 상품들을 확인해보세요.'}
              </Text>
            </Motion>
          </AnimatePresence>
        </Flex>
        <Flex gap="15px">
          <Flex style={{ width: '300px' }}>
            <Input inputIcon={<MdOutlineSearch />} />
          </Flex>
          <Flex style={{ width: '200px' }}>
            <SelectBox
              options={AUCTION_SORTED_LIST}
              onCheckedValue={(selectedValue) => onCheckedSelectValue(selectedValue)}
              defaultValue="AUCTION_INPROGRESS"
            />
          </Flex>
        </Flex>
      </Flex>
    </PageWrapper>
  );
};

export default MainPage;
