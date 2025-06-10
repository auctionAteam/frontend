import { useQuery } from '@tanstack/react-query';

import type { GetUserInfoResponse } from '@/apis/users';
import { getUserInfo } from '@/apis/users';
import { ACCESS_TOKEN } from '@/constants/token';

const useGetUserInfo = () => {
  const token = localStorage.getItem(ACCESS_TOKEN);
  return useQuery<GetUserInfoResponse>({
    queryKey: ['userInfo'],
    queryFn: getUserInfo,
    enabled: !!token,
  });
};

export default useGetUserInfo;
