import { httpClient } from '../httpClient';

type UserLoginResponseOptionType = {
  email: string;
  password: string;
};

type UserSignupResponseOptionType = {
  email: string;
  password: string;
  name: string;
  phoneNum: string;
  address: string;
};

type GetUserInfoResponse = {
  email: string;
  name: string;
  address: string;
  phoneNum: string;
  createAt: string;
};

type GetUserItemsRequestBody = {
  state?: 'before' | 'auction' | 'closed';
};

type GetUserItemsParams = {
  limit: number;
  currentPage: number;
};

type GetUserItemsResponseItem = {
  img: string;
  name: string;
  startTime: string;
  startPrice: number;
  priceUnit: number;
};

const postUserLogin = async ({ email, password }: UserLoginResponseOptionType) => {
  return await httpClient.post('/users/login', { email, password }).then((response) => response.data);
};

const postUserSignup = async ({ email, password, name, phoneNum, address }: UserSignupResponseOptionType) => {
  return await httpClient
    .post('/users/join', { email, password, name, phoneNum, address })
    .then((response) => response.data);
};

const getUserInfo = async () => {
  return await httpClient.get('/users/info').then((response) => response.data);
};

const getUserItems = async (params: GetUserItemsParams, body?: GetUserItemsRequestBody) => {
  const { limit, currentPage } = params;
  console.log('getUserItems called', params, body); // 디버깅용
  return await httpClient
    .get('/users/item', {
      params: {
        limit,
        currentPage,
      },
      data: body,
    })
    .then((response) => response.data);
};

export type {
  UserLoginResponseOptionType,
  UserSignupResponseOptionType,
  GetUserInfoResponse,
  GetUserItemsRequestBody,
  GetUserItemsParams,
  GetUserItemsResponseItem,
};

export { postUserLogin, postUserSignup, getUserInfo, getUserItems };
