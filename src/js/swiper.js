import Swiper from 'swiper';
import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper/modules';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination, Autoplay, FreeMode],
  direction: 'horizontal',
  loop: true,
  autoHeight: true,

  autoplay: {
    delay: 5000,
  },

  watchSlidesProgress: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 26,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 32,
    },

    1280: {
      slidesPerGroup: 1,
      centerSlidesBounds: true,
      centerInsufficientSlides: true,
      centerSlides: true,
      slidesPerView: 3,
      spaceBetween: 36,
    },
  },

  freeMode: {
    enabled: true,
    sticky: true,
    minimumVelocity: 0.02,
    momentumBounceRatio: 1,
    momentumVelocityRatio: 1,
  },
});
