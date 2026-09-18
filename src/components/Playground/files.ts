import { Files } from './PlaygroundContext';
import {
  appCssTemplate,
  appTemplate,
  importMapTemplate,
  mainTemplate,
} from './template/content';
import { fileName2Language } from './utils';

/** app 文件名 */
export const APP_COMPONENT_FILE_NAME = 'App.tsx';
/** esm 模块映射文件名 */
export const IMPORT_MAP_FILE_NAME = 'import-map.json';
/** app 入口文件名 */
export const ENTRY_FILE_NAME = 'main.tsx';

export const initFiles: Files = {
  [ENTRY_FILE_NAME]: {
    name: ENTRY_FILE_NAME,
    language: fileName2Language(ENTRY_FILE_NAME),
    value: mainTemplate,
  },
  [APP_COMPONENT_FILE_NAME]: {
    name: APP_COMPONENT_FILE_NAME,
    language: fileName2Language(APP_COMPONENT_FILE_NAME),
    value: appTemplate,
  },
  'App.css': {
    name: 'App.css',
    language: 'css',
    value: appCssTemplate,
  },
  [IMPORT_MAP_FILE_NAME]: {
    name: IMPORT_MAP_FILE_NAME,
    language: fileName2Language(IMPORT_MAP_FILE_NAME),
    value: importMapTemplate,
  },
};
