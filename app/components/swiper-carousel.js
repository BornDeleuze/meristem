import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export default class SwiperCarouselComponent extends Component {
  @tracked swiperInstance;

  @action
  setupSwiper(element) {
    const swiperEl = element.querySelector('.swiper');

    if (!swiperEl) {
      console.error('Swiper root element not found');
      return;
    }

    this.swiperInstance = new Swiper(swiperEl, {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 10,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: swiperEl.querySelector('.swiper-button-next'),
        prevEl: swiperEl.querySelector('.swiper-button-prev'),
      },
      pagination: {
        el: swiperEl.querySelector('.swiper-pagination'),
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        }
      },
    });
  }
}
