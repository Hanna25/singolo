let buttonsNavigationMenu = document.getElementsByClassName("menu-button")
let buttonSliderRight = document.getElementById("button-right")
let buttonSliderLeft = document.getElementById("button-left")
let phoneVertical = document.getElementsByClassName("phone-vertical")
let phoneHorizontal = document.getElementsByClassName("phone-horizontal")
let buttonPortfolioBlock = document.getElementsByClassName("wrapper-button")[0]

for(let i = 0; i < buttonsNavigationMenu.length; i++){
  buttonsNavigationMenu[i].addEventListener("click", function(event){
    document.getElementsByClassName("active")[0].classList.remove("active")
    event.target.classList.add("active")
  });
}


buttonSliderRight.addEventListener("click", function(event) {
  let activeSlide = document.getElementsByClassName("iphone-box--active")[0]

  if (activeSlide.nextElementSibling.className !== "iphone-box"){
    activeSlide.previousElementSibling.classList.add('iphone-box--active')
    activeSlide.previousElementSibling.classList.remove("iphone-box")
  } else {
    activeSlide.nextElementSibling.classList.remove("iphone-box")    
    activeSlide.nextElementSibling.classList.add("iphone-box--active")
  }
  activeSlide.classList.remove("iphone-box--active")  
  activeSlide.classList.add("iphone-box")  
})


buttonSliderLeft.addEventListener("click", function(event) {
  let activeSlide = document.getElementsByClassName("iphone-box--active")[0]

  if(activeSlide.previousElementSibling.className !=="iphone-box") {
    activeSlide.nextElementSibling.classList.add('iphone-box--active')
    activeSlide.nextElementSibling.classList.remove("iphone-box")
  } else {
    activeSlide.previousElementSibling.classList.remove("iphone-box")    
    activeSlide.previousElementSibling.classList.add("iphone-box--active")
  }
  activeSlide.classList.remove("iphone-box--active")  
  activeSlide.classList.add("iphone-box")  
})

function switchPhonePicture(event) {
  let hidePhone = event.target

  if(hidePhone.previousElementSibling !== null) {
   hidePhone.previousElementSibling.classList.remove("hide-phone") 
   hidePhone.classList.add("hide-phone")
  } else{
   hidePhone.nextElementSibling.classList.remove("hide-phone")    
   hidePhone.classList.add("hide-phone")
  } 
};
phoneVertical[0].addEventListener("click", switchPhonePicture)
phoneHorizontal[0].addEventListener("click", switchPhonePicture)


buttonPortfolioBlock.addEventListener("click", function(event){ 
   
  if(event.target.tagName !== "DIV"){    
    let tag = document.getElementsByClassName("active-tab")[0]
    tag.classList.remove("active-tab")
  } 
   if(event.target.tagName === "BUTTON"){
    event.target.classList.add("active-tab")
  } else if(event.target.tagName === "P"){
    let button = event.target.closest("button")
    button.classList.add("active-tab")
  }
  // document.getElementsByClassName("active-tab")[0].classList.remove("active-tab")
 
});  

