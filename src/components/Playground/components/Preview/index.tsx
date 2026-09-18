import { debounce } from 'lodash';
import { useContext, useEffect, useMemo, useState } from 'react';
import { IMPORT_MAP_FILE_NAME } from '../../files';
import { PlaygroundContext } from '../../PlaygroundContext';
import { iframeTemplate } from '../../template/content';
import { Message } from '../Message';
import { compile } from './compiler';

interface MessageData {
  data: {
    type: string;
    message: string;
  };
}

export default function Preview() {
  const { files, theme } = useContext(PlaygroundContext);
  const [compiledCode, setCompiledCode] = useState('');
  const [error, setError] = useState('');

  const getIframeUrl = (code: string = compiledCode) => {
    const importMap = files[IMPORT_MAP_FILE_NAME].value.replaceAll(
      '__VITE_ORIGIN__',
      window.location.origin,
    );
    const res = iframeTemplate
      .replace(
        '<script type="importmap"></script>',
        `<script type="importmap">${importMap}</script>`,
      )
      .replace(
        '<script type="module" id="appSrc"></script>',
        `<script type="module" id="appSrc">${code}</script>`,
      );
    return URL.createObjectURL(new Blob([res], { type: 'text/html' }));
  };

  const [iframeUrl, setIframeUrl] = useState(() => getIframeUrl(''));

  const runCompile = useMemo(
    () =>
      debounce((nextFiles: typeof files) => {
        try {
          const res = compile(nextFiles);
          setCompiledCode(res);
          setError('');
        } catch (e) {
          setError(e instanceof Error ? e.message : String(e));
        }
      }, 500),
    [],
  );

  useEffect(() => {
    runCompile(files);
    return () => {
      runCompile.cancel();
    };
  }, [files, runCompile]);

  useEffect(() => {
    setIframeUrl(getIframeUrl());
  }, [files[IMPORT_MAP_FILE_NAME].value, compiledCode]);

  const handleMessage = (msg: MessageData) => {
    const { type, message } = msg.data;
    if (type === 'ERROR') {
      setError(message);
    }
  };

  useEffect(() => {
    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <div className={`preview-panel${theme === 'dark' ? ' dark-preview' : ''}`}>
      <div className="preview-toolbar">
        <span>Preview</span>
      </div>
      <iframe className="preview-frame" src={iframeUrl} title="playground-preview" />
      <Message type="error" content={error} />
    </div>
  );
}
