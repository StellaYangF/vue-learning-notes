# Vue 框架搭建简易的 Saas 系统

## 前言

**初衷**本文主要记录 **Vue.js** 框架搭建一个简易 Web 应用的实践方式。

**适合人群**本文适合对 **Vue.js** 小白较为适合。

**内容结构**主要分为 x 个部分：

- 项目构建

> 温馨提示：本文技术选型为 Vue, Express, Mongo, Redis

## 项目构建

### 初始化

```bash
vue ui
```

> 通过可视化构建

### 勾选插件、依赖

- axios 异步请求库
- element-ui UI 框架
- uuid 生成唯一标识

### 项目目录

src 目录为项目核心代码目录

```bash
src
    ├── main.js 打包的入口文件
    ├── App.vue 根组件渲染实例
    ├── api 异步请求接口 API
    │   ├── article.js
    │   ├── public.js
    │   ├── user.js
    │   └── config 每个请求的接口配置
    ├── config 存放 baseURL 等配置项
    ├── plugins Vue 插件
    ├── router
    ├── store
    ├── utils 工具函数库
    ├── components 组件
    ├── assets 资源
    └── views 视图
```

构建项目主要文件目录

## 总结

## 参考文档
