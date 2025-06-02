import styled from '@emotion/styled';

import PasswordInput from '@/components/account/passwordInput';
import TextInput from '@/components/account/textInput';
import { Button, Flex, Text } from '@/components/common';
import PageWrapper from '@/components/layout/PageWrapper';

import useLogin from './hooks/useLogin';

const LoginPage = () => {
  const { errorState, handleSubmit, isPasswordType, onClickChangePasswordType } = useLogin();

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
          <TextInput label="아이디" name="email" errorText={errorState.email} />
          <PasswordInput
            isPasswordType={isPasswordType}
            onClickChangePasswordType={onClickChangePasswordType}
            errorText={errorState.password}
          />
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
  gap: 28px;
`;
