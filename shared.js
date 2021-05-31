var backdrop = document.querySelector(".backdrop");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");

window.addEventListener("scroll", function(){
       var header = document.querySelector("header");
       header.classList.toggle("sticky",window.scrollY > 0);
       if(window.screen.width>=768){
       var distance = $(window).scrollTop();
        $('.page-section').each(function (i) {
            if ($(this).position().top 
                <= distance + 250) {
                  
                    $('.header-lists .active')
                        .removeClass('active');

                    $('.header-lists li').eq(i)
                        .addClass('active');
            }
        });
    }
})

var vendors=["webkit","moz","ms","o"];
  

if(window.screen.width<768){
backdrop.addEventListener("click", function() {
 mobileNav.classList.remove("open");
    closeModal();
  });
  

  function closeModal() {
    backdrop.classList.remove("open");
    setTimeout(function() {
      backdrop.style.display = "none";
    }, 200);
  }

  toggleButton.addEventListener("click", function() {
    mobileNav.classList.add("open");
    backdrop.style.display = "block";
    setTimeout(function() {
      backdrop.classList.add("open");
    }, 10);
  });

}
if(window.screen.width<=768){
  var leftCard=document.getElementsByClassName("left")
  var rightCard=document.getElementsByClassName("right");
  var isRightOpen=false
  var clearInter="";
  var distance = $(window).scrollTop();
  $('.anim').each(function (i) {
    if ($(this).position().top 
    <= distance + 250) {
      console.log($(this).position().top )
      clearInter=setInterval(animateFunction,5000)
    }
});
 
  function animateFunction(){
    console.log("asdas")
    if(isRightOpen){
      for(let i=0;i<leftCard.length;i++){
        leftCard[i].style.width="80%";
        leftCard[i].querySelector(".second-box-para").style.display="inline-block";
        rightCard[i].style.width="20%";
        rightCard[i].querySelector(".first-box-para").style.display="none";
      }
      isRightOpen=false
    }
    else{
      for(let i=0;i<leftCard.length;i++){
        leftCard[i].style.width="20%";
        leftCard[i].querySelector(".second-box-para").style.display="none";
        rightCard[i].style.width="80%";
        rightCard[i].querySelector(".first-box-para").style.display="inline-block";
      }
      isRightOpen=true;
    }
  }
}


var slideIndex = 0;
var translate=0;
// showSlides(slideIndex);

// Next/previous controls
function plusSlides() {
    console.log("he")
  showSlides(slideIndex += 1,true);
}

function minusSlide(){
    console.log("hi")
    showSlides(slideIndex -= 1,false);
}

// Thumbnail image controls
function showSlides(n,next) {
  var i;
  var slides = document.getElementsByClassName("text-container");

//   var dots = document.getElementsByClassName("dot");
  if (n >= slides.length) {
      slideIndex = 0
      translate=(slides.length-1)*215-215;
      console.log(translate)
    }
  if (n <0 ) {
      slideIndex = slides.length-1
      translate=-(slides.length)*(215)
    }
    if(next){
        translate=translate-215
    }else{
        translate=translate+215
    }

    for( i=0;i<slides.length;i++){
        slides[i].classList.remove("active-text")
        vendors.forEach((vendor)=>{
          slides[i].style[vendor+`transform`]=`translateX(${translate}px)`;
        })
        slides[i].style.transform=`translateX(${translate}px)`;
   }
   console.log("slides",slideIndex)
    slides[slideIndex].className += " active-text";
}

