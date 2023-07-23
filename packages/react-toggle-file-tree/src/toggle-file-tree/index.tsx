'use client';

import React, { MouseEventHandler } from 'react';
import styled from '@emotion/styled';
import { IMG } from './icons/imgs';
import { Directory } from '../utils/createFileTree';

const Container = styled.div`
  & * {
    margin: 0px;
    padding: 0px;
  }
`;
const DepthContainer = styled.div`
  padding-left: 22px;
`;
const CheckboxContainer = styled.label`
  display: block;
  line-height: 15px;
  font-size: 14px;
  & > p {
    cursor: pointer;
  }
`;
const Checkbox = styled.input`
  width: 1px;
  height: 1px;
  visibility: hidden;
  &:checked ~ div {
    display: block;
  }
  & ~ div {
    display: none;
  }
`;
const FileContainer = styled.div`
  padding-left: 22px;
  padding-bottom: 5px;
  & > p {
    line-height: 24px;
    padding-bottom: 20px;
  }
`;
const File = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 15px;
  cursor: pointer;
  p {
    font-size: 15px;
    margin-left: 6px;
  }
`;
const Locale = styled.span`
  padding: 1px 5px;
  background-color: #959dad;
  color: white;
  border-radius: 4px;
  margin-left: 8px;
  font-size: 12px;
  font-weight: bold;
`;

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
        <FileContainer key={key}>
          {files.map((file) => {
            return (
              <File
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
          <Checkbox id={`CHECKBOX-${index}-${key}`} type="checkbox" />
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
