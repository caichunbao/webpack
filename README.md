## webpack
webpack是一个用于现代JavaScript应用程序的*静态模块打包工具*。当webpack处理应用程序时，它会在内部构建一个*依赖图（dependency graph）*，此依赖图对应映射到项目所需要的每个模块，并生成一个或多个bundle。

核心概念
- 入口（entry）
- 输出（output）
- loader
- 插件（plugin）
- 模式（mode）
- 浏览器兼容性（browser compatibility）
- 环境（environment）

## loader
webpack是基于node的模块化打包工具，它本身也只能处理JS和JSON文件，没有处理CSS、图片等其他格式文件的能力。loader就是将这些文件翻译成webpack能处理的格式。也就是loader赋予了webpack处理其他文件的能力。

loader特性
- 支持链式调用
- 可以同步，也可以异步
- loader运行在Node.js中，能够执行任何操作
- 可以通过options对象配置
- 插件能够更加丰富loader
- loader能够产生额外的任意文件

## 插件（plugin）
插件是webpack的支柱功能。webpack本身也是构建于webpack配置中用到的*相同的插件体系*之上。插件在于解决loader无法实现的其他事。

webpack*插件*是一个具有*apply*方法的JavaScript对象。apply方法会被webpack compiler调用，并且在整个编译生命周期都可以访问compiler对象。

而插件的用处，对于开发者来说就是可以接触到webpack构建流程中的各个阶段并劫持做一些代码的处理，对于使用者来说则是通过各类插件实现诸如自动生成HTML模板（html-webpack-plugin）、自动压缩图片（imagemin-webpack-plugin）等功能。


