// 登录操作
function login(username, password, remember) {
    // 调用Ajax请求进行登录操作
    $.post("/api/login", { username:username, password:password }, function(data) {
      // 登录成功
      setLoginCookie(data.token, remember);
      window.location.href = "/";  // 跳转到首页
    }).fail(function() {
      alert("登录失败，请检查用户名和密码。");
    });
  }
  
  // 设置登录Cookie
  function setLoginCookie(token, remember) {
    var expires = remember ? 7 : null;  // 选择记住密码时，设置持久保存
    createCookie("token", token, expires);
  }
  
  // 创建一个Cookie
  function createCookie(name, value, days) {
    var expires;
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toGMTString();
    } else {
      expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
  }
  