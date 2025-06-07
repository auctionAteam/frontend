import { createQueryKeys } from '@lukemorales/query-key-factory';

import type { OptionValueType } from '@/components/common/SelectBox';

export const auctionItemKeys = createQueryKeys('auctionItems', {
  all: (state: OptionValueType) => [state],
});
