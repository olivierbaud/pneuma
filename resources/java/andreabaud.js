 window.onscroll = function() {stickyMenu()};
                
var navbar = document.getElementById("navbar_an");
var sticky = navbar.offsetTop;
var citation = document.getElementsByClassName("citation")
var hongrie = document.getElementById("an_hongrie")

function stickyMenu() {
  if (window.pageYOffset >= sticky-120) {
  navbar.classList.add("sticky")
  citation[1].style.top=240
  } else {
  navbar.classList.remove("sticky");
  }
}

  navbar.onmouseup = function(){scrollBy(0,150)}

  console.log(citation)