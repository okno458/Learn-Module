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