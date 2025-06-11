import { httpClient } from '../httpClient';

type PostItemRequestBody = {
  email: string;
  name: string;
  day: number;
  startPrice: number;
  priceUnit: number;
  size: string;
  information: string;
};

const getAuctionItems = async (pageParam: number, state: string | null, keyWord: string | null) => {
  let baseUrl = `/items?limit=15&currentPage=${pageParam}`;

  if (state) baseUrl += `&state=${state}`;
  if (keyWord) baseUrl += `&name=${keyWord}`;

  return await httpClient.get(baseUrl).then((response) => response.data);
};

const postItem = async (body: PostItemRequestBody) => {
  return await httpClient.post('/items', body).then((response) => response.data);
};

const postFavoriteItem = async (itemId: number) => {
  return await httpClient.post(`/items/${itemId}`).then((response) => response.data);
};

const deleteFavoriteItem = async (itemId: number) => {
  return await httpClient.delete(`/items/${itemId}`).then((response) => response.data);
};

export type { PostItemRequestBody };

export { getAuctionItems, postItem, postFavoriteItem, deleteFavoriteItem };
