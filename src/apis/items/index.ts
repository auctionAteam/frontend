import type { OptionValueType } from '@/components/common/SelectBox';

import { httpClient } from '../httpClient';

const getAuctionItems = async (pageParam: number, state: OptionValueType) => {
  return await httpClient.get(`/items?limit=15&currentPage=${pageParam}`).then((response) => response.data);
};

export { getAuctionItems };
