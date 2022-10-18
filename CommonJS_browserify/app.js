/*
* 暴露的本质是module.exports的内容 引入的内容是什么，取决于暴露的内容是什么
*
* */
const m1 = require('./module1')
const m2 = require('./module2')
m1.showData()
m1.showMsg()
m2.sum(1,2)
m2.sub(1,2)
console.log(m2.data)
console.log(m2.msg)
