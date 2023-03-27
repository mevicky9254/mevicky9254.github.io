let nav = document.querySelector('#nav-menu');

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
 const navbar = document.querySelector("#nav-menu");
 const menuBtn = document.querySelector(".menu-btn");
 const cancelBtn = document.querySelector(".cancel-btn");
 const home = document.querySelector(".nav-link.home");
 const about = document.querySelector(".nav-link.about");
 const skills = document.querySelector(".nav-link.skills");
 const projects = document.querySelector(".nav-link.projects");
 const contacts = document.querySelector(".nav-link.contact");
 const resume_on_nav = document.querySelector(".nav-link.resume");
 const resumeBtn = document.querySelector("#resume-button-1");




//  const resumeBtnOnNavbar = document.querySelector("#resumeBtnOnNavbar");
 
//  resumeBtnOnNavbar.onclick = () =>{
//     //  window.open("https://drive.google.com/file/d/1To-qsMGIXGxkOBYTXDu5_K7YtaVOJcEl/view?usp=share_link", '_blank', 'noreferrer');
//  }
//  resumeBtn.onclick = ()=>{
//     //  window.open("https://drive.google.com/file/d/1To-qsMGIXGxkOBYTXDu5_K7YtaVOJcEl/view?usp=share_link", '_blank', 'noreferrer');
//  }



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

  home.onclick = ()=>{
   body.classList.remove("disabled");
   navbar.classList.remove("show");
   menuBtn.classList.remove("hide");
 }

 about.onclick = ()=>{
   body.classList.remove("disabled");
   navbar.classList.remove("show");
   menuBtn.classList.remove("hide");
 }

  skills.onclick = ()=>{
   body.classList.remove("disabled");
   navbar.classList.remove("show");
   menuBtn.classList.remove("hide");
 }

 projects.onclick = ()=>{
   body.classList.remove("disabled");
   navbar.classList.remove("show");
   menuBtn.classList.remove("hide");
 }

 contacts.onclick = ()=>{
   body.classList.remove("disabled");
   navbar.classList.remove("show");
   menuBtn.classList.remove("hide");
 }

 resume_on_nav.onclick = ()=>{
   body.classList.remove("disabled");
   navbar.classList.remove("show");
   menuBtn.classList.remove("hide");
 }