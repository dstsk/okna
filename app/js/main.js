$(function () {
  // ----- phone mask -----
  $('#phone').mask('+ 7 (999) 999 99 99')
  $('#phone-popup-measure').mask('+ 7 (999) 999 99 99')
  $('#phone-popup-calc').mask('+ 7 (999) 999 99 99')

  $('.header__btn-menu').on('click', function () {
    $('.menu').slideToggle('linear')
  })

  //   if (widthWind < 451) {
  //     $('.header__btn-menu').on('click', function () {

  //     })

  //     // headerMenuBtn.addEventListener('click', () => {
  //     //   if (headerMeasureBtn.style.display === 'block') {
  //     //     headerMeasureBtn.style.display = 'none'
  //     //   } else {
  //     //     headerMeasureBtn.style.display = 'block'
  //     //   }

  //     // headerCalcBtn.style.display = 'block'
  //     // })
  //   }
  // })
})

// ----- Popups -----

const popups = document.querySelectorAll('.popup')
const closeBtns = document.querySelectorAll('.close-popup')
const btnsMeasure = document.querySelectorAll('.btn-measure')
const btnsCalc = document.querySelectorAll('.btn-calc')
const btnVideoPlay = document.querySelector('.about__description-play')
const servicesTiles = document.querySelector('.services__tiles')
const servicesPopups = document.querySelectorAll('.popup__services')
const reviewBtn = document.querySelector('.about__reviews-button')

const closeModal = () => {
  popups.forEach(p => p.classList.add('hidden'))
  document.querySelector('.overlay').classList.add('hidden')
}

const openModal = name => {
  document.querySelector(name).classList.remove('hidden')
  document.querySelector('.overlay').classList.remove('hidden')
}

btnsMeasure.forEach(b =>
  b.addEventListener('click', e => {
    e.preventDefault()
    openModal('.popup__measure')
  })
)
btnsCalc.forEach(b =>
  b.addEventListener('click', e => {
    e.preventDefault()
    openModal('.popup__calc')
  })
)
btnVideoPlay.addEventListener('click', () => {
  openModal('.popup__video')
})

closeBtns.forEach(b => b.addEventListener('click', closeModal))
document.querySelector('.overlay').addEventListener('click', e => {
  const clicked = e.target
  if (clicked.classList.contains('overlay')) closeModal()
})

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    if (!popups.forEach(p => p.classList.contains('hidden'))) {
      closeModal()
    }
  }
})

servicesTiles.addEventListener('click', e => {
  e.preventDefault()
  const clicked = e.target.closest('.services__item')
  if (!clicked) return
  openModal(`.popup__services--${clicked.dataset.num}`)
})

reviewBtn.addEventListener('click', e => {
  e.preventDefault()
  openModal('.popup__review')
})

// ----- Sliders -----

const swiperStandard = new Swiper('.swiper-standard', swiperProps('s'))
const swiperBusiness = new Swiper('.swiper-business', swiperProps('b'))
const swiperPremium = new Swiper('.swiper-premium', swiperProps('p'))
const swiperExclusive = new Swiper('.swiper-exclusive', swiperProps('e'))
const swiperReviews = new Swiper('.swiper-reviews', swiperProps('r'))
// const swiperSertificates = new Swiper(
//   '.swiper-sertificates',
//   swiperProps('sert', 5)
// )
// const swiperPortfolio = new Swiper(
//   '.swiper-portfolio',
//   swiperProps('port', 4, 50)
// )
const swiperPortfolioItem1 = new Swiper(
  '.swiper-portfolio-item-1',
  swiperPortfolioItems('1')
)
const swiperPortfolioItem2 = new Swiper(
  '.swiper-portfolio-item-2',
  swiperPortfolioItems('2')
)
const swiperPortfolioItem3 = new Swiper(
  '.swiper-portfolio-item-3',
  swiperPortfolioItems('3')
)
const swiperPortfolioItem4 = new Swiper(
  '.swiper-portfolio-item-4',
  swiperPortfolioItems('4')
)
const swiperPortfolioItem5 = new Swiper(
  '.swiper-portfolio-item-5',
  swiperPortfolioItems('5')
)
const swiperPortfolioItem6 = new Swiper(
  '.swiper-portfolio-item-6',
  swiperPortfolioItems('6')
)
const swiperPortfolioItem7 = new Swiper(
  '.swiper-portfolio-item-7',
  swiperPortfolioItems('7')
)
const swiperPortfolioItem8 = new Swiper(
  '.swiper-portfolio-item-8',
  swiperPortfolioItems('8')
)
const swiperPortfolioItem9 = new Swiper(
  '.swiper-portfolio-item-9',
  swiperPortfolioItems('9')
)
const swiperPortfolioItem10 = new Swiper(
  '.swiper-portfolio-item-10',
  swiperPortfolioItems('10')
)
const swiperPortfolioItem11 = new Swiper(
  '.swiper-portfolio-item-11',
  swiperPortfolioItems('11')
)
const swiperPortfolioItem12 = new Swiper(
  '.swiper-portfolio-item-12',
  swiperPortfolioItems('12')
)

function swiperProps(name, slidesPerView = 1, spaceBetween = 1) {
  return {
    autoHeight: true,
    slidesPerView: slidesPerView,
    spaceBetween: spaceBetween,
    navigation: {
      nextEl: `.swiper-button-next-${name}`,
      prevEl: `.swiper-button-prev-${name}`,
      disabledClass: `swiper-button-disabled-${name}`,
    },
  }
}

function swiperPortfolioItems(orderNumber) {
  return {
    pagination: {
      el: `.swiper-pagination-${orderNumber}`,
      type: 'bullets',
    },
  }
}

const swiperSertificates = new Swiper('.swiper-sertificates', {
  autoHeight: true,
  slidesPerView: 1,
  spaceBetween: 25,
  navigation: {
    nextEl: `.swiper-button-next-sert`,
    prevEl: `.swiper-button-prev-sert`,
    disabledClass: `swiper-button-disabled-sert`,
  },
  breakpoints: {
    680: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
    1240: {
      slidesPerView: 5,
    },
  },
})

const swiperPortfolio = new Swiper('.swiper-portfolio', {
  autoHeight: true,
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: `.swiper-button-next-port`,
    prevEl: `.swiper-button-prev-port`,
    disabledClass: `swiper-button-disabled-port`,
  },
  breakpoints: {
    865: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
    1240: {
      slidesPerView: 4,
    },
  },
})

// ----- handmade mixitUp -----

const productsNav = document.querySelector('.products__nav')
const productsSliderBoxes = [
  ...document.querySelectorAll('.products__slider-box'),
]
const productsNavButtons = [...document.querySelectorAll('.products__nav-item')]

productsNav.addEventListener('click', function (e) {
  e.preventDefault()
  if (e.target.classList.contains('products__nav-item')) {
    const productsNavButton = e.target // кнопка из меню над слайдером
    const dataAttr = productsNavButton.dataset.filter // данные из data-атрибута кнопки

    // ищем нужную коробку со слайдером, сравнивая data-данные на кнопке и коробке
    const productsSliderBox = productsSliderBoxes.find(
      item => item.dataset.attr === dataAttr
    )

    productsSliderBoxes.forEach(item =>
      item.classList.remove('products__slider-box--active')
    )
    productsNavButtons.forEach(item =>
      item.classList.remove('products__nav-item--active')
    )
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

// ----- MAP -----
const map = L.map('map').setView([56.99795925683616, 40.974], 14.4)
L.tileLayer(
  'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
  {
    maxZoom: 19,
    attribution: '© OpenStreetMap',
  }
).addTo(map)

const portfolioSliderBox = document.querySelector('.portfolio__slider-box')
const [...portfolioItems] = document.querySelectorAll('.portfolio__wrapper')
const portfolioSliderItems = document.querySelectorAll(
  '.portfolio__slider-item-img'
)
const portfolioCloseBtns = document.querySelectorAll('.portfolio__item-close')
portfolioSliderItems.forEach(item =>
  item.addEventListener('click', e => {
    e.preventDefault()
    const lat = Number(e.target.dataset.lat)
    const lng = Number(e.target.dataset.lng)
    const id = Number(e.target.dataset.id)

    map.setView([lat, lng], 15, {
      animate: true,
      pan: {
        duration: 1,
      },
    })

    portfolioItems
      .find(item => id === Number(item.dataset.id))
      .classList.add('portfolio__wrapper-active')
    portfolioSliderBox.classList.add('portfolio__slider-wrapper-hidden')
  })
)

const coordinates = []
portfolioSliderItems.forEach(item => {
  coordinates.push([item.firstChild.dataset.lat, item.firstChild.dataset.lng])
})

const drawMarkers = function (coords, i) {
  L.marker(coords, {
    icon: L.icon({
      iconUrl: '../images/geolocation.svg',
      className: `marker-${i + 1}`,
    }),
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 100,
  }).addTo(map)
}

coordinates.forEach((coords, i) => drawMarkers(coords, i))

portfolioCloseBtns.forEach(btn =>
  btn.addEventListener('click', () => {
    console.log('click')
    portfolioItems.forEach(item =>
      item.classList.remove('portfolio__wrapper-active')
    )

    portfolioSliderBox.classList.remove('portfolio__slider-wrapper-hidden')

    map.setView([56.99795925683616, 40.974], 14.4, {
      animate: true,
      pan: {
        duration: 1,
      },
    })
  })
)

// markers

const markers = document.querySelector('.leaflet-marker-pane')
markers.addEventListener('click', e => {
  e.preventDefault()
  if (e.target.classList.contains('leaflet-marker-icon')) {
    portfolioItems.forEach(function (item) {
      item.classList.remove('portfolio__wrapper-active')
    })
    const currentItem = portfolioItems.find(item =>
      e.target.classList.contains(item.dataset.marker)
    )
    currentItem.classList.add('portfolio__wrapper-active')
    portfolioSliderBox.classList.add('portfolio__slider-wrapper-hidden')

    console.log(currentItem)

    const lat = Number(currentItem.dataset.lat)
    const lng = Number(currentItem.dataset.lng)

    console.log(lat, lng)
    map.setView([lat, lng], 15, {
      animate: true,
      pan: {
        duration: 1,
      },
    })
  }
})

// faq

const faqItemsContainer = document.querySelector('.faq__items')
const faqItems = document.querySelectorAll('.faq__item')
const faqQuestion = document.querySelectorAll('.faq__question')
const faqAnswers = document.querySelectorAll('.faq__answer')
const faqArrows = document.querySelectorAll('.faq__arrow')

faqItemsContainer.addEventListener('click', e => {
  const clicked = e.target.closest('.faq__item')
  if (!clicked) return

  if (clicked.classList.contains('faq__item--active')) {
    faqItems.forEach(item => item.classList.remove('faq__item--active'))
    faqQuestion.forEach(item => item.classList.remove('faq__question--active'))
    faqAnswers.forEach(item => item.classList.remove('faq__answer--active'))
    faqArrows.forEach(item => item.classList.remove('faq__arrow--active'))
  } else {
    faqItems.forEach(item => item.classList.remove('faq__item--active'))
    faqQuestion.forEach(item => item.classList.remove('faq__question--active'))
    faqAnswers.forEach(item => item.classList.remove('faq__answer--active'))
    faqArrows.forEach(item => item.classList.remove('faq__arrow--active'))

    clicked.classList.add('faq__item--active')
    clicked
      .querySelector('.faq__question')
      .classList.add('faq__question--active')
    clicked.querySelector('.faq__answer').classList.add('faq__answer--active')
    clicked.querySelector('.faq__arrow').classList.add('faq__arrow--active')
  }
})

// const menuBtn = document.querySelector('.header__btn-menu')
// const menu = document.querySelector('.menu')
// let menuIsOpen

// menuBtn.addEventListener('click', () => {
//   console.log(menuIsOpen)
//   if (menuIsOpen) {
//     menu.style.display = 'none'
//     menuIsOpen = false
//   } else if (!menuIsOpen) {
//     menu.style.display = 'block'
//     menuIsOpen = true
//   }
// })

const headerMenuBtn = document.querySelector('.header__btn-menu')
const headerMeasureBtn = document.querySelector('.header__btn-measure')
const headerCalcBtn = document.querySelector('.header__btn-calc')

// const mql = window.matchMedia('(max-width: 451px)')

// mql.addEventListener('change', e => {
//   if (e.matches) {
//     headerMenuBtn.addEventListener('click', () => {
//       if (headerMeasureBtn.style.display === 'block') {
//         headerMeasureBtn.style.display = 'none'
//       } else {
//         headerMeasureBtn.style.display = 'block'
//       }

//       // headerCalcBtn.style.display = 'block'
//     })
//   }
// })

// el.addEventListener('click', function() {
//   if(this.style.backgroundColor === 'blue') {
//     this.style.backgroundColor = '';
//   }
//   else {
//     this.style.backgroundColor = 'blue';
//   }
// });
