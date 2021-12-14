var mainButtons = document.querySelectorAll(".main_button");

mainButtons.forEach(function(mainButton) {
    mainButton.addEventListener('mouseover', () => {
            mainButton.style.color = '#d9675c';
            console.log('clicked');
        });
    mainButton.addEventListener('mouseout', () => {
            mainButton.style.color = '#d8dede';
        })

    
})

window.addEventListener('scroll', function(){
       console.log(window.scrollY);
 })

var arrowDown = document.querySelector(".scroll_down");
var a = 0
// if a = 0 {
arrowDown.addEventListener('mouseover', function(){
arrowDown.style.animation = 'none';
})


const sideBtn = document.getElementsByClassName("side_button")
const contents = document.querySelectorAll(".content")
const firstTop = contents[0].offsetTop
const secondTop = contents[1].offsetTop
const thridTop = contents[2].offsetTop

sideBtn[0].onclick = function() {
    console.log('herro');
  window.scroll({top:firstTop, behavior: 'smooth'})
}
sideBtn[1].onclick = function(){
  window.scroll({top:secondTop, behavior: 'smooth'})
}
sideBtn[2].onclick = function(){
  window.scroll({top:thridTop, behavior: 'smooth'})
}

