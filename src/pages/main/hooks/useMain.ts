import { useState } from 'react';

import type { OptionValueType } from '@/components/common/SelectBox';

const useMain = () => {
  const [isAuctionInProgress, setIsAuctionInProgress] = useState<OptionValueType>('AUCTION_INPROGRESS');

  const onCheckedSelectValue = (selectedValue: OptionValueType) => {
    setIsAuctionInProgress(selectedValue);
  };

  return { isAuctionInProgress, onCheckedSelectValue };
};

export default useMain;
