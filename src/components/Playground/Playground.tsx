import { Allotment } from 'allotment';
import 'allotment/dist/style.css';
import { useContext } from 'react';
import CodeEditor from './components/CodeEditor';
import Header from './components/Header';
import Preview from './components/Preview';
import './index.less';
import { PlaygroundContext } from './PlaygroundContext';

export default function ReactPlayground() {
  const { theme, setTheme } = useContext(PlaygroundContext);

  return (
    <div className={theme} style={{ height: '100vh' }}>
      <Header />
      <Allotment defaultSizes={[100, 100]}>
        <Allotment.Pane minSize={0}>
          <CodeEditor />
        </Allotment.Pane>
        <Allotment.Pane minSize={0}>
          <Preview />
        </Allotment.Pane>
      </Allotment>
    </div>
  );
}
