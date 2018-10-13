
/*document.querySelector("#container>div:first-child")
    .style.zIndex=10;*/
//1. 查找触发事件的元素
//2. 绑定事件
//3. 查找要修改的元素
//4. 修改元素
var as = document.querySelectorAll(".tabs [data-toggle=tab]");
for(var a of as){
    a.onclick=function () {
        //this->a
         var i = this.href.lastIndexOf("#");
         var id = this.href.slice(i+1);

        var divs = document.querySelectorAll("#container>div");
        for (const div of divs) {
            div.style.zIndex = "";
        }

         var div = document.getElementById(id);
         div.style.zIndex = 10;

    }
}