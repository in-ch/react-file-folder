
import  { createFileTree, Directory, ToggleFileTree } from 'react-toggle-file-tree';

export default function Home() {

    const handleFileClick = () => {
      console.log('handleFileClick');
    }

    const handleDirectoryClick = () => {
      console.log('handleDirectoryClick');
    }
  const list = [
    {
      localPath: "/inch.txt",
      properties: {
        size: "1 bit",
        anything: "possible",
        a: "b",
      },
    },
    {
      localPath: "/fruit/apple.png",
      properties: {
        sizezz: "12mb",
        azvv: "asdfasd",
      },
    },
    {
      localPath: "/fruit/banana.png",
      properties: {
        sizezz: "12mb",
        azvv: "asdfasd",
      },
    },
    {
      localPath: "/vehicle/car/truck.mp4",
      properties: {
        sizezz: "12mb",
        azvv: "asdfasd",
      },
    },
    {
      localPath: "/vehicle/car/taxi.svg",
      properties: {
        sizezz: "12mb",
        azvv: "asdfasd",
      },
    },
    {
      localPath: "/plant/tree/oak.png",
      properties: {
        sizezz: "10mb",
        azvv: "asdfasd",
      },
    },
    {
      localPath: "/plant/tree/maple.png",
      properties: {
        sizezz: "8mb",
        azvv: "asdfasd",
      },
    },
    {
      localPath: "/plant/flower/cherry-blossom.png",
      properties: {
        sizezz: "5mb",
        azvv: "asdfasd",
      },
    },
    {
      localPath: "/plant/fruit/apple-tree.png",
      properties: {
        sizezz: "15mb",
        azvv: "asdfasd",
      },
    },
  ];

  return (
    <ToggleFileTree
      list={createFileTree(list) as Directory}
      handleFileClick={handleFileClick}
      handleDirectoryClick={handleDirectoryClick}
    />
  )
}
