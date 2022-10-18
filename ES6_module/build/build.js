(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _module = require('./module1');

var module1 = _interopRequireWildcard(_module);

var _module2 = require('./module2');

var _module3 = require('./module3');

var _module4 = require('./module4');

var _module5 = _interopRequireDefault(_module4);

var _module6 = require('./module5');

var _module7 = _interopRequireDefault(_module6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//引入默认暴露的模块


//引入模块中所有的元素并重命名为obj 此处的obj是一个对象
//引入分别暴露的模块 + 打包引入
//引入分别暴露的模块
console.log(_module7.default);

//引入混合暴露的模块


//引入统一暴露的模块(和以上三种方法相同)

//此处的as为重命名 如果遇到命名冲突可使用as解决
//引入分别暴露的模块 + 重命名

console.log(_module6.teacher1, _module6.teacher2);
console.log(_module6.st, _module6.sts);
console.log(_module.data);
console.log(_module2.data);
console.log(module1);
console.log(_module.meg);
(0, _module.showMsg)();
(0, _module.showData)();

console.log(_module3.school);
console.log(_module3.person);
(0, _module3.getPerson)();

console.log(_module5.default);
},{"./module1":2,"./module2":3,"./module3":4,"./module4":5,"./module5":6}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.showData = showData;
exports.showMsg = showMsg;
/*
*   module1中使用【分别暴露】
*
* */
var data = exports.data = 'atguigu';
var meg = exports.meg = 'hello0862';
//使用分别暴露 只需要在代码前加export关键字即可
function showData() {
    console.log(data);
}
function showMsg() {
    console.log(meg);
}
},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
*   module2中使用【分别暴露】 但暴露了一个和module1命名冲突的变量
*
* */
var data = exports.data = '5555555555';
},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
*   module3中使用【统一暴露】
*
* */
var school = 'atguigu';
var person = {
    name: 'll',
    age: 18
};
function getPerson() {
    console.log(person);
}

//统一暴露的精简版写法
// export {school,person,getPerson}

//统一暴露的完整版版写法
exports.school = school;
exports.person = person;
exports.getPerson = getPerson;
},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
*   module4中使用【默认暴露】 适用于质暴露一个内容或数据
*   默认暴露后边一定要跟一个表达式 只能暴露一次
* */
exports.default = {
    name: 'w',
    age: 5
};
},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
//使用分别暴露
var teacher1 = exports.teacher1 = { name: 'q', age: 12 };
var teacher2 = exports.teacher2 = { name: 'o', age: 15
    //使用统一暴露
};var st = { name: 'qq', age: 12 };
var sts = { name: 'oo', age: 16 };
exports.st = st;
exports.sts = sts;
//使用默认暴露

exports.default = {
    school: 'ssss',
    address: '888888'
};
},{}]},{},[1]);
