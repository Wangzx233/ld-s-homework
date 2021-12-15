var username = document.querySelector("#username");
var password = document.querySelector("#password");
var login_b = document.querySelector("#login_b");
var register_b = document.querySelector("#register_b");

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
    
} else {
  window.location.href = "./index.html";
}



function setCookie(cname,cvalue,exdays){
	var d = new Date();
	d.setTime(d.getTime()+(exdays*24*60*60*1000));
	var expires = "expires="+d.toGMTString();
	document.cookie = cname+"="+cvalue+"; "+expires;
}

login_b.onclick = function Login() {
  lo = new XMLHttpRequest();
  lo.onload = function () {
    var a = lo.responseText;
    var d = JSON.parse(a);
    //var r = eval("(" + a + ")")
    window.alert(d.message);
    if (d.code == 200) {
      setCookie("uid",username.value,300);
      window.location.href = "../index.html";
    }
  };
  lo.open(
    "get",
    "http://8.142.81.74:8080/user/login?username=" +
      username.value +
      "&password=" +
      password.value,
    true
  );
  lo.send();
};

register_b.onclick = function register() {
  re = new XMLHttpRequest();

  re.onload = function () {
    var a = re.responseText;
    var d = JSON.parse(a);
    //var r = eval("(" + a + ")")
    window.alert(d.message);
  };
  re.open("post", "http://8.142.81.74:8080/user/register", true);
  re.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  re.send("username=" + username.value + "&password=" + password.value);
};
