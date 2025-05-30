import type { Meta, StoryObj } from '@storybook/react';

import AuctionItem from '@/components/common/AuctionItem';
import Grid from '@/components/common/Grid';
import { colors } from '@/styles';

type AuctionItemType = typeof AuctionItem;

const meta: Meta<typeof AuctionItem> = {
  title: 'common/AuctionItem',
  component: AuctionItem,
};

export default meta;

export const DefaultActionItem: StoryObj<AuctionItemType> = {
  args: {
    thumbnail:
      'https://fastly.picsum.photos/id/208/200/200.jpg?hmac=J1BdqRgAAAId9wernbPINrW38haBGOtrpEqn3m2wjlY',
    name: '캐논 카메라',
    description: '캐논 5D MARK IV 바디 + 렌즈선택 + 패키지 / 캐논 5D MARK 4 (사진이 잘 찍히는 카메라)',
    startTime: '2025-02-02',
    endTime: '2025-05-31',
    startPrice: 5000000,
    sellerName: '이상진',
  },
  render: (args) => (
    <Grid
      gap="10px"
      align="center"
      justify="center"
      columns={5}
      style={{
        width: '1260px',
        backgroundColor: colors.gray200,
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      <AuctionItem {...args} />
      <AuctionItem {...args} />
      <AuctionItem {...args} />
      <AuctionItem {...args} />
      <AuctionItem {...args} />
      <AuctionItem {...args} />
    </Grid>
  ),
};
