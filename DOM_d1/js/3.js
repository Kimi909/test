//1. 查找触发事件的元素
//2. 绑定事件
////3. 查找要修改的元素
////4. 修改元素
var table = document.getElementById("data");
var btns = table.getElementsByTagName("button");

for(var btn of btns ){
    btn.onclick = function () {
       var span = this.parentNode.children[1];
       var n = parseInt(span.innerHTML);
       if(this.innerHTML == "+"){
           n++;
       }else if(n >1){
           n--;
       }
       span.innerHTML = n;

       var price = this.parentNode
           .previousElementSibling
           .innerHTML
           .slice(1);
       var sub = price * n;
       this.parentNode.nextElementSibling.innerHTML =
           "¥"+sub.toFixed(2);

       var total = 0;
       var tds = table.querySelectorAll("#data>tbody>tr>td:last-child");
       for(var td of tds){
           var sub = parseFloat(td.innerHTML.slice(1));
           total += sub;
       }
       table.querySelector(
           "#data>tfoot>tr>td:last-child"
       ).innerHTML = "¥" + total.toFixed(2);

    }
}