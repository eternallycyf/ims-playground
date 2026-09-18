<a name="readme-top"></a>

<div align="center">

[//]: # '<img width="160" src="https://avatars.githubusercontent.com/u/17870709?v=4">'

<h1>ims-playground</h1>

react playground

node 版本 24.x（Vercel 文档站构建）

[Changelog](./CHANGELOG.md) · [Report Bug][issues-url] · [Request Feature][issues-url]

<!-- SHIELD GROUP -->

[![NPM version][npm-image]][npm-url] [![NPM downloads][download-image]][download-url] [![install size][npm-size]][npm-size-url]

[![Test CI status][test-ci]][test-ci-url] [![Deploy CI][release-ci]][release-ci-url] [![Coverage][coverage]][codecov-url]

[![contributors][contributors-shield]][contributors-url] [![forks][forks-shield]][forks-url] [![stargazers][stargazers-shield]][stargazers-url] [![issues][issues-shield]][issues-url]

[![ docs by dumi][dumi-url]](https://d.umijs.org/) [![Build With father][father-url]](https://github.com/umijs/father/)

<!-- gitpod url -->

[gitpod-badge]: https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod
[gitpod-url]: https://gitpod.io/#https://github.com/ant-design/ims-playground

<!-- umi url -->

[dumi-url]: https://img.shields.io/badge/docs%20by-dumi-blue
[father-url]: https://img.shields.io/badge/build%20with-father-028fe4.svg

<!-- npm url -->

[npm-image]: http://img.shields.io/npm/v/ims-playground.svg?style=flat-square&color=deepgreen&label=latest
[npm-url]: http://npmjs.org/package/ims-playground
[npm-size]: https://img.shields.io/bundlephobia/minzip/ims-playground?color=deepgreen&label=gizpped%20size&style=flat-square
[npm-size-url]: https://packagephobia.com/result?p=ims-playground

<!-- coverage -->

[coverage]: https://codecov.io/gh/eternallycyf/ims-playground/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/eternallycyf/ims-playground/branch/master

<!-- Github CI -->

[test-ci]: https://github.com/eternallycyf/ims-playground/workflows/Test%20CI/badge.svg
[release-ci]: https://github.com/eternallycyf/ims-playground/workflows/Release%20CI/badge.svg
[test-ci-url]: https://github.com/eternallycyf/ims-playground/actions?query=workflow%3ATest%20CI
[release-ci-url]: https://github.com/eternallycyf/ims-playground/actions?query=workflow%3ARelease%20CI
[download-image]: https://img.shields.io/npm/dm/ims-playground.svg?style=flat-square
[download-url]: https://npmjs.org/package/ims-playground

</div>

## 简介

这是 react playground, 用于在线演示 react 组件。

vue 请参考: [Vue SFC Playground](https://play.vuejs.org/)

## 快速上手

### 安装

推荐使用 `pnpm` 安装

```bash
pnpm i ims-playground antd @ant-design/icons lodash
```

peer 依赖：`react`、`react-dom`、`antd`、`@ant-design/icons`、`lodash`

### 使用

```tsx
import { Playground, PlaygroundProvider } from 'ims-playground';

export default function App() {
  return (
    <PlaygroundProvider>
      <Playground />
    </PlaygroundProvider>
  );
}
```

自定义初始文件（`initialFiles` 优先于 URL hash；不传时仍可读 hash 分享）：

```tsx
import { Playground, PlaygroundProvider, initFiles } from 'ims-playground';
import type { Files } from 'ims-playground';

const files: Files = {
  ...initFiles,
  'App.tsx': {
    name: 'App.tsx',
    language: 'typescript',
    value: `/* 你的初始代码 */`,
  },
};

export default function App() {
  return (
    <PlaygroundProvider initialFiles={files}>
      <Playground />
    </PlaygroundProvider>
  );
}
```

组件内部会引入 `allotment` 样式与 playground less/css，确保构建工具能处理 CSS / Less。

### 更新记录

详情：[CHANGELOG](./CHANGELOG.md)

## 🤝 Contributing

<!-- CONTRIBUTION GROUP -->

> 📊 Total: <kbd>**1**</kbd>

<a href="https://github.com/eternallycyf" title="eternallycyf">
  <img src="https://avatars.githubusercontent.com/u/63464198?v=4" width="50" />
</a>

<!-- CONTRIBUTION END -->

<div align="right">

[![][back-to-top]](#readme-top)

## </div>

#### 📝 License

Copyright © 2020 - present [eternallycyf][profile-url]. <br />
This project is [MIT](./LICENSE) licensed.

<!-- LINK GROUP -->

[profile-url]: https://github.com/eternallycyf

<!-- SHIELD LINK GROUP -->

[back-to-top]: https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square

<!-- contributors -->

[contributors-shield]: https://img.shields.io/github/contributors/eternallycyf/ims-playground.svg?style=flat
[contributors-url]: https://github.com/eternallycyf/ims-playground/graphs/contributors

<!-- forks -->

[forks-shield]: https://img.shields.io/github/forks/eternallycyf/ims-playground.svg?style=flat
[forks-url]: https://github.com/eternallycyf/ims-playground/network/members

<!-- stargazers -->

[stargazers-shield]: https://img.shields.io/github/stars/eternallycyf/ims-playground.svg?style=flat
[stargazers-url]: https://github.com/eternallycyf/ims-playground/stargazers

<!-- issues -->

[issues-shield]: https://img.shields.io/github/issues/eternallycyf/ims-playground.svg?style=flat
[issues-url]: https://github.com/eternallycyf/ims-playground/issues/new/choose
