import classnames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import './index.css';

export interface FileNameItemProps {
  value: string;
  actived: boolean;
  onClick: () => void;
}

export const FileNameItem: React.FC<FileNameItemProps> = (props) => {
  const { value, actived = false, onClick } = props;

  const [name, setName] = useState(value);

  return (
    <div className={classnames('tab-item', actived ? 'actived' : null)} onClick={onClick}>
      <span>{name}</span>
    </div>
  );
};
