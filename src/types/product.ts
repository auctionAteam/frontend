export type Bid = {
  id: number;
  buyerName?: string;
  bidTime?: string;
  price: number;
};

export type ActionItem = {
  userId: number;
  img: string[];
  name: string;
  startTime: string;
  startPrice: number;
  endPrice: number;
  PriceUnit: number;
  size: string;
  infomation: string;
  state: string;
};
