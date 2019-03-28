/**
 * @param param 任意格式的数据
 * @returns {*}
 */
function deepCopy(param) {
    let obj;
    if (param instanceof Array) {
        obj = [];
        param.forEach(function(item, index) {
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

//下划线转驼峰命名
function camelName(str) {
    return str.replace(/^[a-z]/g, function(matched) {
        return matched.toLocaleUpperCase();
    }).replace(/_([a-z])/g, function(matched, $1) {
        return $1.toLocaleUpperCase();
    })
}
function camelName2(str) {
    return str.split('_').map(function(item) {
        return item[0].toUpperCase() + item.slice(1);
    }).join('')
}

function camelName3() {
    var str = "afea_dsf_sdf";
    var reg = /(^|_)([a-zA-Z0-9])/g;
    str.replace(reg, function(matched, p1, p2) {
        return p2.toLocaleUpperCase();
    });
}

//驼峰转下划线
function camelToUnderline(str) {
    return str.replace(/[A-Z]/g, function(matched) {
        return '_' + matched.toLocaleLowerCase()
    })
}

function ecode(obj) {
    var ret = [];
    for (var attr in obj) {
        if (obj[attr] !== '' && obj[attr] !== undefined) {
            ret.push(attr + '=' + obj[attr]);
        }
    }
    return ret.join('&');
}

//字符串倒置
function reverseString(str) {
    return str.split('').reverse().join('');
}
reverseString(str);

function reverseString2(str) {
    var newStr = '';
    for (var i = str.length - 1; i >= 0; i--) {
        // newStr += str[i]; 第一种方法
        newStr += str.charAt(i); //第二种方法
    }
    
    return newStr
}
reverseString2(str);

var str = 'Hello';
function reverseString3(str) {
    var len = str.length - 1;
    var array = str.split('').map(function(char) {
        return char.charCodeAt(0);
    });
    for (var index = 0; index < Math.ceil((len - 1) / 2); index++) {
        array[index] ^= array[len - index];
        array[len - index] ^= array[index];
        array[index] ^= array[len - index];
    }
    return array.map(function(code) {
        return String.fromCharCode(code);
    }).join();
}
reverseString3(str);

//去重
//1 ES6 Set
function uniqAry(array) {
    return [...new Set(array)];
}

// 对象的key 唯一性
function uniqAry2(array) {
    var obj = {},
        ary = [];
    array.forEach(function(val) {
        if (obj[val + typeof val] === undefined) {
            obj[val + typeof val] = val;
            ary.push(val);
        }
    });
    return ary;
}

//数值和脚标 数值在数组中首次出现的索引值和当前索引是否相同，相同则存入新数组
function uniqAry3(array) {
    var ary = [];
    array.forEach(function(val, index) {
        if (array.indexOf(val) === index) {
            ary.push(val);
        }
    });
    return ary;
}

function uniqAry4(array) {
    // res用来存储结果
    var res = [];
    for (var i = 0, arrayLen = array.length; i < arrayLen; i++) {
        for (var j = 0, resLen = res.length; j < resLen; j++) {
            if (array[i] === res[j]) {
                break;
            }
        }
        // 如果array[i]是唯一的，那么执行完循环，j等于resLen
        if (j === resLen) {
            res.push(array[i]);
        }
    }
    return res;
}

var ary = [1, 8, 3, 9, 4];
console.log(ary.sort(function(a, b) {
        return a - b;
    }),
    ary.sort());

function bubbleSort(ary) {
    for (var i = 0; i < ary.length; i++) {
        for (var j = i; j < ary.length; j++) {
            if (ary[i] > ary[j]) {
                var temp = ary[i];
                ary[i] = ary[j];
                ary[j] = temp;
            }
        }
    }
    return ary;
}
console.log(bubbleSort(ary));

var ary = [1, 8, 3, 9, 4];
function quickSort(ary) {
    if (ary.length === 1 || ary.length === 0) return ary;
    //找到最中间的值
    var middle = Math.floor(ary.length / 2);
    var middleValue = ary[middle];
    var left = [], right = [];
    for (var i = 0; i < ary.length; i++) {
        if (i !== middle) {
            if (ary[i] >= middleValue) {
                right.push(ary[i]);
            } else {
                left.push(ary[i]);
            }
        }
    }
    return [...quickSort(left), middleValue, ...quickSort(right)];
}
console.log(quickSort(ary));
















