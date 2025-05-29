import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { MdOutlineSearch } from 'react-icons/md';

import Button from '@/components/common/Button';
import Input from '@/components/common/Input';

type SelectBoxType = typeof Input;

const meta: Meta<SelectBoxType> = {
  title: 'common/Input',
  component: Input,
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['small', 'medium', 'large'],
    },
  },
};

export default meta;

export const DefaultInput: StoryObj<SelectBoxType> = {
  args: {
    placeholder: '값을 입력해주세요.',
  },
  render: (args) => (
    <div style={{ width: '350px' }}>
      <Input {...args} />
    </div>
  ),
};

export const LabelInput: StoryObj<SelectBoxType> = {
  args: {
    label: '비밀번호',
    placeholder: '비밀번호를 입력해주세요.',
  },
  render: (args) => (
    <div style={{ width: '350px' }}>
      <Input {...args} />
    </div>
  ),
};

export const IconInput: StoryObj<SelectBoxType> = {
  args: {
    placeholder: '값을 입력해주세요.',
    inputIcon: <MdOutlineSearch />,
  },
  render: (args) => (
    <div style={{ width: '350px' }}>
      <Input {...args} />
    </div>
  ),
};

export const ErrorInput: StoryObj<SelectBoxType> = {
  args: {
    placeholder: '값을 입력해주세요.',
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [errorState, setErrorState] = useState({
      id: '',
      password: '',
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const formData = new FormData(e.currentTarget);

      const id = formData.get('id') as string;
      const password = formData.get('password') as string;

      const regexEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

      if (!regexEmail.test(id)) {
        setErrorState((prevState) => ({ ...prevState, id: '올바른 형식의 이메일 주소를 입력해주세요.' }));
      } else {
        setErrorState((prevState) => ({ ...prevState, id: '' }));
      }

      if (password.length < 8) {
        setErrorState((prevState) => ({ ...prevState, password: '8글자 이상 입력해주세요.' }));
      } else {
        setErrorState((prevState) => ({ ...prevState, password: '' }));
      }
    };

    return (
      <>
        <form
          style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '350px' }}
          onSubmit={handleSubmit}
        >
          <Input label="아이디" name="id" errorText={errorState.id} {...args} />
          <Input label="비밀번호" name="password" errorText={errorState.password} {...args} />

          <Button type="submit" styleType="primary">
            제출하기
          </Button>
        </form>
      </>
    );
  },
};
