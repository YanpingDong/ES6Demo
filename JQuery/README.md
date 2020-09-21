# JQuery创建HTML元素（两种方法）

方式一：

var link1 = $('<a>',{
   text:"baidu",
   href:"http://www.baidu.com",
   target:"_blank",
   title:"goto baidu" 
});
 
link1.appendTo('body');
方式二：

var link2 = $('<a>baidu</a>').attr({
   href:"http://www.baidu.com",
   target:"_blank",
   title:"goto baidu" 
});

如果想顺便添加CSS

var link2 = $('<a>baidu</a>').attr({
   href:"http://www.baidu.com",
   target:"_blank",
   title:"goto baidu" 
}).css({"background-color":"yellow","font-size":"200%"});
 
link2.appendTo('body');
