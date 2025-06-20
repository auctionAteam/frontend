import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Link, useNavigate } from 'react-router-dom';

import { ACCESS_TOKEN } from '@/constants/token';
import { colors } from '@/styles';

import { Flex } from '../common';
import Button from '../common/Button';
import Wrapper from './Wrapper';

const Header = () => {
  const navigate = useNavigate();

  return (
    <Wrapper css={wrapperStyle}>
      <StyledHeader>
        <Link to="/">
          <img src="/images/logo.png" />
        </Link>
        {localStorage.getItem(ACCESS_TOKEN) ? (
          <Flex style={{ width: '110px' }}>
            <Button onClick={() => navigate('/mypage')} styleType="ghost">
              마이 페이지
            </Button>
          </Flex>
        ) : (
          <Flex gap="15px" style={{ width: '200px' }}>
            <Button onClick={() => navigate('/login')} size="small" styleType="ghost">
              로그인
            </Button>
            <Button onClick={() => navigate('/signup')} size="small">
              회원가입
            </Button>
          </Flex>
        )}
      </StyledHeader>
    </Wrapper>
  );
};

export default Header;

const wrapperStyle = css`
  width: 100%;
  height: 70px;
  position: fixed;

  z-index: 999;

  background-color: white;
  border-bottom: 1px solid ${colors.gray100};
`;

const StyledHeader = styled.div`
  width: 100%;
  max-width: 1260px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    cursor: pointer;
  }

  .navMenuWrapper {
    display: flex;
    gap: 25px;

    span {
      cursor: pointer;
    }
  }
`;
