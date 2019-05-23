var a = 12;
var b = a;

b = 13;

console.log(a)  //13

console.log('------')
var obj1 = {
  n:100
}
var obj2 = obj1
obj2['n'] = 200;
console.log(obj1.n) //200

var obj = {
  n: 10,
  m: obj.n*10
}

console.log(obj.m)
 //Error: Can not read property 'm' of undefiend

