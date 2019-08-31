# 深入理解js的变量提升和函数提升

## 变量提升

　　在ES6之前，JavaScript没有块级作用域(一对花括号{}即为一个块级作用域)，只有全局作用域和函数作用域。变量提升即将　*变量声明* 提升到它所在作用域的最开始的部分。上个简单的例子如：

```
console.log(global); // undefined
var global = 'global';
console.log(global); // global

function fn () {
　　console.log(a); // undefined
　　var a = 'aaa';
　　console.log(a); // aaa
}
fn();
```

[DemoCode](variableHoistDemo.html)

　　之所以会是以上的打印结果，是由于js的变量提升，实际上上面的代码是按照以下来执行的：

```
var global; // 变量提升，全局作用域范围内，此时只是声明，并没有赋值
console.log(global); // undefined
global = 'global'; // 此时才赋值
console.log(global); // 打印出global

function fn () {
　　var a; // 变量提升，函数作用域范围内
　　console.log(a);
　　a = 'aaa';
　　console.log(a);
}
fn();
```

> 进行函数的时候先做形参赋值，然后变量提升。形参和函数内任意位置上声名的变量都会成会为私有的

```
var foo = 1;
function bar(){
  if(!foo){
    var foo = 10;
  }
  console.log(foo); //=>10
}
bar()

=====解析=====
var foo = 1;
function bar(){
  var foo; //函数任意位置声名的变量都会产生变量提升到最开始，因为没有块级作用域
  if(!foo){  //foo为undefined
    var foo = 10;
  }
  console.log(foo); //=>10
}//出来后bar里的foo就会被销毁
bar()
```

```
if(!("a" in window)){
  var a = 1;
}
console.log(a); //==undefined

=====解析=====
var a //变量提升（因为没有块级作用域），全局的变量都会加给windows
if(!("a" in window)){ //==!true
  var a = 1;
}
console.log(a); //==undefined
```

[DemoCode](variableHoistDemo.html)


## 函数提升

　　js中创建函数有两种方式：函数声明式和函数字面量式。只有 *函数声明* 才存在函数提升！如:

```
console.log(f1); // function f1() {}   
console.log(f2); // undefined  
function f1() {}
var f2 = function() {}
```

[DemoCode](functionHoistDemo.html)

　　只所以会有以上的打印结果，是由于js中的函数提升导致代码实际上是按照以下来执行的：

```
function f1() {} // 函数提升，整个代码块提升到文件的最开始
console.log(f1);   
console.log(f2);   
var f2 = function() {}
```

## 变量提升常见错误

**重新定义变量**

使用 var 关键字重新声明变量可能会带来问题。

在块中重新声明变量也会重新声明块外的变量：

```js
var x = 10;
// 这里输出 x 为 10
{ 
    var x = 2;
    // 这里输出 x 为 2
}
// 这里输出 x 为 2
```

**循环作用域**

使用 var 关键字：

```js
var i = 5;
for (var i = 0; i < 10; i++) {
    // 一些代码...
}
// 这里输出 i 为 10
```