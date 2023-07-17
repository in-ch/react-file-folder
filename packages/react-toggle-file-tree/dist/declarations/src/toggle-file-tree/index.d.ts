import React, { MouseEventHandler } from 'react';
import { Directory } from "../utils/createFileTree.js";
interface ListProps {
    list: Directory;
    handleFileClick: MouseEventHandler<HTMLParagraphElement>;
    handleDirectoryClick: MouseEventHandler<HTMLParagraphElement>;
}
declare const ToggleFileTree: ({ list, handleFileClick, handleDirectoryClick, }: ListProps) => React.JSX.Element;
export default ToggleFileTree;
