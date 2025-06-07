import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import type { OptionValueType } from '@/components/common/SelectBox';
import useGetAuctionItems from '@/hooks/apis/items/useGetAuctionItems';

const useMain = () => {
  const [isAuctionInProgress, setIsAuctionInProgress] = useState<OptionValueType>('AUCTION_INPROGRESS');
  const [searchKeyword, setSearchKeyword] = useState('');

  const { data, fetchNextPage, hasNextPage, isLoading } = useGetAuctionItems(isAuctionInProgress);

  const { ref: ObserverRef, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  const handleChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const onCheckedSelectValue = (selectedValue: OptionValueType) => {
    setIsAuctionInProgress(selectedValue);
  };

  const handleEnterKeyword = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();

      console.log(searchKeyword);
    }
  };

  return {
    ObserverRef,
    data,
    searchKeyword,
    isAuctionInProgress,
    isLoading,
    onCheckedSelectValue,
    handleChangeSearchInput,
    handleEnterKeyword,
  };
};

export default useMain;
