import { useInfiniteQuery } from '@tanstack/react-query';

import { getAuctionItems } from '@/apis/items';
import { AUCTION_ITEMS } from '@/queries/items';

const useGetAuctionItems = (state: string | null, keyWord: string | null) => {
  const { data, isLoading, isFetching, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: [AUCTION_ITEMS, state, keyWord],
    queryFn: ({ pageParam }) => getAuctionItems(Number(pageParam), state, keyWord),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.pagenation.hasNextPage ? lastPage.pagenation.currentPage + 1 : undefined,
  });

  return { data, isLoading, isFetching, fetchNextPage, hasNextPage };
};

export default useGetAuctionItems;
