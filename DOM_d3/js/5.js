/*var textName = document.getElementsByName("username")[0];
var textPwd = document.getElementsByName("password")[0];*/

var form = document.forms[0];
var textName = form.username;
var textPwd = form.password;


textName.onfocus=  textPwd.onfocus = function () {
     this.className = "txt_focus";
  //   var div = this.parentNode.nextElementSibling.children[0];
     var div = this.parentNode.nextElementSibling.firstElementChild;
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

form.elements[form.length-2].onclick = function(){
    if(!vail(textName,/^\w{1,10}$/)){
        textName.onfocus();
    }else if(!vail(textPwd,/^\d{6}$/)){
        textPwd.focus();
    }else{
       form.submit();
    }
}