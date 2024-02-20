import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ReactToggleList } from '..';

describe('TEST ReactToggleList', () => {
  it('ReactToggleList Snapshot test', () => {
    const mock_list = {
      title: 'toggle',
      subItems: [
        <p onClick={() => alert('T')}>T</p>,
        <p onClick={() => alert('E')}>E</p>,
        <p onClick={() => alert('S')}>S</p>,
        <p onClick={() => alert('T')}>T</p>,
      ],
    };
    const { container } = render(<ReactToggleList items={mock_list} />);
    expect(container).toMatchSnapshot();
  });

  it('ReactToggleList Rendering', () => {
    const title = 'toggle';
    const mock_list = {
      title,
      subItems: [
        <p onClick={() => alert('T')}>T</p>,
        <p onClick={() => alert('E')}>E</p>,
      ],
    };
    render(<ReactToggleList items={mock_list} />);
    const toggleElement = screen.getByText(title);
    expect(toggleElement).toBeInTheDocument();
  });

  it('ReactToggleList init list is not showing', () => {
    const title = '토그리토글';
    const mock_list = {
      title,
      subItems: [
        <p onClick={() => alert('T')}>T</p>,
        <p onClick={() => alert('E')}>E</p>,
      ],
    };
    render(<ReactToggleList items={mock_list} />);
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });

  it('ReactToggleList Button click event', () => {
    const title = 'toggle';
    const mock_list = {
      title,
      subItems: [
        <p onClick={() => alert('T')}>T</p>,
        <p onClick={() => alert('E')}>E</p>,
      ],
    };
    render(<ReactToggleList items={mock_list} />);
    const toggleElement = screen.getByRole('button');
    fireEvent.click(toggleElement);
    expect(screen.getByRole('list')).toBeInTheDocument();
    fireEvent.click(toggleElement);
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });
});
