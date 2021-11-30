/**
 *  1. 同步文件读取
 *  2. 异步文件读取
 *  3. 简单文件读取
 *      fs.readFile(path[, options], callback)
 *      fs.readFileSync(path[, options])
 *          - path 要读取的文件的路径
 *          - options 读取的选项 主要指操作符 r w  还有就是编码和权限，一般我们都不写
 *          - callback 回调函数，通过回调函数将读取到内容返回
 *          （readFileSync没有回调函数，是通过返回值返回读取内容）
 *              err 错误对象
 *              data 读取到的数据，会返回一个Buffer
 *  4. 流式文件读取
 */

var fs = require("fs");

var path = "E:\\爱自己哟\\Ficture\\图片\\psb.jpg"; //老师这里给出的例子是音频mp3

//err异常对象，data是读取到的数据
fs.readFile(path, function (err, data){
    if(!err) {
        console.log(data); //这里读取到的是缓冲区的对象
        // console.log(data.toString()); //读取文本内容
        //读取数据，直接返回字符串不好吗？为什么要返回一个Buffer呢？我还需要toString
        //直接返回字符串可以吗？不可以。因为我们不一定读的就是文本文件。假如读取的是图片，toString就不行。
        //图片里面是二进制数据，如果你都转换成一个字符串，实际上字符串是使用utf-8进行编码，而用utf-8对图片编码，这事正常吗？ 不靠谱
        //我读到的不一定是个文本文件，有可能是个图片、音频、视频等文件，这个时候如果返回一个文本，通用性就不高了。
        //而Buffer什么都行，想读谁就读谁。


        //将data写入到文件中
        //下面也可以更改路径，复制到桌面去
        fs.writeFile("hello.jpg", data, function (err) { //这里的options不传了
            if(!err) {
                console.log("文件写入成功"); //发现文件夹中多出了一个hello.jpg 相当于完成了一次复制
            }
        });
    }
})

//现在数据已经读出来了，能不能把数据再写出去呢？写到别的地方。 这里跳转到上面的if条件语句中！！！