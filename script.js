let buttonsNavigationMenu = document.getElementsByClassName("menu-button")
let buttonSliderRight = document.getElementById("button-right")
let buttonSliderLeft = document.getElementById("button-left")
let phoneVertical = document.getElementsByClassName("phone-vertical")
let phoneHorizontal = document.getElementsByClassName("phone-horizontal")
let buttonPortfolioBlock = document.getElementsByClassName("wrapper-button")[0]
let paretnCriativePictures = document.getElementsByClassName("wrapper-picture")[0]
let buttonSubmit = document.getElementById("submit")
let closedButtom = document.getElementById("closed-button")


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

function movePicture() {
  paretnCriativePictures.appendChild(paretnCriativePictures.children[0])
}

buttonPortfolioBlock.addEventListener("click", function(event){ 
   
  if(event.target.tagName !== "DIV"){    
    let tag = document.getElementsByClassName("active-tab")[0]
    tag.classList.remove("active-tab")
  } 
   if(event.target.tagName === "BUTTON"){
    event.target.classList.add("active-tab")
    movePicture()
  } else if(event.target.tagName === "P"){
    let button = event.target.closest("button")
    button.classList.add("active-tab")
    movePicture()
  } 
});  

paretnCriativePictures.addEventListener("click", function(event) {
  let activeChild = paretnCriativePictures.getElementsByClassName("active-tile")[0]
  
  if (activeChild){
    activeChild.classList.remove("active-tile")
    event.target.classList.add("active-tile")
  } else {
    event.target.classList.add("active-tile")    
  }
});

buttonSubmit.addEventListener("click", function(){
  let subject = document.getElementById("subject").value.toString();
  let description = document.getElementById("description").value;
  if(subject.trim() === "") {
    subject = "no subject"
  }
  if(description.trim() === "") {
    description = "no description"
  }  
  document.getElementById("result-subject").innerText = subject;
  document.getElementById("result-description").innerText = description;
  document.getElementById("massage-form").classList.remove("hidden")
});

closedButtom.addEventListener("click", function(){
  document.getElementById("result-subject").innerText = "";
  document.getElementById("result-description").innerText = "";
  document.getElementById("massage-form").classList.add("hidden");
  document.getElementById("subject").value = "";
  document.getElementById("description").value = "";
});



function onScrollNavMenu(event) {
  let positionCursor = window.scrollY;
  let section = document.querySelectorAll("main  > div");
  let links = document.querySelectorAll(".navigation-menu a");
  
  
  section.forEach((element) => {
    if(element.offsetTop <= positionCursor && (element.offsetTop + element.offsetHeight) > positionCursor){
      links.forEach((a) => {
        a.classList.remove('active')
        if(element.getAttribute('id') === a.getAttribute('href').substring(1)) {
          a.classList.add('active')
        }
      })
    }
  }) 
}
document.addEventListener("scroll", onScrollNavMenu)
