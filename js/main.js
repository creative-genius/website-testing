let enableDebug = false;

function debug(y) {
    var x = getCookie("isDebug");
    if(x == "true") {
        console.log("Set background");
        for(let i = y; i > 0; i--) {
        switch (i) {
        case 1: 
        document.getElementById("debug1").style = "background-color: blue"
          break;
        case 2: 
        document.getElementById("debug2").style = "background-color: red"
          break;
        }
      }
    } else {
        console.log("No background");

        for(let i = y; i > 0; i--) {
          document.getElementById("debug" + i).style = "background: none"
        }
    }
}

function setDebug(tmp) {
    enableDebug = tmp;
    console.log(enableDebug);
    setCookie("isDebug", enableDebug, 10);
    location.reload();
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