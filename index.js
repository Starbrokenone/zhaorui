//页面加载完成后触发
window.onload = function () {
	// body...
	var obtn = document.getElementById('btn');
	var timer = null;
	var isTop = true;
    window.onscroll = function(){//停止滚动时，清除计时器
    	if(!isTop){
    		clearInterval(timer);	
    	}
    	isTop = false;
    }
	obtn.onclick = function(){
		clearInterval(timer);
		//设置定时器
		timer = setInterval(function(){
			//此动画隔30毫秒执行一次 
			//获取滚动条到顶部的距离
			var osTop = document.documentElement.scrollTop;
			//alert(osTop);
			var ispeed = osTop / 7;
			//改写滚动条数值,向上跳200
			document.documentElement.scrollTop = osTop - ispeed;
			isTop = true;
			if(osTop == 0 ){
			clearInterval(timer);
		} 
		},30)

	}
}