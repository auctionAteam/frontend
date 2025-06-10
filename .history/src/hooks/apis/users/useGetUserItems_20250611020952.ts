import { useQuery } from '@tanstack/react-query';
import { getUserItems } from '@/apis/users';
import type { GetUserItemsParams, GetUserItemsRequestBody, GetUserItemsResponseItem } from '@/apis/users';

type UseGetItemsProps = {
  params: GetUserItemsParams;
  body?: GetUserItemsRequestBody;
};

const useGetUserItems = ({ params, body }: UseGetUserItemsProps) => {
  const queryKey = ['userItems', params.limit, params.currentPage, body?.state ?? 'all'];

  return useQuery<GetUserItemsResponseItem[]>({
    queryKey,
    queryFn: () => getUserItems(params, body),
  });
};

export default useGetUserItems;