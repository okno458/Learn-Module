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
