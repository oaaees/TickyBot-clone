//NAVBAR SCROLLING

const links = document.querySelectorAll(".smooth_scroll");

links.forEach((link)=>{
  link.addEventListener("click", clickHandler);
})
 
function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
 
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}

//GO TO TOP BUTTON
const goToTop = document.getElementById("goToTop");
goToTop.addEventListener("click", TopBtn);
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 500) {
    goToTop.style.display = "block";
  } else {
    goToTop.style.display = "none";
  }
}

function TopBtn(){
  scroll({
    top:0,
    behavior: "smooth"
  });
}