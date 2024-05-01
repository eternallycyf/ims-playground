import { Allotment } from 'allotment';
import 'allotment/dist/style.css';
import CodeEditor from './components/CodeEditor';
import Header from './components/Header';
import Preview from './components/Preview';
import './index.less';

export default function ReactPlayground() {
  return (
    <div style={{ height: '100vh' }}>
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
