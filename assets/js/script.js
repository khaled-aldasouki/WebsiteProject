window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  //make the navigation bar smaller when the user scrolls down 50 pixels
    var header = document.getElementById("header");
    var title = document.getElementById("title");
    var nav = document.getElementById("nav");
    var navButtons = document.getElementsByClassName("nav-button")
    var menu = document.getElementById("menu");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    if (window.innerWidth > 768){
      header.style.height = "7vh";
      nav.style.marginTop = "3vh";
      title.style.fontSize = "2.2rem";
      menu.style.height = "4vh"
      menu.style.width = "4vh"
      title.style.margin = "auto 2vw auto 0";

    } 
    else {
      header.style.height = "6vh"
      
      
    }

    nav.style.marginBottom = "8vh";
    for (button of navButtons){
        button.style.margin = "0 0.5vw";
    }
      } 
    else {
        if (window.innerWidth > 768){
          header.style.height = "8vh";
          title.style.margin = "auto 2vw auto 0vw";
          title.style.marginLeft = "0";
          nav.style.marginTop = "4vh";
          title.style.fontSize = "2.5rem";
          menu.style.height = "5vh"
          menu.style.width = "5vh"
          
        } 
        else {
          header.style.height = "6vh"
        }
    
    nav.style.marginBottom = "10vh";
    for (button of navButtons){
        button.style.margin = "0 1vw";
    }  }
}

function pause(){
  var vid = documnet.getElementById("demo");
  if (vid.paused){vid.play()}
  else{vid.pause()}
}