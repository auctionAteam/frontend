import type { Meta, StoryObj } from '@storybook/react';

import SelectBox from '@/components/common/SelectBox';

type SelectBoxType = typeof SelectBox;

const meta: Meta<SelectBoxType> = {
  title: 'common/SelectBox',
  component: SelectBox,
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['small', 'medium', 'large'],
    },
  },
};

export default meta;

export const DefaultSelectBox: StoryObj<SelectBoxType> = {
  args: {
    options: [
      { label: '첫 번째 항목', value: 'todo' },
      { label: '두 번째 항목', value: 'inProgress' },
      { label: '세 번째 항목', value: 'completed' },
    ],
    defaultValue: 'todo',
    onCheckedValue: (selectedValue) => {
      console.log('value', selectedValue);
    },
  },
  render: (args) => (
    <div style={{ width: '300px' }}>
      <SelectBox {...args} />
    </div>
  ),
};
