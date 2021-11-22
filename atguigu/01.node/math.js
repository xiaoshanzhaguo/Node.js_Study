/*
    定义一个模块 math
        - 在模块中提供两个方法
           add(a, b); //求两个数的和
           mul(a, b); //求两个数的积
 */

//这里不加函数名add
// exports.add = function add(a, b) {
//     return a + b;
// };

exports.add = function (a, b) {
    return a + b;
};

// exports.mul = function mul(a, b) {
//     return a * b;
// };
exports.mul = function (a, b) {
    return a * b;
};