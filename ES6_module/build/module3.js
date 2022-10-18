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