window.addEventListener('load', () => {
    function rightSideMenu() {
        const headerBtn = document.querySelector('.header__btn');
        const rightSideCloseBtn = document.querySelector('.rightside-menu__close');
        const rightSideMenu = document.querySelector('.rightside-menu');

        headerBtn.addEventListener('click', () => {
            rightSideMenu.classList.remove('rightside-menu--close');
        })
        rightSideCloseBtn.addEventListener('click', () => {
            rightSideMenu.classList.add('rightside-menu--close');
        })
    }
    rightSideMenu()
})

//jquery slick-slider
$(function() {
    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoPlay: true
    });
})
