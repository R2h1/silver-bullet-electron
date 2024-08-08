<h1 align="center">electron-vue3-ts template</h1>

<p align="center">
<img src="https://img.shields.io/github/package-json/dependency-version/alex8088/electron-vite-boilerplate/dev/electron" alt="electron-version">
<img src="https://img.shields.io/github/package-json/dependency-version/alex8088/electron-vite-boilerplate/dev/electron-vite" alt="electron-vite-version" />
<img src="https://img.shields.io/github/package-json/dependency-version/alex8088/electron-vite-boilerplate/dev/electron-builder" alt="electron-builder-version" />
<img src="https://img.shields.io/github/package-json/dependency-version/alex8088/electron-vite-boilerplate/dev/vite" alt="vite-version" />
<img src="https://img.shields.io/github/package-json/dependency-version/alex8088/electron-vite-boilerplate/dev/vue" alt="vue-version" />
<img src="https://img.shields.io/github/package-json/dependency-version/alex8088/electron-vite-boilerplate/dev/typescript" alt="typescript-version" />
<img src="https://img.shields.io/github/package-json/dependency-version/alex8088/electron-vite-boilerplate/dev/typescript" alt="typescript-version" />
</p>

## Features

- 💡 优化 Electron 主进程的资源处理
- 🚀 渲染器（renderer processes）支持模块热替换（HMR）
- 🔥 主进程和预加载脚本支持热重载(Hot reloading)
- 🔌 易于调试
- 🔒 编译为 V8 字节码以保护源代码

## Getting Started

更多细节请阅读 [文档](https://cn.electron-vite.org/).

## Project Setup

### Install

```bash
$ npm install
```

### Development

```bash
$ npm run dev
```

### Build

```bash
# For windows
$ npm run build:win

# For macOS
$ npm run build:mac

# For Linux
$ npm run build:linux
```

## Examples

- [electron-vite-bytecode-example](https://github.com/alex8088/electron-vite-bytecode-example), source code protection
- [electron-vite-decorator-example](https://github.com/alex8088/electron-vite-decorator-example), typescipt decorator
- [electron-vite-worker-example](https://github.com/alex8088/electron-vite-worker-example), worker and fork
