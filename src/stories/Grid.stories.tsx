import type { Meta, StoryObj } from '@storybook/react';

import { Motion } from '@/components/common';
import Grid from '@/components/common/Grid';

type GridType = typeof Grid;

const meta: Meta<GridType> = {
  title: 'common/Grid',
  component: Motion,
};

export default meta;

export const DefaultGrid: StoryObj<GridType> = {
  args: {
    templateColumns: 'repeat(4, minmax(150px, 1fr))',
    templateRows: 'repeat(4, minmax(150px, 1fr))',
    gap: '20px',
  },
  render: (args) => (
    <Grid {...args}>
      <div style={{ gridColumn: 'span 2', backgroundColor: 'violet' }}>Wide Item</div>
      <div style={{ backgroundColor: 'skyblue' }}>Item 1</div>
      <div style={{ backgroundColor: 'skyblue' }}>Item 2</div>
      <div style={{ backgroundColor: 'skyblue' }}>Item 3</div>
      <div style={{ backgroundColor: 'skyblue' }}>Item 4</div>
      <div style={{ gridColumn: 'span 2', backgroundColor: 'orange' }}>Another Wide Item</div>
    </Grid>
  ),
};
