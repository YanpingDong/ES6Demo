# WebPack

1. 一个js模块，可以用npm进行安装。
2. WebPack可以看做是模块打包机：它做的事情是，**分析你的项目结构** ，找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（Scss，TypeScript等），并将其  **转换和打包** 为合适的格式供浏览器使用。

　　Webpack的工作方式是：把你的项目当做一个整体，通过一个给定的主文件（如：index.js），Webpack将从这个文件开始找到你的项目的所有依赖文件，使用loaders处理它们，最后打包为一个（或多个）浏览器可识别的JavaScript文件。

即然是webpack是npm管理的一个包，所以自然可以使用`npm install`命令进行安装。 `npm install webpack -g`


![](webpackProcess.png)

# 为什要使用WebPack

1. 模块化：很多JS模块都使用npm进行管理，并且es6语法可以用import来引入，还有CommonJs/AMD社区方案的require
2. 类似于TypeScript这种在JavaScript基础上拓展的开发语言：使我们能够实现目前版本的JavaScript不能直接使用的特性
3. CSS模块化： Scss，less等
4. ... ...

　　以上的特点大大的提高了我们的开发效率，但是利用它们开发的文件往往需要进行额外的处理才能让浏览器识别,而手动处理又是非常繁琐的，这就为WebPack类的工具的出现提供了需求。

　　比如我们使用了require来导入模块，那么浏览器是不可以直接使用的。那么我们可以使用以下命令做转换

```
# {extry file}出填写入口文件的路径，本文中就是上述main.js的路径，
# {destination for bundled file}处填写打包文件的存放路径
# 填写路径的时候不用添加{}
webpack {entry file} {destination for bundled file}
```
如下示例main.js引入greeter.js

```
app/Greater.js
module.exports = function() {
  var greet = document.createElement('div');
  greet.textContent = "Hi there and greetings!";
  return greet;
};
```

在main.js中用require引入

```
app/main.js
const greeter = require('./Greeter.js'); //和main.js在同一目录
document.querySelector("#root").appendChild(greeter());
```

然后使用 `webpack app/main.js public/bundle.js` webpack命令将main.js转成bundle.js，即浏览器可运行的js。里面的内容如下：

```
(function(modules) { // webpackBootstrap
 // The module cache
 var installedModules = {};

 // The require function
 function __webpack_require__(moduleId) {

   // Check if module is in cache
   if(installedModules[moduleId]) {
     return installedModules[moduleId].exports;
   }
   // Create a new module (and put it into the cache)
   var module = installedModules[moduleId] = {
     i: moduleId, // i mean moduleId
     l: false,  //l mean if load?
     exports: {}
   };

   // Execute the module function 即执行后面实参传入的回调函数,将模块的对象绑定到module.exports字典中
   modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

   // Flag the module as loaded
   module.l = true;

   // Return the exports of the module
   return module.exports;
 }


 // expose the modules object (__webpack_modules__)
 __webpack_require__.m = modules;

 // expose the module cache
 __webpack_require__.c = installedModules;

 // define getter function for harmony exports
 __webpack_require__.d = function(exports, name, getter) {  
   if(!__webpack_require__.o(exports, name)) {
     Object.defineProperty(exports, name, {
       configurable: false,
       enumerable: true,
       get: getter
     });
   }
 };

 // Load entry module and return exports
 return __webpack_require__(__webpack_require__.s = 0);
})
/*********************************后面是立即执行函数参数***************************************/
([
/* 0 */
/***/ (function(module, exports, webpack_require) {

//main.js
const greeter = webpack_require(1);
document.querySelector("#root").appendChild(greeter());

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function() {
 var greet = document.createElement('div');
 greet.textContent = "Hi there and greetings!";
 return greet;
};

/***/ })
]);
```

可以看到转换成了一个立即执行函数

然后在html文件中引入bundle.js如下,这样就可以使用转换后的js代码了。

```
//public/index.html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Webpack Sample Project</title>
  </head>
  <body>
    <div id='root'>
    </div>
    <script src="bundle.js"></script>
  </body>
</html>
```

[Source Code](webpackDemo)

# 构建本地服务器

　　想让你的浏览器监听你的代码的修改，并自动刷新显示修改后的结果，其实Webpack提供一个可选的本地开发服务器，这个本地服务器基于node.js构建，可以实现你想要的这些功能，不过它是一个单独的组件，在webpack中进行配置之前需要单独安装它作为项目依赖

`
//安装到本地即可，给开发始用
npm install --save-dev webpack-dev-server
`

# Loaders

　　通过使用不同的loader，webpack有能力调用外部的脚本或工具，实现对不同格式的文件的处理，比如说分析转换scss为css，或者把下一代的JS文件（ES6，ES7)转换为现代浏览器兼容的JS文件，对React的开发而言，合适的Loaders可以把React的中用到的JSX文件转换为JS文件。

　　Loaders需要单独安装并且需要在webpack.config.js中的 **modules** 关键字下进行配置，Loaders的配置包括以下几方面：

1. test：一个用以匹配loaders所处理文件的拓展名的正则表达式（必须）
2. loader：loader的名称（必须）
3. include/exclude:手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）（可选）；
4. query：为loaders提供额外的设置选项（可选）

## Babel

　　Babel其实是一个编译JavaScript的平台，它可以编译代码帮你达到以下目的：

1. 让你能使用最新的JavaScript代码（ES6，ES7...），而不用管新标准是否被当前使用的浏览器完全支持；

2. 让你能使用基于JavaScript进行了拓展的语言，比如React的JSX；


**Babel的安装与配置**

Babel其实是几个模块化的包，其核心功能位于称为babel-core的npm包中，webpack可以把其不同的包整合在一起使用，对于每一个你需要的功能或拓展，你都需要安装单独的包（用得最多的是解析Es6的babel-env-preset包和解析JSX的babel-preset-react包）。

我们先来一次性安装这些依赖包

```
// npm一次性安装多个依赖模块，模块之间用空格隔开
npm install --save-dev babel-core babel-loader babel-preset-env babel-preset-react
```
在webpack中配置Babel的方法如下:

```
module.exports = {
    entry: __dirname + "/app/main.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/public",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "env", "react"
                        ]
                    }
                },
                exclude: /node_modules/
            }
        ]
    }
};
```

经过上面的步骤webpack的配置已经允许你使用ES6以及JSX的语法了。现在可进行测试详细代码见[ES6ReactDemo](ES6ReactDemo)，记得先安装 React 和 React-DOM，要不然你的代码中是无法引用React模块。

```
npm install --save react react-dom
```

参考: [入门Webpack，看这篇就够了](https://www.jianshu.com/p/42e11515c10f) ; [一小时包教会 —— webpack 入门指南](https://www.cnblogs.com/vajoy/p/4650467.html)
