# JavaScript
　  JS，是JavaScript的缩写形式。JS可以理解成为一种用来依据事件或依据数据进行条件判断进而操作HTML DOM的脚本语言。比如增、删、隐藏、改变显示样式（即改变CSS）等操作。有如下比喻还是比较形像：

  > 如果把网站建设比喻成盖楼房，那么HTML就是这个楼房的钢筋水泥，CSS就是楼房的布局装饰，而JS就是楼房中大大小小无处不在的开关了。从这样的角度而言，JS就是Web开发中负责逻辑层的语言，而现如今相当火热的“用户体验”的概念，最重要的代码部分还是需要JS来编写。

　　从上面的比喻可以清析的知道，HTML是用来做各种布局控制，CSS用来做各种效果渲染的。JS就是用来操控HTML和CSS。**但其实JS还会向后端发送请求获取数据，然后依据数据重新操作HTML和CSS再次渲染界面**。

　　也就是说HTML+CSS只是一个静态的HTML页面，而各种交互效果比如点击响应，图片切换等需要使用JS，即JS用来操作这些页面无素（DOM元素）。所以需要注意只要结构加载完的页面元素才可以获取到，这也就是为什么CSS会放在HTML BODY体头而JS放到HTML BODY尾的一个原因。

**目前大部分项目会把CSS引入放到BODY 中的Head里，而JS引入放到BODY尾**

> 如果把JS放到了HTML头，可以使用如下方式等到所有结构加载完成后再加载JS
> 1. JS： window.onload=function(){}，是JS的标准做法，等页面所有资源文件都加载完成后再执行
> 2. JQ：$(document).ready(function(){}),是JQuery的方式
> 3. window.addEventListenner('load', function(){}, false), 但这咱方式不兼容IE 6 7 8.
> 4. IE 6 7 8下 window.attachEvent('onreadystatechange',function(){})

# DOM
　　文档对象模型（Document Object Model，简称DOM），是W3C组织推荐的处理可扩展标志语言的标准编程接口。在网页上，组织页面（或文档）的对象被组织在一个树形结构中，用来表示文档中对象的标准模型就称为DOM。HTM的DOM如下图所示：

![](pic/dom.jpg)

# 什么是ES6
　　网上标准定义：ECMAScript 6.0（以下简称 ES6）是 JavaScript 语言的下一代标准，已经在 2015 年 6 月正式发布了。它的目标，是使得 JavaScript 语言可以用来编写复杂的大型应用程序，成为企业级开发语言。

　　1996 年 11 月，JavaScript 的创造者 Netscape 公司，决定将 JavaScript 提交给国际标准化组织 ECMA，希望这种语言能够成为国际标准。次年ECMA组织就发布了规定浏览器脚本语言的标准，称为ECMAScript。因此可以理解为ECMAScript是JavaScript的规格，后者是其的实现。

　　标准委员会决定，标准在每年的 6 月份正式发布一次，作为当年的正式版本。接下来的时间，就在这个版本的基础上做改动，直到下一年的 6 月份，草案就自然变成了新一年的版本。这样一来，就不需要以前的版本号了，只要用年份标记就可以了。所以ESO的正式名称为《ECMAScript 2015 标准》（简称 ES2015）

　　因此，ES6 既是一个历史名词，也是一个泛指，含义是 5.1 版以后的 JavaScript 的下一代标准，涵盖了 ES2015、ES2016、ES2017 等等，而 ES2015 则是正式名称，特指该年发布的正式版本的语言标准。 `更多细节可看《ECMAScript 6 入门》 以上只是部分摘录`

# 常用浏览器内核
　　浏览器内核是JS运行环境，JS程序在其中解析并执行。常见的浏览器内核如下：
  - 谷歌浏览器（chrome）: Webkit内核（v8引擎）`目前v8也用在 NodeJS, MongoDB, CouchDB中， safari 360 QQ  UC ，安卓和IOS大部分手机浏览器都是用的该内核`
  - 火狐浏览器（firefox）: Gecko内核
  - 欧朋浏览器（opera）：Presto内核 `Opera12.17及更早版本曾经采用的内核，现已停止开发并废弃，该内核在2003年的Opera7中首次被使用，该款引擎的特点就是渲染速度的优化达到了极致，然而代价是牺牲了网页的兼容性`
  - IE浏览器：Trident内核

  > 浏览器最重要或者说核心的部分是“Rendering Engine”，可大概译为“渲染引擎”，不过我们一般习惯将之称为“浏览器内核”。负责对网页语法的解释（如标准通用标记语言HTML、JavaScript）按语法命令指示要求渲染（显示）网页。 所以，通常所谓的浏览器内核也就是浏览器所采用的渲染引擎，渲染引擎决定了浏览器如何显示网页的内容以及页面的格式信息。不同的浏览器内核对网页编写语法的解释也有不同，因此同一网页在不同的内核的浏览器里的渲染（显示）效果也可能不同，这也是网页编写者需要在不同内核的浏览器中测试网页显示效果的原因。 (见baidu百科)

　　直白的说内核的做用就是识别HTML CSS JS按其要求渲染绘制页面。

## 浏览器兼容
  - W3C发布的规范是开发者们总节开发者总结的产物，比如： 谷歌浏览器开发了一个新的CSS属性（border-radius）用来快速实现盒子圆角（内核会针对该CSS属性进行内核操作）。后来火狐浏览器也实现了该属性。最后慢慢在部分内核也都加入了该属性。然后W3C会将其融入到规范中。从中体现出了W3C的滞后性。
  - 每个浏览器内核会自己开发一些自有的特性，其它内核可能由于其它原因也不支持。或者有的内核不按W3C实现其定义的标准。

# 页面如何加载JS代码
　　通用说法为如何导入，在浏览器加载页面的时候会加载JS，我们需要做的只是告知浏览器如何加载即导入。

- 行内导入：即在HTML页面中直接写入JS代码。这种方式不安全，第三方可能会注入不安全代码

```
<div onclick="alert('hello world')">这是行内导入</div>
```

- 内嵌式：在script代码块中写JS代码

```
<script>alert('hello world')</script>
```

- 外链式：用script标签将写有JS代码的文件导入

```
import.js文件：
alert('hello world')

index.html文件：
<script src="import.js file path/import.js"></script>
```
**内嵌式导入的代码直接写入外链式导入的script块中，写入外链式导入的script块中的代码是不会被执行**


# 页面如何加载CSS代码
- 行内导入：HTML和CSS混合，代码结构混乱

```
<div style="width:100px"></div>
```
- 内嵌式：写在style块中

```
<style>
  div {
    width: 100px;
  }
</style>
```
- 外链式：和JS外链一样，从外部文件引入

```
import.css
div{
  width: 100px;
}

index.HTML
<link rel="stylesheet" href="import.css path/import.css">
```

- 导入式：在内嵌式中用@import进行导入

```
<style>
  @import "import.css path/import.css"
</style>
```

> 　　使用链接式的css是客户端浏览你的网页时先将外部的CSS文件加载到网页当中，然后再进行编译显示，所以这种情况下显示出来的网页跟我们预期的效果一样，即使网速再慢也是一样的效果。而使用@import导入的CSS就不同了，客户端在浏览网页时是先将html的结构呈现出来，再把外部的CSS文件加载到网页当中，当然最终的效果也是跟前者是一样的，只是当网速较慢时会出现先显示没有CSS统一布局时的html网页，这样就会给阅读者很不好的感觉。这也是现在大部分网站的CSS都采用链接方式的最主要原因;

>　　导入样式可以避免过多页面指向一个css文件。当网站中使用同一个CSS文件的页面不是非常多时，这两种方式在效果方面几乎是没有不同的，但网站的页面数达到一定程度时(比如新浪等门户)，如果采用链接的方式可能就会使得由于多个页面调用同一个CSS文件而造成速度下降


```
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Webpack Sample Project</title>
	<link rel="stylesheet" href="http://cdn.static.runoob.com/libs/bootstrap/3.3.7/css/bootstrap.min.css">  
  </head>
  <body>
    <script src="app.js"></script>
  </body>
</html>
```

# JS常见输出方式

1. alert：弹出提示框，提示的内容最后都会转成字符串输出。使用了toString这个方法。例：alert({name: 'zhufeng'}); //=>"object Object"。 [DEMO:[alertDemo](SimpleDemo/alertDemo.html)]

2. confirm：比alert多了一个[取消]按钮，返回值是一个bool量来表明点击的是[确定]还是[取消]按键。和alert一样提示的内容最后都会转成字符串输出。 [DEMO:[confirmDemo](SimpleDemo/confirmDemo.html)]

3. prompt：在confirm基础上加了输入对话框,实际有三种值a.点取消是null;b.点确定但没有输入任何值是空字串；c.如果有输入则返回的是输入数据。同样和alert一样提示的内容最后都会转成字符串输出。[DEMO:[promptDemo](SimpleDemo/promptDemo.html)]

4. console对象：以上三种是交互所有，当然也可以用来做调试，但调试过程中使用控制台来进行出来对于程序员来讲是很方便的一种方式。这种方式不会转换数据类型。其中的方法罗列如下，细节可以看Demo。console.dir、console.table | console.debug()、console.info()、 console.warn() 、 console.error()、console.log()|console.time() 、 console.timeEnd()|cconsole.assert()、console.count()|console.group、console.groupEnd()、 console.groupCollapsed()。可以参考[JS中的console对象](http://blog.csdn.net/donggx/article/details/53665269) [DEMO:[consoleOutput](SimpleDemo/consoleOutput.html)]

5. document.write：这个是JS的一个方法直接向HTML页面写入字串数据

# Webpack

# [ES6ReactRouter](ES6ReactRouter)


　　使用的前端技术： React Router
react-router:https://reacttraining.com/react-router/web/example/basic
