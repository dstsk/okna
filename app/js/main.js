$(function () {
  $('#phone').mask('+ 7 (999) 999 99 99')

  $('.products__slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
  })
  const containerEl = document.querySelector('.container-mixitup')
  const mixer = mixitup('.container-mixitup', {
    selectors: {
      target: '.products__slider',
    },
    animation: {
      effectsIn: 'fade scale(0.5 )',
      effectsOut: 'fade scale(0.5)',
    },
  })
  mixer.filter('.category-a')
})
