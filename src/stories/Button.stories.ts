import type { Meta, StoryObj } from '@storybook/react';

import Button from '@/components/common/Button';

const meta: Meta<typeof Button> = {
  title: 'common/Button',
  component: Button,
  argTypes: {
    styleType: {
      control: 'inline-radio',
      options: ['primary', 'outline', 'ghost'],
    },
    size: {
      control: 'inline-radio',
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultButton: Story = {
  args: {
    children: '프라이머리 버튼',
  },
};

export const GhostButton: Story = {
  args: {
    styleType: 'ghost',
    children: '고스트 버튼',
  },
};

export const OutlineButton: Story = {
  args: {
    styleType: 'outline',
    children: '아웃라인 버튼',
  },
};
