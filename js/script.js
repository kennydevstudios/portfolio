console.log("JS Loaded");

const counters = document.querySelectorAll('.counter');

const startCounter = () => {
    counters.forEach(counter => {

        const target = +counter.dataset.target;
        let count = 0;
        const update = () => {

            count++;
            counter.innerText = count;
            if(count < target){
                setTimeout(update,200);
            }
        }
        update();
    });
};

const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
    reveals.forEach(section => {

        const sectionTop =
        section.getBoundingClientRect().top;

        if(sectionTop < window.innerHeight - 100){
            section.classList.add('active');
        }
    });
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {

        if(entry.isIntersecting){
            startCounter();
            observer.disconnect();
        }
    });
});
observer.observe(document.querySelector('.hero-stats'));

const sections =
document.querySelectorAll('section');

const navLinks =
document.querySelectorAll('.nav-links a');

window.addEventListener('scroll',()=>{
    let current='';

    sections.forEach(section=>{
        const sectionTop =
        section.offsetTop;

        if(pageYOffset >= sectionTop - 200){
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link=>{

        link.classList.remove('active');
        if(link.href.includes(current)){
            link.classList.add('active');
        }
    });
});
const scrollBtn =
document.getElementById("scrollTopBtn");

window.addEventListener("scroll",()=>{
    if(window.scrollY > 300){

        scrollBtn.style.display="block";
    }else{

        scrollBtn.style.display="none";
    }
});

scrollBtn.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});

const menuToggle =
document.getElementById("menu-toggle");

const navMenu =
document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});
const menuToggle =
document.getElementById("menu-toggle");

const mobileMenu =
document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    mobileMenu.classList.toggle("show");

});