import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import Wrapper from './Wrapper';

const Header = () => {
  return (
    <Wrapper css={wrapperStyle}>
      <StyledHeader>
        <Link to="/">
          <img src="/images/logo.png" />
        </Link>

        <div className="navMenuWrapper">
          <span>로그인</span>
          <span>회원가입</span>
        </div>
      </StyledHeader>
    </Wrapper>
  );
};

export default Header;

const wrapperStyle = css`
  width: 100%;
  height: 70px;
  position: fixed;
  background-color: white;
  border-bottom: 1px solid #f0f0f0;
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
    gap: 15px;

    span {
      cursor: pointer;
    }
  }
`;
