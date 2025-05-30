import styled from '@emotion/styled';
import React from 'react';

interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Wrapper = ({ children, ...props }: WrapperProps) => {
  return <StyledWrapper {...props}>{children}</StyledWrapper>;
};

export default Wrapper;

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 16px;
`;
