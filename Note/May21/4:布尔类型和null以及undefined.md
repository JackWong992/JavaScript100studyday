# 4-布尔类型和null以及undefined

> 只有两个值： true / false

## 如何将其他类型转换为Boolean类型
 - Boolean()
 - !
 - !!
 
 ```javascript
    Boolean(1)
    将数字转换为布尔类型

    Boolean(0)
    //true

    Boolean(NaN)
    //false


    !''
    //先将其他数据类型转换为布尔类型，然后取反

    !!0
    //false

    !!NaN
    //false

    !!''
    //false

    !!null 
    //取两次反，等价于没取反，就是直接对应的布尔类型

    !!undefined
    //false

    !![]
    //true
 ```
 在JavaScript这门语言中为false的类型为：
 > 0 、' '、 NaN 、undefined 、null

 ## null && undefined
 > null undefined 都代表空

 null: 空对象指针<br>
 undefined: 未定义

 null一般都是意料之中的没有
 > 一般都是人为手动的先赋值为null，后面的过程中我们会再次先给它赋值.

 ```js
  var num = null;
  //意思是指num我可能会再赋值给它.大部分都是浏览器自主为空.

  var num;
  //此时变量的值，浏览器会分配的值就是undefined


  null转换为数字是0
  undefined转换为数字是NaN
 ```