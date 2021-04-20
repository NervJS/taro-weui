# WEUI

> Taro v3.3+

在 Taro 中使用微信官方组件库 [WEUI](https://github.com/Tencent/weui)。

`WEUI` 官方示例：https://weui.io/。

## Getting Start

```bash
# 安装 CLI
npm i @tarojs/cli@next -g

# 启动项目
cd taro-antd
npm i
taro build --type weapp --watch
```

## 兼容工作

相对于官方示例的 H5 代码，本项目主要做了以下兼容工作：

### 1. `<body>`

`<body>` 标签使用 `<div className='h5-body'>` 进行模拟。

### 2. 浏览器默认样式

#### 方式一、开发者可以选择在全局引入浏览器的默认样式

Taro 提供两种内置样式我们可以直接引入生效：

- `@tarojs/taro/html.css`: W3C HTML4 的内置样式，只有 HTML4 标签样式，体积较小，兼容性强，能适应大多数情况。
- `@tarojs/taro/html5.css`: Chrome(Blink) HTML5 的内置样式，内置样式丰富，包括了大多数 HTML5 标签，体积较大，不一定支持所有小程序容器。

```scss
// app.css
// html4
import '@tarojs/taro/html.css';
// html5
import '@tarojs/taro/html5.css';
```

#### 方式二、只摘取部分需要的浏览器默认样式

以往编写 H5 应用时，我们常常会写一些样式去重置浏览器默认样式。所以一般情况不需要引入，或者可以手动挑选必须的样式。

```scss
// app.css
// 以下是为了适配 VantUI 项目所需要的默认样式
.h5-span {
  display: inline;
}
```

### 3. 尺寸单位

Taro 默认会对开发者编写的尺寸进行转换：

- 小程序：px -> rpx
- H5：px -> rem

但是组件库一般按照 750px 设计稿的 1/2 编写尺寸，Taro 不需要再对组件库的尺寸进行转换。

可以配置 `@tarojs/plugin-html` 的 `pxtransformBlackList` 选项进行过滤：

```js
// config/index.js
config = {
  plugins: [
    ['@tarojs/plugin-html', {
      // 过滤 weui 组件库的前缀：weui
      pxtransformBlackList: [/page|h5|weui/]
    }]
  ]
  // ...
}
```

### 4. 样式选择器

以下选择器不能正常工作：

- 通配符 `*`
- 媒体查询
- 属性选择器，当属性不是对应小程序组件的内置属性时
