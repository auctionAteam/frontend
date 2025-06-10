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

const postUserLogin = async ({ email, password }: UserLoginResponseOptionType) => {
  return await httpClient.post('/users/login', { email, password }).then((response) => response.data);
};

const postUserSignup = async ({ email, password, name, phoneNum, address }: UserSignupResponseOptionType) => {
  return await httpClient
    .post('/users/join', { email, password, name, phoneNum, address })
    .then((response) => response.data);
};

export type { UserLoginResponseOptionType, UserSignupResponseOptionType };

export { postUserLogin, postUserSignup };
