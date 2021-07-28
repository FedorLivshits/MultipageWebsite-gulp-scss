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
    function worksItemsReverse() {
        const productionItem = document.querySelector('.works-path__item--production')
        const measItem = document.querySelector('.works-path__item--measurments')

        const measInner = `<div class="works-path__item-title-box">
            <img class="works-path__item-img" src="img/works-img-3.png" alt="">
            <h6 class="works-path__item-title">
            Measurements
            </h6>
            </div>
            <p class="works-path__item-text">
            Intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche
        </p>`

        const prodInner = `<div class="works-path__item-title-box">
                                <img class="works-path__item-img" src="img/works-img-2.png" alt="">
                                <h6 class="works-path__item-title">
                                    Production
                                </h6>
                            </div>
                            <p class="works-path__item-text">
                                Everyday carry actually neutra authentic kogi shabby chic
                            </p>`

            if (window.innerWidth < '710') {
                productionItem.innerHTML = ''
                productionItem.innerHTML = measInner
                measItem.innerHTML = ''
                measItem.innerHTML = prodInner
            } else {
                productionItem.innerHTML = ''
                productionItem.innerHTML = prodInner
                measItem.innerHTML = ''
                measItem.innerHTML = measInner
            }
    }
    worksItemsReverse()

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
    })

    //mixitUp plugin for gallery
    const mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.living',
        },
    })
})
