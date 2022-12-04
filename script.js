

let toggle = document.querySelector("#toggle-icon");

toggle.addEventListener('click', () =>{
    document.body.classList.toggle("dark-theme");
   toggle.classList.toggle('fa-sun');
});


let menu = document.querySelector("#menu-bar");
    let navbar = document.querySelector(".narbar");

    menu.addEventListener('click', () =>{
        menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    });

var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
        speedAsDuration: true
    });