let enableDebug = false;

function debug() {
    var x = getCookie("isDebug");
    if(x == "true") {
        console.log("Set background");
        document.getElementById("debug1").style = "background-color: blue"
        document.getElementById("debug2").style = "background-color: red"
    } else {
        console.log("No background");
        document.getElementById("debug1").style = "background: none"
        document.getElementById("debug2").style = "background: none"
    }
}

function setDebug(tmp) {
    enableDebug = tmp;
    console.log(enableDebug);
    setCookie("isDebug", enableDebug, 10);
    debug();
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/" + ";secure";
  }