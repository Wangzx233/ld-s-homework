var username = document.querySelector("#username");
var password = document.querySelector("#password");
var login_b = document.querySelector("#login_b");
var register_b = document.querySelector("#register_b");

// 获取指定名称的cookie
function getCookie(name) {
  var strcookie = document.cookie; //获取cookie字符串
  var arrcookie = strcookie.split("; "); //分割
  //遍历匹配
  for (var i = 0; i < arrcookie.length; i++) {
    var arr = arrcookie[i].split("=");
    if (arr[0] == name) {
      return arr[0];
    }
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

if ((uid = "")) {
  window.alert(uid);
}
login_b.onclick = function Login() {
  lo = new XMLHttpRequest();
  lo.onload = function () {
    var a = lo.responseText;
    var d = JSON.parse(a);
    //var r = eval("(" + a + ")")
    window.alert(d.message);
    if (d.code == 200) {
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
