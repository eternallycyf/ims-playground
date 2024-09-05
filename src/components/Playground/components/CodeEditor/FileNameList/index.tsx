import React, { useContext, useEffect, useState } from 'react';
import { APP_COMPONENT_FILE_NAME, ENTRY_FILE_NAME, IMPORT_MAP_FILE_NAME } from '../../../files';
import { PlaygroundContext } from '../../../PlaygroundContext';
import { FileNameItem } from './FileNameItem';
import './index.css';

export default function FileNameList() {
  const { files, removeFile, addFile, updateFileName, selectedFileName, setSelectedFileName } =
    useContext(PlaygroundContext);

  const [tabs, setTabs] = useState(['']);
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    setTabs(Object.keys(files));
  }, [files]);

  const handleEditComplete = (name: string, prevName: string) => {
    updateFileName(prevName, name);
    setSelectedFileName(name);
  };

  const addTab = () => {
    const newFileName = 'Comp' + Math.random().toString().slice(2, 8) + '.tsx';
    addFile(newFileName);
    setSelectedFileName(newFileName);
    setCreating(true);
  };

  const handleRemove = (name: string) => {
    removeFile(name);
    setSelectedFileName(ENTRY_FILE_NAME);
  };

  const readonlyFileNames = [ENTRY_FILE_NAME, IMPORT_MAP_FILE_NAME, APP_COMPONENT_FILE_NAME];

  return (
    <div className="tabs">
      {tabs.map((item, index, arr) => (
        <FileNameItem
          key={item + index}
          value={item}
          readonly={readonlyFileNames.includes(item)}
          creating={creating && index === arr.length - 1}
          actived={selectedFileName === item}
          onClick={() => setSelectedFileName(item)}
          onEditComplete={(name: string) => handleEditComplete(name, item)}
          onRemove={() => handleRemove(item)}
        ></FileNameItem>
      ))}
      <div className="add" onClick={addTab}>
        +
      </div>
    </div>
  );
}
