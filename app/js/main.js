window.addEventListener('load', () => {
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
