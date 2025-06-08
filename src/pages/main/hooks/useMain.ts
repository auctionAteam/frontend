import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSearchParams } from 'react-router-dom';

import type { OptionValueType } from '@/components/common/SelectBox';
import useGetAuctionItems from '@/hooks/apis/items/useGetAuctionItems';

const useMain = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const auctionInProgressState = searchParams.get('state');
  const keyWord = searchParams.get('keyWord');

  const [searchKeyword, setSearchKeyword] = useState('');

  const { data, fetchNextPage, hasNextPage, isLoading } = useGetAuctionItems(auctionInProgressState, keyWord);
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
    setSearchParams((prevParams) => ({ ...Object.fromEntries(prevParams), state: String(selectedValue) }));
  };

  const handleEnterKeyword = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();

      setSearchParams((prevParams) => ({ ...Object.fromEntries(prevParams), keyWord: searchKeyword }));
    }
  };

  return {
    ObserverRef,
    data,
    searchKeyword,
    auctionInProgressState,
    isLoading,
    onCheckedSelectValue,
    handleChangeSearchInput,
    handleEnterKeyword,
  };
};

export default useMain;
