// @ts-nocheck

import type { Meta, StoryObj } from '@storybook/react';
import {
  ToggleFileTree,
  Directory,
  createFileTree,
  File,
} from '../packages/react-toggle-file-tree/dist/react-toggle-file-tree.cjs';

const meta = {
  title: 'Example/ToggleFileTree',
  component: ToggleFileTree,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ToggleFileTree>;

export default meta;
type Story = StoryObj<typeof meta>;

const mock_list = [
  {
    localPath: '/',
    fileName: 'inch.txt',
    properties: {
      size: '1 bit',
      anything: 'possible',
      a: 'b',
    },
  },
  {
    localPath: '/fruit',
    fileName: 'apple.docs',
    properties: {
      sizezz: '12mb',
      azvv: 'asdfasd',
    },
  },
  {
    localPath: '/fruit',
    fileName: 'banana.png',
    properties: {
      sizezz: '12mb',
      azvv: 'asdfasd',
    },
  },
  {
    localPath: '/vehicle/car',
    fileName: 'truck.pdf',
    properties: {
      sizezz: '12mb',
      azvv: 'asdfasd',
    },
  },
  {
    localPath: '/vehicle/car',
    fileName: 'taxi.ppt',
    properties: {
      sizezz: '12mb',
      azvv: 'asdfasd',
    },
  },
  {
    localPath: '/plant/tree',
    fileName: 'oak.json',
    properties: {
      sizezz: '10mb',
      azvv: 'asdfasd',
    },
  },
  {
    localPath: '/plant/tree',
    fileName: 'maple.zip',
    properties: {
      sizezz: '8mb',
      azvv: 'asdfasd',
    },
  },
  {
    localPath: '/plant/flower',
    fileName: 'cherry-blossom.numbers',
    properties: {
      sizezz: '5mb',
      azvv: 'asdfasd',
    },
  },
  {
    localPath: '/plant/fruit',
    fileName: 'apple-tree.csv',
    properties: {
      sizezz: '15mb',
      azvv: 'asdfasd',
    },
  },
];
export const Component: Story = {
  args: {
    list: createFileTree(mock_list),
    handleFileClick: (file: File) => console.log({ file }),
    handleDirectoryClick: (directory: Directory) => console.log({ directory }),
  },
};
