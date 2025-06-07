import { Button, Flex } from '@/components/common';
import PageWrapper from '@/components/layout/PageWrapper';
import BiddingItem from '@/components/mypage/BiddingItem';
import FavoriteItem from '@/components/mypage/FavoriteItem';
import MyWinItem from '@/components/mypage/MyWinItem';
import RegisterItem from '@/components/mypage/RegisterItem';
import UserInfo from '@/components/mypage/UsersInfo';
import { ACCESS_TOKEN } from '@/constants/token';
import { colors } from '@/styles';

const MyPage = () => {
  const onClickLogOut = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    window.location.href = '/';
  };

  return (
    <PageWrapper>
      <Flex justify="space-between">
        <Title>MyPage</Title>
        <Flex style={{ width: '100px' }}>
          <Button onClick={onClickLogOut} styleType="ghost" size="small">
            로그아웃
          </Button>
        </Flex>
      </Flex>
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
