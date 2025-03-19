const hamburger = document.getElementById('hamburger');
const hamburgerNav = document.getElementById('nav-menu');
const parentNav = document.getElementById('NavParent');


window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop
if(window.pageYOffset > fixedNav){
    header.classList.add('navbar-fixed');
}
else{
    header.classList.remove('navbar-fixed');
}
}

hamburger.addEventListener('click',function(){
    hamburger.classList.toggle('hamburger-active');
    hamburgerNav.classList.toggle('translate-x-40');
    parentNav.classList.toggle('overflow-x-hidden');
});