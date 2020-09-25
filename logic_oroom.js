// light switch
var light = document.getElementById("imgbox");
var back_image = document.createElement("img");
back_image.setAttribute("src","img/main_offlight.jpg");
back_image.setAttribute("alt","main room");
imgbox.appendChild(back_image);
var switchlink = document.createElement("a");
switchlink.setAttribute("class","switch");
switchlink.setAttribute("id","lightswitch");
switchlink.setAttribute("href","troom.html");
imgbox.appendChild(switchlink);
