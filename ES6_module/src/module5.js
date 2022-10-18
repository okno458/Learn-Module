//使用分别暴露
export const teacher1 = {name:'q',age:12}
export const teacher2 = {name:'o',age:15}
//使用统一暴露
const st = {name:'qq',age:12}
const sts = {name:'oo',age:16}
export {st,sts}
//使用默认暴露
export default {
    school:'ssss',
    address:'888888'
}
