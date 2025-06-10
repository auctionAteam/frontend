import { useQuery } from '@tanstack/react-query';
import { getUserInfo } from '@/apis/users';
import type { GetUserInfoResponse } from '@/apis/users';

const useGetUserInfo = () => {
  return useQuery<GetUserInfoResponse>({
    queryKey: ['userInfo'],
    queryFn: getUserInfo,
  });
};

export default useGetUserInfo;
