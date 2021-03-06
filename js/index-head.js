function showTime() {
  var date = new Date(); //日期对象
  var now = "";
  now = date.getFullYear() + "年"; //读英文就行了
  now = now + (date.getMonth() + 1) + "月"; //取月的时候取的是当前月-1如果想取当前月+1就可以了
  now = now + date.getDate() + "日";
  now = now + date.getHours() + "时";
  now = now + date.getMinutes() + "分";
  now = now + date.getSeconds() + "秒";
  document.getElementById("time").innerHTML = now; //div的html是now这个字符串
  setTimeout("show()", 1000); //设置过1000毫秒就是1秒，调用show方法
}


// 获取指定名称的cookie
function getCookie(cname){
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) {
		var c = ca[i].trim();
		if (c.indexOf(name)==0) { return c.substring(name.length,c.length); }
	}
	return "";
}

var uid = getCookie("uid");

//判断cookie是否存在
c_start = document.cookie.indexOf("uid=");
if (c_start == -1) {
  document.getElementById("user-p").style.visibility="hidden";
  document.getElementById("user-a").style.visibility="visible";
} else {
  document.getElementById("user-a").style.visibility="hidden";
  document.getElementById("user-p").style.visibility="visible";
  document.getElementById("user-p").innerHTML="你好："+uid;
}