
let navbar = document.querySelector('#navbar');
let navbarres = document.querySelector('.navbar-res');

let barger= document.querySelector('.barger');
let leftnav= document.querySelector(".leftnav");
let rightnav= document.querySelector(".rightnav");

barger.addEventListener("click", ()=>{

    rightnav.classList.toggle('rightnav-res');
    leftnav.classList.toggle('leftnav-res');
    navbar.classList.toggle('nav-res');
    navbarres.classList.toggle('navbar-res');

})




