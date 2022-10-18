//引入分别暴露的模块
import {data,showMsg,meg,showData} from './module1'
//此处的as为重命名 如果遇到命名冲突可使用as解决
//引入分别暴露的模块 + 重命名
import {data as data2} from './module2'

//引入模块中所有的元素并重命名为obj 此处的obj是一个对象
//引入分别暴露的模块 + 打包引入
import * as module1 from './module1'

//引入统一暴露的模块(和以上三种方法相同)
import {school,person,getPerson} from './module3'
//引入默认暴露的模块
import module4 from "./module4";

//引入多种方式暴露的模块
import module5,{teacher1,teacher2,st,sts} from './module5'

console.log(module5)
console.log(teacher1,teacher2)
console.log(st,sts)
console.log(data)
console.log(data2)
console.log(module1)
console.log(meg)
showMsg()
showData()

console.log(school)
console.log(person)
getPerson()

console.log(module4)
