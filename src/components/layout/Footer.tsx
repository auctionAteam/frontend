import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { IoLogoGithub } from 'react-icons/io';

import { colors } from '@/styles';

import { Flex } from '../common';

import Wrapper from './Wrapper';

const Footer = () => {
  return (
    <Wrapper css={wrapperStyle}>
      <StyledFooter>
        <StyledFooterInfoWrapper>
          <img src="/images/logo.png" />
          <a href="https://github.com/auctionAteam" target="_blank" rel="noreferrer">
            <IoLogoGithub />
          </a>
        </StyledFooterInfoWrapper>
        <Flex>제작자: 이상진, 김석우, 김진수, 황정우</Flex>
        <Flex>Copyright © prms auction all rights reserved.</Flex>
      </StyledFooter>
    </Wrapper>
  );
};

export default Footer;

const wrapperStyle = css`
  width: 100%;
  background-color: ${colors.gray100};
`;

const StyledFooter = styled.div`
  width: 100%;
  max-width: 1260px;
  color: ${colors.gray300};
  padding: 31px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledFooterInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 1px solid ${colors.gray200};

  svg {
    width: 40px;
    height: 40px;
    cursor: pointer;
    color: ${colors.gray300};
    transition: 0.15s ease-in-out;

    &:hover {
      color: black;
    }
  }
`;
