'use strict'
// ----------------------------------------------------------------------------------------------------------------
// ------------------------------------------------ Animation -----------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------

sal({
  threshold: 0.2,
})

// ----------------------------------------------------------------------------------------------------------------
// ------------------------------------------------ LazyLoad -----------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------

new LazyLoad()

// ----------------------------------------------------------------------------------------------------------------
// ----------------------------------------------- Phone-Mask -----------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------

const phoneBanner = document.getElementById('phone-banner')
const phoneMeasure = document.getElementById('phone-popup-measure')
const phoneCalc = document.getElementById('phone-popup-calc')
const phoneMaskOptions = { mask: '+7 (000) 000-00-00' }
const phoneBannerMask = IMask(phoneBanner, phoneMaskOptions)
const phoneMeasureMask = IMask(phoneMeasure, phoneMaskOptions)
const phoneCalcMask = IMask(phoneCalc, phoneMaskOptions)

// ----------------------------------------------------------------------------------------------------------------
// ---------------------------------------------- MENU + BURGER ---------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------

const body = document.querySelector('body')
const logo = document.querySelector('.logo')
const menu = document.querySelector('.menu')
const menuItems = document.querySelectorAll('.menu__item--link')
const burgerBtn = document.querySelector('.header__btn-menu')

const services = document.getElementById('services')
const products = document.getElementById('products')
const about = document.getElementById('about')
const portfolio = document.getElementById('portfolio')
const faq = document.getElementById('faq')
const contacts = document.getElementById('contacts')

const getCoords = section => {
  return section.getBoundingClientRect().top + window.pageYOffset
}

burgerBtn.addEventListener('click', e => {
  body.classList.toggle('lock')
  menu.classList.toggle('active')
  burgerBtn.classList.toggle('active')
})

menu.addEventListener('click', e => {
  e.preventDefault()
  const clicked = e.target
  if (clicked.classList.contains('menu-link')) {
    menu.classList.remove('active')
    body.classList.remove('lock')
    burgerBtn.classList.remove('active')

    const targetSection = document.getElementById(
      clicked.getAttribute('href').slice(1)
    )
    const marginPrevSibling = parseInt(
      window.getComputedStyle(targetSection.previousElementSibling).marginBottom
    )
    console.log(marginPrevSibling)
    const coords = getCoords(targetSection) - marginPrevSibling - 50
    window.scrollTo({ top: coords, behavior: 'smooth' })
  }
})

logo.addEventListener('click', e => {
  e.preventDefault()
  window.scrollTo({ top: 0, behavior: 'smooth' })
})
// ----------------------------------------------------------------------------------------------------------------
// -------------------------------------------------- SLIDERS -----------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------
const swiperStandard = new Swiper('.swiper-standard', swiperProps('s'))
const swiperBusiness = new Swiper('.swiper-business', swiperProps('b'))
const swiperPremium = new Swiper('.swiper-premium', swiperProps('p'))
const swiperExclusive = new Swiper('.swiper-exclusive', swiperProps('e'))
const swiperReviews = new Swiper('.swiper-reviews', swiperProps('r'))
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

// ----------------------------------------------------------------------------------------------------------------
// --------------------------------------------- MIXITUP-PRODUCTS -------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------
const productsNav = document.querySelector('.products__nav')
const productsSliderBoxes = [
  ...document.querySelectorAll('.products__slider-box'),
]
const productsNavButtons = [...document.querySelectorAll('.products__nav-item')]

productsSliderBoxes.forEach((s, i) => {
  if (!i > 0) return
  s.classList.add('products__slider-box--active')
  setTimeout(() => s.classList.remove('products__slider-box--active'), 200)
})

productsNav.addEventListener('click', function (e) {
  e.preventDefault()
  if (e.target.classList.contains('products__nav-item')) {
    const productsNavButton = e.target // кнопка из меню над слайдером
    const dataAttrBtn = productsNavButton.dataset.filter // данные из data-атрибута кнопки

    // ищем нужную коробку со слайдером, сравнивая data-данные на кнопке и коробке
    const productsSliderBox = productsSliderBoxes.find(
      item => item.dataset.attr === dataAttrBtn
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

// ----------------------------------------------------------------------------------------------------------------
// ----------------------------------------------- MIXITUP-ABOUT --------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------
const aboutNav = document.querySelector('.about__nav')
const aboutSliderBoxes = [...document.querySelectorAll('.about__slider-box')]
const aboutNavButtons = [...document.querySelectorAll('.about__nav-item')]

aboutSliderBoxes.forEach((s, i) => {
  if (!i > 0) return
  s.classList.add('about__slider-box--active')
  setTimeout(() => s.classList.remove('about__slider-box--active'), 200)
})

aboutNav.addEventListener('click', function (e) {
  e.preventDefault()
  if (e.target.classList.contains('about__nav-item')) {
    const aboutNavButton = e.target // кнопка из меню над слайдером
    const dataAttrBtn = aboutNavButton.dataset.filter // данные из data-атрибута кнопки

    // ищем нужную коробку со слайдером, сравнивая data-данные на кнопке и коробке
    const aboutSliderBox = aboutSliderBoxes.find(
      item => item.dataset.attr === dataAttrBtn
    )
    aboutSliderBoxes.forEach(item =>
      item.classList.remove('about__slider-box--active')
    )
    aboutNavButtons.forEach(item =>
      item.classList.remove('about__nav-item--active')
    )
    aboutSliderBox.classList.add('about__slider-box--active')
    aboutNavButton.classList.add('about__nav-item--active')
  }
})

// ----------------------------------------------------------------------------------------------------------------
// -------------------------------------------------- POPUPS ------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------
const popups = document.querySelectorAll('.popup')
const closeBtns = document.querySelectorAll('.popup__close-btn')
const btnsMeasure = document.querySelectorAll('.btn-measure')
const btnsCalc = document.querySelectorAll('.btn-calc')
const btnVideoPlay = document.querySelector('.about__description-play')
const servicesTiles = document.querySelector('.services__tiles')
const servicesPopups = document.querySelectorAll('.popup__services')
const reviewBtn = document.querySelector('.about__reviews-button')
const overlay = document.querySelector('.overlay')
const video = document.querySelector('.popup__video')

const createIframe = function (url) {
  const iframe = document.createElement('iframe')
  iframe.setAttribute('allowfullscreen', '')
  iframe.setAttribute('frameborder', '0')
  iframe.setAttribute('allow', 'autoplay; encrypted-media')
  iframe.setAttribute('src', url)
  return iframe
}

const stopVideo = () => {
  const iframes = document.querySelectorAll('iframe')
  for (let i = 0; i < iframes.length; i++) {
    if (iframes[i] !== null) {
      let temp = iframes[i].src
      iframes[i].src = temp
    }
  }
}

const closeModal = () => {
  popups.forEach(p => p.classList.add('hidden-popup'))
  overlay.classList.add('hidden-popup')
  if (menu.classList.contains('active')) return
  body.classList.remove('lock')
  menu.classList.remove('active')
  stopVideo()
}

const openModal = name => {
  document.querySelector(name).classList.remove('hidden-popup')
  overlay.classList.remove('hidden-popup')
  body.classList.add('lock')
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
btnVideoPlay.addEventListener('click', e => {
  e.preventDefault()

  const videoUrl = video.getAttribute('data-video-url')
  const iframe = createIframe(videoUrl)
  video.innerHTML = ''
  video.appendChild(iframe)

  console.log(iframe)

  openModal('.popup__video')
})

closeBtns.forEach(b => b.addEventListener('click', closeModal))
overlay.addEventListener('click', e => {
  const clicked = e.target
  if (clicked.classList.contains('overlay')) closeModal()
})

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    if (!popups.forEach(p => p.classList.contains('hidden-popup'))) {
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

// ----------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------- MAP -------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------
const mapRender = () => {
  const map = L.map('map').setView([56.99795925683616, 40.974], 13.5)
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
        .classList.add('portfolio__wrapper--active')
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
        item.classList.remove('portfolio__wrapper--active')
      )

      portfolioSliderBox.classList.remove('portfolio__slider-wrapper-hidden')

      map.setView([56.99795925683616, 40.974], 13.5, {
        animate: true,
        pan: {
          duration: 1,
        },
      })
    })
  )

  //  map-markers
  const markers = document.querySelector('.leaflet-marker-pane')
  markers.addEventListener('click', e => {
    e.preventDefault()
    if (e.target.classList.contains('leaflet-marker-icon')) {
      portfolioItems.forEach(function (item) {
        item.classList.remove('portfolio__wrapper--active')
      })
      const currentItem = portfolioItems.find(item =>
        e.target.classList.contains(item.dataset.marker)
      )
      currentItem.classList.add('portfolio__wrapper--active')
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
}

// Lazy loading map
const loadMap = entries => {
  const [entry] = entries
  if (!entry.isIntersecting) return
  console.log('MAP!!!')
  mapRender()
  mapObserver.unobserve(entry.target)
}
const mapOptions = {
  root: null,
  threshold: 0,
  rootMargin: '1000px',
}
const mapObserver = new IntersectionObserver(loadMap, mapOptions)
mapObserver.observe(portfolio)

// ----------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------- FAQ -------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------

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
