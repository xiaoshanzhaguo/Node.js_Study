/**
 *  异步文件写入
 *      fs.open(path, flags[, mode], callback)
 *          - 用来打开一个文件
 *          - 异步调用的方法，结果都是通过回调函数返回的
 *          - 回调函数有两个参数：
 *              err 错误对象 如果没有错误则为null
 *              fd 文件的描述符
 *              (这里有nodejs的一个设计思想，叫做错误优先，只要有可能出现错误的方法，它的回调函数的第一个参数就是err，
 *              因为出错了要问题进行处理)
 *
 *      fs.write(fd, string[, position[, encoding]], callback)
 *          - 用来异步写入一个文件
 *
 *     fs.close(fd, callback)
 *          - 用来关闭文件
 */

//引入模块
var fs = require("fs");

var f;

//打开文件
/**
 * 在异步文件写入里，callback函数是必填的，并且在打开文件时不能将fs.open(xxx) 赋值给 fd,

 异步方法不可能有返回值，有返回值的肯定是同步方法。，意味着有返回值才能继续往下操作

 那fd可以从哪里返回，这里有回调函数。

 那在回调时，如何通过回调函数来将结果返回呢？ 回调函数里面应该有参数
 */
fs.open("hello2.txt", "w", function (err, fd) {
    // console.log(123);
    // console.log(arguments);
    console.log("回调函数中的代码~~");

    //判断是否出错
    if (!err) {
        // console.log(fd);
        // f = fd;

        //如果没有出错，则对文件进行写入操作
        fs.write(fd, "这是我们异步写入的内容", function (err) {
            //这个回调函数里面没有fd，因为它不需要返回fd，因此它只会有一个参数-err 让我们看到底有没有错
            //查看文档时，发现回调函数传了3个值，err,written ,string 在这个例子中，后面两个参数没必要
            if (!err) {
                console.log("写入成功~~");
            }

            //关闭文件 只要回调函数一执行，就进行关闭
            fs.close(fd, function (err) {
                if (!err) {
                    console.log("文件已关闭~~");
                }
            });
        });
    } else {
        console.log(err);
    }
});

console.log(f); //这里会输出undefined 原因在于这时候还没调用回调函数，故此时的f没值
console.log("open下的代码");
console.log("程序向下执行~~");
//open下的代码先执行，回调函数里的代码后执行。 因为这里是异步的操作 open的操作不会阻塞下面代码的执行，
//open的操作，其实是把操作交给后台的IO线程池，由里面的线程池去做打开文件的操作，打开操作完成后，再通过回调函数返回，
//所以当回调函数执行时，代表文件已经读完了
//执行顺序：先执行 var f; 再执行fs.open(xxx) 这里的东西会交给后台线程池 然后再往下执行console.log("open下的代码");
  //而回调函数是在文件操作完了之后，才会执行

//写入文件 因此写入文件要在回调函数里。