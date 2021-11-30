/**
 * 流式文件读取也适用于一些比较大的文件，可以分多次读取到内存中
 */

//引入模块
var fs = require("fs");

//创建一个可读流
var rs = fs.createReadStream("hello.jpg");
//创建一个可写流
var ws = fs.createWriteStream("test1.jpg");

//监听流的开启和关闭
rs.once("open", function () {
    console.log("可读流打开了~~~");
});

//监听流的开启和关闭
rs.once("close", function () {
    console.log("可读流关闭了~~~");
    //数据读取完毕，关闭可写流
    // ws.end();
});

//监听流的开启和关闭
ws.once("open", function () {
    console.log("可写流打开了~~~");
});

//监听流的开启和关闭
ws.once("close", function () {
    console.log("可写流关闭了~~~");
});

//pipe()可以将可读流中的内容，直接输出到可流中。
//你可以发现，你没有绑定data事件，把可写流的end()方法也注释了。但是你会发现可读流关闭了，可写流也关闭了。
//为什么关闭了？因为pipe在里面自动完成了。
//因此你如果真的想将可读流，可写流里的信息互相传递，其他方法都不用调用，直接调用pipe就可以了。
//在上面的方法中，你不想监听，也可以去掉相应的代码。
rs.pipe(ws);
