'use client';

import React, { MouseEventHandler } from 'react';
import { IMG } from './icons/imgs';
import { Directory } from '../utils/createFileTree';
import {
  Container,
  DepthContainer,
  CheckboxContainer,
  Checkbox,
  FileContainer,
  File,
  Locale,
} from './index.css';

function renderIcon(_fileName: string) {
  const fileExtension = String(_fileName.split('.').pop()).toLowerCase();
  return IMG.hasOwnProperty(fileExtension)
    ? React.createElement(IMG[fileExtension])
    : React.createElement(IMG.unknown);
}

function renderFileList(
  _list: any,
  handleFileClick: MouseEventHandler<HTMLParagraphElement>,
  handleDirectoryClick: MouseEventHandler<HTMLParagraphElement>
) {
  return Object.keys(_list).map((key, index) => {
    const value = _list[key];
    if (Array.isArray(value)) {
      const files = value;
      return (
        <FileContainer key={key} role="tree">
          {files.map((file) => {
            return (
              <File
                role="treeitem"
                key={`FILE-${file.fileName}-${index}-${Math.random()
                  .toString()
                  .substring(2, 10)}`}
              >
                <>
                  {renderIcon(file.fileName)}
                  <p onClick={() => handleFileClick(file)}>
                    {file.fileName}
                    {file.localeLanguage && (
                      <Locale>
                        {file.localeLanguage}_{file.localeRegion}
                      </Locale>
                    )}
                  </p>
                </>
              </File>
            );
          })}
        </FileContainer>
      );
    } else {
      return (
        <DepthContainer key={key}>
          <CheckboxContainer htmlFor={`CHECKBOX-${index}-${key}`}>
            <p onClick={() => handleDirectoryClick({ key, value } as any)}>
              📁 <span style={{ marginLeft: 4, fontSize: 15 }}>{key}</span>
            </p>
          </CheckboxContainer>
          <Checkbox
            id={`CHECKBOX-${index}-${key}`}
            type="checkbox"
            role="checkbox"
          />
          {renderFileList(
            value as FileList,
            handleFileClick,
            handleDirectoryClick
          )}
        </DepthContainer>
      );
    }
  });
}

interface ListProps {
  list: Directory;
  handleFileClick: MouseEventHandler<HTMLParagraphElement>;
  handleDirectoryClick: MouseEventHandler<HTMLParagraphElement>;
}

const ToggleFileTree = ({
  list,
  handleFileClick,
  handleDirectoryClick,
}: ListProps) => {
  return (
    <Container>
      {renderFileList(list, handleFileClick, handleDirectoryClick)}
    </Container>
  );
};

export default ToggleFileTree;
ToggleFileTree.displayName = 'ToggleFileTree';
