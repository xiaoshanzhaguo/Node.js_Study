/**
 * 流式文件读取也适用于一些比较大的文件，可以分多次读取到内存中
 */

//引入模块
var fs = require("fs");

//创建一个可读流
var rs = fs.createReadStream("hello.jpg");
//创建一个可写流
var ws = fs.createWriteStream("test.jpg");

//监听流的开启和关闭
rs.once("open", function () {
    console.log("可读流打开了~~~");
});

//监听流的开启和关闭
rs.once("close", function () {
    console.log("可读流关闭了~~~");
    //数据读取完毕，关闭可写流
    ws.end();
});

//监听流的开启和关闭
ws.once("open", function () {
    console.log("可写流打开了~~~");
});

//监听流的开启和关闭
ws.once("close", function () {
    console.log("可写流关闭了~~~");
});

//如果要读取一个可读流中的数据，必须要为可读流绑定一个data事件，data事件绑定完毕，它会自动开始读数据
//下面这里就不能用once，因为它会分多次去读取数据。如果这里还来一个once，那就只能读取一次了
//在没绑定下面这个事件时，它没有关闭可读流
//绑了的话，它会自动读取，在读完数据后，自动关闭。
rs.on("data", function (data) {
    // console.log(data);
    // console.log(data.length);
    //老师那里读取的文件大，每次都是65536字节
    //这里意味着每次只读65536字节，即使文件太大，也不会将文件一次就加载出来，每次只读取一部分,避免占用我们大量的内存空间

    //将读取到的数据写入可写流中
    ws.write(data);
    // ws.end(); //这样是不行的，这样会导致我们只读了一条数据，然后就把流给关了。
});
