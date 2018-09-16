
let works = document.querySelectorAll('.work');
let spanBtn = document.getElementById('hide-show');
let aboutClass = document.getElementsByClassName('about-me')[0];
let bool = false;
let navIcon = document.getElementById('hamburgger');
let Iconbars = document.querySelectorAll('.line');
let mainMenu = document.getElementsByClassName('main-menu')[0];
let logo = document.getElementsByClassName('logo')[0];
let logoA = logo.getElementsByTagName('a')[0];
let header = document.getElementsByTagName('header')[0];
var currentScroll;

// Button actions 
spanBtn.onclick = function(){
    if(bool === false){
        aboutClass.style.height = "auto";
        spanBtn.innerHTML = "collapse";
        aboutClass.style.transition = "0.5s ease-in-out";
        bool = true;
    }
    else{
        aboutClass.style.height = "300px";
        spanBtn.innerHTML = "span";
        aboutClass.style.transition = "0.5s ease-in-out";
        bool = false;
    }
  
};

navIcon.onclick = function(){
    if(bool === false){
        mainMenu.style.right = "55%";
        mainMenu.style.transition = "0.4s";
        Iconbars[0].style.transform = "rotateZ(42deg)";
        Iconbars[0].style.transformOrigin = "10% 150%";
        Iconbars[0].style.transition = "all 0.5s ease-in-out";
        Iconbars[1].style.transform = "translateX(-100px)";
        Iconbars[1].style.opacity = "0";
        Iconbars[1].style.transition = "all 0.5s ease-in-out";
        Iconbars[2].style.transform = "rotateZ(-45deg)";
        Iconbars[2].style.transformOrigin = "30% 10%";
        Iconbars[2].style.transition = "all 0.5s ease-in-out";
        bool = true;
    }
    else{
        mainMenu.style.right = "110%";
        mainMenu.style.transition = "0.4s";
        Iconbars[0].style.transform = "rotateZ(0deg)";
        Iconbars[0].style.transformOrigin = "10% 150%";
        Iconbars[0].style.transition = "all 0.5s ease-in-out";
        Iconbars[1].style.transform = "translateX(0px)";
        Iconbars[1].style.opacity = "1";
        Iconbars[1].style.transition = "all 0.5s ease-in-out";
        Iconbars[2].style.transform = "rotateZ(0deg)";
        Iconbars[2].style.transformOrigin = "30% 10%";
        Iconbars[2].style.transition = "all 0.5s ease-in-out";
        bool = false; 
    }
};



// hover animaions 
    for(let i=0; i<works.length; i++){

            works[i].addEventListener('mouseover',function(){
                works[i].style.background = "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(230,230,240,1) 100%, rgba(190,199,201,1) 100%)";
                works[i].style.transform = "scale(1.1)";
                works[i].style.color = "#fff";
                works[i].style.transition = "0.3s";
                var links = works[i].querySelectorAll('.links');
                for(let j=0; j<links.length; j++){
                     links[j].style.color = "#fff";
                     links[j].style.transition = "0.3s";
                }
            });     

            works[i].addEventListener('mouseout',function(){
                works[i].style.background = "#fff";
                works[i].style.transform = "scale(1)";
                works[i].style.color = "#000";
                works[i].style.transition = "0.3s";
                var links = works[i].querySelectorAll('.links');
                for(let j=0; j<links.length; j++){
                     links[j].style.color = "#777";
                     links[j].style.transition = "0.3s";
                }
            });
        
    }

// scrolling animations

document.body.onscroll = function(){
  currentScroll = window.scrollY;
 console.log(currentScroll);
 if(currentScroll>20){
     header.style.background = "#fff";
     header.style.boxShadow = "0px 15px 10px rgba(0,0,0,0.4)";
     header.style.transition = "0.5s ease-in-out";
     for(var k=0; k<Iconbars.length; k++){
         Iconbars[k].style.background = "#000";
         Iconbars[k].style.transition = "0.4s";
     }
     logo.style.height = "50px";
     logo.style.color = "#000";
     logo.style.transition = "0.5s ease-in-out";
     logoA.style.fontSize = "60px";
     logoA.style.color = "#000";
 }
  if(currentScroll<20){
    header.style.background = "#3e3e3e";
    header.style.boxShadow = "0px 0px 0px rgba(0,0,0,0.5)";
    header.style.transition = "0.5s ease-in-out";
    for(var k=0; k<Iconbars.length; k++){
        Iconbars[k].style.background = "#fff";
        Iconbars[k].style.transition = "0.4s";
    }
    logo.style.height = "100px";
    logo.style.color = "#fff";
    logo.style.transition = "0.5s ease-in-out";
    logoA.style.fontSize = "100px";
    logoA.style.color = "#fff";
 }

 if(currentScroll>450){
  for(var b=0,c=.3; b<works.length,c<c*4; b++,c+=.3){
      works[b].style.opacity = "1";
      works[b].style.transform = "scale(1)";
      works[b].style.transition = "all "+c+"s ease-in-out";
  }
}

};