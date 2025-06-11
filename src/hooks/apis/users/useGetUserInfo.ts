import { useQuery } from '@tanstack/react-query';

import type { GetUserInfoResponse } from '@/apis/users';
import { getUserInfo } from '@/apis/users';

const useGetUserInfo = () => {
  return useQuery<GetUserInfoResponse>({
    queryKey: ['userInfo'],
    queryFn: getUserInfo,
  });
};

export default useGetUserInfo;
