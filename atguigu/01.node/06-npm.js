/*
    通过npm下载对的包都放到node_modules文件夹中
        我们通过npm下载的包，直接通过包名引入即可

    node在使用模块名字来引入模块时，它会首先在当前目录的node_modules中寻找是否含有该模块
        如果有则直接使用，如果没有则去上一级目录的node_modules中寻找
        如果有则直接使用，如果没有则再去上一级目录寻找，直到找到为止
        直到找到磁盘的根目录，如果依然没有，则报错 （如果在C盘里就是找到C盘的根目录）
 */
var math = require("math");
// var express = require("express"); //当你引入这些包时，它会自动到node_modules中去找

console.log(math.add(123, 456));