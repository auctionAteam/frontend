export type AuctionItemType = {
  id: number;
  thumbnail: string;
  name: string;
  description?: string;
  startTime?: string;
  endTime: string;
  startPrice: number;
  sellerName: string;
};
