checkCookie();

function checkCookie() {
  var cookieAcceptance=getCookie("myCookies");
  if (cookieAcceptance == "I have accepted cookies.") {
    $('#WebsiteCookies').hide();
    console.log(cookieAcceptance)
  } else {
     //cookieAcceptance = prompt("Please enter your name:","");
    
    setTimeout(function(){
      $('#cookieConsent').fadeIn();
    console.log("I need to accept cookies.")
    },5000);
  }
 
}

$('.acceptCookies').click(function(){
    cookieAcceptance = "I have accepted cookies."
        if (cookieAcceptance != "" && cookieAcceptance != null) {
              setCookie("myCookies", cookieAcceptance, 15);
        }
        $('#cookieConsent').hide();
      })


function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
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

function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  console.log(cvalue + " ; " +expires)
}