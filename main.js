'use strict';

//넷바를 내리면 투명으로 만든다.
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    }else{
        navbar.classList.remove('navbar--dark');
    }
});

//넷바 메뉴를 클릭하면 그 메뉴로 이동

const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click',(event) => {
    const target = event.target;
    const link = target.dataset.link;

    if(link == null){
        return;
    }

    console.log(event.target.dataset.link);

    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior:'smooth'});
});