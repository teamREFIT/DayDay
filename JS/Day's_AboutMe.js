const container = document.querySelector('.container');

var bannerBtns = document.querySelectorAll('.main_button');

bannerBtns.forEach(function(bannerBtn) {
bannerBtn.addEventListener('mouseover', function(){
  bannerBtn.style.color = '#d9756c'
})
bannerBtn.addEventListener('mouseout', function(){
  bannerBtn.style.color = '#d8dede'
})
});






var introText = document.getElementsByClassName("intro_text");

function turnRed() {
introText[1].classList.add('turn_red'); 
introText[3].classList.add('turn_red'); 
introText[5].classList.add('turn_red'); 
}

var whiteCircle = document.querySelector('.circle_animation')

function resetPageAnimation() {
whiteCircle[1].style.animation = 'none';
whiteCircle.offsetHeight;
whiteCircle.style.animation = null;
introText[1].classList.remove('turn_red'); 
introText[3].classList.remove('turn_red'); 
introText[5].classList.remove('turn_red'); 
}

container.addEventListener('scroll', function(){
  console.log(container.scrollTop)
  console.log(scrollY)
  if (container.scrollTop <= 200) {
resetPageAnimation()
  }
})


turnRed();

function Time() {
 var date = new Date();
 var hour = date.getHours() + 1;
 var minute = date.getMinutes() - 12;
 var second = date.getSeconds();
 
 if (hour == 24) {
   hour = 0;
 } 
 if (minute < 0) {
   minute = minute + 60
 }

 hour = update(hour);
 minute = update(minute);
 second = update(second);

 document.getElementById("digital_years").innerText = "16 years"
 document.getElementById("digital_age").innerText = "344 days\n" + hour + " hours\n" + (minute) + " minutes\n" + second + " seconds\n";
 
 setTimeout(Time, 1000);
}
function update(t) {
 if (t < 10) {
 return "0" + t;
 }
 else {
 return t;
 }
}

Time();
