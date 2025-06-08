import { useMutation, type UseMutationOptions } from '@tanstack/react-query';

import { postUserSignup, type UserSignupResponseOptionType } from '@/apis/users';

const useUserSignup = (options?: UseMutationOptions<unknown, Error, UserSignupResponseOptionType>) => {
  return useMutation({
    mutationFn: ({ email, password, name, phoneNum, address }) =>
      postUserSignup({ email, password, name, phoneNum, address }),
    ...options,
  });
};

export default useUserSignup;
