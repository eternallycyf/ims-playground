import { debounce } from 'lodash';
import { useContext } from 'react';
import { PlaygroundContext } from '../../PlaygroundContext';
import Editor from './Editor';
import FileNameList from './FileNameList';

export default function CodeEditor() {
  const { files, setFiles, selectedFileName, theme } = useContext(PlaygroundContext);

  const file = files[selectedFileName];

  function onEditorChange(value?: string) {
    files[file.name].value = value!;
    setFiles({ ...files });
  }

  return (
    <div className="editor-panel">
      <FileNameList />
      <div style={{ flex: 1, minHeight: 0 }}>
        <Editor
          file={file}
          onChange={debounce(onEditorChange, 500)}
          options={{ theme: `vs-${theme}` }}
        />
      </div>
    </div>
  );
}
