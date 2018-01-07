# console 命令

## 显示命令与占位符

```
console.log('hello');
console.info('info');
console.error('error');
console.warn('warn');
```
输出如下图所示，可以发现error和warn会有特殊标识

![](displayAndPlacehold.png)

## 信息分组

```
console.group("第一组信息");
console.log("第一组第一条");
console.log("第一组第二条");
console.groupEnd();
console.group("第二组信息");
console.log("第二组第一条");
console.log("第二组第二条");
console.groupEnd();
```

输出如下图所示
![](group.png)

## 查看对象的信息

![](dirShowObjectInfo.png)
