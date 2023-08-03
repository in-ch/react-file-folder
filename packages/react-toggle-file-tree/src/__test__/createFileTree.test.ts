import createFileTree, { updateFileList } from '../utils/createFileTree';

describe('createFileTree', () => {
  it('should create a file tree from a list of files', () => {
    const fileList = [
      { localPath: 'file1.txt' },
      { localPath: 'dir1/file2.txt' },
      { localPath: 'dir1/file3.txt' },
      { localPath: 'dir2/subdir1/file4.txt' },
    ];

    const expectedFileTree = {
      files: [{ localPath: 'file1.txt' }],
      dir1: {
        files: [
          { localPath: 'dir1/file2.txt' },
          { localPath: 'dir1/file3.txt' },
        ],
      },
      dir2: {
        subdir1: {
          files: [{ localPath: 'dir2/subdir1/file4.txt' }],
        },
      },
    };

    expect(createFileTree(fileList)).toEqual(expectedFileTree);
  });
});

describe('updateFileList', () => {
  it('should convert user-defined array to File | Directory format', () => {
    const inputList = [
      { customFileName: 'file1.txt', customLocalPath: 'path1' },
      { customFileName: 'file2.txt', customLocalPath: 'path2' },
      { customFileName: 'file3.txt', customLocalPath: 'path3' },
    ];

    const expectedOutput = [
      {
        fileName: 'file1.txt',
        localPath: 'path1',
        customFileName: 'file1.txt',
        customLocalPath: 'path1',
      },
      {
        fileName: 'file2.txt',
        localPath: 'path2',
        customFileName: 'file2.txt',
        customLocalPath: 'path2',
      },
      {
        fileName: 'file3.txt',
        localPath: 'path3',
        customFileName: 'file3.txt',
        customLocalPath: 'path3',
      },
    ];

    const result = updateFileList({
      list: inputList,
      fileNameKey: 'customFileName',
      localPathKey: 'customLocalPath',
    });

    expect(result).toEqual(expectedOutput);
  });
});
