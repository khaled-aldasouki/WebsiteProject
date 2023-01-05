window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  //make the navigation bar smaller when the user scrolls down 50 pixels
    var header = document.getElementById("header");
    var title = document.getElementById("title");
    var nav = document.getElementById("nav");
    var navButtons = document.getElementsByClassName("nav-button")

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.style.height = "10vh";
    header.style.backgroundColor = "white";
    title.style.fontSize = "2rem";
    title.style.margin = "2vh 2vw";
    nav.style.marginTop = "3vh";
    nav.style.marginBottom = "8vh";
    for (button of navButtons){
        button.style.margin = "0 0.5vw";
    }
      } else {
    header.style.height = "12vh";
    title.style.fontSize = "2.5rem";
    title.style.margin = "3vh 3vw";
    nav.style.marginTop = "4vh";
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