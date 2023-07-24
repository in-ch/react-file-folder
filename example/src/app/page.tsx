'use client';

import {
  createFileTree,
  Directory,
  ToggleFileTree,
} from 'react-toggle-file-tree';

export default function Home() {
  const handleFileClick = () => {
    console.log('handleFileClick');
  };

  const handleDirectoryClick = () => {
    console.log('handleDirectoryClick');
  };
  const list = [
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

  return (
    <ToggleFileTree
      list={createFileTree(list) as Directory}
      handleFileClick={handleFileClick}
      handleDirectoryClick={handleDirectoryClick}
    />
  );
}
