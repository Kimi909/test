//1. 查找触发事件的元素
//2. 绑定事件
//3. 查找要修改的元素
//4. 修改元素

var ckAll = document.querySelector("table>thead>tr>th:first-child>input");
ckAll.onclick=function () {
     var chbs = document.querySelectorAll("table>tbody>tr>td:first-child>input");
    for (var  cnb of chbs) {
        cnb.checked = ckAll.checked;
    }
}

var chbs = document.querySelectorAll("table>tbody>tr>td:first-child>input");
for (var cnb of chbs) {
    cnb.onclick = function(){
        //如果当前未被选中
        if(!this.checked){
            ckAll.checked = false;
        }else{
            //当前选中，查询其他未被选中的
            var unCheck = document.querySelector("table>tbody>tr>td:first-child>input:not(:checked)");
            if(unCheck != null){
                ckAll.checked = false;
            }else{
                ckAll.checked = true;
            }
        }
    }
}