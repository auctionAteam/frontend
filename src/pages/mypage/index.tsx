import PageWrapper from '@/components/layout/PageWrapper';
import { colors } from '@/styles';

import BiddingItem from './biddingItem';
import FavoriteItem from './favoriteItem';
import RegisterItem from './registerItem';
import UserInfo from './usersInfo';
import WinItem from './winItem';

const MyPage = () => {
  return (
    <PageWrapper>
      <Title>MyPage</Title>
      <UserInfo />
      <BiddingItem />
      <RegisterItem />
      <FavoriteItem />
      <WinItem />
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
