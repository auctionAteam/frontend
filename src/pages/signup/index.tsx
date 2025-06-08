import styled from '@emotion/styled';

import AddressInput from '@/components/account/addressInput';
import PasswordInput from '@/components/account/passwordInput';
import TextInput from '@/components/account/textInput';
import { Button, Flex, Text } from '@/components/common';
import PageWrapper from '@/components/layout/PageWrapper';

import useSignup from './hooks/useSignup';

const SignupPage = () => {
  const { isPasswordType, address, errorState, onClickChangePasswordType, onClickOpenModal, handleSubmit } =
    useSignup();

  return (
    <PageWrapper>
      <StyledSignupPageWrapper>
        <Flex style={{ width: '100%' }} direction="column" align="center" gap="10px">
          <Text font="h2">회원가입</Text>
          <Text font="subTitle2" color="gray250">
            지금 가입하고 특별한 경매 경험을 체험해 보세요.
          </Text>
        </Flex>
        <StyledSignupForm onSubmit={handleSubmit}>
          <TextInput name="email" label="이메일" errorText={errorState.email} />
          <PasswordInput
            isPasswordType={isPasswordType}
            onClickChangePasswordType={onClickChangePasswordType}
            errorText={errorState.password}
          />
          <TextInput
            name="name"
            label="이름"
            errorText={errorState.userName}
            placeholder="이름을 입력해주세요."
          />
          <TextInput name="phoneNumber" label="전화번호" errorText={errorState.phoneNumber} />
          <AddressInput
            onClick={onClickOpenModal}
            address={address}
            errorText={errorState.address}
            name="address"
            label="주소"
          />
          <Button style={{ marginTop: '15px' }} type="submit">
            회원가입
          </Button>
        </StyledSignupForm>
      </StyledSignupPageWrapper>
    </PageWrapper>
  );
};

export default SignupPage;

const StyledSignupPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
  padding-top: 30px;
  padding-bottom: 80px;
`;

const StyledSignupForm = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;
