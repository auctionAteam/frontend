import { createQueryKeys } from '@lukemorales/query-key-factory';

import type { OptionValueType } from '@/components/common/SelectBox';

export const AUCTION_ITEMS = 'AUCTION_ITEMS';

export const auctionItemKeys = createQueryKeys(AUCTION_ITEMS, {
  all: (state: OptionValueType) => [state],
});
