import '../../index.less';

import { DownloadOutlined, MoonOutlined, ShareAltOutlined, SunOutlined } from '@ant-design/icons';
import { message } from 'antd';
import copy from 'copy-to-clipboard';
import { useContext } from 'react';
import { PlaygroundContext } from '../../PlaygroundContext';
import { downloadFiles } from '../../utils';

export default function Header() {
  const { files, theme, setTheme } = useContext(PlaygroundContext);

  return (
    <div className="header">
      <div className="logo">
        <img
          alt="logo"
          style={{ width: 16, height: 16 }}
          src="https://ims-view.site/images/origin.png"
        />
        <span>React Playground</span>
      </div>
      <div className="links">
        {theme === 'light' && (
          <MoonOutlined title="切换暗色主题" className="theme" onClick={() => setTheme('dark')} />
        )}
        {theme === 'dark' && (
          <SunOutlined title="切换亮色主题" className="theme" onClick={() => setTheme('light')} />
        )}
        <ShareAltOutlined
          style={{ marginLeft: '10px' }}
          onClick={() => {
            copy(window.location.href);
            message.success('分享链接已复制。');
          }}
        />
        <DownloadOutlined
          style={{ marginLeft: '10px' }}
          onClick={async () => {
            await downloadFiles(files);
            message.success('下载完成');
          }}
        />
      </div>
    </div>
  );
}
