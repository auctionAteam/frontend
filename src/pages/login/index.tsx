import styled from '@emotion/styled';

import { Button, Flex, Input, Text } from '@/components/common';
import PageWrapper from '@/components/layout/PageWrapper';

import useLogin from './hooks/useLogin';

const LoginPage = () => {
  const { errorState, handleSubmit, InputIcon, isPasswordType, onClickChangePasswordType } = useLogin();

  return (
    <PageWrapper>
      <StyledLoginPageWrapper>
        <Flex style={{ width: '100%' }} direction="column" align="center" gap="10px">
          <Text font="h2">로그인</Text>
          <Text font="subTitle2" color="gray250">
            지금 바로 경매에 참여해 보세요.
          </Text>
        </Flex>

        <StyledLoginForm onSubmit={handleSubmit}>
          <Flex direction="column" gap="10px">
            <Input label="아이디" name="id" />
            <Text font="body2" color="error">
              {errorState.id && errorState.id}
            </Text>
          </Flex>
          <Flex direction="column" gap="10px">
            <Input
              type={isPasswordType ? 'password' : 'text'}
              inputIcon={
                <InputIcon
                  onClick={onClickChangePasswordType}
                  style={{ marginRight: '5px', cursor: 'pointer' }}
                />
              }
              label="비밀번호"
              name="password"
            />
            <Text font="body2" color="error">
              {errorState.password && errorState.password}
            </Text>
          </Flex>
          <Button style={{ marginTop: '15px' }} type="submit">
            로그인
          </Button>
        </StyledLoginForm>
      </StyledLoginPageWrapper>
    </PageWrapper>
  );
};

export default LoginPage;

const StyledLoginPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
`;

const StyledLoginForm = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
