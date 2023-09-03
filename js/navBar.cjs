const menuBar = document.querySelector('.menu-bar');
const main = document.querySelector('main');
const header = document.querySelector('header')
const aside = document.querySelector('aside');
const divLogo = document.querySelector('.divLogo')

menuBar.addEventListener('click',(event) =>{
    menuBar.style.transition = 'all 2s'
    menuBar.classList.toggle('actived');
    aside.classList.toggle('showUp');
});

main.addEventListener('click',(event) =>{
    if(menuBar.classList.contains('actived')){
        menuBar.style.transition = 'all 2s';
        menuBar.classList.remove('actived');
        aside.classList.remove('showUp');
    }
})

divLogo.addEventListener('click', (event) =>{
    if(menuBar.classList.contains('actived')){
        menuBar.style.transition = 'all 2s';
        menuBar.classList.remove('actived');
        aside.classList.remove('showUp');
    }
})