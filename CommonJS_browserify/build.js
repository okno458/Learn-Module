(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"./module1":2,"./module2":3}],2:[function(require,module,exports){
/*
*   module1使用module.exports = xxx 去暴露，xxx就是暴露的内容
*   module.export和exports不能混用，如果混用，以module.export为准
* */
const data = 'atguigu'
const msg = 'hello'

module.exports = {
    showData(){
        console.log(data)
    },
    showMsg(){
        console.log(msg)
    }
}

exports.a = 100 //此行代码不起作用，上面已经写了module.export

},{}],3:[function(require,module,exports){
/*
*   module2使用exports.xxx = value，value就是暴露的内容，xxx是它的名字
* */
exports.data = 'atguigu'
exports.msg = 'hello2'
exports.sum = function (a,b) {
    return a + b
}
exports.sub = function (a,b) {
    return a - b
}
exports.a = 1

},{}]},{},[1]);
