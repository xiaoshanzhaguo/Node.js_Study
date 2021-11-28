/**
 * 简单文件写入
 *  fs.writeFile(file, data[, options], callback)
 *  fs.writeFileSync(file, data[, options])
 *      - file 要操作的文件的路径
 *      - data 要写入的数据
 *      - options 选项，可以对写入进行一些设置  可选参数  看到options，一般都是一个对象
 *      - callback 当写入完成以后执行的函数
 *
 *      - flag
 *          r 只读
 *          w 可写
 *          a 追加
 */
// 引入fs模块
var fs = require("fs");

//这里查看文档，看callback里面要传什么参数，结果发现官网里只传了err一个参数
//这里不用再打开和关闭文件了！！！
//这里为什么这么简单，查看源码发现它只是把打开和关闭文件等操作封装了，用的时候，用这个更简单
// fs.writeFile("hello3.txt", "这是通过writeFile写入的内容", {flag: "r+"}, function (err) {
//     if (!err) {
//         console.log("写入成功~~");
//     } else {
//         console.log(err);  //这里如果flag: "r" 会输出报错信息，告诉你权限不够 因此options这里一般都不写，默认flag: "w"
//     }
// })

//C:\Users\shanzhaguo\Desktop\hello.txt
//在下面的代码中，\是转义字符，所以需要两个\\
//或者写成 C:/Users/shanzhaguo/Desktop/hello.txt 这样就不需要两个\\了 效果是一样的
//第一次运行时，报错了，是因为flag: "r+"
fs.writeFile("C:/Users/shanzhaguo/Desktop/hello.txt", "这是通过writeFile写入的内容", {flag: "w"}, function (err) {
    if (!err) {
        console.log("写入成功~~");
    } else {
        console.log(err);  //这里如果flag: "r" 会输出报错信息，告诉你权限不够 因此options这里一般都不写，默认flag: "w"
    }
})
