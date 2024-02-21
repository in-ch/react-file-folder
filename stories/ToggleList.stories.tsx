import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ReactToggleList } from '../packages/react-toggle-list/src';

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
  title: 'toggle',
  subItems: [
    <p onClick={() => alert('T')}>T</p>,
    <p onClick={() => alert('E')}>E</p>,
    <p onClick={() => alert('S')}>S</p>,
    <p onClick={() => alert('T')}>T</p>,
  ],
};

const nestedList = {
  title: 'nesting toggle',
  subItems: [
    <p onClick={() => alert('T')}>T</p>,
    <p onClick={() => alert('E')}>E</p>,
    <p onClick={() => alert('S')}>S</p>,
    <p onClick={() => alert('T')}>T</p>,
    <ReactToggleList items={List} />,
  ],
};
const nestedNestedList = {
  title: 'nested nesting toggle',
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
