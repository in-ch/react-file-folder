import React from 'react';
import { RxTriangleRight } from 'react-icons/rx';

/**
 * @description Right Arrow component
 * @returns {JSX.Element}
 */
export default function ArrowRight(): JSX.Element {
  return (
    <RxTriangleRight size={25} style={{ position: 'relative', left: -10 }} />
  );
}

ArrowRight.displayName = 'ArrowRight';
