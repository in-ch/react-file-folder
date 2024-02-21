import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ReactToggleList } from '../packages/react-toggle-list/dist/react-toggle-list.cjs.js';

const meta = {
  title: 'Example/ReactToggleList',
  component: ReactToggleList,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ReactToggleList>;

export default meta;
type Story = StoryObj<typeof meta>;

const List = {
  title: '토글토글',
  subItems: [
    <p onClick={() => alert('T')}>T</p>,
    <p onClick={() => alert('E')}>E</p>,
    <p onClick={() => alert('S')}>S</p>,
    <p onClick={() => alert('T')}>T</p>,
  ],
};

const nestedList = {
  title: '네스팅 토글토글',
  subItems: [
    <p onClick={() => alert('T')}>T</p>,
    <p onClick={() => alert('E')}>E</p>,
    <p onClick={() => alert('S')}>S</p>,
    <p onClick={() => alert('T')}>T</p>,
    <ReactToggleList items={List} />,
  ],
};
const nestedNestedList = {
  title: '네스티드 네스팅 토글토글',
  subItems: [
    <p onClick={() => alert('T')}>T</p>,
    <p onClick={() => alert('E')}>E</p>,
    <p onClick={() => alert('S')}>S</p>,
    <p onClick={() => alert('T')}>T</p>,
    <ReactToggleList items={nestedList} />,
  ],
};

export const Default: Story = {
  args: {
    items: List,
  },
};

export const Nested: Story = {
  args: {
    items: nestedList,
  },
};

export const NestedNested: Story = {
  args: {
    items: nestedNestedList,
  },
};
