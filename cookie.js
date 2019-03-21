// https://www.cnblogs.com/maderlzp/p/7843365.html
/**
 * cookie获取正则解析：
 "(^| )" + name + "=([^;]*)(;|$)"  (^| )匹配cookie开头或空格（cookie键值对之间用分号空格隔开），
 也就是cookie键值对的开始。接着是cookie的名称name，（[^;]*）匹配除分号以外的任意字符，也就是cookie键值对的值。
 最后(;|$)匹配分号或整个cookie的结尾，也就是cooke键值对的结尾。
 */
var getCookie = function (name) {
    var arr;
    var reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
};
/**
 * 设置cookie
 * @param name cookie的名称
 * @param value cookie的值
 * @param day cookie的过期时间
 */
var setCookie = function (name, value, day) {
    if(day !== 0){     //当设置的时间等于0时，不设置expires属性，cookie在浏览器关闭后删除
        var expires = day * 24 * 60 * 60 * 1000;
        var date = new Date(+new Date()+expires);
        document.cookie = name + "=" + escape(value) + ";expires=" + date.toUTCString();
    }else{
        document.cookie = name + "=" + escape(value);
    }
};

/**
 * 删除cookie
 * @param name cookie的名称
 */
var delCookie = function (name) {
    setCookie(name, ' ', -1);
};



