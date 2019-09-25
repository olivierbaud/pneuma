 window.onscroll = function() {stickyMenu()};
// window.onscroll = function(){offsetDiv.forEach(element=>{element.style.height='0px'})}               
var navbar = document.getElementById("navbar_an");
var sticky = navbar.offsetTop;
//var offsetDiv = document.querySelectorAll('.offset')
//var hongrie = document.getElementById("an_hongrie")
//var links=navbar.querySelectorAll('a')
//var divheight= offsetDiv.style.height
function stickyMenu() {
  if (window.pageYOffset >= sticky-120) {
  navbar.classList.add("sticky")  
  //offsetDiv.forEach(element=>{element.style.height='120px'})
  } else {
  navbar.classList.remove("sticky");
  //offsetDiv.forEach(element=>{element.style.height='0px'})
  }
}
//links.forEach(element=>{
  
//})

// links.forEach(element=>{
//   element.onclick=function(){    
//     console.log(element)
//     scrollBy(0,-220); 
//   }
// })
  //navbar.onmouseup = function(){scrollBy(0,150)}

  //console.log(links)