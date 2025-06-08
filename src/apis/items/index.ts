import { httpClient } from '../httpClient';

const getAuctionItems = async (pageParam: number, state: string | null, keyWord: string | null) => {
  let baseUrl = `/items?limit=15&currentPage=${pageParam}`;

  if (state) baseUrl += `&state=${state}`;
  if (keyWord) baseUrl += `&name=${keyWord}`;

  return await httpClient.get(baseUrl).then((response) => response.data);
};

export { getAuctionItems };
