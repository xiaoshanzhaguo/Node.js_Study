var fs = require("fs");

/**
 * fs.existsSync(path)
 *  - 检查一个文件是否存在
 */

var isExists = fs.existsSync("hello5.txt");
console.log(isExists);

/**
 * fs.stat(path, callback)
 * fs.statSync(path)
 *  - 获取文件的状态
 *  - 它会给我们返回一个对象，这个对象中保存了当前对象状态的相关信息
 */
fs.stat(("hello.txt"), function (err, stat) {
    console.log(stat); //获取文件的状态，在里面birthtime是文件的创建时间
    console.log(stat.size); //size表示文件的大小
    console.log(stat.isFile()); //是否是文件
    console.log(stat.isDirectory()); //是否是一个文件夹（目录）
});


/**
 * fs.unlink(path, callback)
 * fs.unlinkSync(path)
 *  - （断开连接） 删除文件
 */
// fs.unlinkSync("hello.txt");


/**
 * fs.readdir(path[, options], callback)
 * fs.readdirSync(path[, options])
 *  - 读取一个目录的目录结构
 *      files是一个字符串数组，每一个元素就是一个文件夹或文件的名字
 */
fs.readdir(".", function (err, files) {
    if (!err) {
        console.log(files);  //文件夹里有什么，都把它读出来 （类似于cmd里面输入dir）
    }
})


/**
 * fs.truncate(path, len, callback)
 * fs.truncateSync(path, len)
 *   - 截断文件，将文件修改为指定的大小 比如下面的代码中，是把文件大小变为3个字节
 */
// fs.truncateSync("hello2.txt",3);
//老师执行这个有异象，但是我的运行没问题。 这里是因为上面删除的文件不存在，已经注释掉了。
//刚才老师的异象是因为一个汉字是3个字节，他想把大小变成10，故文件变成两个文字+一个字节（想当于一个汉字截了一半，认不出来就乱码了）


/**
 * fs.mkdir(path[, mode], callback)
 * fs.mkdirSync(path[, mode])
 *      - 创建一个目录
 *
 *
 */
// fs.mkdirSync("hello");

// fs.rmdirSync("hello");


/**
 * fs.rename(oldPath, newPath, callback)
 * fs.renameSync(oldPath, newPath)
 *      - 对文件进行重命名
 *      - 参数：
 *          oldPath 旧的路径 旧的名字  (这里不仅仅可以传一个文件名，还可以传一个路径)
 *          newPath 新的路径
 *          callback 回调函数
 *
 *      （既可以重命名，也可以剪切内容）
 */
// fs.rename("hello.txt", "hello.txt", function (err) {
//     if (!err) {
//         console.log("修改成功~~~");
//     }
// });

//下面的操作相当于剪切，移动文件，但是不知道为什么我的代码就执行不了呢？算了，我也不知道呀
fs.rename("hello3.txt", "D:\\BaiduNetdiskDownload\\尚硅谷Nodejs\\hello3.txt", function (err) {
    if (!err) {
        console.log("修改成功~~~");
    }
});

/**
 * fs.watchFile(filename[, options], listener)
 *      - 监视文件的修改
 *      - 参数
 *          filename 要监视的文件的名字
 *          options 可选，配置选项
 *          listener 回调函数，当文件发生变化时，回调函数会执行
 *              在回调函数中，会有两个参数：
 *                  curr 当前文件的状态
 *                  prev 修改前文件的状态
 *                      - 这两个对象都是stats对象  stat是在之前获取文件状态时，function里返回的对象 size、isFile()、isDirectory()都可以调用
 */
fs.watchFile("hello.txt",{interval: 1000}, function (curr, prev) {
    console.log("文件发生变化了~~~"); //一直在运行，监视hello.txt文件的变化 反应会比较迟钝
    console.log("修改前文件大小："+prev.size);
    console.log("当前文件大小："+curr.size);
});
