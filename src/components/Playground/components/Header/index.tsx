import {
  DownloadOutlined,
  MoonOutlined,
  ShareAltOutlined,
  SunOutlined,
} from '@ant-design/icons';
import { message } from 'antd';
import copy from 'copy-to-clipboard';
import { useContext } from 'react';
import { PlaygroundContext } from '../../PlaygroundContext';
import { downloadFiles } from '../../utils';
import logo from './origin.png';

export default function Header() {
  const { files, theme, setTheme } = useContext(PlaygroundContext);

  return (
    <header className="header">
      <h1 className="logo">
        <img alt="logo" src={logo} />
        <span>React Playground</span>
      </h1>
      <div className="links">
        {theme === 'light' ? (
          <button
            type="button"
            className="action-btn theme"
            title="Switch to dark theme"
            aria-label="Switch to dark theme"
            onClick={() => setTheme('dark')}
          >
            <MoonOutlined />
          </button>
        ) : (
          <button
            type="button"
            className="action-btn theme"
            title="Switch to light theme"
            aria-label="Switch to light theme"
            onClick={() => setTheme('light')}
          >
            <SunOutlined />
          </button>
        )}
        <button
          type="button"
          className="action-btn"
          title="Copy sharable URL"
          aria-label="Copy sharable URL"
          onClick={() => {
            copy(window.location.href);
            message.success('分享链接已复制');
          }}
        >
          <ShareAltOutlined />
        </button>
        <button
          type="button"
          className="action-btn"
          title="Download project files"
          aria-label="Download project files"
          onClick={async () => {
            await downloadFiles(files);
            message.success('下载完成');
          }}
        >
          <DownloadOutlined />
        </button>
      </div>
    </header>
  );
}
