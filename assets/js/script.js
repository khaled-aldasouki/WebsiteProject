window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  //make the navigation bar smaller when the user scrolls down 50 pixels
    header = document.getElementById("header");
    title = document.getElementById("title");
    nav = document.getElementById("nav");
    navButtons = document.getElementsByClassName("nav-button")

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