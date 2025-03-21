const hamburger = document.getElementById('hamburger');
const hamburgerNav = document.getElementById('nav-menu');
const parentNav = document.getElementById('NavParent');
const toggleButton = document.getElementById('toggleButton');
const toggleButton2 = document.getElementById('toggleButton2');
const html = document.querySelector('html');



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
    hamburgerNav.classList.toggle('-translate-y-90')

});



document.documentElement.classList.toggle(
    "dark",
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
  );



function saveTheme(isDark){
    localStorage.setItem("theme",isDark ? "dark" : 'light');
}
if(localStorage.getItem('theme')=== "dark"){
    html.classList.add("dark");
}

  
  if(html.classList.contains('dark')){
    toggleButton2.textContent = 'Terang';
 }
else{
    toggleButton2.textContent = 'Gelap'
}
  
  toggleButton.addEventListener('click',function(){
      html.classList.toggle('dark');
      
      
      
    })
    toggleButton2.addEventListener('click',function(){
        const isDark =  html.classList.toggle('dark');
        
        if(html.classList.contains('dark')){
             toggleButton2.textContent = 'Terang';
            }
           else{
               toggleButton2.textContent = 'Gelap'
           }
           saveTheme(isDark);
    })
    
  
