
// initialized AOS Librery
AOS.init();


let menu_bar = document.getElementById('menu_bar');
let menu = document.getElementById('menu');

menu_bar.addEventListener('click',function(){
menu.classList.toggle('show-menu')

})