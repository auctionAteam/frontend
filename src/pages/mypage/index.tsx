import PageWrapper from '@/components/layout/PageWrapper';
import BiddingItem from '@/components/mypage/BiddingItem';
import FavoriteItem from '@/components/mypage/FavoriteItem';
import MyWinItem from '@/components/mypage/MyWinItem';
import RegisterItem from '@/components/mypage/RegisterItem';
import UserInfo from '@/components/mypage/UsersInfo';
import { colors } from '@/styles';

const MyPage = () => {
  return (
    <PageWrapper>
      <Title>MyPage</Title>
      <UserInfo />
      <BiddingItem />
      <RegisterItem />
      <FavoriteItem />
      <MyWinItem />
    </PageWrapper>
  );
};

export default MyPage;

import styled from '@emotion/styled';

const Title = styled.h1`
  color: ${colors.primaryHover};
  font-size: 28px;
  font-weight: bold;
  margin-top: 16px;
  margin-bottom: 40px;
`;
