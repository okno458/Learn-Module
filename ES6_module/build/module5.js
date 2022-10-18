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