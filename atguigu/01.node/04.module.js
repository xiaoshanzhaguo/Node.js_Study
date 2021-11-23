var a = 10;

/*
    在node中有一个全局对象 global，它的作用和网页中window类似
        在全局创建的变量都会作为global的属性保存
        在全局创建的函数都会作为global的函数保存

    当Node在执行模块中的代码时，它会首先在代码的最顶部，添加如下代码
    function (exports, require, module, __filename, __dirname) {
    在代码的最底部，添加如下代码
            }

    实际模块中的代码，都是包装在一个函数中执行的，这个函数是由nodejs引擎调用的，并且在函数执行时，同时传递进了5个实参
    exports
        - 该对象用来将变量或函数暴露到外部
    require
        - 函数，用来引入外部的模块
    module
        - module代表的是当前模块本身
        - exports就是module的属性
        - 既可以使用 exports导出，也可以使用module.exports导出
    __filename
        E:\Study\front end\Work\Node.js\atguigu\01.node\04.module.js
        - 当前模块的完整路径，换句话说看，我们能通过这个路径找到这个模块
    __dirname
        E:\Study\front end\Work\Node.js\atguigu\01.node
        - 当前模块所在文件夹的完整路径
 */

console.log(global.a);  //这里还真没有

/*
    arguments.callee
        -这个属性保存的是我们当前指定的函数对象
 */
console.log(arguments); //这里会输出几个参数，有5个实参，证明它确实运行在函数里，而不在全局里
console.log(arguments.callee); //这里打印的应该是当前执行的函数
console.log(arguments.callee + ""); //看到函数的结构
console.log(arguments.length);

//其实下面这两个是一个东西
console.log(exports);
console.log(module.exports);
console.log(module.exports == exports); //module代表的是模块本身，而exports代表的只是模块里的属性，并且这里会输出true

console.log(__filename);
console.log(__dirname);