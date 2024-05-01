import MonacoEditor, { OnMount } from '@monaco-editor/react';
import fs from 'fs';
import type { EditorProps } from '../../interface';
import { createATA } from './ata';

export default function Editor(props: EditorProps) {
  const { file, onChange, options } = props;

  const handleEditorMount: OnMount = (editor, monaco) => {
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyJ, () => {
      editor.getAction('editor.action.formatDocument')?.run();
      // let actions = editor.getSupportedActions().map((a) => a.id);
      // console.log(actions);
    });

    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
      jsx: monaco.languages.typescript.JsxEmit.Preserve,
      esModuleInterop: true,
    });

    const ata = createATA((code, path) => {
      monaco.languages.typescript.typescriptDefaults.addExtraLib(code, `file://${path}`);
    });

    editor.onDidChangeModelContent(() => {
      ata(editor.getValue());
    });

    ata(editor.getValue());
  };

  return (
    <MonacoEditor
      height="100%"
      path={file.name}
      language={file.language}
      onMount={handleEditorMount}
      onChange={onChange}
      value={file?.value}
      options={{
        minimap: { enabled: false },
        wordWrap: 'on',
        fontSize: 14,
        fontFamily: 'Menlo',
        formatOnPaste: true,
        formatOnType: true,
        automaticLayout: true,
        scrollBeyondLastLine: false,
        scrollbar: { verticalScrollbarSize: 6, horizontalSliderSize: 6 },
        ...options,
      }}
    />
  );
}
