//获取box下所有的li
var box =  document.getElementById('box')
console.dir(box)

var li = document.getElementsByTagName('li')
//li.className += " bgColor"


for(var i=0; i<li.length; i++){
  if(i%3 ===0){
    li[i].className +=' bgColor1'
  }
  if(i%3 ===1){
    li[i].className +=' bgColor2'

  }
  if(i%3===2){
    li[i].className +=' bgColor3'
  } 
}