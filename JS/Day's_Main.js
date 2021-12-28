var mainButtons = document.querySelectorAll(".main_button");
const container = document.querySelector('.container');
var logo = document.querySelector(".logo")

// 온 클릭 메인버튼 바뀌는거
mainButtons.forEach(function(mainButton) {
    mainButton.addEventListener('mouseover', () => {    
        console.log(container.scrollTop)
        console.log('마우스 올라왔땅')     
   if (container.scrollTop >= 0) {
      mainButton.style.color = '#d9675c'
    //   console.log('ok') 
  }
  if (container.scrollTop >= 780) {
      mainButton.style.color = '#d9675c'
    //   console.log('ok') 
  }
  if (container.scrollTop >= 1500) {
      mainButton.style.color = '#d8dede'
    //   console.log('ok') 
  }
  if (container.scrollTop >= 2300) {
      mainButton.style.color = '#d9675c'
  }
});

mainButtons.forEach(function(mainButton){
 mainButton.addEventListener('mouseout', () => {
    // console.log(container.scrollTop)
        console.log('마우스 내려갔땅')    
  if (container.scrollTop >= 0) {
      mainButton.style.color = '#d8dede'
      console.log('ok') 
  } 
  if (container.scrollTop >= 780) {
      mainButton.style.color = '#494949'
      console.log('ok1') 
  }
  if (container.scrollTop >= 1500) {
      mainButton.style.color = '#d9675c'
      console.log('ok2') 
  }
  if (container.scrollTop >= 2300) {
      mainButton.style.color = 'black'
      console.log('ok3') 
  }
        })  
})

})

// 스크롤에 따라 메인버트 색깔, 로고 바뀌는거
mainButtons.forEach(function(mainButton) {
container.addEventListener('scroll', function(){
    console.log(container.scrollTop)
    if (container.scrollTop >= 0) {
      mainButton.style.color = '#d8dede'
      logo.src ="./dayLOGOwhite-04.png"
  }
  if (container.scrollTop >= 750) {
      mainButton.style.color = '#494949'
      logo.src = "./dayLOGOblack-04.png"
  }
  if (container.scrollTop >= 1550) {
      mainButton.style.color = '#d9675c'
      logo.src = "./dayLOGOwhite-04.png"
  }
  if (container.scrollTop >= 2350) {
      mainButton.style.color = 'black'
      logo.src = "./dayLOGOblack-04.png"
  }
})
})

var moveBtns = document.querySelectorAll(".side_button")
moveBtns.forEach(function(moveBtn) {
container.addEventListener('scroll', function(){

   if (container.scrollTop >= 0) {
       moveBtn.style.border = 'solid 1.5px #d8dede'
       moveBtns[0].style.background = '#d8dede'
       moveBtns[0].style.transform = 'rotate(45deg)'
       moveBtns[1].style.transform = 'rotate(0deg)'
       moveBtns[1].style.background = 'none'
   }

   if (container.scrollTop >= 600) {
       moveBtn.style.border = 'solid 1.5px #494949'
       moveBtns[2].style.transform = 'rotate(0deg)'
       moveBtns[0].style.transform = 'rotate(0deg)'
       moveBtns[2].style.background = 'none'
       moveBtns[0].style.background = 'none'
       moveBtns[1].style.background = '#494949'
       moveBtns[1].style.transform = 'rotate(45deg)'
   }
   if (container.scrollTop >= 1400) {
       moveBtn.style.border = 'solid 1.5px #d9675c'
       moveBtns[1].style.transform = 'rotate(0deg)'
       moveBtns[1].style.background = 'none'
       moveBtns[2].style.background = '#d9675c'
       moveBtns[2].style.transform = 'rotate(45deg)'
       moveBtns[3].style.background = 'none'
       moveBtns[3].style.transform = 'rotate(0deg)'
   }
   if (container.scrollTop >= 2200) {
       moveBtn.style.border = 'solid 1.5px black'
       moveBtns[2].style.transform = 'rotate(0deg)'
       moveBtns[2].style.background = 'none'
       moveBtns[3].style.background = 'black'
       moveBtns[3].style.transform = 'rotate(45deg)'
   }
})

const sideBtn = document.getElementsByClassName("side_button")
const contents = document.querySelectorAll(".content")
const firstTop = contents[0].offsetTop
const secondTop = contents[1].offsetTop
const thridTop = contents[2].offsetTop
const forthTop = contents[3].offsetTop

sideBtn[0].onclick = function() {
    console.log('herro');
  container.scroll({top:firstTop, behavior: 'smooth'})
}
sideBtn[1].onclick = function(){
  container.scroll({top:secondTop, behavior: 'smooth'})
}
sideBtn[2].onclick = function(){
  container.scroll({top:thridTop, behavior: 'smooth'})
}
sideBtn[3].onclick = function(){
    container.scroll({top:forthTop, behavior: 'smooth'})
}
})

var globe = document.querySelector(".globe_animation")
var circle = document.querySelector(".circle_animation")

function reset_animation() {
  globe.style.animation = 'none';
  globe.offsetHeight; /* trigger reflow */
  globe.style.animation = null; 
  circle.style.animation = 'none';
  circle.offsetHeight; /* trigger reflow */
  circle.style.animation = null; 
}

container.addEventListener('scroll', function(){
    if (container.scrollTop <= 200) {
       reset_animation()
    }
    if (container.scrollTop >= 750) {
        console.log('yep')
        globe.classList.remove("paused");
        circle.classList.remove("paused");
    }
})

var welcomeArrow = document.querySelector(".welcome_arrow")
var arrowRight = document.querySelector(".arrow_right")
var arrowRightText = document.querySelector(".arrow_right_text")

welcomeArrow.addEventListener('mouseover', function(){
    console.log('works')
arrowRightText.style.fontFamily = 'GmarketSansBold';
arrowRight.style.marginLeft = '0.8vw';
arrowRightText.style.marginLeft = '1.7vw';
arrowRight.style.textDecoration = 'none';
// arrowRightText.style.fontWeight = '2000'
})
welcomeArrow.addEventListener('mouseout', function(){
arrowRightText.style.fontFamily = 'GmarketSansLight';
arrowRight.style.marginLeft = '';
arrowRightText.style.marginLeft = '1vw';
})