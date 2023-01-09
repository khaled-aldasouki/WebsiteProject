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
    if (window.innerWidth > 768 && window.innerWidth < 1600){
      header.style.height = "7vh";
      nav.style.marginTop = "7vh"
      title.style.fontSize = "2.2rem";
      menu.style.height = "4vh"
      menu.style.width = "4vh"
      title.style.margin = "auto 2vw auto 0";
    } 

    //scrolled on pc
    if (window.innerWidth >= 1600){
      nav.style.margin = "auto 0";
      header.style.height = "10vh";
      title.style.margin = "auto 0.5vw";
      title.style.fontSize = "2.2rem";

      for (button of navButtons){
        button.style.margin = "0 0.2vw";
        nav.style.fontSize = "1.1rem";
      }
    }    
    
      }

    //didn't scroll
    else {

        //didn't scoll on tablet 
        if (window.innerWidth > 768 && window.innerWidth < 1600){
          header.style.height = "8vh";
          nav.style.marginTop = "8vh"
          title.style.margin = "auto 2vw auto 0vw";
          title.style.marginLeft = "0";
          title.style.fontSize = "2.5rem";
          menu.style.height = "5vh"
          menu.style.width = "5vh"
        } 

        //didn't scroll on pc
        if (window.innerWidth >= 1600){
          header.style.height = "12vh";
          nav.style.margin = "auto 0"
          nav.style.fontSize = "1.3rem";
          title.style.margin = "auto 1vw";
          title.style.fontSize = "2.5rem";
          for (button of navButtons){
            button.style.margin = "0 0.5vw";
          } 
        }

  }
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

