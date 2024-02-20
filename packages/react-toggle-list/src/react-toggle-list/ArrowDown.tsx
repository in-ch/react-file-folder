import React from 'react';
import { RxTriangleDown } from 'react-icons/rx';

/**
 * @description Down Arrow component
 * @returns {JSX.Element}
 */
export default function ArrowDown(): JSX.Element {
  return (
    <RxTriangleDown size={25} style={{ position: 'relative', left: -10 }} />
  );
}

ArrowDown.displayName = 'ArrowDown';
