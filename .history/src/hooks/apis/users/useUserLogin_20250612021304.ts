import { useMutation, type UseMutationOptions } from '@tanstack/react-query';

import { postUserLogin, type UserLoginResponseOptionType } from '@/apis/users';

export type UserLoginResponseType = { 
  token: string;
  loginUser: {
    email: string;
  };
};

const useUserLogin = (
  options?: UseMutationOptions<UserLoginResponseType, Error, UserLoginResponseOptionType>,
) => {
  return useMutation({
    mutationFn: ({ email, password }) => postUserLogin({ email, password }),
    ...options,
  });
};

export default useUserLogin;
