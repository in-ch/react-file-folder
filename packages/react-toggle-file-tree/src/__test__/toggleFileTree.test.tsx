import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { createFileTree, Directory, ToggleFileTree } from '..';
import { mock_list } from './mock';

describe('TEST ToggleFileTree', () => {
  const handleFileClickMock = jest.fn();
  const handleDirectoryClickMock = jest.fn();
  it('ToggleFileTree snapshot test', () => {
    const { container } = render(
      <ToggleFileTree
        list={createFileTree(mock_list) as Directory}
        handleFileClick={handleFileClickMock}
        handleDirectoryClick={handleDirectoryClickMock}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it('ToggleFileTree rendering filename test', () => {
    render(
      <ToggleFileTree
        list={createFileTree(mock_list) as Directory}
        handleFileClick={handleFileClickMock}
        handleDirectoryClick={handleDirectoryClickMock}
      />
    );
    for (let i = 0; i < mock_list.length; i++) {
      const test = mock_list[i].fileName;
      const toggleElement = screen.getByText(test);
      expect(toggleElement).toBeInTheDocument();
    }
  });
});
