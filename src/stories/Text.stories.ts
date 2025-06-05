import type { Meta, StoryObj } from '@storybook/react';

import Text from '@/components/common/Text';
import { colors, fonts } from '@/styles';

const meta: Meta<typeof Text> = {
  title: 'common/Text',
  component: Text,
  argTypes: {
    font: {
      control: 'inline-radio',
      options: Object.keys(fonts),
    },
    color: {
      control: 'inline-radio',
      options: Object.keys(colors),
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultFont: Story = {
  args: {
    children: '안녕하세요. 반갑습니다!',
  },
};
