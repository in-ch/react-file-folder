# react-toggle-file-tree

The `react-toggle-file-tree` is designed to display a file/folder structure based on the provided list of files and their properties. 
This component organizes the files into folders and subfolders based on their localPath. Each folder can contain multiple files with their respective fileName 


## Document
---

- [Installation](#installation)
- [How to use](#how-to-use)
- [Demos](#demos)
- [Supported file types](#supported-file-types)
- [Contribute](#contribute)


## Installation 
---

This library use `react-toggle-file-tree`, so you need to install it.

```bash
npm install --save react-toggle-file-tree
```

or

```bash
yarn add react-toggle-file-tree
```


## How to use
---
```tsx
import {
  createFileTree,
  Directory,
  ToggleFileTree,
} from 'react-toggle-file-tree';

<ToggleFileTree
    list={createFileTree(list) as Directory}
    handleFileClick={handleFileClick}
    handleDirectoryClick={handleDirectoryClick}
/>
```

⚠ The list must contain the localPath and fileName keys.

<details>
    <summary>list example view</summary>

```ts
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
```
</details>


## Demos
---
![gif](https://github.com/in-ch/react-file-folder/assets/49556566/a96f28a3-7532-4d40-9ce8-29307b52c007)


## Supported file types
---
The `react-toggle-file-tree` supports the following file formats:

Documents: csv, docs, html, json, manifest, numbers, pdf, ppt, pptx, txt, xlsx

Images: gif, jpg, jpeg, png

Media: mov, mp4

Scripts: js, ts

Compressed: gif, zip


## Example code
---

You can see the example code and demo.

Clone the repository

```bash
git clone https://github.com/in-ch/react-file-folder.git
```

Install libraries

```bash
cd example
```

and

```bash
npm install
```

or


```bash
yarn
```


## Contribute
---

You can follow below to contribute `react-toggle-file-tree`

Clone the repository.

```bash
git clone https://github.com/in-ch/react-file-folder.git
```
