# 3-number类型详细解读(NaN和isNaN)

1. number数字类型
NaN: not a number 是属于数字类型
isNaN: 检测当前是否为有效数字，返回true代表不是有效数字，返回false
```javascript
语法 => isNaN(value)
var num = 12;
isNaN(num) //检测num变量存储的值是否为有效数字
isNaN('13') //false 为有效数字
isNaN(false) //false
isNaN(null) //false
isNaN(undefined) //true
isNaN(Object) // true
isNaN(/^$/) // true
isNaN(function(){}) //true
```
检测为isNaN的机制：
1. 首先验证的当前要检测的值是否为数字类型，如果不是，浏览器会默认把值转为数字类型.
   1. 把非数字类型的值转换为数值`Number()`
      * Number('12') //12
      * Number('13px') //NaN 先讲13px转换为数字类型为NaN
      * Number(null) //0
      * Number(undefined) // NaN
      * Number(true) //1
      * Number(false) //0
    2. 把引用数据类型转换为数字:先把引用数值调取toString()方法转换为字符串，然后再把字符串调取Number()转换为数字  
    ```javascript
      var a = {name: 'xm'}
      Number(a) //NaN
   
      var arr = [12]
      Number(arr) // 12

      var _arr = [12,3]
      Number(_arr) //NaN
    ```
2. 当前检测的值已经是数字类型，是有效数字返回为false，不是返回true。

数字类型中只有NaN不是有效数字，其余都是有效数字.

## parseInt / parseFloat
> 等同于Number,也是为了其他类型转换为数字类型

```js
parseInt: 把一个字符串的整数部分解析出来
parseFloat: 把一个字符串当中浮点数部分解析出来
```
但是要注意的是这个解析遇到第一个非数字的部分停止进行解析.

3. NaN比较
```js
NaN == NaN  //false NaN和谁都不相等包括自己.
```
检测是否是NaN:
```js
  var vm = 'c'
  isNaN(vm)
```

错误的理解:
```js
  if( Number(num) == NaN ){
    console.log(`${num}不是有效数字`)
  }

```
原因在于NaN本身都不相等所以无法进行判断.