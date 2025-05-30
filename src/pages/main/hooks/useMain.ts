import { useState } from 'react';

import type { OptionValueType } from '@/components/common/SelectBox';

const useMain = () => {
  const [isAuctionInProgress, setIsAuctionInProgress] = useState<OptionValueType>('AUCTION_INPROGRESS');
  const [searchKeyword, setSearchKeyword] = useState('');

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
    searchKeyword,
    isAuctionInProgress,
    onCheckedSelectValue,
    handleChangeSearchInput,
    handleEnterKeyword,
  };
};

export default useMain;
