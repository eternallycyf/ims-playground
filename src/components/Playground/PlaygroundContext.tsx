import React, { createContext, useEffect, useState, type PropsWithChildren } from 'react';
import { initFiles } from './files';
import { compress, fileName2Language, uncompress } from './utils';

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

const getFilesFromUrl = () => {
  let files: Files | undefined;
  try {
    const raw = window.location.hash.slice(1);
    if (!raw) return undefined;
    // support both plain and encodeURIComponent hashes
    const hash = (() => {
      try {
        return decodeURIComponent(raw);
      } catch {
        return raw;
      }
    })();
    files = JSON.parse(uncompress(hash));
  } catch (error) {
    console.error(error);
  }
  return files;
};

export const PlaygroundContext = createContext<PlaygroundContextProps>({
  selectedFileName: 'App.tsx',
} as PlaygroundContextProps);

export interface PlaygroundProviderProps extends PropsWithChildren {
  /** 覆盖默认模板；URL hash 仍优先 */
  initialFiles?: Files;
}

export const PlaygroundProvider = (props: PlaygroundProviderProps) => {
  const { children, initialFiles } = props;
  const [files, setFiles] = useState<Files>(getFilesFromUrl() || initialFiles || initFiles);
  const [selectedFileName, setSelectedFileName] = useState('App.tsx');
  const [theme, setTheme] = useState<Theme>('dark');

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

  useEffect(() => {
    const hash = compress(JSON.stringify(files));
    window.location.hash = hash;
  }, [files]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

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
