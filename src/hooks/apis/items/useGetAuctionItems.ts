import { useInfiniteQuery } from '@tanstack/react-query';

import { getAuctionItems } from '@/apis/items';
import type { OptionValueType } from '@/components/common/SelectBox';
import { auctionItemKeys } from '@/queries/items';

const useGetAuctionItems = (state: OptionValueType) => {
  const { data, isLoading, isFetching, fetchNextPage, hasNextPage } = useInfiniteQuery({
    ...auctionItemKeys.all(state),
    queryFn: ({ pageParam }) => getAuctionItems(Number(pageParam), state),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.pagenation.hasNextPage ? lastPage.pagenation.currentPage + 1 : undefined,
  });

  return { data, isLoading, isFetching, fetchNextPage, hasNextPage };
};

export default useGetAuctionItems;
