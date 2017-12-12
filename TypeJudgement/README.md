# JS 类型判断

**typeof**

输出:首字母小写的字符串形式

功能:
1. 可以识别标准类型(将Null识别为object)
2. 不能识别具体的对象类型(Function除外)

实例
```
console.log(typeof "jerry");//"string"
console.log(typeof 12);//"number"
console.log(typeof true);//"boolean"
console.log(typeof undefined);//"undefined"
console.log(typeof null);//"object"
console.log(typeof {name: "jerry"});//"object"
console.log(typeof function(){});//"function"
console.log(typeof []);//"object"
console.log(typeof new Date);//"object"
console.log(typeof /\d/);//"object"
function Person(){};
console.log(typeof new Person);//"object"
```
[Demo Code](typeofDemo.html)

**Object.prototype.toString**

输出:[object 数据类型]的字符串形式

功能:
1. 可以识别标准类型及内置对象类型
2. 不能识别自定义类型

```
[构造方法]

function type(obj){
　　return Object.prototype.toString.call(obj).slice(8,-1).toLowerCase();
}
```

实例1

```
console.log(Object.prototype.toString.call("jerry"));//[object String]
console.log(Object.prototype.toString.call(12));//[object Number]
console.log(Object.prototype.toString.call(true));//[object Boolean]
console.log(Object.prototype.toString.call(undefined));//[object Undefined]
console.log(Object.prototype.toString.call(null));//[object Null]
console.log(Object.prototype.toString.call({name: "jerry"}));//[object Object]
console.log(Object.prototype.toString.call(function(){}));//[object Function]
console.log(Object.prototype.toString.call([]));//[object Array]
console.log(Object.prototype.toString.call(new Date));//[object Date]
console.log(Object.prototype.toString.call(/\d/));//[object RegExp]
function Person(){};
console.log(Object.prototype.toString.call(new Person));//[object Object]
```

实例2

```
function type(obj){
  return Object.prototype.toString.call(obj).slice(8,-1).toLowerCase();
}
console.log(type("jerry"));//"string"
console.log(type(12));//"number"
console.log(type(true));//"boolean"
console.log(type(undefined));//"undefined"
console.log(type(null));//"null"
console.log(type({name: "jerry"}));//"object"
console.log(type(function(){}));//"function"
console.log(type([]));//"array"
console.log(type(new Date));//"date"
console.log(type(/\d/));//"regexp"
function Person(){};
console.log(type(new Person));//"object"
```

[Demo Code](objectProtoToStringDemo.html)

**constructor**

输出:function 数据类型(){[native code]}或者function 自定义类型(){}

功能:
1. 可以识别标准类型、内置对象类型及自定义类型
2. 不能识别undefined、null，会报错

```
[构造方法]

function type(obj){
  var temp = obj.constructor.toString();
  return temp.replace(/^function (\w+)\(\).+$/,'$1');
}
```

实例1

```
console.log(("jerry").constructor.toString());//function String(){[native code]}
console.log((12).constructor.toString());//function Number(){[native code]}
console.log((true).constructor.toString());//function Boolean(){[native code]}
//console.log((undefined).constructor.toString());//报错
//console.log((null).constructor.toString());//报错
console.log(({name: "jerry"}).constructor.toString());//function Object(){[native code]}
console.log((function(){}).constructor.toString());//function Function(){[native code]}
console.log(([]).constructor.toString());//function Array(){[native code]}
console.log((new Date).constructor.toString());//function Date(){[native code]}
console.log((/\d/).constructor.toString());//function RegExp(){[native code]}
function Person(){};
console.log((new Person).constructor.toString());//function Person(){}
```

实例2

```
function type(obj){
  var temp = obj.constructor.toString().toLowerCase();
  return temp.replace(/^function (\w+)\(\).+$/,'$1');
}
console.log(type("jerry"));//"string"
console.log(type(12));//"number"
console.log(type(true));//"boolean"
//console.log(type(undefined));//错误
//console.log(type(null));//错误
console.log(type({name: "jerry"}));//"object"
console.log(type(function(){}));//"function"
console.log(type([]));//"array"
console.log(type(new Date));//"date"
console.log(type(/\d/));//"regexp"
function Person(){};
console.log(type(new Person));//"person"
```

[Demo Code](constructorDemo.html)

**instanceof**

输出:true或false

功能:
1. 可以识别内置对象类型、自定义类型及其父类型
2. 不能识别标准类型,会返回false
3. 不能识别undefined、null，会报错

```
[实例]

console.log("jerry" instanceof String);//false
console.log(12 instanceof Number);//false
console.log(true instanceof Boolean);//false
//console.log(undefined instanceof Undefined);//报错
//console.log(null instanceof Null);//报错
console.log({name: "jerry"} instanceof Object);//true
console.log(function(){} instanceof Function);//true
console.log([] instanceof Array);//true
console.log(new Date instanceof Date);//true
console.log(/\d/ instanceof RegExp);//true
function Person(){};
console.log(new Person instanceof Person);//true
console.log(new Person instanceof Object);//true
```

[Demo Code](instanceofDemo.html)

[原文地址](http://www.jb51.net/article/72202.htm)
