$(function () {

    $("#loginsuccessful").click(function (event) {

        event.preventDefault();

        var username = $("#username").val();
        var password = $("#password").val();
  
        if ((username.trim() !== "" && password.trim() !== "")) {
            document.cookie = "username=" + username + ";";
            document.cookie = "password=" + password + ";";
            document.cookie = "userID=" + username + password + ";";
            window.location.href = "index.html";
            alert("Login Successfully!");

        }
        else{
            alert("Please login again");
        }

    });
  
    $("#logout, #logout1").click(function () {
        document.cookie = "userID=; expires=Mon, 01 Sep 1800 00:00:00 UTC;";
    });
  
  });
  
  function checkUser(){
    if(getCookie("userID") != ""){
        $("#login, #login1").addClass("d-none");
        $("#logout, #logout1").removeClass("d-none");
    }
    else{
        $("#login, #login1").removeClass("d-none");
        $("#logout, #logout1").addClass("d-none");
    }
  }

  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
  }