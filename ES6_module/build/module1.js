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