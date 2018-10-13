function $(id) {
    return document.getElementById(id);
}


function createXhr() {
    var xhr = null;
    //允许通过window.XMLHttpRequest 来判断浏览器是否支持标准创建
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else{
        xhr = new ActiveXObject("Microsoft.XMLHttp");
    }
    return xhr;
}