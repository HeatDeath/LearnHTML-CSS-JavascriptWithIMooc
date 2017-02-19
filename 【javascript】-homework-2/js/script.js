//对document.getElementById()进行封装
function byId(id){
	return typeof(id)==="string"?document.getElementById(id):id;

}

//定义所需要的变量
var timer=null,
	index=0,
	pics=byId("banner").getElementsByTagName("div"),
	tags=byId("tags").getElementsByTagName("span"),
	size=pics.length;

//图片自动播放
function picsAutoPlay(){
	timer=setInterval(function(){
		index++;
		if(index>=size){
			index=0;
		}
		changePic();
	},1000)
}

//更换图片
function changePic(){
	for(var i=0,len=tags.length;i<len;i++){
		tags[i].className="";
		pics[i].style.display="none";
	}
	tags[index].className="active";
	pics[index].style.display="block";
}

//图片切换
function slidePic(){
	var main=byId("main");
	main.onmouseover=function(){
		stopAutoPlay();		
	}
	main.onmouseout=function(){
		picsAutoPlay();
	}
	main.onmouseout();

	//点击导航切换
	for(var i=0,len=tags.length;i<len;i++){
		tags[i].id=i;
		tags[i].onclick=function(){
			index=this.id;
			changePic();
		}
	}
}

//停止自动播放
function stopAutoPlay(){
	if(timer){
		clearInterval(timer);
	}
}

slidePic();

