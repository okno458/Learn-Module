/*
*   module3中使用【统一暴露】
*
* */
const school = 'atguigu'
const person = {
    name:'ll',
    age:18
}
function getPerson() {
    console.log(person)
}

//统一暴露的精简版写法
// export {school,person,getPerson}

//统一暴露的完整版版写法
export {school as school,person as person,getPerson as getPerson}

