$(function () {
  // ----- phone mask -----

  $('#phone').mask('+ 7 (999) 999 99 99')

  // ----- slider -----

  const swiperStandard = new Swiper('.swiper-standard', swiperProps('s', 1))
  const swiperBusiness = new Swiper('.swiper-business', swiperProps('b', 1))
  const swiperPremium = new Swiper('.swiper-premium', swiperProps('p', 1))
  const swiperExclusive = new Swiper('.swiper-exclusive', swiperProps('e', 1))
  const swiperReviews = new Swiper('.swiper-reviews', swiperProps('r', 1))
  // const swiperSertificates = new Swiper(
  //   '.swiper-sertificates',
  //   swiperProps('sert', 5)
  // )
  const swiperSertificates = new Swiper('.swiper-sertificates', {
    // initialSlide: 2,
    grabCursor: true,
    // centeredSlides: true,
    slidesPerView: 5,
    // spaceBetween: 11,
    navigation: {
      nextEl: `.swiper-button-next-sert`,
      prevEl: `.swiper-button-prev-sert`,
      disabledClass: `swiper-button-disabled-sert`,
    },
  })

  function swiperProps(name, slidesPerView, effect) {
    return {
      autoHeight: true,
      effect: effect,
      slidesPerView: slidesPerView,
      // spaceBetween: 11,
      navigation: {
        nextEl: `.swiper-button-next-${name}`,
        prevEl: `.swiper-button-prev-${name}`,
        disabledClass: `swiper-button-disabled-${name}`,
      },
    }
  }

  // ----- handmade mixitUp -----

  const productsNav = document.querySelector('.products__nav')
  const productsSliderBoxes = [
    ...document.querySelectorAll('.products__slider-box'),
  ]
  const productsNavButtons = [
    ...document.querySelectorAll('.products__nav-item'),
  ]

  productsNav.addEventListener('click', function (e) {
    e.preventDefault()
    if (e.target.classList.contains('products__nav-item')) {
      const productsNavButton = e.target // кнопка из меню над слайдером
      const dataAttr = productsNavButton.dataset.filter // данные из data-атрибута кнопки
      console.log(productsNavButton)
      console.log(dataAttr)

      // ищем нужную коробку со слайдером, сравнивая data-данные на кнопке и коробке
      const productsSliderBox = productsSliderBoxes.find(
        item => item.dataset.attr === dataAttr
      )
      console.log(productsSliderBox)

      productsSliderBoxes.forEach(item =>
        item.classList.remove('products__slider-box--active')
      )
      productsNavButtons.forEach(item =>
        item.classList.remove('products__nav-item--active')
      )
      console.log(productsNav)
      productsSliderBox.classList.add('products__slider-box--active')
      productsNavButton.classList.add('products__nav-item--active')
    }
  })
  // ----- handmade mixitUp -----

  const aboutNav = document.querySelector('.about__nav')
  const aboutSliderBoxes = [...document.querySelectorAll('.about__slider-box')]
  const aboutNavButtons = [...document.querySelectorAll('.about__nav-item')]

  aboutNav.addEventListener('click', function (e) {
    e.preventDefault()
    if (e.target.classList.contains('about__nav-item')) {
      const aboutNavButton = e.target // кнопка из меню над слайдером
      const dataAttr = aboutNavButton.dataset.filter // данные из data-атрибута кнопки
      console.log(aboutNavButton)
      console.log(dataAttr)

      // ищем нужную коробку со слайдером, сравнивая data-данные на кнопке и коробке
      const aboutSliderBox = aboutSliderBoxes.find(
        item => item.dataset.attr === dataAttr
      )
      // console.log(productsSliderBox)

      aboutSliderBoxes.forEach(item =>
        item.classList.remove('about__slider-box--active')
      )
      aboutNavButtons.forEach(item =>
        item.classList.remove('about__nav-item--active')
      )
      // console.log(productsNav)
      aboutSliderBox.classList.add('about__slider-box--active')
      aboutNavButton.classList.add('about__nav-item--active')
    }
  })
})
