/*
*   module1中使用【分别暴露】
*
* */
export const data = 'atguigu'
export const meg ='hello0862'
//使用分别暴露 只需要在代码前加export关键字即可
export function showData() {
    console.log(data)
}
export function showMsg() {
    console.log(meg)
}

