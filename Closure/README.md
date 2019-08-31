# 闭包

　　有权访问另一个函数作用域内变量的函数都是闭包。即内嵌函数引用外部函数作用域中的变量(包括外部函数做用域内的局部变量如下示例中的n,也包括形参,如下示例中的b).

```js
代码1
function a(b){
  var n = 0;
  this.inc = function () {
    n++;
    b++;
    console.log(n);
    console.log(b);
  };
}
```

[Dome code](closureDemo.html)


　　闭包的另一种常见形式

```js
代码2
function a(b){
  var n = 0;
  function inc(){
    n++;
    console.log(n+b);
  }
  return inc;
}
var c = a(1); //实际是 var c = inc; 注意，函数名只是一个标识（指向函数的指针），而()才是执行函数
c();  //控制台输出2

var d = a(10)
d();  //控制台输出11
```

[Dome code](closureDemo0.html)

# 闭包使用原因

　　我们知道，js的每个函数都是一个个小黑屋，它可以获取外界信息，但是外界却无法直接看到里面的内容。将变量 n 放进小黑屋里，除了代码2中的inc 函数之外，没有其他办法能接触到变量 n，而且在函数 a 外定义同名的变量 n 也是互不影响的，这就是所谓的增强 **封装性**。

　　而之所以要用 return 返回函数标识 inc，是因为在 a 函数外部无法直接调用 inc 函数，所以 return inc 与外部联系起来

# 总结一下

　　闭包就是一个函数引用另外一个函数的变量，因为变量被引用着所以不会被回收，因此可以用来封装一个私有变量。这是优点也是缺点，不必要的闭包只会徒增内存消耗！另外使用闭包也要注意变量的值是否符合你的要求，因为他就像一个静态私有变量一样。

# 常见的错误用法

```js
function createFunctions(){
  var result = new Array();
  for (var i=0; i < 10; i++){
    result[i] = function(){
      return i;
    };
  }
  return result;
}
var funcs = createFunctions();
for (var i=0; i < funcs.length; i++){
  console.log(funcs[i]());
}
```

[Dome code](closureDemo1.html)

　　本意是输出0~9,但实际是10个10

　　这里的陷阱就是：函数带()才是执行函数！ 单纯的赋值 result[i] = function(){return i;}; 是不会产生函数行为,所以i是没有被替换,而当被替换的时候i已经是10了.后面接一句 f(); 才会执行函数内部的代码。上面代码翻译一下就是：

```js
var result = new Array(), i;
result[0] = function(){ return i; }; //没执行函数，函数内部不变，不能将函数内的i替换！
result[1] = function(){ return i; }; //没执行函数，函数内部不变，不能将函数内的i替换！
...
result[9] = function(){ return i; }; //没执行函数，函数内部不变，不能将函数内的i替换！
i = 10;
funcs = result;
result = null;

console.log(i); // funcs[0]()就是执行 return i 语句，就是返回10
console.log(i); // funcs[1]()就是执行 return i 语句，就是返回10
...
console.log(i); // funcs[9]()就是执行 return i 语句，就是返回10
```

# 闭包优缺点

闭包外部函数能够读取内部函数的变量，最后会导致不释放。

优点：闭包可以形成独立的空间，永久的保存局部变量。

缺点：保存中间值的状态缺点是容易造成内存泄漏，因为闭包中的局部变量永远不会被回收

示例：

```js
function closureFn(){
  var n = 999; //局部变量，本应该在closureFn函数执行完释放，但闭包导致不能释放

  nAdd = function(){  //没有var声名会变成全局变量，在外部直接使用，但引用了closureFn中的n
    n += 1;
  }

  function f() {
    console.log(n);  // 引用了closureFn中的n,闭包
  }

  return f;
}

var r = closureFn();
r(); // 999
nAdd();  // n+= 1;
r(); //1000
```