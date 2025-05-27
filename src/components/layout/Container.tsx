import styled from '@emotion/styled';
import React from 'react';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Container = ({ children, ...props }: ContainerProps) => {
  return <StyledContainer {...props}>{children}</StyledContainer>;
};

export default Container;

const StyledContainer = styled.div`
  width: 100%;
  max-width: 1260px;
  padding: 20px 0;
`;
