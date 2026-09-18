import React, { useEffect, useRef, useState } from 'react';

import { Popconfirm } from 'antd';
import './index.css';

export interface FileNameItemProps {
  value: string;
  actived: boolean;
  creating: boolean;
  readonly: boolean;
  onEditComplete: (name: string) => void;
  onRemove: () => void;
  onClick: () => void;
}

export const FileNameItem: React.FC<FileNameItemProps> = (props) => {
  const { value, actived = false, creating, readonly, onClick, onRemove, onEditComplete } = props;

  const [name, setName] = useState(value);
  const [editing, setEditing] = useState(creating);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (creating) {
      setEditing(true);
      inputRef.current?.focus();
    }
  }, [creating]);

  useEffect(() => {
    setName(value);
  }, [value]);

  const handleDoubleClick = () => {
    setEditing(true);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const handleInputBlur = () => {
    setEditing(false);
    onEditComplete(name);
  };

  return (
    <div
      className={['tab-item', actived && 'actived'].filter(Boolean).join(' ')}
      onClick={onClick}
    >
      {editing ? (
        <input
          ref={inputRef}
          className="tabs-item-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={handleInputBlur}
          onClick={(e) => e.stopPropagation()}
        />
      ) : (
        <>
          <span onDoubleClick={!readonly ? handleDoubleClick : undefined}>{name}</span>
          {!readonly ? (
            <Popconfirm
              title="确认删除该文件吗？"
              okText="确定"
              cancelText="取消"
              onConfirm={(e) => {
                e?.stopPropagation();
                onRemove();
              }}
            >
              <span
                className="tab-close"
                onClick={(e) => e.stopPropagation()}
                aria-label={`Remove ${name}`}
              >
                <svg width="10" height="10" viewBox="0 0 24 24" aria-hidden>
                  <line stroke="currentColor" strokeWidth="2" x1="18" y1="6" x2="6" y2="18" />
                  <line stroke="currentColor" strokeWidth="2" x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </span>
            </Popconfirm>
          ) : null}
        </>
      )}
    </div>
  );
};
