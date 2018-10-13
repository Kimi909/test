var textName = document.getElementsByName("username")[0];
var textPwd = document.getElementsByName("password")[0];

textName.onfocus=  textPwd.onfocus = function () {
     this.className = "txt_focus";
     var div = this.parentNode.nextElementSibling.children[0];
     div.className = "";
}

textName.onblur = function () {
    /*vail(this,/^\w{1,10}$/);*/
    vail(this,/^\w{1,10}$/);
}
textPwd.onblur = function () {
    /*vail(this,/^d{6}$/);*/
    vail(this,/^\d{6}$/);
}

function vail(txt,reg) {
    txt.className = "";
    var div = txt.parentNode.nextElementSibling.children[0];
    if(reg.test(txt.value)){
        div.className = "vali_success";
    }else{
        div.className = "vali_fail";
    }

}