import type { Meta, StoryObj } from '@storybook/react';

import { Flex, Motion } from '@/components/common';

type MotionType = typeof Motion;

const meta: Meta<MotionType> = {
  title: 'common/Motion',
  component: Motion,
};

export default meta;

export const DefaultMotion: StoryObj<MotionType> = {
  args: {
    type: 'fade-in-out',
  },
  render: (args) => (
    <Motion {...args}>
      <Flex style={{ width: '200px', height: '200px', backgroundColor: 'pink' }}>fade in out</Flex>
    </Motion>
  ),
};

export const SlideUpMotion: StoryObj<MotionType> = {
  args: {
    type: 'slide-up',
  },
  render: (args) => (
    <Motion {...args}>
      <Flex style={{ width: '200px', height: '200px', backgroundColor: 'pink' }}>slide up</Flex>
    </Motion>
  ),
};

export const SlideLeftMotion: StoryObj<MotionType> = {
  args: {
    type: 'slide-left',
  },
  render: (args) => (
    <Motion {...args}>
      <Flex style={{ width: '200px', height: '200px', backgroundColor: 'pink' }}>slide left</Flex>
    </Motion>
  ),
};