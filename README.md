# 简介

　　本文用以记录从0开始学习JS，将学习过程中迷惑的点以学习笔记的方式进行记录，并以时间为顺序进行排序。文中一级目录都是笔者在学习过程中遇到的问题。其中包括JS、ES6、React、NodeJs、Bootstrap、Webpack等基础知识。

# ECMAScript(ES)

　　是JS标准，规定了JS的变量写法、语法规范、支持数据类型、有那些关键字和保留等。也就是说是一个用来统一JS语法或特性的标准。Web浏览器一般将ECMAScript做为JavaScript实现的基础。

　　简单地说，ECMAScript 描述了以下内容：语法、类型、语句、关键字、保留字、运算符、对象。ECMAScript 仅仅是一个描述，定义了脚本语言的所有属性、方法和对象。其他语言可以实现 ECMAScript 来作为功能的基准。

> 个人感觉有些像是JAVA的JDBC，JDBC只定义了每个接口功能意义，由不同的数据库商自行实现。ECMAScript定义其语法语义和特性，其它商家去实现然后可能会有扩展。如下图所示：

> ![](pic/ECMAScript_JavaScript_ActionScript_ScriptEase.gif)

> 更多详细内容可以参见： [ECMAScript 历史与实现](http://www.w3school.com.cn/js/pro_js_implement.asp)

　　所以JavaScript也只是ECMAScript的一个实现，但JavaScript并不是只由ECMAScript组成，而是由下面三个部分组成：

1. JavaScript 的核心 ECMAScript 描述了该语言的语法和基本对象；
2. DOM 描述了处理网页内容的方法和接口；
3. BOM 描述了与浏览器进行交互的方法和接口。

# JavaScript

　  JS，是JavaScript的缩写形式。JS可以理解成为一种用来依据事件或依据数据进行条件判断进而操作HTML DOM的脚本语言。比如增、删、隐藏、改变显示样式（即改变CSS）等操作。有如下比喻还是比较形像：

  > 如果把网站建设比喻成盖楼房，那么HTML就是这个楼房的钢筋水泥，CSS就是楼房的布局装饰，而JS就是楼房中大大小小无处不在的开关了。从这样的角度而言，JS就是Web开发中负责逻辑层的语言，而现如今相当火热的“用户体验”的概念，最重要的代码部分还是需要JS来编写。

　　从上面的比喻可以清析的知道，HTML是用来做各种布局控制，CSS用来做各种效果渲染的。JS就是用来操控HTML和CSS。**但其实JS还会向后端发送请求获取数据，然后依据数据重新操作HTML和CSS再次渲染界面**。

　　也就是说HTML+CSS只是一个静态的HTML页面，而各种交互效果比如点击响应，图片切换等需要使用JS，即JS用来操作这些页面无素（DOM元素）。所以需要注意只要结构加载完的页面元素才可以获取到，这也就是为什么CSS会放在HTML BODY体头而JS放到HTML BODY尾的一个原因。**目前大部分项目会把CSS引入放到BODY 中的Head里，而JS引入放到BODY尾**

> 如果把JS放到了HTML头，可以使用如下方式等到所有结构加载完成后再加载JS
> 1. JS： window.onload=function(){}，是JS的标准做法，等页面所有资源文件都加载完成后再执行
> 2. JQ：$(document).ready(function(){}),是JQuery的方式
> 3. window.addEventListenner('load', function(){}, false), 但这咱方式不兼容IE 6 7 8.
> 4. IE 6 7 8下 window.attachEvent('onreadystatechange',function(){})

# DOM

　　文档对象模型（Document Object Model，简称DOM），是 HTML 和 XML 的应用程序接口（API）。DOM 将把整个页面规划成由节点层级构成的文档。HTML 或 XML 页面的每个部分都是一个节点的衍生物。即用来表示文档中对象的标准模型就称为DOM。HTML的DOM如下图所示：

![](pic/dom.jpg)

　　DOM 通过创建树来表示文档，从而使开发者对文档的内容和结构具有空前的控制力。用 DOM API 可以轻松地删除、添加和替换节点。*即如何去控制HTML文档*。（更多细节参考 [DOM细节](http://www.w3school.com.cn/js/pro_js_implement.asp#DOM)）

>个人理解：DOM就是一些API和属性并描述API功能和属性的作用，告诉大家那些接口功能是做什么使用后有什么效果，从属性中能拿到那些数据，这些数据。让不同的开发商去实现有标准含义的接口。比如Netscape和微软，他们实现的DOM接口必需要符合W3C所定义的DOM API和属性

# BOM

　　浏览器对象模型（Browser Object Model，简称BOM）：可以对浏览器窗口进行访问和操作。使用 BOM，开发者可以移动窗口、改变状态栏中的文本以及执行其他与页面内容不直接相关的动作。使 BOM 独树一帜且又常常令人怀疑的地方在于，它只是 JavaScript 的一个部分，没有任何相关的标准。

　　BOM 主要处理浏览器窗口和框架，不过通常浏览器特定的 JavaScript 扩展都被看做 BOM 的一部分。这些扩展包括：

1. 弹出新的浏览器窗口
2. 移动、关闭浏览器窗口以及调整窗口大小
3. 提供 Web 浏览器详细信息的定位对象
4. 提供用户屏幕分辨率详细信息的屏幕对象
5. 对 cookie 的支持
6. IE 扩展了 BOM，加入了 ActiveXObject 类，可以通过 JavaScript 实例化 ActiveX 对象

　　由于没有相关的 BOM 标准，每种浏览器都有自己的 BOM 实现。有一些事实上的标准，如具有一个窗口对象和一个导航对象，不过每种浏览器可以为这些对象或其他对象定义自己的属性和方法。

> 理解可以参见BOM的个人理解部分，两者应该一样。只是操作的对象不一样！

　　更多细节可参见：[BOM 细节](http://www.w3school.com.cn/js/pro_js_implement.asp#BOM)

# 什么是ES6

　　网上标准定义：ECMAScript 6.0（以下简称 ES6）是 JavaScript 语言的下一代标准，已经在 2015 年 6 月正式发布了。它的目标，是使得 JavaScript 语言可以用来编写复杂的大型应用程序，成为企业级开发语言。

　　1996 年 11 月，JavaScript 的创造者 Netscape 公司，决定将 JavaScript 提交给国际标准化组织 ECMA，希望这种语言能够成为国际标准。次年ECMA组织就发布了规定浏览器脚本语言的标准，称为ECMAScript。因此可以理解为ECMAScript是JavaScript的规格，后者是其的实现。

　　标准委员会决定，标准在每年的 6 月份正式发布一次，作为当年的正式版本。接下来的时间，就在这个版本的基础上做改动，直到下一年的 6 月份，草案就自然变成了新一年的版本。这样一来，就不需要以前的版本号了，只要用年份标记就可以了。所以ESO的正式名称为《ECMAScript 2015 标准》（简称 ES2015）

　　因此，ES6 既是一个历史名词，也是一个泛指，含义是 5.1 版以后的 JavaScript 的下一代标准，涵盖了 ES2015、ES2016、ES2017 等等，而 ES2015 则是正式名称，特指该年发布的正式版本的语言标准。

　　*更多细节可看《ECMAScript 6 入门》 以上只是部分摘录*

# 常用浏览器内核

　　浏览器内核是JS运行环境，JS程序在其中解析并执行。常见的浏览器内核如下：
  - 谷歌浏览器（chrome）: Webkit内核（v8引擎）.*目前v8也用在 NodeJS, MongoDB, CouchDB中， safari 360 QQ  UC ，安卓和IOS大部分手机浏览器都是用的该内核*
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

# [ES6ReactRouter](ES6ReactRouter)

　　使用的前端技术： React Router

react-router:https://reacttraining.com/react-router/web/example/basic

# Atom使用的插件

　　可以在Install Packages/Themes中安装需要的插件，方便编辑和提示，比如将HTML代码直接在默认浏览器中显示看效果，或者代码补全。以下是在学习过程中使用到的一些插件。

　　open-in-browser：用来在浏览器中看HTML页面效果。

　　Emmet: (前身为 Zen Coding) 是一个能大幅度提高前端开发效率的工具，能够实现 HTML、CSS 的快速编写。更多详细的使用可以度娘。

　　MarkDown: windows下使用快捷键 ctrl + shift + p，打开命令输入框；输入 markdown preview toggle(可以偷懒只输入mdpt，支持模糊匹配)

# 著名的变量命名规则

## Camel 标记法

　　首字母是小写的，接下来的字母都以大写字符开头。例如：
`var myTestValue = 0;`

## Pascal 标记法

　　首字母是大写的，接下来的字母都以大写字符开头。例如：`var MyTestValue = 0;`

## 匈牙利类型标记法

　　在以 Pascal 标记法命名的变量前附加一个小写字母（或小写字母序列），说明该变量的类型。例如，i 表示整数，s 表示字符串。例如：`var iMyTestValue = 0;`

| 类型 |前缀|示例|
|---|:---:|---:|
|数组	 |a	|aValues|
|布尔型|b |bFound|
|浮点型（数字）|	f	|fValue|
|函数	|fn	|fnMethod|
|整型(数字)|i|iValue|
|对象	|o|oType
|正则表达式|re	|rePattern|
|字符串|s|sValue|
|变型(可以是任何类型) |v	|vValue|

# JS零碎知识

## 无返回或无明确返回

　　如果函数无返回值，那么可以调用没有参数的 return 运算符，随时退出函数。那么返回的值到底是什么呢？
```
function sayHi(sMessage) {
  if (sMessage == "bye") {
    return;
  }

  alert(sMessage);
}
```
　　这段代码中，如果 sMessage 等于 "bye"，就永远不显示警告框。

**NOTE：如果函数无明确的返回值，或调用了没有参数的 return 语句，那么它真正返回的值是 undefined。**

## 函数参数

　　可以向函数传递超过或者少于定义的个数，也可以通过arguments特殊对象来访问传入函数中的变量。

示例代码：[argumentsDemo](SimpleDemo\functionArgumentsDemo.html)

> 与其他程序设计语言不同，ECMAScript 不会验证传递给函数的参数个数是否等于函数定义的参数个数。开发者定义的函数都可以接受任意个数的参数（根据 Netscape 的文档，最多可接受 255 个），而不会引发任何错误。任何遗漏的参数都会以 undefined 传递给函数，多余的函数将忽略。

也可以利用arguments来模拟函数重载，示例: [模拟函数重载](SimpleDemo\overLoadSimulationDemo.html)

## 函数名只是变量

　　因为函数名是变量，所以才可以很容易的把函数作为参数传递给另一个函数。

　　记得下面这个函数吗？

```
function sayHi(sName, sMessage) {
  alert("Hello " + sName + sMessage);
}
```

　　还可以这样定义它：

```
var sayHi = new Function("sName", "sMessage", "alert(\"Hello \" + sName + sMessage);");
```

　　虽然由于字符串的关系，这种形式写起来有些困难，但有助于理解函数只不过是一种引用类型，它们的行为与用 Function 类明确创建的函数行为是相同的。**即在用functionp定义sayHi这个函数的时候就相当于已经声名了一个名为sayHi的变量且指向该函数**，请看下面这个例子：

```
function doAdd(iNum) {
  alert(iNum + 20);
}

function doAdd(iNum) {
  alert(iNum + 10);
}

doAdd(10);	//输出 "20"
```

　　如你所知，第二个函数重载了第一个函数，使 doAdd(10) 输出了 "20"，而不是 "30"。
　　如果以下面的形式重写该代码块，这个概念就清楚了：

```
var doAdd = new Function("iNum", "alert(iNum + 20)");
var doAdd = new Function("iNum", "alert(iNum + 10)");
doAdd(10);
```

　　请观察这段代码，很显然，doAdd 的值被改成了指向不同对象的指针。**函数名只是指向函数对象的引用值**，行为就像其他对象一样。甚至可以使两个变量指向同一个函数：

```
var doAdd = new Function("iNum", "alert(iNum + 10)");
var alsodoAdd = doAdd;
doAdd(10);	//输出 "20"
alsodoAdd(10);	//输出 "20"
```

　　下面示例展示了将一个函数传递给另一个函数

```
function callAnotherFunc(fnFunction, vArgument) {
  fnFunction(vArgument);
}

var doAdd = new Function("iNum", "alert(iNum + 10)");

callAnotherFunc(doAdd, 10);	//输出 "20"
```

## 对象

　　ECMA-262 把对象（object）定义为“属性的无序集合，每个属性存放一个原始值、对象或函数”。严格来说，这意味着对象是无特定顺序的值的数组。
　　尽管 ECMAScript 如此定义对象，但它更通用的定义是基于代码的名词（人、地点或事物）的表示。

## 面向对象语言的要求

　　一种面向对象语言需要向开发者提供四种基本能力：

1. 封装 - 把相关的信息（无论数据或方法）存储在对象中的能力
2. 聚集 - 把一个对象存储在另一个对象内的能力
3. 继承 - 由另一个类（或多个类）得来类的属性和方法的能力
4. 多态 - 编写能以多种方法运行的函数或方法的能力
　　ECMAScript 支持这些要求，因此可被是看做面向对象的。

## 对象废除

　　ECMAScript 拥有无用存储单元收集程序（garbage collection routine），意味着不必专门销毁对象来释放内存。当再没有对对象的引用时，称该对象被废除（dereference）了。运行无用存储单元收集程序时，所有废除的对象都被销毁。每当函数执行完它的代码，无用存储单元收集程序都会运行，释放所有的局部变量，还有在一些其他不可预知的情况下，无用存储单元收集程序也会运行。

　　把对象的所有引用都设置为 null，可以强制性地废除对象。例如：

```
var oObject = new Object;
// do something with the object here
oObject = null;
```

　　当变量 oObject 设置为 null 后，对第一个创建的对象的引用就不存在了。这意味着下次运行无用存储单元收集程序时，该对象将被销毁。

　　每用完一个对象后，就将其废除，来释放内存，这是个好习惯。这样还确保不再使用已经不能访问的对象，从而防止程序设计错误的出现。此外，旧的浏览器（如 IE/MAC）没有全面的无用存储单元收集程序，所以在卸载页面时，对象可能不能被正确销毁。废除对象和它的所有特性是确保内存使用正确的最好方法。

**注意：废除对象的所有引用时要当心。如果一个对象有两个或更多引用，则要正确废除该对象，必须将其所有引用都设置为 null。**

## 早绑定和晚绑定

　　早绑定early binding：在编译的时候就已经却确定了将来程序运行基类或者派生类的哪个方法.在编译代码的时候根据引用类型就决定了运行该引用类型中定义的方法。即基类方法，这种方式运行效率高。

　　晚绑定late binding:只有在运行的时候才能决定运行基类或者派生类中的方法。运行的时候将根据该实际类型,而不是引用类型来调用相应的方法.即取决于我们new了什么对象。

　　ECMAScript 中的所有变量都采用晚绑定方法。

　　早绑定的优点是: 编译效率  代码提示(代码智能感知)  编译时类型检查。

　　晚绑定的优点是: 不用申明类型  对象类型可以随时更改。

## 内置对象

　　ECMA-262 把内置对象（built-in object）定义为“由 ECMAScript 实现提供的、独立于宿主环境的所有对象，在 ECMAScript 程序开始执行时出现”。这意味着开发者不必明确实例化内置对象，它已被实例化了。ECMA-262 只定义了两个内置对象，即 Global 和 Math （它们也是本地对象，根据定义，每个内置对象都是本地对象）。

## 宿主对象

　　所有非本地对象都是宿主对象（host object），即由 ECMAScript 实现的宿主环境提供的对象。所有 BOM 和 DOM 对象都是宿主对象。

## ECMAScript 只有公用作用域

　　对 ECMAScript 讨论上面这些作用域几乎毫无意义，因为 ECMAScript 中只存在一种作用域 - 公用作用域。ECMAScript 中的所有对象的所有属性和方法都是公用的。因此，定义自己的类和对象时，必须格外小心。记住，所有属性和方法默认都是公用的！

　　**建议性的解决方法：**

　　许多开发者都在网上提出了有效的属性作用域模式，解决了 ECMAScript 的这种问题。

　　由于缺少私有作用域，开发者确定了一个规约，说明哪些属性和方法应该被看做私有的。这种规约规定在属性前后加下划线：

`obj._color_ = "blue";`

　　这段代码中，属性 color 是私有的。*注意，下划线并不改变属性是公用属性的事实，它只是告诉其他开发者，应该把该属性看作私有的。*

　　有些开发者还喜欢用单下划线说明私有成员，例如：`obj._color`。

## ECMAScript 没有静态作用域

　　严格来说，ECMAScript 并没有静态作用域。不过，它可以给构造函数提供属性和方法。还记得吗，构造函数只是函数。函数是对象，对象可以有属性和方法。例如：

```
function sayHello() {
  alert("hello");
}

sayHello.alternate = function() {
  alert("hi");
}

sayHello();		//输出 "hello"
sayHello.alternate();	//输出 "hi"
```

## 关键字 this

**this 的功能**

　　在 ECMAScript 中，要掌握的最重要的概念之一是关键字 this 的用法，它用在对象的方法中。关键字 this 总是指向调用该方法的对象，例如：
```
var oCar = new Object;
oCar.color = "red";
oCar.showColor = function() {
  alert(this.color);
};

oCar.showColor();		//输出 "red"
```
　　在上面的代码中，关键字 this 用在对象的 showColor() 方法中。在此环境中，this 等于 oCar。下面的代码与上面的代码的功能相同：

```
var oCar = new Object;
oCar.color = "red";
oCar.showColor = function() {
  alert(oCar.color);
};

oCar.showColor();		//输出 "red"
```

**使用 this 的原因**

　　为什么使用 this 呢？因为在实例化对象时，总是不能确定开发者会使用什么样的变量名。使用 this，即可在任何多个地方重用同一个函数。请思考下面的例子：

```
function showColor() {
  alert(this.color);
};

var oCar1 = new Object;
oCar1.color = "red";
oCar1.showColor = showColor;

var oCar2 = new Object;
oCar2.color = "blue";
oCar2.showColor = showColor;

oCar1.showColor();		//输出 "red"
oCar2.showColor();		//输出 "blue"
```

　　在上面的代码中，首先用 this 定义函数 showColor()，然后创建两个对象（oCar1 和 oCar2），一个对象的 color 属性被设置为 "red"，另一个对象的 color 属性被设置为 "blue"。两个对象都被赋予了属性 showColor，指向原始的 showColor () 函数（注意这里不存在命名问题，因为一个是全局函数，而另一个是对象的属性）。调用每个对象的 showColor()，oCar1 输出是 "red"，而 oCar2 的输出是 "blue"。这是因为调用 oCar1.showColor() 时，函数中的 this 关键字等于 oCar1。调用 oCar2.showColor() 时，函数中的 this 关键字等于 oCar2。

　　注意，引用对象的属性时，必须使用 this 关键字。例如，如果采用下面的代码，showColor() 方法不能运行：

```
function showColor() {
  alert(color);
};
```

　　**如果不用对象或 this 关键字引用变量，ECMAScript 就会把它看作局部变量或全局变量。然后该函数将查找名为 color 的局部或全局变量，但是不会找到。结果如何呢？该函数将在警告中显示 "null"。**

# [ECMA class](ECMAClass)

　　解释ECMA中类的定义（其实其只有对象的定义无类的概念），如何实现继承等。

　　如果想要更多的细节可以参见： [ECMA W3C School 教程](https://www.w3cschool.cn/pro_js_object_defining.html)
