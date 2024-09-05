import React, { createContext, useState, type PropsWithChildren } from 'react';
import { initFiles } from './files';
import { fileName2Language } from './utils';

export interface File {
  name: string;
  value: string;
  language: string;
}

export interface Files {
  [key: string]: File;
}

export type Theme = 'light' | 'dark';

export interface PlaygroundContextProps {
  files: Files;
  selectedFileName: string;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  setSelectedFileName: (fileName: string) => void;
  setFiles: (files: Files) => void;
  addFile: (fileName: string) => void;
  removeFile: (fileName: string) => void;
  updateFileName: (oldFieldName: string, newFieldName: string) => void;
}

export const PlaygroundContext = createContext<PlaygroundContextProps>({
  selectedFileName: 'App.tsx',
} as PlaygroundContextProps);

export const PlaygroundProvider = (props: PropsWithChildren) => {
  const { children } = props;
  const [files, setFiles] = useState<Files>(initFiles);
  const [selectedFileName, setSelectedFileName] = useState('App.tsx');
  const [theme, setTheme] = useState<Theme>('light');

  const addFile = (name: string) => {
    files[name] = {
      name,
      language: fileName2Language(name),
      value: '',
    };
    setFiles({ ...files });
  };

  const removeFile = (name: string) => {
    delete files[name];
    setFiles({ ...files });
  };

  const updateFileName = (oldFieldName: string, newFieldName: string) => {
    if (!files[oldFieldName] || newFieldName === undefined || newFieldName === null) return;
    const { [oldFieldName]: value, ...rest } = files;
    const newFile = {
      [newFieldName]: {
        ...value,
        language: fileName2Language(newFieldName),
        name: newFieldName,
      },
    };
    setFiles({
      ...rest,
      ...newFile,
    });
  };

  return (
    <PlaygroundContext.Provider
      value={{
        theme,
        setTheme,
        files,
        selectedFileName,
        setSelectedFileName,
        setFiles,
        addFile,
        removeFile,
        updateFileName,
      }}
    >
      {children}
    </PlaygroundContext.Provider>
  );
};
