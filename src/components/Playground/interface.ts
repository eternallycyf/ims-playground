import { EditorProps as monacoEditorProps } from '@monaco-editor/react';
import { editor } from 'monaco-editor';

export interface EditorFile {
  name: string;
  value: string;
  language: string;
}

export interface EditorProps {
  file: EditorFile;
  onChange?: monacoEditorProps['onChange'];
  options?: editor.IStandaloneEditorConstructionOptions;
}
