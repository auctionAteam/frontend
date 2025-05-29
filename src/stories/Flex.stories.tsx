import type { Meta, StoryObj } from '@storybook/react';

import Flex from '@/components/common/Flex';

type FlexType = typeof Flex;

const meta: Meta<FlexType> = {
  title: 'common/Flex',
  component: Flex,
};

export default meta;

export const DefaultFlex: StoryObj<FlexType> = {
  args: {
    justify: 'space-between',
  },
  render: (args) => (
    <div style={{ width: '800px' }}>
      <Flex basis="350px" {...args}>
        <Flex style={{ width: '250px', height: '250px', backgroundColor: 'pink' }} />
        <Flex style={{ width: '250px', height: '250px', backgroundColor: 'skyblue' }} />
      </Flex>
    </div>
  ),
};

// flex-basis는 요소의 초기 크기를 설정할때 사용된다.
export const FlexBasis: StoryObj<FlexType> = {
  args: {
    gap: '20px',
  },
  render: (args) => (
    <div style={{ width: '800px' }}>
      <Flex {...args}>
        <Flex basis="100px" style={{ height: '100px', backgroundColor: 'pink' }}>
          basis: 100px
        </Flex>
        <Flex basis="200px" style={{ height: '100px', backgroundColor: 'skyblue' }}>
          basis: 200px
        </Flex>
        <Flex basis="300px" style={{ height: '100px', backgroundColor: 'lightgreen' }}>
          basis: 300px
        </Flex>
      </Flex>
    </div>
  ),
};

// flex-grow는 남은 공간을 어떻게 나눠 가질지 결정한다.
export const FlexGrowExample: StoryObj<FlexType> = {
  args: {
    gap: '20px',
  },
  render: (args) => (
    <div style={{ width: '800px' }}>
      <Flex {...args}>
        <Flex style={{ height: '100px', backgroundColor: 'pink', flexBasis: '100px', flexGrow: 1 }}>
          grow: 1
        </Flex>
        <Flex style={{ height: '100px', backgroundColor: 'skyblue', flexBasis: '100px', flexGrow: 2 }}>
          grow: 2
        </Flex>
        <Flex style={{ height: '100px', backgroundColor: 'lightgreen', flexBasis: '100px', flexGrow: 3 }}>
          grow: 3
        </Flex>
      </Flex>
    </div>
  ),
};

// flex-shrink는 요소의 공간이 부족할때 얼마나 줄어들지 결정한다.
export const FlexShrink: StoryObj<FlexType> = {
  args: {
    gap: '20px',
  },
  render: (args) => (
    <div style={{ width: '500px' }}>
      <Flex {...args}>
        <div style={{ height: '100px', backgroundColor: 'pink', flexBasis: '300px', flexShrink: 0 }}>
          shrink: 0
        </div>
        <div style={{ height: '100px', backgroundColor: 'skyblue', flexBasis: '300px', flexShrink: 1 }}>
          shrink: 1
        </div>
        <div style={{ height: '100px', backgroundColor: 'lightgreen', flexBasis: '300px', flexShrink: 2 }}>
          shrink: 2
        </div>
      </Flex>
    </div>
  ),
};

// flex-shrink 와 flex-grow의 동작 차이점을 보여주는 스토리북 문서
export const FlexCombined: StoryObj<FlexType> = {
  args: {
    gap: '20px',
  },
  render: (args) => (
    <>
      <h3 style={{ marginTop: '50px' }}>flex-grow 테스트</h3>
      <div style={{ width: '1000px' }}>
        <Flex {...args}>
          <div
            style={{
              height: '100px',
              backgroundColor: 'pink',
              flexBasis: '200px',
              flexGrow: 1,
              flexShrink: 0,
            }}
          >
            basis: 200px, grow: 1, shrink: 0
          </div>
          <div
            style={{
              height: '100px',
              backgroundColor: 'skyblue',
              flexBasis: '200px',
              flexGrow: 2,
              flexShrink: 1,
            }}
          >
            basis: 200px, grow: 2, shrink: 1
          </div>
          <div
            style={{
              height: '100px',
              backgroundColor: 'lightgreen',
              flexBasis: '200px',
              flexGrow: 1,
              flexShrink: 2,
            }}
          >
            basis: 200px, grow: 1, shrink: 2
          </div>
        </Flex>
      </div>
      <h3 style={{ marginTop: '50px' }}>flex-shrink 테스트</h3>
      <div style={{ width: '500px' }}>
        <Flex {...args}>
          <div
            style={{
              height: '100px',
              backgroundColor: 'pink',
              flexBasis: '200px',
              flexGrow: 1,
              flexShrink: 0,
            }}
          >
            basis: 200px, grow: 1, shrink: 0
          </div>
          <div
            style={{
              height: '100px',
              backgroundColor: 'skyblue',
              flexBasis: '200px',
              flexGrow: 2,
              flexShrink: 1,
            }}
          >
            basis: 200px, grow: 2, shrink: 1
          </div>
          <div
            style={{
              height: '100px',
              backgroundColor: 'lightgreen',
              flexBasis: '200px',
              flexGrow: 1,
              flexShrink: 2,
            }}
          >
            basis: 200px, grow: 1, shrink: 2
          </div>
        </Flex>
      </div>
    </>
  ),
};
