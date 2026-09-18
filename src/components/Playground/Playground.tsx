import { Allotment } from 'allotment';
import 'allotment/dist/style.css';
import { useContext } from 'react';
import CodeEditor from './components/CodeEditor';
import Header from './components/Header';
import Preview from './components/Preview';
import './index.less';
import { PlaygroundContext } from './PlaygroundContext';

export default function ReactPlayground() {
  const { theme } = useContext(PlaygroundContext);

  return (
    <div className={`ims-playground ${theme}`}>
      <Header />
      <div className="playground-body">
        <Allotment defaultSizes={[100, 100]}>
          <Allotment.Pane minSize={120}>
            <CodeEditor />
          </Allotment.Pane>
          <Allotment.Pane minSize={120}>
            <Preview />
          </Allotment.Pane>
        </Allotment>
      </div>
    </div>
  );
}
