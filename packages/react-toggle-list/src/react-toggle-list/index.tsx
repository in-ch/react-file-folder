import React, { useState } from 'react';

import ArrowDown from './ArrowDown';
import ArrowRight from './ArrowRight';

interface ToggleItem {
  title: string;
  subItems: string[] | JSX.Element[];
}
interface ToggleListProps {
  items: ToggleItem;
  arrowRight?: JSX.Element;
  arrowDown?: JSX.Element;
}
/**
 * @param {ToggleItem} items title & subItems -> ToggleItem
 * @description Toggle list Component
 * @returns {JSX.Element}
 */
export default function ToggleList({
  items,
  arrowDown = <ArrowDown />,
  arrowRight = <ArrowRight />,
}: ToggleListProps): JSX.Element {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div>
      <div
        role="button"
        className="flex flex-row items-center cursor-pointer"
        onClick={() => setShow(!show)}
      >
        <div className="w-6">{show ? arrowDown : arrowRight}</div>
        <p>{items.title}</p>
      </div>
      {show && (
        <div className="flex flex-row mt-2" role="list">
          <div className="w-6"></div>
          <div>
            {items.subItems.map((subItem, index) => (
              <div role="listitem" key={`item-${subItem}-${index}`}>
                {subItem}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

ToggleList.displayName = 'ToggleList';
