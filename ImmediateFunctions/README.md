# javascript立即执行函数作用

　　在Javascript中，任何function在执行的时候都会创建一个执行上下文，因为为function声明的变量和function有可能只在该function内部，这个上下文，在调用function的时候，提供了一种简单的方式来创建自由变量或私有子function。

　　作用：根据javascript函数作用域链的特性,可以使用这种技术可以模仿一个私有作用域,用匿名函数作为一个"容器","容器"内部可以访问外部的变量,而外部环境不能访问"容器"内部的变量,所以( function(){…} )()内部定义的变量不会和外部的变量发生冲突,俗称"匿名包裹器"或"命名空间"。

　　JQuery使用的就是这种方法,将JQuery代码包裹在( function (window,undefined){…jquery代码…} (window)中, 在全局作用域中调用JQuery代码时,可以达到保护JQuery内部变量的作用。

# 函数声明、函数表达式、匿名函数

1. 函数声明： function fnName () {…};使用function关键字声明一个函数,再指定一个函数名,叫函数声明。即声名了一个名为fnName的函数，下次调用的时候可以直接使用fnName()进行调用

2. 函数表达式： var fnName = function () {…};使用function关键字声明一个函数,但未给函数命名,最后将匿名函数赋予一个变量,叫函数表达式,这是最常见的函数表达式语法形式。

3. 匿名函数： function () {}; 使用function关键字声明一个函数,但未给函数命名,所以叫匿名函数,**匿名函数属于函数表达式**,匿名函数有很多作用,赋予一个变量则创建函数,赋予一个事件则成为事件处理程序或创建闭包等等。

# 函数声明和函数表达式不同之处

1. Javascript引擎在解析javascript代码时会 "函数声明提升" (Function declaration Hoisting)当前执行环境(作用域)上的函数声明,而函数表达式必须等到Javascirtp引擎执行到它所在行时,才会从上而下一行一行地解析函数表达式

2. 函数表达式后面可以加括号立即调用该函数,函数声明不可以,只能以fnName()形式调用

# 立即执行函数写法

　　常见写法为：( function(){…} )() 和 ( function (){…} () ) ，再次强调必需是函数表达式才可以。所以我们可以推出只要能将表达式执行的方式都是可以达到以上两种方式同样校果。

```
( function(a){
 console.log(a); //firebug输出123,使用()运算符
})(123);

( function(a){
 console.log(a); //firebug输出1234,使用()运算符
}(1234));
! function(a){
 console.log(a); //firebug输出12345,使用！运算符
}(12345);
=========================其它方式============================
+ function(a){
 console.log(a); //firebug输出123456,使用+运算符
}(123456);
- function(a){
 console.log(a); //firebug输出1234567,使用-运算符
}(1234567);
var fn= function(a){
 console.log(a); //firebug输出12345678,使用=运算符
}(12345678)
```

参考　[深入浅析javascript立即执行函数](http://www.jb51.net/article/73806.htm)