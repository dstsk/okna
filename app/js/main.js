$(function () {
  // ----- phone mask -----
  $('#phone').mask('+ 7 (999) 999 99 99')
})
// ----- slider -----

const swiperStandard = new Swiper('.swiper-standard', swiperProps('s', 1))
const swiperBusiness = new Swiper('.swiper-business', swiperProps('b', 1))
const swiperPremium = new Swiper('.swiper-premium', swiperProps('p', 1))
const swiperExclusive = new Swiper('.swiper-exclusive', swiperProps('e', 1))
const swiperReviews = new Swiper('.swiper-reviews', swiperProps('r', 1))
const swiperSertificates = new Swiper('.swiper-sertificates', {
  slidesPerView: 5,
  navigation: {
    nextEl: `.swiper-button-next-sert`,
    prevEl: `.swiper-button-prev-sert`,
    disabledClass: `swiper-button-disabled-sert`,
  },
})
const swiperPortfolio = new Swiper('.swiper-portfolio', {
  slidesPerView: 4,
  spaceBetween: 50,
  navigation: {
    nextEl: `.swiper-button-next-port`,
    prevEl: `.swiper-button-prev-port`,
    disabledClass: `swiper-button-disabled-port`,
  },
})
const swiperPortfolioItem = new Swiper('.swiper-portfolio-item', {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
})

function swiperProps(name, slidesPerView) {
  return {
    autoHeight: true,
    // effect: effect,
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

const portfolioSliderWrapper = document.querySelector(
  '.portfolio__slider-wrapper'
)
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
    portfolioSliderWrapper.classList.add('portfolio__slider-wrapper-hidden')
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

    portfolioSliderWrapper.classList.remove('portfolio__slider-wrapper-hidden')

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
    portfolioSliderWrapper.classList.add('portfolio__slider-wrapper-hidden')

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
