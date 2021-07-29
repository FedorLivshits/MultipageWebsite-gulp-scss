window.addEventListener('load', () => {
    // for right-side menu
    function rightSideMenu() {
        const headerBtn = document.querySelector('.header__btn')
        const rightSideCloseBtn = document.querySelector('.rightside-menu__close')
        const rightSideMenu = document.querySelector('.rightside-menu')
        const body = document.querySelector('body')
        const menu = document.querySelectorAll('.menu')
        const headerBtnMenu = document.querySelector('.header__btn-menu')
        const header = document.querySelector('header')

        headerBtnMenu.addEventListener('click', () => {
            menu.forEach(m => {
                m.classList.toggle('menu--open')
            })
            body.classList.toggle('body--hidden')
            header.style = 'background: white !important; z-index: 100'
            headerBtnMenu.classList.toggle('header__btn-menu--active')
        })
        headerBtn.addEventListener('click', () => {
            rightSideMenu.classList.remove('rightside-menu--close')
            body.classList.add('body--hidden')
        })
        rightSideCloseBtn.addEventListener('click', () => {
            rightSideMenu.classList.add('rightside-menu--close')
            body.classList.remove('body--hidden')
        })
    }

    rightSideMenu()

    // for items in work-path section in index.html
    if ($(window).width() < 710) {
        $('.works-path__line').remove()
        $('.works-path__item--measurments').appendTo($('.works-path__items-box'))
        $('.works-path__item--delivery').appendTo($('.works-path__items-box'))
        $('.works-path__items-box--end').remove()
    }

    //jquery slick-slider
    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoPlay: true,
    })

    $('.contacts-slider').slick({
        slidesToShow: 10,
        slidesToScroll: 10,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 8,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    dots: false,
                }
            },
        ]
    })

    //mixitUp plugin for gallery
    const mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.living'
        }
    })
})
