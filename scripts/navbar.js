let nav = document.querySelector('.navbar');

 changenavBack();

 window.addEventListener('scroll', changenavBack);
 function changenavBack()
 {
    
     if (window.scrollY >= 25) {
         nav.classList.add('active_nav');
     } else {
         nav.classList.remove('active_nav');
     }
 }




 const body = document.querySelector("body");
 const navbar = document.querySelector(".navbar");
 const menuBtn = document.querySelector(".menu-btn");
 const cancelBtn = document.querySelector(".cancel-btn");
 const cancelBtn1 = document.querySelector(".home");
 const cancelBtn2 = document.querySelector(".about_me");
 const cancelBtn3 = document.querySelector(".skills");
 const cancelBtn4 = document.querySelector(".projects");
 const cancelBtn5 = document.querySelector(".contact");
 const cancelBtn6 = document.querySelector(".resume");
 const resumeBtn = document.querySelector(".resumeButton");
 const resumeBtnOnNavbar = document.querySelector("#resumeBtnOnNavbar");
 
 resumeBtnOnNavbar.onclick = () =>{
     window.open("https://drive.google.com/file/d/1To-qsMGIXGxkOBYTXDu5_K7YtaVOJcEl/view?usp=share_link", '_blank', 'noreferrer');
 }
 resumeBtn.onclick = ()=>{
     window.open("https://drive.google.com/file/d/1To-qsMGIXGxkOBYTXDu5_K7YtaVOJcEl/view?usp=share_linkgit", '_blank', 'noreferrer');
 }
 menuBtn.onclick = ()=>{
   navbar.classList.add("show");
   menuBtn.classList.add("hide");
   body.classList.add("disabled");
 }
 cancelBtn.onclick = ()=>{
   body.classList.remove("disabled");
   navbar.classList.remove("show");
   menuBtn.classList.remove("hide");
 }

  cancelBtn1.onclick = ()=>{
   body.classList.remove("disabled");
   navbar.classList.remove("show");
   menuBtn.classList.remove("hide");
 }

 cancelBtn2.onclick = ()=>{
   body.classList.remove("disabled");
   navbar.classList.remove("show");
   menuBtn.classList.remove("hide");
 }

  cancelBtn3.onclick = ()=>{
   body.classList.remove("disabled");
   navbar.classList.remove("show");
   menuBtn.classList.remove("hide");
 }

 cancelBtn4.onclick = ()=>{
   body.classList.remove("disabled");
   navbar.classList.remove("show");
   menuBtn.classList.remove("hide");
 }

 cancelBtn5.onclick = ()=>{
   body.classList.remove("disabled");
   navbar.classList.remove("show");
   menuBtn.classList.remove("hide");
 }

 cancelBtn6.onclick = ()=>{
   body.classList.remove("disabled");
   navbar.classList.remove("show");
   menuBtn.classList.remove("hide");
 }