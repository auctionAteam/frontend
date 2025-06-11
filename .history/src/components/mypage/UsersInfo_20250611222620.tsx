import styled from '@emotion/styled';

import { colors } from '@/styles';

import UserInfoItem from './UserInfoItem';

const UsersInfo = () => {
  const user = {
    id: 'User1234',
    name: '김철수',
    phone: '010-1234-5678',
    email: 'abcd1234@gmail.com',
    address: '서울시 서초구 반포대로 45',
    created_at: '2025-01-01',
  };

  return (
    <Section>
      <Title>내 정보</Title>
      <InfoGrid>
        <UserInfoItem label="아이디" value={user.id} />
        <UserInfoItem label="이름" value={user.name} />
        <UserInfoItem label="이메일" value={user.email} />
        <UserInfoItem label="전화번호" value={user.phone} />
        <UserInfoItem label="가입일" value={user.created_at} />
        <UserInfoItem label="주소" value={user.address} />
      </InfoGrid>
    </Section>
  );
};

export default UsersInfo;

const Section = styled.section`
  border: #fff;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 24px;
  margin-bottom: 40px;
  transition: all 0.1s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-top: 16px;
  margin-bottom: 20px;
  border-bottom: thin solid ${colors.gray200};
  padding-bottom: 12px;
`;

const InfoGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr); //열 2개
  gap: 16px 32px; //세로 16px, 가로 32px 간격
`;
