import { useQuery } from "@tanstack/react-query";

import type { GetUserItemsParams, GetUserItemsRequestBody, GetUserItemsResponseItem } from "@/apis/users";
import { getUserItems } from "@/apis/users";

type UseGetItemsProps = {
    params: GetUserItemsParams;
    body?: GetUserItemsRequestBody;
};

const useGetUserItems = ({ params, body } : UseGetItemsProps) => {
    const queryKey = ['userItems', params.limit, params.currentPage, body?.state ?? 'all'];

    return useQuery<GetUserItemsResponseItem[]>({
        queryKey,
        queryFn: () => getUserItems(params, body)
    });
};

export default useGetUserItems;