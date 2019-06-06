/* eslint-disable */
// 设置cookie
export function setCookie(name, value, iDay) {
    var oDate = new Date()
    oDate.setTime(oDate.getTime() + iDay)
    document.cookie = name + '=' + value + ';expires=' + oDate + ';path=/'
}

// 获取 cookie
export function getCookie(name) {
    var arr; var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
    if (arr = document.cookie.match(reg))
        return (arr[2])
    else
        return null
}

// 删除cookie
export function removeCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}
