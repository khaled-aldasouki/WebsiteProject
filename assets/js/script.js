window.onscroll = function() {scrollFunction()};
window.onload = function(){menu()};
window.onload(function() {
  if (window.innerWidth >= 1600){
    $("<p>hi</p>").appendTo( $("#header"));
  }
});
function scrollFunction() {
  //make the navigation bar smaller when the user scrolls down 50 pixels
    var header = document.getElementById("header");
    var title = document.getElementById("title");
    var nav = document.getElementById("nav");
    var navButtons = document.getElementsByClassName("nav-button")
    var menu = document.getElementById("menu");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    //scrolled on tablet
    if (window.innerWidth > 768){
      header.style.height = "7vh";
      nav.style.marginTop = "7vh"
      title.style.fontSize = "2.2rem";
      menu.style.height = "4vh"
      menu.style.width = "4vh"
      title.style.margin = "auto 2vw auto 0";
    } 
    

    //scrolled on any device
    /*
    for (button of navButtons){
        button.style.margin = "0 0.5vw";
    }*/
      }

    //didn't scoll on tablet 
    else {
        if (window.innerWidth > 768){
          header.style.height = "8vh";
          nav.style.marginTop = "8vh"
          title.style.margin = "auto 2vw auto 0vw";
          title.style.marginLeft = "0";
          title.style.fontSize = "2.5rem";
          menu.style.height = "5vh"
          menu.style.width = "5vh"
          
        } 

        
    //didn't scroll on any device
    
    /*
    for (button of navButtons){
        button.style.margin = "0 1vw";
    } */ }
}

function pause(){
  var vid = documnet.getElementById("demo");
  if (vid.paused){vid.play()}
  else{vid.pause()}
}

//burger menu behavior
function menu(){
  var nav = document.getElementById('nav');
  var navButtons = document.getElementsByClassName("nav-button")
  if (nav.style.visibility == "hidden"){
    nav.style.visibility = "visible";
    nav.style.opacity = 1;
  }
  else{
    if (window.innerWidth < 1600){nav.style.visibility = "hidden";nav.style.opacity = 0;
  }
  }
}

