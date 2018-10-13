//1. 查找触发事件的元素
//2. 绑定事件
//3. 查找要修改的元素
//4. 修改元素

var spans = document.querySelectorAll(".tree>li>span");
for (var span of spans) {
    span.onclick = function () {
        //如果当前的元素为open 清空
        if(this.className == "open"){
            this.className = "";
        }else{
           var openSpan = document.querySelector(".tree>li>span");
           //如果找到
           if(openSpan != null){
               openSpan.className = "";
           }
            //找到开着的元素清空
            //当前元素设置为open样式
            this.className = "open";
        }

    }
}