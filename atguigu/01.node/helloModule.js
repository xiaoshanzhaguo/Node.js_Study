/*
module.exports.name = "孙悟空";
module.exports.age = 18;
module.exports.sayName = function () {
    console.log("我是孙悟空~~~");
};*/

//exports = module.exports //exports是指向module.exports

//我想一下导出三个？
// module.exports = {
//     name: "猪八戒",
//     age: 28,
//     sayName: function () {
//         console.log("我是猪八戒");
//     }
// };

//下面这样写会报错
exports = {
    name: "猪八戒",
    age: 28,
    sayName: function () {
        console.log("我是猪八戒");
    }
};

/*var obj = {}; //空对象
obj.a = {};
// a 和 obj.a 指向的是同一个对象
var a = obj.a;
// console.log(a == obj.a);
a.name = "孙悟空";
a = new Object();

console.log(obj.a.name); //因为a和obj.a指向的是同一个对象，因此这里输出的就是孙悟空
console.log(a.name);*/

var a = 10;
var b = a; //这里整了一个变量b,值是a的值，现在a和b都是10,但是这两个没有关联
a++; //这里加了这行代码，a和b的值会不一样，因为基本类型的数据之间是相互独立的

// console.log("a = " + a);
// console.log("b = " + b);

var obj = new Object();
obj.name = "孙悟空";
var obj2 = obj;
obj2.name = "猪八戒";

obj2 = null;

console.log("obj = "+obj.name);
// console.log("obj2 = "+obj2.name);
console.log("obj2 = "+obj2);




