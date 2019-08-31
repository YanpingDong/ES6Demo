## HTML 属性常用引用属性值

属性值应该始终被包括在引号内。

双引号是最常用的，不过使用单引号也没有问题。

```
**提示:** 在某些个别的情况下，比如属性值本身就含有双引号，那么您必须使用单引号，例如：name='John "ShotGun" Nelson'

对于中文网页需要使用 <meta charset="utf-8"> 声明编码，否则会出现乱码。
```

## 什么是 XHTML?


- XHTML 指的是可扩展超文本标记语言
- XHTML 与 HTML 4.01 几乎是相同的
- XHTML 是更严格更纯净的 HTML 版本
- XHTML 是以 XML 应用的方式定义的 HTML
- XHTML 是 2001 年 1 月发布的 W3C 推荐标准
- XHTML 得到所有主流浏览器的支持

**与 HTML 相比最重要的区别：**

文档结构

- XHTML DOCTYPE 是强制性的
- \<html\> 中的 XML namespace 属性是强制性的
- \<html\> \<head\> \<title\> 以及 \<body\> 也是强制性的

元素语法

- XHTML 元素必须正确嵌套  (比如错误嵌套：\<b\>\<i\>粗体和斜体文本\</b\>\</i\>)
- XHTML 元素必须始终关闭  (比如未关闭 \<img src="happy.gif" alt="Happy face"\>)
- XHTML 元素必须小写
- XHTML 文档必须有一个根元素

属性语法

- XHTML 属性必须使用小写
- XHTML 属性值必须用引号包围
- XHTML 属性最小化也是禁止的

为了避免如下HTML代码(能运行代不规范)

```html
<html>
<head>
<meta charset="utf-8">
<title>这是一个不规范的 HTML</title>
<body>
<h1>不规范的 HTML
<p>这是一个段落
</body>
```

# HTML5 的改进

- 新元素
- 新属性
- 完全支持 CSS3
- Video 和 Audio
- 2D/3D 制图
- 本地存储
- 本地 SQL 数据
- Web 应用

# 什么是HTML?

HTML 是用来描述网页的一种语言。

-    HTML 指的是超文本标记语言: HyperText Markup Language
-    HTML 不是一种编程语言，而是一种标记语言
-    标记语言是一套标记标签 (markup tag)
-    HTML 使用标记标签来描述网页,描述内容之前关系，比如前后关系，布局关系，内容是图片还是段落还是文字等
-    HTML 文档包含了HTML 标签及文本内容


# CSS

CSS被用来同时控制多重网页的样式和布局。

## 什么是 CSS?

-    CSS 指层叠样式表 (Cascading Style Sheets)
-    样式定义**如何显示 HTML 元素**
-    样式通常存储在样式表中
-    把样式添加到 HTML 4.0 中，是为了解决内容与表现分离的问题
-    外部样式表可以极大提高工作效率
-    外部样式表通常存储在 CSS 文件中
-    多个样式定义可层叠为一个

说白了就是把以前内嵌式的style部分独立出来成为单独文件，用来描述如何来渲染HTML元素

通过使用 CSS，所有的格式化均可从 HTML 中剥离出来，并存储于一个独立的文件中。

## CSS语法

CSS 规则由两个主要的部分构成：选择器，以及一条或多条声明:

![](pic/cssSymbol.jpg)

选择器通常是您需要改变样式的 HTML 元素。

每条声明由一个属性和一个值组成。

属性（property）是您希望设置的样式属性（style attribute）。每个属性有一个值。属性和值被冒号分开。

### 分组选择器 

在样式表中有很多具有相同样式的元素。

```css
h1
{
    color:green;
}
h2
{
    color:green;
}
p
{
    color:green;
}
```

为了尽量减少代码，你可以使用分组选择器。每个选择器用逗号分隔。在下面的例子中，我们对以上代码使用分组选择器：

实例

```css
h1,h2,p
{
    color:green;
}
```

### 嵌套选择器

它可能适用于选择器内部的选择器的样式。

在下面的例子设置了三个样式：

- p{ }: 为所有 p 元素指定一个样式。
- .marked{ }: 为所有 class="marked" 的元素指定一个样式。
- .marked p{ }: 为所有 class="marked" 元素**内**的 p 元素指定一个样式。
- p.marked{ }: 为所有 class="marked" 的 p 元素指定一个样式。

### 后代选择器(以空格分隔)

后代选择器用于选取某元素的后代元素。

以下实例选取所有 \<div\> 元素中的\<p\> 元素。

实例

```css
div p
{
  background-color:yellow;
}
```


### 子元素选择器(以大于号分隔）

与后代选择器相比，子元素选择器（Child selectors）只能选择作为某元素的**直接**子元素的元素。

以下实例选择了\<div\>元素中所有**直接**子元素 \<p\> ：

实例

```css
div>p
{
  background-color:yellow;
}

============================================

<div>
<h2>My name is Donald</h2>
<p>I live in Duckburg.</p>//该元素会变成黄色背景
</div>

<div>
<span><p>I will not be styled.</p></span>//该元素不会变成黄色背景
</div>
```

### 相邻兄弟选择器（以加号分隔）

相邻兄弟选择器（Adjacent sibling selector）可选择**紧接**在另一元素后的元素，且二者**有相同父元素**。

以下实例选取了所有位于 \<div\> 元素后的第一个 \<p\> 元素:

实例

```css
div+p
{
  background-color:yellow;
}

===================================

div+p
{
	background-color:yellow;
}


<div>
<h2>My name is Donald</h2>
<p>I live in Duckburg.</p>
</div>

<p>I will  be styled</p>//该元素会变成黄色背景

<p>I will not be styled.</p> //该元素不会变

```

### 普通兄弟选择器（以破折号分隔）

后续兄弟选择器选取所有指定元素之后的相邻兄弟元素。

以下实例选取了所有 \<div\> 元素之后的所有相邻兄弟元素 \<p\> : 

实例

```css
div~p
{
  background-color:yellow;
}

==============================================

div~p
{
	background-color:yellow;
}

	
<p>之前段落1，不会添加背景颜色。</p>//不会添加背景颜色
<div>
<p>段落 2。 在 div 中。</p> //不会添加背景颜色
</div>

<p>段落 3。不在 div 中。</p> //会添加背景颜色
<p>段落 4。不在 div 中。</p> //会添加背景颜色，这是和相邻兄弟选择器（以加号分隔）的区别之一
```

### 属性选择器


```css
下面的例子是把包含标题（title）的所有元素变为蓝色：

[title]
{
    color:blue;
}

<h1 title="Hello world">Hello world</h1> //变蓝
<a title="runoob.com" href="//www.runoob.com/">runoob.com</a> //变蓝
===========================================

下面的实例改变了标题title='runoob'元素的边框样式:

[title=runoob]
{
    border:5px solid green;
}

<img title="runoob" src="logo.png" width="270" height="50" />
<br>
<a title="runoob" href="//www.runoob.com/">runoob</a>
<hr>
<h2>将不适用:</h2>
<p title="greeting">Hi!</p>

==============================================
下面是属性多值选择

<style>
[title~=hello]
{
	color:blue;
} 
</style>
</head>

<body>
<h2>将适用:</h2>
<h1 title="hello world">Hello world</h1>
<p title="student hello">Hello CSS students!</p>
<hr>
<h2>将不适用:</h2>
<p title="student">Hi CSS students!</p>
</body>
============================================
CSS 属性选择器 *=, |=, ^=, $=, *= 的区别

先上总结:

"value 是完整单词" 类型的比较符号: ~=, |=

"拼接字符串" 类型的比较符号: *=, ^=, $=

1.attribute 属性中包含 value:　

[attribute~=value] 属性中包含独立的单词为 value，例如：

[title~=flower]  -->  <img src="/i/eg_tulip.jpg" title="tulip flower" />

[attribute*=value] 属性中做字符串拆分，只要能拆出来 value 这个词就行，例如：

[title*=flower]   -->  <img src="/i/eg_tulip.jpg" title="ffffflowerrrrrr" />

2.attribute 属性以 value 开头:

[attribute|=value] 属性中必须是完整且唯一的单词，或者以 - 分隔开：，例如：

[lang|=en]     -->  <p lang="en">  <p lang="en-us">

[

attribute^=value] 属性的前几个字母是 value 就可以，例如：

[lang^=en]    -->  <p lang="ennn">

3.attribute 属性以 value 结尾:

[attribute$=value] 属性的后几个字母是 value 就可以，例如：

a[src$=".pdf"]
```

## 页面如何加载CSS代码

- 行内导入：HTML和CSS混合，代码结构混乱

```js
<div style="width:100px"></div>
```

- 内嵌式：写在style块中

```js
<style>
  div {
    width: 100px;
  }
</style>
```

- 导入式：在内嵌式中用@import进行导入

```js
<style>
  @import "import.css path/import.css"
</style>
```

- 外链式：和JS外链一样，从外部文件引入

```js
import.css
div{
  width: 100px;
}

index.HTML
<link rel="stylesheet" href="path/import.css">
```

**链接式和导入式的区别:**

> 　　使用链接式的css是客户端浏览你的网页时先将外部的CSS文件加载到网页当中，然后再进行编译显示，所以这种情况下显示出来的网页跟我们预期的效果一样，即使网速再慢也是一样的效果。而使用@import导入的CSS就不同了，客户端在浏览网页时是先将html的结构呈现出来，再把外部的CSS文件加载到网页当中，当然最终的效果也是跟前者是一样的，只是当网速较慢时会出现先显示没有CSS统一布局时的html网页，这样就会给阅读者很不好的感觉。这也是现在大部分网站的CSS都采用链接方式的最主要原因;

>　　导入样式可以避免过多页面指向一个css文件。当网站中使用同一个CSS文件的页面不是非常多时，这两种方式在效果方面几乎是没有不同的，但网站的页面数达到一定程度时(比如新浪等门户)，如果采用链接的方式可能就会使得由于多个页面调用同一个CSS文件而造成速度下降

```html
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

## 多重样式

如果某些属性在不同的样式表中被同样的选择器定义，那么属性值将从更具体的样式表中被继承过来。如果有重复定义则依据如下优先级进行选择最终属性：```（内联样式）Inline style > （内部样式）Internal style sheet >（外部样式）External style sheet > 浏览器默认样式```

示例如下：

```css
外部样式表拥有针对 h3 选择器的三个属性：
h3
{
    color:red;
    text-align:left;
    font-size:8pt;
}

而内部样式表拥有针对 h3 选择器的两个属性：
h3
{
    text-align:right;
    font-size:20pt;
}

假如拥有内部样式表的这个页面同时与外部样式表链接，那么 h3 得到的样式是：
color:red;
text-align:right;
font-size:20pt;

即颜色属性将被继承于外部样式表，而文字排列（text-alignment）和字体尺寸（font-size）会被内部样式表中的规则取代。
```

## CSS 盒子模型(Box Model)

**所有HTML元素**可以看作盒子。CSS盒模型本质上是一个盒子，**封装周围的HTML元素**，它包括：边距，边框，填充，和实际内容。

盒模型允许我们在其它元素和周围元素边框之间的空间放置元素。

下面的图片说明了盒子模型(Box Model)：

![](pic/box-model.gif)

不同部分的说明：

- Margin(外边距) - 清除边框外的区域，外边距是透明的。
- Border(边框) - 围绕在内边距和内容外的边框。
- Padding(内边距) - 清除内容周围的区域，内边距是透明的。
- Content(内容) - 盒子的内容，显示文本和图像。

最终元素的总宽度计算公式是这样的：

```总元素的宽度=宽度+左填充+右填充+左边框+右边框+左边距+右边距```

元素的总高度最终计算公式是这样的：

```总元素的高度=高度+顶部填充+底部填充+上边框+下边框+上边距+下边距```

示例：

```css
div {
    width: 300px;
    border: 25px solid green;
    padding: 25px;
    margin: 25px;
}
```

总元素的宽度：

300px (宽) + 50px (左 + 右填充) + 50px (左 + 右边框) + 50px (左 + 右边距) = 450px

## CSS Position(定位)

position 属性指定了元素的定位类型。position 属性的五个值：static relative fixed absolute sticky

static 定位：HTML 元素的默认值，即没有定位，遵循正常的文档流对象。静态定位的元素不会受到 top, bottom, left, right影响。所以在static下设置这些不会起做用

fixed 定位：元素的位置相对于浏览器窗口是固定位置。即使窗口是滚动的它也不会移动。

relative 定位：相对定位元素的定位是相对其正常位置。但元素所占用的大小仍然按在“标准位”置进行计算！！！即元素仍然保持其未定位前的形状，它原本所占的空间仍保留。

![](pic/ct_css_positioning_relative_example.gif)

absolute 定位：绝对定位的元素的位置相对于最近的已定位父元素，如果元素没有已定位的父元素，那么它的位置相对于\<html\>(绝对定位的元素的位置相对于最近的已定位祖先元素，如果元素没有已定位的祖先元素，那么它的位置相对于最初的包含块。)。绝对定位使元素的位置与文档流无关，因此不占据空间。

![](pic/ct_css_positioning_absolute_example.gif)

可以看到框1和框3是紧邻的。和相对定位不一样。

sticky 定位： 英文字面意思是粘，粘贴，所以可以把它称之为粘性定位。 基于用户的滚动位置来定位，在 position:relative 与 position:fixed 定位之间切换。

没有达到阀值（比如top:5px，即上边距不小于5个像素的时候）它的行为就像 position:relative; 而当页面滚动超出目标区域时，它的表现就像 position:fixed;，它会固定在目标位置。（元素定位表现为在跨越特定阈值前为相对定位，之后为固定定位。）;这个特定阈值可以是 top, right, bottom 或 left 之一，换言之，指定 top, right, bottom 或 left 四个阈值其中之一，才可使粘性定位生效。否则其行为与相对定位相同。

## CSS Float（浮动）

CSS 的 Float（浮动），会使元素向左或向右移动，其周围的元素也会重新排列。Float（浮动），往往是用于图像，但它在布局时一样非常有用。

1. 元素的水平方向浮动，意味着元素只能左右移动而不能上下移动。

2. 一个浮动元素会尽量向左或向右移动，直到它的外边缘碰到包含框或另一个浮动框的边框为止。

3. 浮动元素之后的元素将围绕它。即下面示例中img元素后写的元素会受到影响并自动排序围绕着img元素

4. 浮动元素之前的元素将不会受到影响。即下面示例中img元素之前的p元素不受干扰

比如，如果图像是右浮动，文本流将环绕在它左边

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"> 
<title>Float</title>
<style>
img 
{
	float:right;
}
</style>
</head>

<body>
<p>在下面的段落中，我们添加了一个 <b>float:right</b> 的图片。导致图片将会浮动在段落的右边。</p>
<p>
<img src="logocss.gif" width="95" height="84" />
这是一些文本。这是一些文本。这是一些文本。
这是一些文本。这是一些文本。这是一些文本。
这是一些文本。这是一些文本。这是一些文本。
这是一些文本。这是一些文本。这是一些文本。
这是一些文本。这是一些文本。这是一些文本。
这是一些文本。这是一些文本。这是一些文本。
这是一些文本。这是一些文本。这是一些文本。
这是一些文本。这是一些文本。这是一些文本。
这是一些文本。这是一些文本。这是一些文本。
这是一些文本。这是一些文本。这是一些文本。
</p>
</body>

</html>
```

## 图像拼合

就是把多个图像拼成一个图像，在使用的时候，就像是指定一个大图的某一部分一样.这样可以减少访问服务器的请求次数。比如我们有三张图，那么需要三次请求，将这三张图合并成一张图后就只需要一次请求。

比如下图由三个图像拼成

![](pic/img_navsprites.gif)

使用方式：

```css
#home{left:0px;width:46px;}
#home{background:url('img_navsprites.gif') 0 0;}

#prev{left:63px;width:43px;}
#prev{background:url('img_navsprites.gif') -47px 0;}

#next{left:129px;width:43px;}
#next{background:url('img_navsprites.gif') -91px 0;
```