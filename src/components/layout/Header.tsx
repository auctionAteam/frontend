import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { colors } from '@/styles';

import { Flex } from '../common';
import Button from '../common/Button';
import Wrapper from './Wrapper';

const Header = () => {
  return (
    <Wrapper css={wrapperStyle}>
      <StyledHeader>
        <Link to="/">
          <img src="/images/logo.png" />
        </Link>
        <Flex gap="15px" style={{ width: '200px' }}>
          <Button size="small" styleType="ghost">
            로그인
          </Button>
          <Button size="small">회원가입</Button>
        </Flex>
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
`;
