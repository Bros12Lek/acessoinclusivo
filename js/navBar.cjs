const menuBar = document.querySelector('.menu-bar');

const aside = document.querySelector('aside');

menuBar.addEventListener('click',(event) =>{
    menuBar.style.transition = 'all 2s'
    menuBar.classList.toggle('actived');
    aside.classList.toggle('showUp');
});