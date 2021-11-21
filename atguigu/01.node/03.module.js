//引入其他的模块（以前的网页怎么引？使用script标签，src，在Node中不能使用标签， 它不认识
/*
    在node中，通过require()函数来引入外部的模块
    require()可以传递一个文件的路径作为参数，node将会自动根据该路径来引入外部模块
    这里的路径，如果使用相对路径，必须以.或..开头

    使用require()引入模块以后，该函数会返回一个对象，该对象代表的是引入的模块
 */
var md = require("./02.module.js");  //告诉它要引入哪个模块，写个路径
//如果去判断模块确实引入成功呢？ 在02.module.js里面有一行输出 如果执行了，说明成功引入，相当于我们在一个网页里引入了jQuery

//在02.module.js里面定义了x,y，但是这里无法去输出
// console.log(x); //这里相当于引入了jQuery,$符用不了，白引
//上面的md相当于jQuery里的核心$
console.log(md.x); //没有报错，但是输出undefined
console.log(md);

var m = require("./math");
console.log(m.add(1, 2) + "," + m.mul(2, 4));