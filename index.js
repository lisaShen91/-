/**
 * @param param 任意格式的数据
 * @returns {*}
 */
function deepCopy(param) {
    let obj;
    if (param instanceof Array) {
        obj = [];
        param.forEach(function(item, index){
            obj[index] = deepCopy(item);
        });
        return obj;
    } else if (param instanceof Object) {
        obj = {};
        for (var attr in param) {
            obj[attr] = deepCopy(param[attr]);
        }
        return obj
    } else {
        return param;
    }
}
//使用JSON.stringify()和JSON.parse()实现深复制
//局限性： 有些数据不能被这两个函数处理，如undefined、正则、函数等， 除此之外的可以实现深copy
function deepCopy2(obj) {
    return JSON.parse(JSON.stringify(obj));
}